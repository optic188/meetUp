import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class Details extends React.Component {
    render() {
        return (
            <View style={styles.menu}>
                <Text>Login component</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'green',
        fontWeight: 'bold',
    }
});
