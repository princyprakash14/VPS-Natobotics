import React, {Component} from 'react'
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-check-box'
import styles from '../styles/loginStyles'

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            userId : '',
            password: '',
            isChecked: false
        }
    }
    render(){
        return(
            <ImageBackground source={require('../assets/background.png')}
                             style={styles.bgImg}>
                <View style={styles.mainView}>
                    <Image source={require('../assets/mainLogo.png')} style={styles.logo}/>
                    <View>
                        <Text style={styles.welcomeTxt}>{`  Welcome to \nVPS Customer Portal`}</Text>
                        <View style={styles.cardMainView}>
                            <View style={{marginLeft:'5%'}}>
                                <Text style={styles.userIdTxt}>User Id</Text>
                                <TextInput 
                                value={this.state.userId}
                                onChangeText={(userId) => {this.setState({userId})}}
                                style={styles.txtInputStyle}
                                />

                                <Text style={styles.pwd}>Password</Text>
                                <TextInput 
                                value={this.state.password}
                                onChangeText={(password) => {this.setState({password})}}
                                style={styles.txtInputStyle}
                                />

                                <View style={styles.checkboxView}>
                                    <CheckBox
                                    checkBoxColor='red'
                                    checkedCheckBoxColor='green'
                                    onClick={()=>{ this.setState({ isChecked:!this.state.isChecked})}}
                                    isChecked={this.state.isChecked}
                                    />
                                    <Text style={styles.rememberTxt}>Remember me</Text>
                                </View>

                                <View style={styles.buttonsMainView}>
                                    <TouchableOpacity 
                                            onPress={() => {this.props.navigation.navigate('Home')}}
                                            style={styles.loginButton}>
                                        <Text style={styles.loginTxt}>Login</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                            onPress={() => {this.props.navigation.navigate('SignUp')}}
                                            style={styles.signupButton}>
                                        <Text style={styles.signupTxt}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>

            </ImageBackground>
        )
    }
}

export default Login