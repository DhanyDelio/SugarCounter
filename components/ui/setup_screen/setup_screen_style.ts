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
    //CalibrateScreen
    card : {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },

    cardleft : {

        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        // Shadow halus biar icon menonjol
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },

    cardContent : {
        flex: 1
    },

    label : {
        fontSize: 12,
        color: '#999',
        marginBottom: 2,
        fontWeight: '500'
    },
    
    inputActive : {
        
        fontSize: 16,
        fontWeight: '600',
        color: '#4A90E2', 
        paddingVertical: 2, 
        borderBottomWidth: 1.5,
        borderBottomColor: '#4A90E2', 
        minWidth: 100, 
        marginTop: 2,

    },

    value : {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
    },

    unit : {
        fontSize: 14,
        color: '#999',
        marginRight: 6,
    },

    cardRight : {
        flexDirection: 'row',
        alignItems: 'center',
    },

    flatlistcontainer : {
        width: '100%',
        flex: 1,
    },

    titleflatlist : {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.primary,
        marginBottom: 15,
        marginTop: 10,
    },

    listContent : {
        paddingBottom: 20
    },

    //ParentSetupScreen
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 25,
        alignItems: 'flex-start',
        paddingTop: 10, 
    },



})