import { Tabs } from "expo-router";

export default function Layout(){
    return(
        <Tabs>
            <Tabs.Screen name="login_register" 
            options={{headerShown: false, 
            tabBarStyle:{display: "none"}}}/>
        </Tabs>
    )
}