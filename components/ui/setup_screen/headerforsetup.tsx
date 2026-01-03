import { View, Text } from "react-native";
import { style } from "./header_style";

export default function Setupheader(){

    return(
        <View style={style.headerContainer}>
            <Text style={style.title}>
                KNOW YOUR BODY
            </Text>
            <Text style={style.subtitle}>
                Input your data for calibrate your meter
            </Text>
        
        </View>
    );
};