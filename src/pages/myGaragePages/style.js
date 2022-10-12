import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    image: {
        width: 70,
        height: 70,
        alignSelf: "center",
        marginTop: 80,
        tintColor: colors.dedede
    },
    title: {
        alignSelf: "center",
        marginTop: 30,
        fontSize: 32,
        fontFamily: "OpenSans-Regular",
        textAlign: "center",
        color: colors.black
    },
    text: {
        alignSelf: "center",
        marginTop: 14,
        fontSize: 14,
        fontFamily: "OpenSans-Regular",
        textAlign: "center",
        color: colors.grey,
        paddingHorizontal: 20
    },
    button: {
        position: "absolute",
        width: "100%",
        bottom: 10
    }
})