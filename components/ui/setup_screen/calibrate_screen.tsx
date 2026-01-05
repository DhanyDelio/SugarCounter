import useCalibrateData from "@/hooks/useCalibrateData";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./setup_screen_style";


export default function CalibrateScreen(){
    const {
        data,
        InputData,
        getFormattedValue,
        startEditing,
        value,
        updateField,
        stopEditing
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
                    {isEditing?(
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
                    )}
                </View>

                <View style={style.cardRight}>
                    <Text style={style.unit}>{item.unit}</Text>
                    <Ionicons name="chevron-forward" size={18} color={"#CCC"}/>
                </View>
        </TouchableOpacity>
        )
    }

    return(
        <View style={style.flatlistcontainer}>
            <FlatList
                data={InputData}
                renderItem={renderdata}
                keyExtractor={(item) => item.id}
                contentContainerStyle={style.listContent}/>
        
        </View>
    )
}