import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
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
            <TouchableOpacity>
                <View style={styles.constainer}>
                    <Text style={styles.id}>Blog ID: <Text style={styles.idSub}>{item?.id}</Text></Text>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={styles.body}>{item?.body}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Blog Screen</Text>
            </View>
            <View style={styles.bodyView}>
                <FlatList
                    data={blogs}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<Text>No data found!</Text>}
                    showsVerticalScrollIndicator={false}
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
        backgroundColor: '#DCE9ED'
    },
    constainer: {
        borderWidth: 1,
        marginVertical: 12,
        paddingTop: 8,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderColor: '#DEDEDE',
        borderRadius: 8,
        paddingBottom: 16
    },
    body: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
        color: '#252525',
        textAlign: 'justify',
        marginTop: 8
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700',
        textTransform: 'capitalize'
    },
    bodyView: {
        paddingBottom: 25,
        paddingHorizontal: 16
    },
    header: {
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: 32,
        color: '#003040'
    },
    id: {
        fontSize: 8,
        color: '#DFDCDC',
    },
    idSub: {
        color: '#706C6C'
    }
})