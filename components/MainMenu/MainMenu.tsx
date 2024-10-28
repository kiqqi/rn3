import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BiometricAuth from '@/components/BiometricAuth/BiometricAuth';
import CameraProfile from '@/components/CameraProfile/CameraProfile';
import UserLocation from '@/components/UserLocation/UserLocation';
import ShareApp from '@/components/ShareApp/ShareApp';
import GyroscopeDetection from '@/components/GyroscopeDetection/GyroscopeDetection';
import PushNotifications from '@/components/PushNotification/PushNotification';
import AsyncStorageProfile from '@/components/AsyncProfile/AsyncProfile';

export default function MainMenu() {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

    const menuItems = [
        {
            title: 'Biometric Authentication',
            id: 'BiometricAuth',
            icon: 'finger-print',
            component: BiometricAuth
        },
        {
            title: 'Camera Profile',
            id: 'CameraProfile',
            icon: 'camera',
            component: CameraProfile
        },
        {
            title: 'User Location',
            id: 'UserLocation',
            icon: 'location',
            component: UserLocation
        },
        {
            title: 'Share App',
            id: 'ShareApp',
            icon: 'share-social',
            component: ShareApp
        },
        {
            title: 'Gyroscope Detection',
            id: 'GyroscopeDetection',
            icon: 'compass',
            component: GyroscopeDetection
        },
        {
            title: 'Push Notifications',
            id: 'PushNotifications',
            icon: 'notifications',
            component: PushNotifications
        },
        {
            title: 'AsyncStorage Profile',
            id: 'AsyncStorageProfile',
            icon: 'save',
            component: AsyncStorageProfile
        },
    ];

    const renderComponent = () => {
        const item = menuItems.find(item => item.id === selectedComponent);
        if (item) {
            const Component = item.component;
            return <Component />;
        }
        return null;
    };

    if (selectedComponent) {
        return (
            <View style={styles.fullScreenContainer}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => setSelectedComponent(null)}
                        style={styles.backButton}
                    >
                        <Ionicons name="arrow-back" size={24} color="#007AFF" />
                        <Text style={styles.backText}>Menu</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>
                        {menuItems.find(item => item.id === selectedComponent)?.title}
                    </Text>
                </View>
                <View style={styles.componentContainer}>
                    {renderComponent()}
                </View>
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                {menuItems.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.button}
                        onPress={() => setSelectedComponent(item.id)}
                    >
                        <View style={styles.buttonContent}>
                            <Ionicons
                                name={item.icon as any}
                                size={24}
                                color="white"
                            />
                            <Text style={styles.buttonText}>
                                {item.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        padding: 20,
    },
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        backgroundColor: '#fff',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: 16,
        zIndex: 1,
    },
    backText: {
        color: '#007AFF',
        marginLeft: 4,
        fontSize: 16,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    componentContainer: {
        flex: 1,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        width: '100%',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    },
});