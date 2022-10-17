import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerView: {
        marginBottom: 30
    },
    headerTitle: {
        fontSize: 30,
        fontFamily: "OpenSans-SemiBold",
        color: colors.black,
        marginVertical: 20,
        alignSelf: "center"
    },
    headerText: {
        fontFamily: "OpenSans-Medium",
        width: 320,
        alignSelf: "center",
        fontSize: 15,
        textAlign: "center"
    },
    contentView: {
        backgroundColor: "red",
        marginHorizontal: 10,
        marginTop: 10
    },
    footerView: {
        marginVertical: 20,
        marginHorizontal: 12,
    },
    footerTitle: {
        fontFamily: "OpenSans-Medium",
        color: colors.black
    },
    footerText: {
        fontFamily: "OpenSans-Regular",
        color: colors.tabBarIconBackground,
        marginRight: 2
    }
})