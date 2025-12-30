import { TouchableOpacity, Text,View } from "react-native";
import { SubmitButton } from "@/types/authfield";
import { style } from "./login_register_style";

interface UIProps extends SubmitButton{
    title : string;
    subtitle?: string;
    onPress: () => void;
}

export default function Loginregisterbutton({title,onPress,subtitle,togglemode}:UIProps){
    return (

        <View style={style.buttoncontainer}>
        <TouchableOpacity style={style.loginRegisterButton} onPress={onPress}>
            <Text style={style.loginRegisterButtonText}>{title}</Text>
        </TouchableOpacity>


        <View style={style.subtitlecontainer}>
        <Text style={style.sentence}>
           {title === "Login" ? "Don't have an account? " : "Already have an account? "}
        </Text>
        <TouchableOpacity style={style.subtitlebutton} onPress={togglemode}>
            <Text style={style.footerText}>{subtitle}</Text>
        </TouchableOpacity>
        </View>
        </View>
        
    )
}