import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "react-native-vector-icons"

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Forgot from "../pages/Forgot";
import Recovery from "../pages/Recovery";
import Registration from "../pages/Registration";
import ServiceList from "../pages/ServiceList/index";
import Bag from "../pages/Bag/index"
import Bookings from "../pages/Bookings/index"
import Profile from "../pages/Profile/index"


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#000',
            tabBarStyle: {
                height: 65,
                paddingBottom: 8
            }
        }}>
            <Tab.Screen name="Service" component={ServiceList} options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => ( <FontAwesome5 name="briefcase" size={size} color={color}/>)
            }}/>
            <Tab.Screen name="Bag" component={Bag} options={{
                tabBarIcon: ({size, color}) => ( <FontAwesome5 name="shopping-bag" size={size} color={color}/>)
            }}/>
            <Tab.Screen name="Bookings" component={Bookings} options={{
                tabBarIcon: ({size, color}) => ( <FontAwesome5 name="calendar" size={size} color={color}/>)
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                 tabBarIcon: ({size, color}) => ( <FontAwesome5 name="user" size={size} color={color}/>)
            }}/>
        </Tab.Navigator>
    )
}


export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Forgot"
                component={Forgot}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Recovery"
                component={Recovery}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Registration'
                component={Registration}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ServiceList"
                component={Tabs}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
        
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#29ABE2'
    }
})