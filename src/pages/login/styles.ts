import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    boxTop:{
        height:Dimensions.get('screen').height/3,
        width:'100%',
        backgroundColor:'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxMid:{
        height:Dimensions.get('screen').height/4,
        width:'100%',
        backgroundColor:'white',
        paddingHorizontal:37
    },

    boxBottom:{
        height:Dimensions.get('screen').height/3,
        width:'100%',
        //backgroundColor:'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo:{
        width:100,
        height:100,
        marginTop:50
    },

    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:18,
        color:'white'
    },

    titleInput:{
        marginLeft:5,
        color:themas.colors.gray,
        marginTop:20
    },

    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 20,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray
    },

    input:{
        width:'90%',
        height:'100%',
        borderRadius: 40,
        //backgroundColor:'blue'
    },

    button:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.primary,
        borderRadius:30
    },

    textButton:{
        fontSize:15,
        fontWeight:'bold',
        color:'#ffff'
    },

    textBottom:{
        marginBottom:40,
        color:themas.colors.gray
    }

})