import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: 400,
        width: 200,
        backgroundColor: '#e6e6e6',
        padding: 10,
        margin: 15,
        marginLeft:5,
        borderRadius: 5,
    },
    image: {
        height:Dimensions.get("window").height/4,
        borderRadius:5,
    },
    title: {
        fontSize:20,
        fontWeight:'700',
        marginTop: 15,
    },
    price:{
        color:"#696969",
        fontSize: 20,
        marginTop: 10
    },
    inStock:{
        fontWeight:"bold",
        fontSize:20,
        color:"red",
        marginTop:3,
    }
})