import { View, Text} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { style } from "./login_register_style";

export default function LoginRegisterHeader() {
    return (
        <View style={style.headerContainer}>
            <View style={style.badge}>
                <Text style={style.badgeText}>
                    Sugar Counter
                </Text>
                <Ionicons name="leaf" size={24} color="#FFFFFF" /> 
            </View>
        </View>
    );
};

