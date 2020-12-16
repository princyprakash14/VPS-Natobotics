import { Component } from 'react'
import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from '../styles/homeStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import NewCard from '../components/newCard'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Home extends Component{
    render(){
        return(
            <ImageBackground source={require('../assets/background.png')}
                             style={styles.bgImg}>
                <View style={{flexDirection:'row', marginTop:'10%'}}>
                    <View style={{height:100, width:100, borderWidth:1, borderRadius:50, backgroundColor:'white', marginLeft:'30%'}}></View>
                    <View style={{marginLeft:'5%', justifyContent:'center'}}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>HI,</Text>
                        <Text style={{color:'red', fontSize:16, fontWeight:'bold'}}>STANLEY GEORGE</Text>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>{`MANAGER \n5 CONTRACTS`}</Text>
                    </View>
                </View>

                <View style={{marginTop:'5%', alignItems:'center'}}>
                    <View style={{height:600, width:'90%', borderWidth:1, borderRadius:25, backgroundColor:'white'}}>
                        <View style={{flexDirection:'row', marginLeft:'5%', marginTop:'5%'}}>
                            <Icon name={'person-outline'} size={25} color={'#353453'}/>
                            <Text style={{color:'#353453', fontSize:24, marginLeft:'2%'}}>Customer Contract</Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:'5%'}}>
                            <NewCard count={2} new={'New'} received={'Received Samples'}/>
                            <NewCard count={4} new={'New'} received={'Received Samples'}/>
                            <NewCard count={3} new={'New'} received={'Received Reports'}/>
                        </View>

                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity style={{height:70, width:'95%', backgroundColor:'#353453', marginTop:'5%', justifyContent:'space-around', flexDirection:'row', alignItems:'center'}}>
                                <Icon name={'play-forward-sharp'} size={26} color={'red'}/>
                                <Text style={{color:'white', fontSize:12}}>{`DOCENDALE SHIP MANAGEMENT DMCCO\n Contact Number: CTR - 003351 - 0001`}</Text>
                                <Icon name={'chevron-down-outline'} size={26} color={'white'}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height:70, width:'95%', backgroundColor:'#353453', marginTop:'5%', justifyContent:'space-around', flexDirection:'row', alignItems:'center'}}>
                                <Icon name={'play-forward-sharp'} size={26} color={'red'}/>
                                <Text style={{color:'white', fontSize:12}}>{`Dorien LPG USA LLC\n Contact Number: CTR - 003351 - 0002`}</Text>
                                <Icon name={'chevron-down-outline'} size={26} color={'white'}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height:70, width:'95%', backgroundColor:'#353453', marginTop:'5%', justifyContent:'space-around', flexDirection:'row', alignItems:'center'}}>
                                <Icon name={'play-forward-sharp'} size={26} color={'red'}/>
                                <Text style={{color:'white', fontSize:12}}>{`JAN DE NUL NU., BQS B\n Contact Number: CTR - 003351 - 0003`}</Text>
                                <Icon name={'chevron-down-outline'} size={26} color={'white'}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{height:70, width:'95%', backgroundColor:'#353453', marginTop:'5%', justifyContent:'space-around', flexDirection:'row', alignItems:'center'}}>
                                <Icon name={'play-forward-sharp'} size={26} color={'red'}/>
                                <Text style={{color:'white', fontSize:12}}>{`JAN DE NUL NU\n Contact Number: CTR - 003351 - 0004`}</Text>
                                <Icon name={'chevron-down-outline'} size={26} color={'white'}/>
                            </TouchableOpacity>

                            
                            
                        </View>
                    </View>
                </View>

                

            </ImageBackground>
        )
    }
}

export default Home