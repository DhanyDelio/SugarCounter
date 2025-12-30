import { StyleSheet,Platform } from "react-native"
import { Colors } from "../styles/color"

export const style = StyleSheet.create({

    //Header Style
    headerContainer: {
        width: '100%',
        backgroundColor: Colors.primary, 
        paddingBottom: 175,
        paddingTop: Platform.OS === 'ios' ? 80 : 60,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
    },

    badge: {
        flexDirection: 'row',    
        alignItems: 'center',    
        justifyContent: 'center', 
        gap: 10,
        paddingTop: 50                 
    },

    badgeText: {
        color: '#fff',          
        fontSize: 24,
        fontWeight: 'bold',
    },


    //LoginAndRegisterFormStyle
     loginContainer: {
        marginBottom: 22,
        marginTop: -10,
        width: '100%',
        
    },

    inputWrapper : {
        
       flexDirection: 'row', 
       alignItems: 'center', 
       borderWidth: 1,       
       borderColor: '#ccc',  
       borderRadius: 8,      
       paddingHorizontal: 2,
       backgroundColor: '#fff',
       height: 50,
       overflow: 'hidden'

    },

    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#34495e',
        marginBottom: 6,
        marginTop: 6,
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 14,
        color: '#2c3e50',
        flex: 1,
        height: '100%'
    },

    layer: {
        backgroundColor: '#FFFFFF',
        marginTop: -90,             
        borderTopLeftRadius: 40,    
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        paddingTop: 40,
        flex: 1,
        minHeight: 600, 
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },

    loginRegisterButton : {
        backgroundColor: '#2ecc71',
        width: "100%",
        paddingVertical: 15,        
        borderRadius: 12,           
        marginTop: 15,              
        alignItems: 'center',       
        justifyContent: 'center',    
        elevation: 4, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    loginRegisterButtonText : {
        color: 'white',             
        fontSize: 18,              
        fontWeight: 'bold',         
        letterSpacing: 1,
    },

    footerLink: {
        marginTop: 20,
        alignItems: 'center',
    },

    footerText: {
        color: '#7f8c8d',           
        fontSize: 14,
    },

    footerAction: {
        color: '#2ecc71',           
        fontWeight: 'bold',
    },

    buttoncontainer : {
        width: '100%',
        alignItems: "center"

    },

    subtitlebutton : {
        marginTop: 20
    },

    sentence : {
        flexDirection: "row",
        marginTop: 20
    },

    subtitlecontainer : {
        flexDirection: 'row', 
        justifyContent: 'center',
        marginTop: 3
    },

    errorMessage : {
        color: 'red', 
        textAlign: 'center', 
        marginBottom: 10,
        fontSize: 12
    },

    scrollView : {
        padding: 20, 
        paddingBottom: 80,
        flexGrow: 1
    },

    AvoidingView : {
        flex : 1
    },

    showHide : {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15
    }

})