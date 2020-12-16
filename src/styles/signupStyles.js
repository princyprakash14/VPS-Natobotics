import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    bgImg : {
        height:'100%', 
        width:'100%', 
        flex:1
    },
    mainView : {
        justifyContent:'space-between', 
        flex:1
    },
    logo : {
        height:50, 
        width:150, 
        alignSelf:'center', 
        marginTop:'20%'
    },
    signupTxt : {
        color:'white', 
        fontSize:30, 
        fontWeight:'bold', 
        textAlign:'center'
    },
    mainCardView : {
        height:480, 
        width:'90%', 
        backgroundColor:'white',  
        borderColor:'black', 
        borderRadius:20, 
        marginTop:'10%', 
        marginLeft:'5%', 
        marginBottom:'15%'
    },
    fnameTxt : {
        color:'black', 
        fontSize:20, 
        fontWeight:'600',
        marginTop:'10%'
    },
    txtInputStyle : {
        height:50, 
        width:'90%', 
        borderColor:'gray', 
        borderWidth:1, 
        marginTop:'5%', 
        borderRadius:10, 
        paddingHorizontal:10
    },
    lnameTxt : {
        color:'black', 
        fontSize:20, 
        fontWeight:'600',
        marginTop:'5%'
    },
    useCompanyTxt : {
        color:'gray', 
        fontSize:14
    },
    signupButtonsView : {
        flexDirection:'row', 
        justifyContent:'space-around', 
        marginTop:'10%'
    },
    loginButton : {
        height:50, 
        width:'40%', 
        borderWidth:1, 
        borderColor:'red', 
        borderRadius:10, 
        alignItems:'center', 
        justifyContent:'center'
    },
    loginTxt : {
        color:'red', 
        fontSize:16, 
        fontWeight:'bold'
    },
    signupButton : {
        height:50, 
        width:'40%', 
        borderWidth:1, 
        borderColor:'red', 
        borderRadius:10,
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'red'
    },
    signupBtnTxt : {
        color:'white', 
        fontSize:16, 
        fontWeight:'bold'
    }


})

export default styles;