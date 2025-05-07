import { auth } from '@/lib/firebase';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const backgroundColor = useThemeColor({ light: '#fff', dark: '#1c1c1c' }, 'background');
    const textColor = useThemeColor({ light: '#000', dark: '#fff' }, 'text');
    const placeholderColor = useThemeColor({ light: '#999', dark: '#666' }, 'tabIconDefault');

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if (userCredential.user) {
                router.push('/sunbox');
            }
        } catch (error: any) {
            console.error(error);
            if (error.code === 'auth/invalid-credential' || error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
                setError('Invalid email or password');
            } else if (error.code === 'auth/too-many-requests') {
                setError('Too many failed login attempts. Please try again later.');
            } else {
                setError('Login failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={[styles.title, { color: textColor }]}>Login</Text>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TextInput
                style={[styles.input, { color: textColor, borderColor: placeholderColor }]}
                placeholder="Email"
                placeholderTextColor={placeholderColor}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={[styles.input, { color: textColor, borderColor: placeholderColor }]}
                placeholder="Password"
                placeholderTextColor={placeholderColor}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <View style={styles.buttonContainer}>
                {loading ? (
                    <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                    <Button title="Login" onPress={handleLogin} />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    errorText: {
        color: '#ff3b30',
        marginBottom: 15,
        textAlign: 'center',
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    forgotPassword: {
        fontSize: 14,
    },
    buttonContainer: {
        marginVertical: 10,
        height: 44,
        justifyContent: 'center',
    },
    adminNote: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
    }
});
