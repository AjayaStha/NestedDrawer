import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class NewScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Ionicons name="md-arrow-back" size={32} color="#193250" />

            </TouchableOpacity>
            <Text style={styles.textStyle}> NewScreen Component </Text>
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
