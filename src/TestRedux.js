import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/reducer/CounterReducer";

const TestRedux = () => {
    const dispatch = useDispatch()
    const { counter, loading } = useSelector((state) => state.counter)

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 45, paddingHorizontal: 16 }}>
                <Text>Testing Redux Library</Text>
                <Text>The state of the Counter: {counter}</Text>
                <Text>The State of loading: {loading === false ? 'False' : 'True'}</Text>

                <TouchableOpacity onPress={handleIncrement}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Reducer Increment</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleDecrement}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Reducer Decrement</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TestRedux

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    btn: {
        backgroundColor: '#004050',
        marginTop: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderRadius: 4
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 24
    },
    btnView: {
        width: '100%',
        paddingHorizontal: 20
    },
})