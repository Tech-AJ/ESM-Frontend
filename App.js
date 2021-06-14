import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import Navigator from './routes/homeStack'


// https://stackoverflow.com/questions/60570533/httponly-cookie-in-react-native-for-jwt-refresh-token


export default function App() {


    return (
        <Navigator/>

    );

}

;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    }, text: {
        color: '#777',

    }
});
//
// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { WebView } from 'react-native-webview';
//
// // // ...
// // class MyWebComponent extends Component {
// //     render() {
// //         return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
// //     }
// // }
//
//
//
// const handleWebViewNavigationStateChange = newNavState => {
//     // newNavState looks something like this:
//     // {
//     //   url?: string;
//     //   title?: string;
//     //   loading?: boolean;
//     //   canGoBack?: boolean;
//     //   canGoForward?: boolean;
//     // }
//     const { url } = newNavState;
//     if (!url) return;
//     //
//     // // handle certain doctypes
//     // if (url.includes('.pdf')) {
//     //     webview.stopLoading();
//     //     // open a modal with the PDF viewer
//     // }
//     //
//     // // one way to handle a successful form submit is via query strings
//     // if (url.includes('?message=success')) {
//     //     webview.stopLoading();
//     //     // maybe close this view?
//     // }
//     //
//     // // one way to handle errors is via query string
//     // if (url.includes('?errors=true')) {
//     //     webview.stopLoading();
//     // }
//
//     // redirect somewhere else
//     if (url.includes('google.com')) {
//         const newURL = 'https://cse.iitk.ac.in';
//         const redirectTo = 'window.location = "' + newURL + '"';
//         webview.injectJavaScript(redirectTo);
//     }
//     console.log("chnge listener")
// };
//
// export default function App() {
//     return <WebView source={{ uri: 'https://google.com' }}
//                     style={{ marginTop: 20 }}
//                     onNavigationStateChange={handleWebViewNavigationStateChange}/>;
// }

//https://blog.logrocket.com/the-complete-guide-to-react-native-webview/
//https://blog.jscrambler.com/how-to-use-webviews-in-a-react-native-app/