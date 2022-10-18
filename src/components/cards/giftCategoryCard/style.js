import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 15,
        justifyContent: "center"
    },
    name: {
        marginVertical: 10,
        fontFamily: "OpenSans-Bold",
        fontSize: 19,
        color: colors.black,
        marginBottom: 20
    },
    cardContainer: {
        backgroundColor: colors.white,
        width: "47%",
        marginHorizontal: 5,
        borderRadius: 6,
        alignItems: "center",
        marginBottom: 15,
        paddingBottom: 15,
        elevation: 5
    },
    image: {
        width: 140,
        height: 140,
        marginBottom: 10
    },
    title: {
        marginVertical: 10,
        color: colors.tabBarIconBackground,
        fontSize: 15,
        fontFamily: "OpenSans-Regular"
    },
    touchableText: {
        backgroundColor: "#0fbc49"
        , paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 3,
        fontSize: 12,
        fontFamily: "OpenSans-Bold",
        color: colors.white
    }
})