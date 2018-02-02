import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Home from '../components/home-component';
import {StackNavigator} from 'react-navigation';
import{mainStyles} from '../shared/styles';

export class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <View style={styles.container}>
                <View><Text>Login screen</Text></View>
                <View>
                    <Button onPress={() => this.props.navigation.navigate('Home', {})} title={'Go to main app'}/>
                </View>
            </View>
        )
    }
}

const ModalStack = StackNavigator(
    {
        Login: {
            screen: Login,
        },
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                title: `Hello Piter`,
            }),
        },
    },
    {
        headerMode: 'screen '
    }

);

const styles = StyleSheet.create({
    container: {
        backgroundColor: mainStyles.backgroundColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 10
    }
});
export default  ModalStack;