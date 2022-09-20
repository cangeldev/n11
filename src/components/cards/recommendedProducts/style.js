import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: 200,      
        overflow: "hidden",
        backgroundColor: colors.white,
        borderRightWidth:1,
        borderRightColor:colors.lightGrey,
        marginTop:20  
             
    },
    cardImage: {
        width: 130,
        height: 140,
        resizeMode: "stretch",
        alignSelf: "center",
        marginTop: 20
    },
    productsTitle: {
        margin: 5,
        color: colors.black,
        lineHeight: 20,
        marginLeft: 7,
        marginTop: 10
    },
    rateView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 4,
        marginTop: 5
    }, myStarStyle: {
        color: colors.star,
    },
    myEmptyStarStyle: {
        color: colors.lightGrey,
    }, count: {
        fontSize: 10,
        marginLeft: 3
    },
    price: {
        marginLeft: 6,
        color: colors.black,
        fontWeight: "bold",
        marginTop: 5
    },
    text:{
        color:colors.grey,
        marginLeft:5,
        marginTop:5,
        fontSize:12
    },
    lastPrice: {
        marginLeft: 6,
        marginTop: 4,
        textDecorationLine: "line-through"
    },
})