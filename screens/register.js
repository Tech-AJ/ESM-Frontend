// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
import React from "react";
import {Button, SafeAreaView, StyleSheet, TextInput} from "react-native";


export default function Register() {
    const [fullName, onChangeText] = React.useState("");
    const [aadhaar, onChangeNumber] = React.useState(null);

    const registerHandler = () => {

        console.log(fullName)
        console.log(aadhaar)
        fetch('http://192.168.29.22:5019/register', {

            method: 'POST',
            credentials: "same-origin",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                aadhaar: aadhaar,
                fullName: fullName,
            })
        }).then(response => {
            return response.json()

        })
            .then(data => {
                alert(data.message );
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
                onChangeText={onChangeText}
                placeholder="Enter Full Name"
                value={fullName}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={aadhaar}
                placeholder="Enter Aadhaar ID"
                keyboardType="numeric"
            />
            <Button
                title="Register"
                onPress={registerHandler}
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


// class Login extends Component {
//     state = {
//         aadhaar: ''
//     }
//     updateState = () => this.setState({ myState: 'The state is updated to' })
//     render() {
//         return (
//             <View>
//                 <Text onPress = {this.updateState}>
//                     {this.state.myState}
//                 </Text>
//             </View>
//         );
//     }
// }
// export default Login;