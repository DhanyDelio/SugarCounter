import { GoogleButtonProps } from "@/types/authfield";
import React from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "./login_register_style";

export default function GoogleButton({onPress,loading}:GoogleButtonProps){
    return (
        <TouchableOpacity 
        style={style.button}
        onPress={onPress}
        disabled={loading}
        activeOpacity={0.7}
        >{loading ? (
            <ActivityIndicator color={'#000'}/>
        ) : (
            <View style={style.content}>
                <Image
                source={{uri:'https://developers.google.com/static/identity/images/g-logo.png'}}
                style={style.logo}
                />
                <Text style={style.text}>
                    Continue With Google
                </Text>
            </View>
        )}
        </TouchableOpacity>
    )
}