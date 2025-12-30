import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { style } from "./login_register_style";
import Ionicons from 'react-native-vector-icons/Ionicons';

interface UIProps extends TextInputProps {
    label: string;
    errorMessage?: string;
    inputRef?: any;
    isPassword?: boolean;
    onToggleSecondary?: () => void;
    
}


export default function LoginRegisterForm({
    label,errorMessage,inputRef,onToggleSecondary,...props}
    : UIProps){
    return(
        <View style={style.loginContainer}>
            <Text style={style.label}>{label}</Text>
            <View style={style.inputWrapper}>
            <TextInput 
            style={style.input}
            ref={inputRef}
            placeholderTextColor="#95a5a6"
            {...props}
            />
            {onToggleSecondary && (
            <TouchableOpacity 
                style={style.showHide}
                onPress={onToggleSecondary}> 
            <Ionicons 
                name={props.secureTextEntry ? "eye-off" : "eye"}
                size={24}
                color="gray" 
                />
            </TouchableOpacity>
            )}
            </View>
        </View>
    )
};



