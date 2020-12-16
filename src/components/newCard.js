import React from 'react'
import { View, Text } from 'react-native'

const NewCard = (props) => {
    return(
        <View style={{height:100, width:100, backgroundColor:'white', elevation:5, alignItems:'center'}}>
            <Text style={{color:'red', fontSize:26, marginTop:5}}>{props.count}</Text>
            <Text style={{color:'black', fontSize:14}}>{props.new}</Text>
            <Text style={{color:'black', fontSize:12}}>{props.received}</Text>
        </View>
    )
}

export default NewCard;