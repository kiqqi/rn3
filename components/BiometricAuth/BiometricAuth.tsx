import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function BiometricAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticate = async () => {
        try {
            const result = await LocalAuthentication.authenticateAsync();
            setIsAuthenticated(result.success);
        } catch (error) {
            console.error('Authentication error:', error);
        }
    };

    useEffect(() => {
        authenticate();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Biometric Authentication</Text>
            {isAuthenticated ? (
                <Text style={styles.status}>Authentication successful!</Text>
            ) : (
                <TouchableOpacity style={styles.button} onPress={authenticate}>
                    <Text style={styles.buttonText}>Authenticate</Text>
                </TouchableOpacity>
            )}
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
    status: {
        fontSize: 18,
        color: 'green',
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