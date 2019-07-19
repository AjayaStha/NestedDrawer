import React, { Component } from 'react'
import { Button, TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.iconWrapper}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.toggleLeftDrawer()}
                >
                    <Ionicons name="md-menu" size={32} color="#193250" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.toggleRightDrawer()}
                >
                    <Ionicons name="md-settings" size={32} color="#193250" />
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.textStyle}> Home Component </Text>
                <Button 
                    title='Go to Next Screen'
                    onPress={()=> this.props.navigation.navigate('NewScreen')}
                />
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,  
        marginTop:30 
    },
    wrapper: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWrapper:{
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 20,
    },
    textStyle: {
        fontSize: 16,
    },
})
