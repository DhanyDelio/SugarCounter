import { StyleSheet } from "react-native";
import { Colors } from "../styles/color";



export const style = StyleSheet.create({

    //SetupHeaderSreen
    headerContainer : {
        marginBottom : 30,
        marginTop : 20,
    },


    title : {
        fontSize : 26,
        fontWeight : 900,
        color : Colors.primary,
        letterSpacing : 1
    },


    subtitle : {
        fontSize : 14,
        color : 'grey',
        marginTop : 5
    },



})