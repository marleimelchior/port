import React, {  useState, useRef } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from './header'
import { Modalize} from 'react-native-modalize'
import { Picker} from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native';

const {width,height} = Dimensions.get('screen')

export default function ServiceList() {
    const modalizeRef = useRef(null)
    const [selectedLanguage, setSelectedLanguage] = useState();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
            <Header name="Hi, Avelino"/>
                <View style={{flexDirection: 'row'}}>
                
                    <Image source={require('../../img/cleaning1.png')}
                            style={{width: 146, height: 146, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginLeft: 20, 
                            marginTop: -28}}/>
                    <Image source={require('../../img/cleaning2.png')}
                            style={{width: 146, height: 146, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginLeft: 20, 
                            marginTop: -28}}/>        
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 25, color: '#868E96'}}> Recent #1 </Text>
                    <Text style={{marginLeft: 100, color: '#868E96'}}> Recent #2 </Text>
                </View>

                <Text style={styles.textCleaning}> Cleaning </Text>
                <View>
                    
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => modalizeRef.current?.open()}>
                        <Image source={require('../../img/cleaning1.png')}
                            style={{width: 146, height: 146, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginLeft: 20, 
                            marginTop: 30}}/>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 18, marginTop: 8}}>Top UP</Text>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 13}}>Cleaning</Text>
                        </TouchableOpacity>  
                        <TouchableOpacity>  
                        <Image source={require('../../img/cleaning3.jpg')}
                            style={{width: 146, height: 146, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginLeft: 20, 
                            marginTop: 30}}/>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 18, marginTop: 8}}>Light</Text>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 13}}>Cleaning</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>    
                        <Image source={require('../../img/carpet.jpg')}
                            style={{width: 146, height: 146, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginLeft: 20, 
                            marginTop: 30}}/>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 18, marginTop: 8}}>Professional</Text>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 13}}>Cleaning</Text>
                        </TouchableOpacity>                 
                    </ScrollView> 
                </View>
                <Text style={styles.textCleaning}> Carpet </Text>
                <View>  
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity>
                        <Image source={require('../../img/cleaning2.png')}
                            style={{width: 146, height: 146, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginLeft: 20, 
                            marginTop: 30}}/>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 18, marginTop: 8}}>Living room</Text>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 13}}>Carpet</Text>
                        </TouchableOpacity>  
                        <TouchableOpacity>  
                        <Image source={require('../../img/carpet4.jpg')}
                            style={{width: 146, height: 146, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginLeft: 20, 
                            marginTop: 30}}/>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 18, marginTop: 8}}>Lounge</Text>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 13}}>Carpet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>    
                        <Image source={require('../../img/carpet5.jpg')}
                            style={{width: 146, height: 146, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginLeft: 20, 
                            marginTop: 30}}/>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 18, marginTop: 8}}>Living-dining room</Text>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 13}}>Carpet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>    
                        <Image source={require('../../img/carpet6.jpg')}
                            style={{width: 146, height: 146, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginLeft: 20, 
                            marginTop: 30}}/>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 18, marginTop: 8}}>Rug</Text>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 13}}>Carpet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>    
                        <Image source={require('../../img/carpet8.jpg')}
                            style={{width: 146, height: 146, borderTopLeftRadius: 8, borderTopRightRadius: 8, marginLeft: 20, 
                            marginTop: 30}}/>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 18, marginTop: 8}}>Corridor</Text>
                            <Text style={{marginLeft: 30, color: '#868E96', fontSize: 13}}>Carpet</Text>
                        </TouchableOpacity>              
                    </ScrollView> 
                </View>
                <Modalize
                ref={modalizeRef}
                HeaderComponent={
                    <Text style={{color: '#29abe2', fontSize: 23, fontWeight: 'bold', marginLeft: 20, marginTop: 30}}>
                        Top up
                    </Text>
                }
                modalHeight={height/1.0}
                >
                    <View>
                        <Text style={{color: '#adb5Bd', marginLeft: 20}}> Cleaning </Text>
                        <Image source={require('../../img/cleaning1.png')}
                        style={{width: 375, height: 170, borderRadius: 8, marginLeft: 20, 
                            marginTop: 15}}/>
                        <Text style={{color: '#adb5Bd', marginLeft: 20, marginTop: 20, fontSize: 15}}> Description </Text>
                        <Text style={{color: '#adb5Bd', marginLeft: 20, marginTop: 10, fontSize: 18, marginEnd: 20}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</Text>
                        
                        <Picker selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)}
                                style={{marginLeft: 20}}>
                            <Picker.Item key={0} label="Select a number of Hours" value="Select a number of Hours" color="#868E96" fontFamily="Fira Sans" style={{fontSize: 20}}/>
                            <Picker.Item key={1} label="1" value="1" color="#868E96" fontFamily="Fira Sans" style={{fontSize: 20}}/>
                            <Picker.Item key={2} label="2" value="2" color="#868E96" fontFamily="Fira Sans" style={{fontSize: 20}}/>
                            <Picker.Item key={3} label="3" value="3" color="#868E96" fontFamily="Fira Sans" style={{fontSize: 20}}/>
                        </Picker>
                        <TouchableOpacity style={styles.buttonModalize} onPress={() => navigation.navigate('Bag')}> 
                        <Text style={styles.buttonTextModalize}>Add to bag</Text>
                        </TouchableOpacity>
                        </View>
                </Modalize>
          </ScrollView>
        </View>         
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    textLogin: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '20%',
        marginLeft: '5%',
    },
    textService: {
        color: '#fff',
        fontSize: 14,
        marginTop: '1%',
        marginLeft: '5%',
    },
    textCleaning: {
        color: '#29ABE2',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '5%',
        marginLeft: 20,
    },
    textCarpet: {
        color: '#29ABE2',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '5%',
        marginLeft: 20,
    },
    centeredModal: {
        flex: 1,
        marginTop: '70%',
        width: '100%',
        backgroundColor: "#FFF",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
    },
    modalView: {
        height: '100%',
        width: '100%',     
    },
    buttonModalize: {
        backgroundColor: '#29ABE2',
        width: '90%',
        borderRadius: 8,
        paddingVertical: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    buttonTextModalize: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
    },
})