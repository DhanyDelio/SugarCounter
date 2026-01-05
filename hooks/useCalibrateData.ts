import { CalibrateData } from "@/types/calibrate";
import React, { useState } from "react";

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


    const startEditing = (id: string, label: string) => {
            if(label !== 'Date of birth'){
                setValue(id);
            }
    }

    const stopEditing = () => setValue(null)

    const InputData = [

    {
        id: '1',
        type: 'selection',
        label: 'Gender',
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
        type: 'numeric',
        label : 'Weight',
        icon : 'scale-outline',
        unit : 'Kg',
        value : ''
    },

    {
        id : '4',
        type : 'numeric',
        label : 'Height',
        icon : "human-male-height",
        unit : 'cm',
        value : ''
    },
    
];

    const handleInput = (item: any) => {
        if(item.label === 'Weight') {
            setData((prev: any)=>({...prev,Weight : '70'}));
        } else if (item.label === "Gender") {
            setData((prev: any)=>({...prev,Gender : "Male"}));

        }
    }

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

    return ({
        data,
        setData,
        InputData,
        getFormattedValue,
        updateField,
        handleInput,
        value,
        setValue,
        startEditing,
        stopEditing
    });
}

