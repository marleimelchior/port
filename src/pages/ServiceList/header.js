import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header({name}){
    return(
        <View style={styles.container}>
           <Text style={styles.textLogin}>{name}</Text>
            <Text style={styles.textService}>Would you like to schedule some service ?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29ABE2',
        paddingTop: statusBarHeight
    },
    textLogin: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '5%',
        marginLeft: '5%',
    },
    textService: {
        color: '#fff',
        fontSize: 14,
        marginTop: '1%',
        marginLeft: '5%',
        paddingBottom: 60
    },
})
