import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { allPosts } from "../redux/reducer/BlogReducer";
// import BlogList from "../components/BlogList";

const Blog = () => {

    const dispatch = useDispatch();
    const { loading, blogs, status } = useSelector((state) => state.blog)

    console.log('Blogs: ', blogs)

    useEffect(() => {
        dispatch(allPosts())
    }, [])

    const renderItem = ({ item }) => {

        return (
            <View style={styles.constainer}>
                <View>
                    <Text>{item.title}</Text>
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Blog Screen</Text>

                <FlatList
                    data={blogs}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<Text>No data found!</Text>}
                />
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
    },
    constainer: {

    }
})