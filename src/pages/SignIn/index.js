import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function SignIn() {
    const [hidePass, setHidePass] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <Image
                    source={require('../../img/logo.png.png')}
                    style={{ width: '100%', height: '18%', top: '10%', }}
                    resizeMode="contain"
            />

            <Image
                source={require('../../img/logotwo.png')}
                style={{ width: '100%', height: '13%', top: '8%', }}
                resizeMode="contain"
            />

            <Text style={style.text}>customer</Text>

            <View style={style.containerHeader}>
                <TextInput
                    placeholder="E-mail"
                    style={style.input}
                />

                <TextInput
                    placeholder="Password"
                    style={style.input}
                    secureTextEntry={hidePass}
                />

                <Icon style={style.icon} name="email" size={25} color="#000"/>
                <Icon style={style.icontwo} name="lock" size={25} color="#000"/>
                

                <TouchableOpacity style={style.button} onPress={ () => navigation.navigate('ServiceList')} > 
                    <Text style={style.buttonText}>SignIn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonForgot} onPress={ () => navigation.navigate('Forgot')}>
                    <Text style={style.ForgotText}>Forgot Password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonRegister} onPress={ () => navigation.navigate('Registration')}>
                    <Text style={style.buttonTextTwo}>Register Now</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.iconthree} onPress={ () => setHidePass(!hidePass) }>
                    <Icon name="eye-off" size={25} color="#868E96"/>
                </TouchableOpacity>

            </View>
            <View>
                <Modal  visible={modalVisible}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={() => setModalVisible(false)}>
                        <View style={style.backViewModal}>
                            <View style={style.modalView}>
                                <Icon style={{textAlign: 'center', marginTop: 40,}} name="alert-circle" size={50} color="#ff0000"/>
                                <Text style={style.modalText}>Unable to enter. check your email or password</Text>
                                    <TouchableOpacity style={style.buttonModal} onPress={() => setModalVisible(false)}> // ou clicar no modal para fechar
                                        <Text style={style.buttonText}>Ok</Text>
                                    </TouchableOpacity>
                               
                            </View>
                        </View>
                </Modal>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },

    containerHeader: {
        marginTop: '2%',
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

    button: {
        backgroundColor: '#29ABE2',
        width: '100%',
        borderRadius: 8,
        paddingVertical: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonModal: {
        backgroundColor: '#29ABE2',
        borderRadius: 8,
        width: 375,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },

    buttonText: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
    },

    ForgotText: {
        fontSize: 15,
        marginTop: 10,
        alignSelf: 'center',
        color: '#868E96',
        fontWeight: 'bold'
    },

    buttonRegister: {
        height: 64,
        width: 380,
        borderColor: '#29ABE2',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '37%',
    },

    buttonTextTwo: {
        color: '#29ABE2',
        fontSize: 20,
        paddingRight: 10,
    },

    text: {
        alignSelf: 'center',
        color: '#868E96',
        marginTop: '10%',
        fontSize: 20, 
    },

    icon: {
        position: 'absolute',
        left: 30,
        marginTop: 10,
        color: '#868E96'
    },

    icontwo: {
        position: 'absolute',
        left: 30,
        marginTop: 67,
        color: '#868E96'
    },

    iconthree: {
        position: 'absolute',
        left: 340,
        marginTop: 67,
        color: '#868E96'
    },
    backViewModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',   
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 16,
        width: 375,
        height: 244,
    },
    modalText: {
        fontSize: 15,
        color: '#868E96',
        fontStyle: 'normal',
        textAlign: 'center',
    }
})