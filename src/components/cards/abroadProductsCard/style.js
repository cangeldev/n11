import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        padding: 5,
        marginTop: 40,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    cardContainer: {
        backgroundColor: colors.white,
        width: "49%",
        borderRadius: 10,
        padding: 5,
        marginVertical: 5
    },
    abroadText: {
        backgroundColor: colors.blue,
        color: colors.white,
        width: 55,
        fontFamily: "OpenSans-SemiBold",
        textAlign: "center",
        fontSize: 8,
        borderRadius: 2,
        lineHeight: 10,
        height: 25,
        margin: 5,
        paddingTop: 3
    },
    favoriContainer: {
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: colors.white,
        elevation: 5,
        position: "absolute",
        right: 12,
        top: 10
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "center"
    },
    text: {
        color: colors.lightGreen,
        fontFamily: "OpenSans-Bold",
        fontSize: 11,
        alignSelf: "center",
        marginTop: 10,
    },
    title: {
        color: colors.tabBarIconBackground,
        marginTop: 10,
        fontSize: 13
    },
    myStarStyle: {
        color: colors.star,
    },
    myEmptyStarStyle: {
        color: colors.lightGrey,
    },
    count: {
        fontSize: 10,
        marginLeft: 3
    },
    rateView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8
    },
    price: {
        color: colors.black,
        marginTop: 13,
        fontFamily: "OpenSans-Bold",
        fontSize: 15
    },
    iconView: {
        padding: 5,
        position: "absolute",
        bottom: 10,
        right: 10,
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: colors.lightGreen,
    },
    icon: {
        width: 18,
        height: 18,
        tintColor: colors.lightGreen,
    }
})