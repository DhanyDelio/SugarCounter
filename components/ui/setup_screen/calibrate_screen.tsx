import useCalibrateData from "@/hooks/useCalibrateData";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { style } from "./setup_screen_style";
import { InputConfig } from "@/types/calibrate";
import { ModalDate } from "./simple_date_picker_modal";
import { Colors } from "../styles/color";

export default function CalibrateScreen(){
    const {
        
        data,
        InputData,
        getFormattedValue,
        startEditing,
        value,
        updateField,
        stopEditing,
        handleOutsideClick,
        handleModal,
        handleConfirmDate,
        isModalOpen,
        setisModalOpen,
        defaultBirthDate,
        handleSubmitCalibrate
        
    } = useCalibrateData();
        
        const renderdata = ({item: {id,icon,label,unit,keyboardType}}: {item : InputConfig}) => {

        const isEditing = value === id

        return (
            <TouchableOpacity 
                    style={style.card} 
                    onPress={() => {
                        if (label === 'Date of birth') {
                            handleModal(label);
                        } else {
                            startEditing(id, label);
                        }
                    }}
                    
                >
                <View style={style.cardleft}>
                    <Ionicons 
                        name={icon} 
                        size={24} 
                        color={Colors.primary}
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
                keyboardShouldPersistTaps="handled"
                />

                <ModalDate
                visible={isModalOpen}
                onConfirm={handleConfirmDate}
                onCancel={()=>setisModalOpen(false)}
                initialDate={defaultBirthDate}
                />

                <View style={style.BottomContainer}>
                <TouchableOpacity 
                style={style.submitDataButton} 
                onPress={handleSubmitCalibrate}
                activeOpacity={0.8}>
                <Text style={style.ButtonText}>Calibrate</Text>
                </TouchableOpacity>
                </View>
        </View>
        </TouchableWithoutFeedback>
    )
}