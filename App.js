import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Login from './screens/login-screen';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Login/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});




