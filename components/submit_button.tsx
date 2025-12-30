import { SubmitButton } from "@/types/authfield";
import { ActivityIndicator, TouchableOpacity,Text } from "react-native";
import { style } from "./ui/login_register/login_register_style";


export default function submitButton({title,onPress,loading,disabled}: SubmitButton){
    return (
        <TouchableOpacity 
        style={[style.loginRegisterButton,(disabled||loading) && { opacity: 0.5, backgroundColor: '#bdc3c7' }]}
        onPress={onPress}
        disabled={disabled||loading}
        >
            {loading?(
                <ActivityIndicator color={'#ffffff'}/>
            ) : (
                <Text style={style.loginRegisterButtonText}>
                    {title}
                </Text>
            )};     
        </TouchableOpacity>
    )
}