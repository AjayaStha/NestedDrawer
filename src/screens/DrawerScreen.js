import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export default class DrawerScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('NewScreen')}
                >
                    <Text style={[styles.textStyle,{color:'white'}]}>Go to NewScreen</Text>

            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 16,
    }
})
