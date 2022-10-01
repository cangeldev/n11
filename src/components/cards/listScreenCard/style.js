import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        margin: 10,
        marginBottom: 5,
        borderRadius: 3,
        paddingVertical: 10
    },
    titleView: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontFamily: "OpenSans-SemiBold",
        fontSize: 18,
        color: colors.black
    },
    titleText: {
        marginLeft: 5,
        color: colors.grey,
        fontFamily: "OpenSans-Regular",
    },
    titleContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    titleContentText: {
        color: colors.red,
        marginLeft: 5,
        fontWeight: "300",
        fontSize: 12,
        fontFamily: "OpenSans-Light",
    },
    contentView: {
        backgroundColor: "#f8f8f8",
        height: 174,
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: "center"
    },
    contentIcon: {
        marginTop: 15,
        marginBottom: 6
    }
})