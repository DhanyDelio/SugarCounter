import auth from "@react-native-firebase/auth";
import { useRef, useState } from "react";
import { ToastAndroid } from "react-native";

export default function useAuth(){
    const [login, setLogin] = useState({email : "", password: ""});
    const [register, setRegister] = useState({fullname : "", email: "", password: "", confirmPassword: ""});
    const [isLogin, setIsLogin] = useState(true);
    const [error,setError] = useState<string | null>(null);
    const [secure, setSecure] = useState<Record<string, boolean>>({
        password : true,
        confirmPassword:true

    });

    const toggleSecureEntry = (key : string) => {
        setSecure(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const inputRefs = useRef<{[key : string] : any}>({})

    
    const handleLogin = async () => {
    setError(null);

    const {email, password} = login;
    const emailRegex = loginField.find(f => f.key === 'email')?.regex;
    const isEmailValid = emailRegex?.test(login.email);
    

    if (!login.email || !login.password){
        setError("All field must be filled");
        return;
    }

    if(!isEmailValid) {
        setError("invalid email format");
        return;
    } try {
        await auth().signInWithEmailAndPassword(email,password);
        ToastAndroid.show("Login success",ToastAndroid.SHORT);
    }
        catch (error: any) {
            setError(error.message);
            ToastAndroid.show("Login Failed" + error.message,ToastAndroid.LONG)
        }
    }

    const handleRegister = async () => {
    setError(null);
    const { email, password, confirmPassword, fullname } = register;

    if (password !== confirmPassword) {
        setError("Passwords do not match!"); 
        return;
    }

    for (const field of registerField) {
        const value = register[field.key as keyof typeof register];

        if (field.required && !value) {
            setError(`${field.label} is required!`);
            return;
        }

        if (field.regex && !field.regex.test(value)) {
            setError(field.errorMessage || `Invalid ${field.label}`);
            return;
        }
    }

    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        
        
        await userCredential.user.updateProfile({
            displayName: fullname

        });

        ToastAndroid.show("Register Successful", ToastAndroid.SHORT);

    } catch (error: any) {
        
        const errorMessage = error.message.includes(']') 
            ? error.message.split(']')[1].trim() 
            : error.message;
            
        setError(errorMessage);
        ToastAndroid.show("Register Failed: " + errorMessage, ToastAndroid.LONG);
    }
};

    const loginField = [{

        id : '1',
        label : "Email",
        key : 'email',
        placeholder : "insert your email",
        keyboardType : "email-address",
        regex : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: "Wrong email format",
        required: true,
        returnKeyType: "next",
        nextField : "password"
       
    },

    {
        id : '2',
        label : "Password",
        key: 'password',
        placeholder: "input your password",
        secureTextEntry: true,
        required: true,
        returnKeyType : "done"
        

    }];

    const registerField = [{

        id : '1',
        label : "FullName",
        key: 'fullname',
        placeholder : "Input your name",
        regex : /^.{2,}$/,
        errorMessage: "Please input correct name",
        required: true,
        returnKeyType : "next",
        nextField : "email"


    },
    {
        id: '2',
        label : "Email",
        key : 'email',
        placeholder : "Input your email",
        keyboardType: "email-address",
        regex : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: "Wrong email Format",
        required: true,
        returnKeyType: "next",
        nextField: "password",
    },
    {
        id: '3',
        label : "Password",
        key : 'password',
        placeholder : "Input your Password",
        secureTextEntry : true,
        regex : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        errorMessage : "Need Uppercase, number, symbol, and minimum 6 characters" ,
        required: true,
        returnKeyType: "next",
        nextField : "confirmPassword"

    },
    {
        id:'4',
        label :"Confirm Password",
        key: 'confirmPassword',
        placeholder: 'Confirm your password',
        secureTextEntry : true,
        errorMessage : "Password not correct",
        required: true,
        returnKeyType : "done"

    }];

    const loginRegisterButton = {
       title : isLogin? "Login" : "Register",
       subtitle: isLogin? "Register" : "Login",
       action : isLogin? handleLogin : handleRegister
     
        
    }

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setError(null);
        setLogin({ email: "", password: "" });
        setRegister({ 
             fullname: "",
             email: "", 
             password: "", 
             confirmPassword: "" 
        });
        
        
    }



  return {

    login,
    setLogin,
    register,
    setRegister,
    loginField,
    registerField,
    isLogin,
    setIsLogin,
    toggleMode,
    state : isLogin ? login : register,
    setState : isLogin ? setLogin : setRegister,
    handleLogin,
    handleRegister,
    loginRegisterButton,
    error,
    setError,
    inputRefs,
    secure,
    toggleSecureEntry
    


}  
}

