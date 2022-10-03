import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    header: {
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        height: 60,
        elevation: 5,
        paddingRight: 25
    },
    headerTitle: {
        color: colors.black,
        marginLeft: 5,
        fontFamily: "OpenSans-SemiBold",
        fontSize: 20
    },
})