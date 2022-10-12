import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },
    cardContainer: {
        backgroundColor: colors.white,
        elevation: 3,
        marginBottom: 10
    },
    image: {
        width: 80,
        height: 80,
        margin: 15
    },
    title: {
        marginTop: 20,
        width: 230,
        height: 53,
        color: colors.tabBarIconBackground
    },
    line: {
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 15
    },
    text: {
        color: colors.black,
        fontFamily: "OpenSans-Bold"
    },
    info: {
        color: colors.black
    },
    infoView: {
        marginHorizontal: 15,
        marginTop: 10
    },
    status: {
        marginVertical: 15,
        fontSize: 13,
        color: colors.lightGreen,
        fontFamily: "OpenSans-SemiBold"
    },
    date: {
        position: "absolute",
        top: 15,
        right: 3,
        fontSize: 13,
        fontFamily: "OpenSans-Regular"
    },
    icon: {
        width: 13,
        height: 13,
        marginTop: 18,
        marginRight: 3
    },
    brand: {
        color: colors.black,
        fontFamily: "OpenSans-Regular"
    },
    left: {
        position: "absolute",
        right: -5,
        top: 5
    },
    row: {
        flexDirection: "row"
    }
})