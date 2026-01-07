import useCalibrateData from "@/hooks/useCalibrateData";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { style } from "./setup_screen_style";
import { InputConfig } from "@/types/calibrate";

export default function CalibrateScreen(){
    const {
        data,
        InputData,
        getFormattedValue,
        startEditing,
        value,
        updateField,
        stopEditing,
        handleOutsideClick
        
    } = useCalibrateData();
        
        const renderdata = ({item: {id,icon,label,unit,keyboardType}}: {item : InputConfig}) => {

        const isEditing = value === id

        return (
            <TouchableOpacity 
                    style={style.card} 
                    onPress={() => startEditing(id ,label)}
                    
                >
                <View style={style.cardleft}>
                    <Ionicons 
                        name={icon} 
                        size={24} 
                        color={"#4A90E2"}
                    />
                </View>

                <View style={style.cardContent}>
                    <Text style={style.label}>{label}</Text>

                    {label === 'Gender' ? 
                    
                    (

                        <View style={style.containerGender}>
                            <TouchableOpacity onPress={()=> updateField('Gender', 'Male')}>
                                <Ionicons 
                                name="male"
                                size={28}
                                color={data.Gender === 'Male' ? "#4A90E2" : "#CCC"}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> updateField('Gender', 'Female')}>
                                <Ionicons
                                name="female"
                                size={28}
                                color={data.Gender === 'Female' ? "#FF69B4" : "#CCC"}
                                />
                            </TouchableOpacity>
                        </View>

                    ):(

                        isEditing? (
                        <TextInput 
                        style={style.inputActive}
                        value={String(data[label as keyof typeof data] || '')}
                        onChangeText={(text) => updateField(label, text) }
                        onBlur={stopEditing}
                        onSubmitEditing={stopEditing}
                        autoFocus={true}
                        keyboardType={keyboardType}
                        />

                    ):(

                    <Text style={style.value}>{getFormattedValue(label)}</Text>

                    ))}

                </View>

                <View style={style.cardRight}>
                    <Text style={style.unit}>{unit}</Text>
                    <Ionicons name="chevron-forward" size={18} color={"#CCC"}/>
                </View>

        </TouchableOpacity>
        )
    }

    return(
        <TouchableWithoutFeedback onPress={handleOutsideClick}>
        <View style={style.flatlistcontainer}>
            <FlatList
                data={InputData}
                renderItem={renderdata}
                keyExtractor={({id}) => id}
                contentContainerStyle={style.listContent}
                keyboardShouldPersistTaps="handled"/>
        </View>
        </TouchableWithoutFeedback>
    )
}