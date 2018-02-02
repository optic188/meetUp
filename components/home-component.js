import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Details from './details-component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerNavigator} from 'react-navigation';
import{mainStyles} from '../shared/styles';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>My app!</Text>
                    <Button onPress={()=> this.props.navigation.navigate('Details')} title='Go to details'/>
                    <Button onPress={()=> this.props.navigation.navigate('Login')} title='Go to login page'/>
                </View>

                <View style={styles.footer}>
                    <Text>Footer</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainStyles.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1
    },
    footer: {
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: '#5d99c6',
        alignItems: 'center',
        padding: 10
    },
});

const RootDrawer = DrawerNavigator({
    Home: {
        screen: Home,
        navigationOption: {
            drawerLabel: 'Main screen',
            headerTitle: 'Home',
            drawerIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-female' : 'ios-female-outline'}
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Details: {
        screen: Details,
        navigationOptions: {
            drawerLabel: 'Details',
            headerTitle: 'Details',
            drawerIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    }
    // Login: {
    //     screen: Login,
    //     navigationOption: {
    //         drawerLabel: 'Login',
    //         headerTitle: 'Login',
    //     }
    // }
});
export default RootDrawer


