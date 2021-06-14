// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
import React from "react";
import {Button, SafeAreaView, StyleSheet, TextInput} from "react-native";


export default function Payment() {

    const [aadhaar, onChangeNumber] = React.useState(null);

    const paymentHandler = () => {
        console.log("submit");
        fetch('http://192.168.29.22:5019/requestPayment', {
            method: 'POST',
            credentials: "same-origin",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                aadhaar: aadhaar,
            })
        }).then(response => {

            return response.json()

        })
            .then(data => {
                alert(data.message);
                return data;
            })

            .catch((error) => {
                console.log("Api call error");
                alert(error.message);
            });
    }

    return (
        <SafeAreaView>

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={aadhaar}
                placeholder="Enter Aadhaar ID"
                keyboardType="numeric"
            />
            <Button
                title="Request"
                onPress={paymentHandler}
            />

        </SafeAreaView>
    );


};
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});
