import Setupheader from "@/components/ui/setup_screen/headerforsetup";
import { style } from "@/components/ui/setup_screen/setup_screen_style";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalibrateScreen from "@/components/ui/setup_screen/calibrate_screen";


export default function Setup_Screen(){
    return (
        <SafeAreaView style={style.container}>
        <View style={style.contentWrapper}>
        <Setupheader/>
        <CalibrateScreen/>
        </View>
        </SafeAreaView>
    )
}