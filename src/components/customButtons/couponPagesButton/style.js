import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        marginLeft: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        alignSelf: 'flex-start',
        paddingHorizontal: 14,
        paddingVertical: 15
    },
    text: {
        color: colors.white,
        fontFamily: "OpenSans-SemiBold",
        fontSize: 13,
    },
})