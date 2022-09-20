import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.screenBackground
    },
    title:{
        marginTop:10,
        marginLeft:10,
        fontSize:17,
        fontWeight:"bold",
        color:colors.black
    }
});