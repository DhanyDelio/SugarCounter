import { useState } from "react";
import { CalibrateData } from "@/types/calibrate";

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



    return ({
        data,
        setData,
        InputData
    });
}

