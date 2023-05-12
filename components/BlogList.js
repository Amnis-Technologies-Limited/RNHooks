import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BlogList = ({ id, body, title, userId }) => {

    return (
        <View style={styles.constainer}>
            <View>
                <Text>{title}</Text>
            </View>

        </View>
    )
}

export default BlogList

const styles = StyleSheet.create({
    constainer: {

    }
})