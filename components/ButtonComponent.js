import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
    if (props.disabled)
        var btnColor = 'grey';
    else
        var btnColor = props.color != undefined ? props.color : 'blue';
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onPressEvent}
            disabled={props.disabled}
        >
            <View
                style={{ ...styles.buttonContainer, backgroundColor: btnColor }}
            >
                <Text
                    style={{
                        fontSize: props.textSize,
                        color: props.textColor
                    }}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 20,
        padding: 10,
        borderRadius: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
})

export default CustomButton;