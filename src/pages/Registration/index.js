import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Registration() {
    const [hidePass, setHidePass] = useState(true)
    const [hidePasst, setHidePasst] = useState(true)
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containderHeader}>
                <TextInput
                    placeholder="Name"
                    style={styles.input}
                 />

                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Telephone"
                    style={styles.input}
                />
                
                <Icon style={styles.iconTwo} name="emoticon-outline" size={25} color="#000"/>
                <Icon style={styles.iconTree} name="email" size={25} color="#000"/>
                <Icon style={styles.iconFour} name="phone" size={25} color="#000"/>

                <TouchableOpacity style={styles.icon} onPress={ () => navigation.navigate('SignIn')}>
                    <Icon name="arrow-left" size={30} color="#29ABE2"/>
                </TouchableOpacity>
                
                <Text style={styles.text}>Be our Costumer</Text>
                
                <Text style={styles.textTokenCode}>You will receive an email with the token code </Text>
                
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry={hidePass}
                />
                <TextInput
                    placeholder="Confirm password"
                    style={styles.input}
                    secureTextEntry={hidePasst}
                />
                <Icon style={styles.iconFive} name="lock" size={25} color="#000"/>
                <Icon style={styles.iconSix} name="lock" size={25} color="#000"/>
                
                <TouchableOpacity style={styles.iconSeven} onPress={ () => setHidePass(!hidePass) }>
                    <Icon name="eye-off" size={25} color="#868E96"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconEight} onPress={ () => setHidePasst(!hidePasst) }>
                    <Icon name="eye-off" size={25} color="#868E96"/>
                </TouchableOpacity>

                <TextInput
                    placeholder="Post code"
                    style={styles.postCode}                   
                />
                <TextInput
                    placeholder="Country"
                    style={styles.input}                    
                />
                <TextInput
                    placeholder="State"
                    style={styles.input}                  
                />
                <TextInput
                    placeholder="City"
                    style={styles.input}                   
                />
                <TextInput
                    placeholder="Address"
                    style={styles.input}   
                />

                <TextInput
                    placeholder="Address complement"
                    style={styles.input}                   
                />
                <Icon style={styles.iconNine} name="flag-outline" size={25} color="#000"/>
                <Icon style={styles.iconTen} name="map" size={25} color="#000"/>
                <Icon style={styles.iconEleven} name="city-variant-outline" size={25} color="#000"/>
                <Icon style={styles.iconTwelve} name="map-marker-radius" size={25} color="#000"/>
                <Icon style={styles.iconThirteen} name="map-marker" size={25} color="#000"/>
                <Icon style={styles.iconSixFourteen} name="map-marker" size={25} color="#000"/>

                </View>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('ServiceList')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containderHeader: {
        marginTop: '27%',
        marginBottom: '8%',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    input: {
        height: 45,
        marginBottom: 12,
        fontSize: 16,
        borderColor:'#868E96',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 40
    },
    text: {
        alignSelf: 'center',
        color: '#29ABE2',
        top: -250,
        fontSize: 20,
        right: 50,
        fontWeight: 'bold'
    },
    icon: {
        left: 1,
        top: -220,
        color: '#29ABE2'
    },
    iconTwo: {
        position: 'absolute',
        left: 30,
        marginTop: 10,
        color: '#868E96'
    },
    iconTree: {
        position: 'absolute',
        left: 30,
        marginTop: 66,
        color: '#868E96'
    },
    iconFour: {
        position: 'absolute',
        left: 30,
        marginTop: 124,
        color: '#868E96'
    },
    textTokenCode: {
        color: "#868E96",
        alignSelf: 'center',
        fontSize: 15,
        top: -50,
    },
    iconFive: {
        color: "#868E96",
        position: 'absolute',
        left: 30,
        marginTop: 260,
    },
    iconSix: {
        color: "#868E96",
        position: 'absolute',
        left: 30,
        marginTop: 315,
    },
    iconSeven: {
        position: 'absolute',
        left: 350,
        marginTop: 260,
    },
    iconEight: {
        position: 'absolute',
        left: 350,
        marginTop: 315,
    },
    iconNine: {
        color: "#868E96",
        position: "absolute",
        left: 30,
        marginTop: 424,
    },
    iconTen: {
        color: "#868E96",
        position: "absolute",
        left: 30,
        marginTop: 482,
    },
    iconEleven: {
        color: "#868E96",
        position: "absolute",
        left: 30,
        marginTop: 536,
    },
    iconTwelve: {
        color: "#868E96",
        position: "absolute",
        left: 30,
        marginTop: 595,
    },
    iconThirteen: {
        color: "#868E96",
        position: "absolute",
        left: 30,
        marginTop: 650,
    },
    iconSixFourteen: {
        color: "#868E96",
        position: "absolute",
        left: 30,
        marginTop: 708,
    },
    postCode: {
        height: 45,
        marginBottom: 12,
        fontSize: 16,
        borderColor:'#868E96',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 40,
        marginTop: 50
    },
    button: {
        backgroundColor: '#29ABE2',
        width: '100%',
        borderRadius: 0,
        paddingVertical: 10,
        marginTop: -15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
    },
})