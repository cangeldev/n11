import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        backgroundColor: colors.statusBarBackground,
        width: "100%",
        height: 60
    },
    title: {
        color: colors.white,
        marginTop: 15,
        marginLeft: 15,
        fontFamily: "OpenSans-Bold",
        fontSize: 18
    },
    content: {
        alignItems: "center"
    },
    contentText: {
        color: colors.black,
        fontSize: 16,
        marginTop: 23,
        marginBottom:4,
        letterSpacing: 1,
        fontFamily:"OpenSans-Bold",
    },
    lottie: {
        width: 180
    },
    touchableOpacity: {
        backgroundColor: colors.lightGreen,
        width: "92%",
        height: 45,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    touchText: {
        color: colors.white,       
        fontSize: 15,
        letterSpacing: 1,
        fontFamily:"OpenSans-Bold"
    },
    text: {
        color: colors.black,
        fontSize: 16,
        marginTop: 18,
        marginLeft: 15,
        fontFamily:"OpenSans-Medium"
    },
    productsView: {
        borderTopWidth: 1,
        marginTop: 15,
        borderTopColor: colors.lightGrey
    }
});