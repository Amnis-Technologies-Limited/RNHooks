import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";


const TestRedux = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 45}}>
                <Text>Testing Redux Library</Text>
            </View>
        </SafeAreaView>
    )
}

export default TestRedux

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
})