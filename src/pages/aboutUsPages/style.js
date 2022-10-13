import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1
    },
    headerView: {
        height: 170,
        width: "100%",
        alignItems: "center",
    },
    image: {
        width: 90,
        height: 90,
        resizeMode: "contain",
        marginTop: 10
    },
    headerViewText: {
        fontFamily: "OpenSans-Medium",
        marginBottom: 5,
        fontSize: 15
    },
    contentView: {
        backgroundColor: "white",
        marginHorizontal: 10,
    },
    contentViewTitle: {
        color: colors.black,
        paddingHorizontal: 10,
        marginTop: 15,
        fontFamily: "OpenSans-Medium",
        fontSize: 13,
        alignSelf: "center"
    },
    text: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 13,
        color: colors.black,
        fontFamily: "OpenSans-Medium"
    },
    infoText: {
        marginLeft: 10,
        fontSize: 13,
        color: colors.blue,
        fontFamily: "OpenSans-Medium"
    },
    buttonView: {
        marginVertical: 10,
        width: 405,
        alignSelf: "center"
    }
})