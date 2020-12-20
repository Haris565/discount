import React, {useState} from 'react'
import { StyleSheet, TextInput, View,Text } from 'react-native'

const Input = (props) => {
    
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}} />
       
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height:30,
        borderBottomColor: '#044',
        borderBottomWidth:2,
        marginVertical:10
    }
})
