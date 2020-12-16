import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/signupStyles'

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            fName : '',
            lName: '',
            email: ''
        }
    }

    render(){
        return(
            <ImageBackground source={require('../assets/background.png')}
                             style={styles.bgImg}>

                <View style={styles.mainView}>
                    <Image source={require('../assets/mainLogo.png')} style={styles.logo}/>
                    <View>
                        <Text style={styles.signupTxt}>Sign Up</Text>
                        <View style={styles.mainCardView}>
                                <View style={{marginLeft:'5%'}}>
                                    <Text style={styles.fnameTxt}>First Name</Text>
                                    <TextInput 
                                    value={this.state.fName}
                                    onChangeText={(fName) => {this.setState({fName})}}
                                    style={styles.txtInputStyle}
                                    />

                                    <Text style={styles.lnameTxt}>Last Name</Text>
                                    <TextInput 
                                    value={this.state.lName}
                                    onChangeText={(lName) => {this.setState({lName})}}
                                    style={styles.txtInputStyle}
                                    />

                                    <Text style={styles.lnameTxt}>Email</Text>
                                    <TextInput 
                                    value={this.state.email}
                                    onChangeText={(email) => {this.setState({email})}}
                                    style={styles.txtInputStyle}
                                    />
                                    <Text style={styles.useCompanyTxt}>Use company email/domain only</Text>
                                </View>

                                <View style={styles.signupButtonsView}>
                                    <TouchableOpacity 
                                            onPress={() => {this.props.navigation.navigate('Login')}}
                                            style={styles.loginButton}>
                                        <Text style={styles.loginTxt}>Login</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                            onPress={() => {this.props.navigation.navigate('SignUp')}}
                                            style={styles.signupButton}>
                                        <Text style={styles.signupBtnTxt}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        )
    }
}

export default SignUp