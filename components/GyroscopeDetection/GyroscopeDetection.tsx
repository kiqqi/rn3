import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import { Subscription } from 'expo-modules-core';

export default function GyroscopeDetection() {
    const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    const _subscribe = () => {
        setSubscription(Gyroscope.addListener(setData));
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gyroscope Detection</Text>
            <Text style={styles.text}>x: {x.toFixed(2)}</Text>
            <Text style={styles.text}>y: {y.toFixed(2)}</Text>
            <Text style={styles.text}>z: {z.toFixed(2)}</Text>
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
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});