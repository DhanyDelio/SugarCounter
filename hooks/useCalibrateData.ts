import { CalibrateData, InputConfig } from "@/types/calibrate";
import React, { useState } from "react";
import { Keyboard, Platform, ToastAndroid } from "react-native";
import dayjs from "dayjs"

export default function useCalibrateData(){

    const [data, setData] = useState<CalibrateData>({

        Gender : "",
        'Date of birth' :{
            date : '01',
            month : 'January',
            year : '2000'
        },
        Weight :"",
        Height : ""

    });

    const [value, setValue] = React.useState<string | null>(null);
    const [isModalOpen, setisModalOpen] = useState(false);
    const [defaultBirthDate, setdefaultBirthDate] = useState(new Date(2000,0,1));
   


    const startEditing = (id: string, label: string) => {

           Keyboard.dismiss();

            if(label === 'Gender') {
                const nextGender = data.Gender === 'Male' ? 'Female' : 'Male';
                updateField('Gender', nextGender)
                setValue(null);

                return;
            } 
            
            if(label !== 'Date of birth'){
                setValue(id);
                return;
            }

            setValue(id);
    }

    const stopEditing = () => setValue(null)


    const InputData:InputConfig[] = [

    {
        id: '1',
        type: 'selection',
        label: 'Gender',
        icon : "person-outline",
        option : [
            {label : 'Male', value: 'male', icon: 'male-outline'},
            {label : 'Female', value : 'female', icon: 'female-outline'}
        ]
    }, 

    {
        id : '2',
        type: 'date_scroll',
        label: 'Date of birth',
        icon : 'calendar-outline',
        unit : 'years',

    },

    {
        id : '3',
        label : 'Weight',
        icon : 'scale-outline',
        unit : 'Kg',
        value : '',
        keyboardType: 'numeric'
    },

    {
        id : '4',
        label : 'Height',
        icon : "resize-outline",
        unit : 'cm',
        value : '',
        keyboardType:'numeric'
    },
    
];


    const getFormattedValue = (label: string) => {
        const key = label as keyof CalibrateData;
        const currentVal = data[key]
        const config = InputData.find(i => i.label === label);

        if(typeof currentVal === 'object' && currentVal !== null) {
            return `${currentVal.date} ${currentVal.month} ${currentVal.year}`;
        }

        if(currentVal) return `${currentVal} ${config?.unit || ''}`;

        return `Input ${label}`;
    }

    const updateField = (label : string, newValue: any) =>{
        setData(prev => ({
            ...prev,
            [label]: newValue
        })); 
    }

    const handleOutsideClick = () => {
        stopEditing();
        Keyboard.dismiss();

    }

    

    const handleModal = (labeitem: string)=>{
        if (labeitem === 'Date of birth'){
            setisModalOpen(true)
        }
    }

    const handleConfirmDate = (dateFromPicker : Date) => {

        setdefaultBirthDate(dateFromPicker);

        setData(prev => ({
            ...prev,
            'Date of birth' : {
                date: dayjs(dateFromPicker).format('DD'),
                month: dayjs(dateFromPicker).format('MMMM'),
                year: dayjs(dateFromPicker).format('YYYY')
            }

        }));

        setisModalOpen(false)
    }


    const handleSubmitCalibrate = () => {
        const {Gender, Weight, Height } = data;

        if(!Gender || !Weight || !Height) {
            if(Platform.OS==='android') {
            ToastAndroid.show("Please Complete your Data", ToastAndroid.SHORT)
        }

        return;
    }

    const payload = {
        ...data,
        updatedAt :dayjs().format(),
    };
    ToastAndroid.show("Success",ToastAndroid.SHORT)
    console.log("payload Ready :", payload);
}


    return ({
        data,
        setData,
        InputData,
        getFormattedValue,
        updateField,
        value,
        setValue,
        startEditing,
        stopEditing,
        handleOutsideClick,
        isModalOpen,
        setisModalOpen,
        handleModal,
        handleConfirmDate,
        defaultBirthDate,
        setdefaultBirthDate,
        handleSubmitCalibrate
    });
}

