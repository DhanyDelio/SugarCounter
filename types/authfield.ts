import { TextInput } from "react-native";

export interface AuthField {
    id : string;
    label: string;
    key : string;
    placeholder : string;
    keyboardType?: any;
    inputRef?: (el: any) => void;
    secureTextEntry?: boolean;
    regex?: RegExp;
    errorMessage?: string;
    nextField?: string;

}


export interface FormInputProps {
    field: AuthField[];
    state: Record<string,string>;
    setState: any;
    secure: Record<string, boolean>;
    toggleSecureEntry : (key: string) => void;
    inputRefs: React.RefObject<Record<string, TextInput | null>>;
    onSubmit : () => void;

}

export interface SubmitButton {
    title : string;
    subtitle?: string;
    onPress : ()=> void;
    loading?: boolean;
    disabled?: boolean;
    togglemode : () => void;

}


export interface GoogleButtonProps {
    onPress : () => void;
    loading?: boolean;
   
}

