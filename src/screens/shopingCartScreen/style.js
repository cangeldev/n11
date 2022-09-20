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
        marginTop: 10,
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 19
    },
    content: {
        alignItems: "center"
    },
    contentText: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 25,
        letterSpacing: 1
    },
    lottie: {
        width: 180
    },
    touchableOpacity: {
        backgroundColor: colors.lightGreen,
        width: "90%",
        height: 45,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    touchText: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 1
    },
    text: {
        color: colors.black,
        fontSize: 16,
        marginTop: 15,
        marginLeft: 15
    },
    productsView: {
        borderTopWidth: 1,
        marginTop: 15,
        borderTopColor: colors.lightGrey
    }
});