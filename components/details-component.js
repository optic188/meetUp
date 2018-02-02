import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import{mainStyles} from '../shared/styles';
export default class Details extends React.Component {
    render() {
        return (
            <View style={styles.menu}>
                <Text>Details</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        backgroundColor: mainStyles.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'green',
        fontWeight: 'bold',
    }
});