import { StyleSheet, Platform } from "react-native"
import { Colors } from "../styles/color"

export const style = StyleSheet.create({
    
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

    
    button: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#DADCE0',
        width: '100%',
        marginTop: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 20,
        height: 20,
        marginRight: 12,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#3C4043',
    },
   
    AvoidingView : {
        flex : 1
    },
    errorMessage : {
        color: 'red', 
        fontSize: 12,
        marginTop: 5,
    },

    buttonContainer : {
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
    }
})