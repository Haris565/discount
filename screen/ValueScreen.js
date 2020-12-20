import React, {useState} from 'react'
import { StyleSheet, Text, View , Button } from 'react-native'
import Input from '../components/Input'

const ValueScreen = ({navigation, detail}) => {
    const [price , setPrice] = useState(0);
    const [discount , setDiscount] = useState(0);
    const [disprice , setDisprice] = useState(0);
    
    const textHandler = (input) =>{
      setPrice((input))
    }

    const discountHandler = (input) =>{
        setDiscount(input);
       
    }

    const calculate = () =>{
        let val = (price*discount)/100;
        setDisprice(val);
    }

    return (
        <View style={styles.container}>
            <View style={styles.view}>
            <View style={styles.inputContainer}>
                <Text>
                    Enter the amount
                </Text>
                <Input style={styles.input} 
                        autoCorrect={false} 
                        keyboardType='phone-pad' 
                        maxLength={4}
                        onChangeText={textHandler}
                        value={price}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>
                    Enter the discount %
                </Text>
                <Input style={styles.input} 
                autoCorrect={false} 
                keyboardType='phone-pad' 
                maxLength={2}
                onChangeText={discountHandler}
                value={discount}
                />
                <Text style={{margin: 10}}>
                    save amount = {disprice}
                </Text>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <View style={{marginRight:5}}>
                        <Button title='calculate' color='#2b7262' onPress={calculate} />
                    </View>
                    <View style={{marginRight:5}}>
                        <Button title='Save' color='#2b7262' onPress={()=>detail(price,discount,disprice)} />
                    </View>
                    <View style={{}}>
                        <Button
                            title="History"
                            onPress={() => navigation.navigate('History')}
                            color='#2b7262'
                        />
                    </View>
                </View>
                
                
              
            </View>
  
        </View>
    </View>
        
    )
}

export default ValueScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b7262',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input:{
        width:'50%',
        textAlign:'center',
    },
    view:{
        width:'80%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0 , height:2},
        shadowRadius:6,
        shadowOpacity:0.7,
        backgroundColor:'white',
        elevation: 9,
        padding: 20,
        borderRadius:5,
        height:350,
        backgroundColor:'#1aaf8d'
    },
    inputContainer:{
        width:'100%',
        alignItems:"center",
        padding:20
    }
})
