import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Profile(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Profile TESTE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})