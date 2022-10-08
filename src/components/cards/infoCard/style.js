import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        marginVertical: 20
    },
    infoImage: {
        width: 350,
        height: 270,
        alignSelf: "center",
        marginTop: -20
    },
    infoView: {
        width: 175,
        marginLeft: 25
    },
    title: {
        fontFamily: "OpenSans-Bold",
        textAlign: "center",
        color: colors.black
    },
    text: {
        fontFamily: "OpenSans-Regular",
        textAlign: "center",
        fontSize: 12,
        color: colors.arsenic,
        marginTop: 2,
    }
})