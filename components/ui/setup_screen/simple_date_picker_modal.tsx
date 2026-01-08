import { DatePickerModal } from "@/types/calibrate";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Modal, View } from "react-native";
import { style } from "./setup_screen_style";


export const ModalDate = ({visible,onConfirm,onCancel,initialDate}:DatePickerModal) => {
    

    const handleChange = (event : any, selectedDate?: Date) => {
       
      if(event.type === 'set')  {
        if(selectedDate) {
            onConfirm(selectedDate);
        }
        onCancel();
    }

        if(event.type ==='dismissed') {
            onCancel();
        }
    };

    if(!visible) return null;


    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={style.overlay}>
                    <DateTimePicker
                    value={initialDate || new Date()}
                    mode="date"
                    display="spinner"
                    onChange={handleChange}
                    maximumDate={new Date()}
                    />
            </View>
        </Modal>
    )
}



