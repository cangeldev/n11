import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.screenBackground
    },
    title:{
        marginTop:5,
        marginLeft:15,
        fontSize:19,
        fontWeight:"bold",
        color:colors.black
    }
});