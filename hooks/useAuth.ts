import { getAuth, GoogleAuthProvider, signInWithCredential } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ToastAndroid } from "react-native";

export default function useAuth(){
  
    const [error,setError] = useState<string | null>(null);
    const [isloading, setIsloading] = useState(false);
    const auth = getAuth();
    const router = useRouter();

    const handleLoginGoogle = async () => {
        setError(null);
        setIsloading(true);
    
        try {
            const response = await GoogleSignin.signIn();
            const idToken = response.data?.idToken;

            if(!idToken){
                throw new Error("No id Token found");
            }

            const googleCredential = GoogleAuthProvider.credential(idToken);
            await signInWithCredential(auth, googleCredential);

            ToastAndroid.show("Login Success",ToastAndroid.SHORT)
            router.replace('/(tabs)/setup_screen');

        } catch(error: any) {
            console.log("Google Sign-In error :", error)
            const errorMessage = error.errorMessage || 'something went wrong';
            setError(errorMessage)

        } finally {
            setIsloading(false);
        }
    }

   
  return {

    error,
    setError,
    isloading,
    setIsloading,
    handleLoginGoogle

}  
}

