import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, Platform } from 'react-native';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export default function ShareApp() {
    const shareApp = async () => {
        if (Platform.OS === 'web') {
            try {
                await Sharing.shareAsync('https://expo.dev', { dialogTitle: 'Share this awesome app!' });
            } catch (error) {
                console.error('Error sharing app:', error);
            }

        } else {
            // Para Android/iOS usamos expo-sharing
            try {
                const fileUri = `${FileSystem.cacheDirectory}app-link.txt`;
                await FileSystem.writeAsStringAsync(fileUri, 'Check out this awesome app: https://expo.dev');
                await Sharing.shareAsync(fileUri, { dialogTitle: 'Share this awesome app!' });
            } catch (error) {
                console.error('Error sharing app on mobile:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Share App</Text>
            <TouchableOpacity style={styles.button} onPress={shareApp}>
                <Text style={styles.buttonText}>Share this App</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
