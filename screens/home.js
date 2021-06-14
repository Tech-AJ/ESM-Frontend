import React from 'react'
import {Button, StyleSheet, TouchableHighlight, View} from 'react-native'


export default function Home({navigation}) {     // receives props which is destructured into props.navigation

    const signOut = () => {
        console.log("submit");
        fetch('http://192.168.29.22:5019/sign_out', {
            method: 'POST',
            credentials: "same-origin",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                //Cookie: cookies_to_send,
                //   Authorization: "JWT "+ cookies_to_send[0],
            },
        }).then(response => {
            //    alert(document.cookie);
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
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.button}>
                <Button

                    title="Register" onPress={() => {
                    navigation.navigate('Register')
                }}/>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}>
            <Button title="Login" onPress={() => {
                navigation.navigate('Login')
            }}
            />
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}>
            <Button title="Participate" onPress={() => {
                navigation.navigate('Participate')
            }}
            /></TouchableHighlight>
            <TouchableHighlight
                style={styles.button}>
                <Button title="Participate 2" onPress={() => {
                    navigation.navigate('Participate2')
                }}
                /></TouchableHighlight>

            <TouchableHighlight
                style={styles.button}>
            <Button title="Request Payment" onPress={() => {
                navigation.navigate('Payment')
            }}
            />
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}>
            <Button
                title="Logout"
                onPress={signOut}
            /></TouchableHighlight>


        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        margin: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },

    button: {

        height: 40,
        borderRadius: 10,
        margin: 4

    }
});

// import React, {Component} from 'react';
// //
// import {StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
//
// export class Home extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Button>
//                     Register
//                 </Button>
//                 <Button>
//                     Login
//                 </Button>
//                 <Button>
//                     Participate
//                 </Button>
//                 <Button>
//                     Request Payment
//                 </Button>
//                 <Button>
//                     Logout
//                 </Button>
//
//
//             </View>
//         );
//
//     }
//
//
// }
//
