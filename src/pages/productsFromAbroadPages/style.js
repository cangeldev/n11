import colors from "assets/colors/colors";
import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    headerView: {
        backgroundColor: colors.statusBarBackground,
        height: 60,
        paddingLeft: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    headerBackIcon: {
        width: 18,
        height: 18,
        tintColor: colors.white
    },
    txtInput: {
        backgroundColor: colors.white,
        borderRadius: 30,
        fontSize: 14,
        color: colors.black,
        width: windowWidth - 60,
        height: 35,
        paddingLeft: 84,
        paddingRight: 35,
        fontFamily: "OpenSans_SemiCondensed-Medium",
        paddingBottom: 7,
        marginLeft: 15
    },
    imageView: {
        backgroundColor: "#f5f5f5",
        height: 35,
        width: 54,
        position: "absolute",
        left: 45,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    searchIcon: {
        position: "absolute",
        left: 105,
        color: colors.grey,
        height: 20
    },
    image: {
        width: 35,
        height: 35,
        resizeMode: "center",
        marginLeft: 10
    }
})