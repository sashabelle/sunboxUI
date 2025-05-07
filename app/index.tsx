import { View, Text, StyleSheet } from 'react-native';
import LoginForm from "@/components/login/LoginForm";

export default function IndexPage() {
    return (
        <View style={styles.container}>
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
