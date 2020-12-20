import React from 'react'
import { StyleSheet, Text, View,FlatList} from 'react-native'

const History = ({history}) => {
    return (
        <View style={styles.container}>
            <Text style={{color:'#fff'}}>
                TotalPrice   Discount%  AmountSave 
            </Text>
            <FlatList
                data={history}
                renderItem={({item}) => <Text style={{color:'#fff', marginTop: 5,}}> {item.pri}               {item.dis}                   {item.disPri} </Text>}
                keyExtractor={item=>item.pri}
            />
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2b7262',
        justifyContent:"center",
        alignItems:'center'
    }
})
