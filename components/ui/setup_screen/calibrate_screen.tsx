import useCalibrateData from "@/hooks/useCalibrateData";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { style } from "./setup_screen_style";


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

    const renderdata = ({item}: {item:any}) => {

        const isEditing = value === item.id

        return (
            <TouchableOpacity 
                    style={style.card} 
                    onPress={() => startEditing(item.id , item.label)}
                    
                >
                <View style={style.cardleft}>
                    <Ionicons 
                        name={item.icon} 
                        size={24} 
                        color={"#4A90E2"}
                    />
                </View>

                <View style={style.cardContent}>
                    <Text style={style.label}>{item.label}</Text>
                    {item.label === 'Gender' ? (
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
                        value={String(data[item.label as keyof typeof data] || '')}
                        onChangeText={(text) => updateField(item.label, text) }
                        onBlur={stopEditing}
                        onSubmitEditing={stopEditing}
                        autoFocus={true}
                        keyboardType={item.label === 'Gender' ? 'default' : 'numeric'}
                        />

                    ):(

                    <Text style={style.value}>{getFormattedValue(item.label)}</Text>

                    ))}

                </View>

                <View style={style.cardRight}>
                    <Text style={style.unit}>{item.unit}</Text>
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
                keyExtractor={(item) => item.id}
                contentContainerStyle={style.listContent}
                keyboardShouldPersistTaps="handled"/>
        </View>
        </TouchableWithoutFeedback>
    )
}