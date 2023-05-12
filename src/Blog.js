import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";


const Blog = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Blog Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default Blog

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        paddingHorizontal: 16
    }
})