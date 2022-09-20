import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        width: 160,
        height: 285,
        marginRight: 6,
        borderRadius: 10,
        marginTop: 370,
        borderWidth: 1,
        borderColor: colors.grey,
        overflow: "hidden",
        backgroundColor: colors.white,
        marginLeft: 10
    },
    image: {
        width: "100%",
        height: 800,
    },
    cardImage: {
        width: 130,
        height: 140,
        resizeMode: "stretch",
        alignSelf: "center",
        marginTop: 20
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
        right: 8,
        top: 8
    },
    productsTitle: {
        margin: 5,
        color: colors.black,
        lineHeight: 20,
        marginLeft: 7,
        marginTop: 10
    },
    rateView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 4,
        marginTop: 5
    }, myStarStyle: {
        color: colors.star,
    },
    myEmptyStarStyle: {
        color: colors.lightGrey,
    }, count: {
        fontSize: 10,
        marginLeft: 3
    },
    price: {
        marginLeft: 6,
        color: colors.black,
        fontWeight: "bold",
        marginTop: 10
    },
    lottie: {
        width: 70,
        position: 'absolute',
        bottom: 8,
        right: -4,
        transform: [{ rotate: '270deg' }]
    },
    random: {
        position: 'absolute',
        bottom: 21,
        right: 10,
        color: colors.black
    }
})