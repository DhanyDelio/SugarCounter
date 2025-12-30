import { View } from "react-native";
import LoginRegisterForm from "./ui/login_register/login_register_form";
import { FormInputProps } from "@/types/authfield";


export default function FormInput({
    field,state,setState,inputRefs,onSubmit,toggleSecureEntry: toggleSecureEnrty, 
    secure}
    : FormInputProps){
    return(
        <View>
            {field.map((item)=> (
            <LoginRegisterForm
            key={item.id}
            label={item.label}
            placeholder={item.placeholder}
            secureTextEntry={secure[item.key]}
            onToggleSecondary={ 
                item.key.includes ('password') 
                || item.key.includes ('confirmPassword')
                 ? () => toggleSecureEnrty(item.key)
                 : undefined
             }
            keyboardType={item.keyboardType}
            inputRef={(el: any) => {
                if (inputRefs.current) {
                    inputRefs.current[item.key] = el;
                }
            }}
            onSubmitEditing={() => {
                
                if(item.nextField) {
                    inputRefs.current?.[item.nextField]?.focus();
                    
                } else {
                    onSubmit();

                }

            }}
            value={state[item.key]}
            onChangeText={(text: string) => setState ({...state, [item.key]: text})}
            errorMessage={item.regex && state[item.key] && !item.regex.test(state[item.key]) ? item.errorMessage : undefined}
            />
            ))}
        </View>
    )
}