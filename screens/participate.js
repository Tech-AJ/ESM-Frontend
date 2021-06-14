// navigation https://heartbeat.fritz.ai/how-to-handle-navigation-with-webviews-in-a-react-native-app-1ed51ab3342f
import React, {Component,StatusBar} from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, BackHandler, StyleSheet, View} from 'react-native'

export default class participate extends Component {

    webView = {
        canGoBack: false,
        ref: null,
       // url: 'https://www.cse.iitk.ac.in/users/apoorvaj/game.html/',   //
        url: 'https://www.cse.iitk.ac.in/users/apoorvaj/procast/index.html',
        // url: 'https://reactnative.dev'
        score:[]
    }
     insertData=()=>{
        console.log("submit");
        fetch('http://192.168.29.22:5019/insertdata', {
            method: 'POST',
            credentials: "same-origin",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                //Cookie: cookies_to_send,
                //   Authorization: "JWT "+ cookies_to_send[0],
            },
            body: JSON.stringify({
                aadhaar:'1123gfgg83jfdd1',
                fullName:'asdsd',
                data:this.webView.score,
            })
        }).then (response => {
            //    alert(document.cookie);
            return response.json()

        })
            .then(data=>{
                //  console.log('h'+body)
                // if(response.status === 200)
                alert(data.message+ 'j');
                return data;
            })

            .catch((error)=>{
                console.log("Api call error");
                alert(error.message);
            });
    }

    onAndroidBackPress = () => {
        console.log("trur bacghk")
        if (this.webView.canGoBack && this.webView.ref) {
            this.webView.ref.goBack();
            return true;
        }
        return false;
    }


    componentDidMount() {
        // if (Platform.OS === 'android') {
        //     BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
        // }
    }

    componentWillUnmount() {
        // if (Platform.OS === 'android') {
        //     BackHandler.removeEventListener('hardwareBackPress');
        // }
    }

    _onMessage = event => {
        console.log('_onMessage', JSON.parse(event.nativeEvent.data));
        const res = JSON.parse(event.nativeEvent.data);
        if (res.message === 'ok') {
            alert('button clicked '+ res.score);
            this.webView.score= res.score;
            this.insertData();
        }
    };

//     render() {
//         const jsCode = //`document.querySelector('.HeaderHero').style.backgroundColor = 'purple';
//             `document.querySelector('button.ActionButton').style.backgroundColor = 'green';
//     document.querySelector('button.ActionButton').addEventListener("click", function() {
//
//     window.ReactNativeWebView.postMessage(JSON.stringify({type: "click", message : "ok", score: myGameArea.frameNo }));
//       // t=myGameArea.frameNo;
// });
// true;`;

    render() {
        const jsCode = //`document.querySelector('.HeaderHero').style.backgroundColor = 'purple';
            `document.querySelector('button.ActionButton').style.backgroundColor = 'green';   //startTask
    document.querySelector('button.ActionButton').addEventListener("click", function() {

    window.ReactNativeWebView.postMessage(JSON.stringify({type: "click", message : "ok", score: finalData }));
      // t=myGameArea.frameNo;
});
true;`;

        return (

            <WebView
                //userAgent={DeviceInfo.getUserAgent() + " - MYAPPNAME - android "}
                //   userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
                source={{uri: this.webView.url}}
                ref={(webView) => {
                    this.webView.ref = webView;
                }}
                onNavigationStateChange={(navState) => {
                    this.webView.canGoBack = navState.canGoBack;
                }}
                injectedJavaScript={jsCode}
                onMessage={this._onMessage}
                scalesPageToFit={true}
            />
        );
    }
}
