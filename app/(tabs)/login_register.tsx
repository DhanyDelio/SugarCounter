import LoginRegisterHeader from '@/components/ui/login_register/login_register_header';
import { style } from '@/components/ui/login_register/login_register_style';
import { Colors } from '@/components/ui/styles/color';
import useAuth from '@/hooks/useAuth';
import { View } from 'react-native';
import { Text } from '@react-navigation/elements';
import GoogleButton from '@/components/ui/login_register/login_register_form';


export default function Login_Register() {
    const {handleLoginGoogle,isloading,error} = useAuth();

    return(
        <View style={{flex : 1,backgroundColor: Colors.white}}>
            <LoginRegisterHeader/>
            <View style={style.layer}>
            <View style={style.buttonContainer}>
                {error && (
                    <Text style={style.errorMessage}>{error}</Text>
                )}
                <GoogleButton
                onPress={handleLoginGoogle}
                loading={isloading}
                />
            </View>
            </View>
        </View>
    )
    
}


