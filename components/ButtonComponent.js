import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'blue',
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