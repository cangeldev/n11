import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    image: {
        width: 160,
        height: 160,
        alignSelf: "center",
        marginTop: 150
    },
    title: {
        alignSelf: "center",
        marginTop: 20,
        fontSize: 20,
        fontFamily: "OpenSans-Bold",
        textAlign: "center",
        color: colors.black
    },
    text: {
        alignSelf: "center",
        marginTop: 10,
        fontSize: 14,
        fontFamily: "OpenSans-Regular",
        textAlign: "center",
        color: colors.tabBarIconBackground,
        paddingHorizontal: 20
    },
    button: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20
    }
})