// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
import React from "react";
import {Button, SafeAreaView, StyleSheet, TextInput} from "react-native";


export default function Login() {
    //   const [fullName, onChangeText] = React.useState("Useless Text");
    const [aadhaar, onChangeNumber] = React.useState(null);

    const loginHandler = () => {

        //  console.log(fullName)
        console.log(aadhaar)
        fetch('http://192.168.29.22:5019/sign_in', {

            method: 'POST',
            credentials: "same-origin",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                aadhaar: aadhaar,
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
                onChangeText={onChangeNumber}
                value={aadhaar}
                placeholder="Enter Aadhaar ID"
                keyboardType="numeric"
            />
            <Button
                title=" Login"
                onPress={loginHandler}
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