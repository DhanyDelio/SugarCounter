import { Tabs } from "expo-router";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useEffect } from "react";

export default function Layout(){
    useEffect(()=> {
        GoogleSignin.configure({
            webClientId: "81278396720-ssvfuthc0n0dtfithcthb2u6mnusfvpe.apps.googleusercontent.com",
            offlineAccess : true
        })
    },[])
    return(
        <Tabs>
            <Tabs.Screen name="login_register" 
            options={{headerShown: false, 
            tabBarStyle:{display: "none"}}}
            />
            <Tabs.Screen name="setup_screen"
            options={{headerShown: false,
            tabBarStyle : {display: "none"}}}
            />
        </Tabs>
    )
}