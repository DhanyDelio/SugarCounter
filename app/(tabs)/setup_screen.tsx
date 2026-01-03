import Setupheader from "@/components/ui/setup_screen/headerforsetup";
import { View } from "react-native";
import { Colors } from "@/components/ui/styles/color";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Setup_Screen(){
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={{
            flex : 1,
            backgroundColor: Colors.white, 
            paddingHorizontal: 25, 
            alignItems : 'flex-start'
            }}>
        <Setupheader/>
        </View>
        </SafeAreaView>
    )
}