import FormInput from '@/components/forminput';
import Loginregisterbutton from '@/components/ui/login_register/login_register_button';
import LoginRegisterHeader from '@/components/ui/login_register/login_register_header';
import { style } from '@/components/ui/login_register/login_register_style';
import { Colors } from '@/components/ui/styles/color';
import useAuth from '@/hooks/useAuth';
import { ScrollView, View , Text, KeyboardAvoidingView, Platform} from 'react-native';


export default function Login_Register() {
    const {
        loginField,state,setState,loginRegisterButton,toggleMode,isLogin, 
        registerField, handleLogin,handleRegister
        ,error,inputRefs,secure,toggleSecureEntry
    } = useAuth();

    return(
        <View style={{flex : 1,backgroundColor: Colors.white}}>
            
            <LoginRegisterHeader/>
            <View style={style.layer}
            >
            <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.AvoidingView} 
            >
            <ScrollView 
            bounces={false}
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={style.scrollView}
            >  
            <FormInput
            field={isLogin? loginField : registerField }
            state={state}
            setState={setState}
            inputRefs={inputRefs}
            onSubmit={isLogin? handleLogin : handleRegister}
            secure={secure}
            toggleSecureEntry={toggleSecureEntry}
            />
            {error && (
                <Text style={style.errorMessage}>{error}</Text>
            )}
            <Loginregisterbutton
            title={loginRegisterButton.title}
            onPress={()=> isLogin? handleLogin() : handleRegister()}
            subtitle={loginRegisterButton.subtitle}
            togglemode={toggleMode}
            />
            </ScrollView>
            </KeyboardAvoidingView>
            </View>

        </View>
    )
    
}


