import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    image: {
        width: "100%",
        height: 136,
        resizeMode: "cover"
    },
    text: {
        color: colors.black,
        textAlign: "center",
        fontSize: 17,
        fontFamily: "OpenSans-Bold",
        marginVertical: 15
    },
    textInfo: {
        color: colors.black,
        textAlign: "center",
        marginTop: -10,
        fontFamily: "OpenSans-Regular",
        marginBottom: 20
    },
    line: {
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        width: "90%",
        alignSelf: "center",
    },
})