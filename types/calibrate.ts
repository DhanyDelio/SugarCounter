import { KeyboardTypeOptions } from "react-native";

export interface DateValue {

    date : string;
    month : string;
    year : string ;
}

export interface CalibrateData {
    
    Gender : string;
    'Date of birth' : DateValue;
    Weight : string;
    Height : string;
}

export interface InputConfig {
    id: string;
    label: keyof CalibrateData;
    icon: any;
    unit?: string;
    type?: string;
    option?: any[];
    value?: string;
    keyboardType?:KeyboardTypeOptions;
}


export interface DatePickerModal {
    visible : boolean;
    onConfirm :(date : Date) => void;
    onCancel : () => void;
    initialDate? : Date;


}