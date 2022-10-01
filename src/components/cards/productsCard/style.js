import colors from "assets/colors/colors";
import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: windowWidth,
        paddingBottom: 16,
    },
    title: {
        fontSize: 17,
        marginTop: 10,
        marginLeft: 14,
        alignSelf: 'flex-start',
        fontFamily: "OpenSans_SemiCondensed-SemiBold",
        color: colors.black,
    },
    allProducts: {

        alignSelf: 'flex-end',
        flexDirection: "row",
        position: "absolute",
        top: 10,
        right: 8,
    },
    text: {
        fontSize: 15,
        color: colors.statusBarBackground,
        marginRight: -4,
        fontFamily: "OpenSans_SemiCondensed-Medium",
    },
    cardContainer: {
        width: 160,
        height: 285,
        marginRight: 4,
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderTopColor: colors.white,
        marginLeft: 10
    },
    headerView: {
        width: "101%",
        backgroundColor: colors.statusBarBackground,
        height: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignSelf: "center"
    },
    headerViewText: {
        fontSize: 12,
        marginLeft: 5,
        color: colors.white,
        fontFamily:"OpenSans_SemiCondensed-Medium"
    },
    image: {
        width: 120,
        height: 120,
        alignSelf: "center",
        marginTop: 10,
        resizeMode: "center"
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
        right: 6,
        top: 28
    },
    productsTitle: {
        margin: 5,
        color: colors.black,
        lineHeight: 20,
        marginLeft: 7,
        fontFamily:"OpenSans_SemiCondensed-Regular",
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
        marginLeft: 4
    },
    lastPrice: {
        marginLeft: 6,
        marginTop: 4,
        textDecorationLine: "line-through"
    },
    sepet: {
        color: colors.darkGreen,
        fontSize: 10,
        marginLeft: 6,
        marginTop: 2,
        fontFamily:"OpenSans-Bold"
    },
    price: {
        marginLeft: 6,
        color: colors.black,
        fontWeight: "bold"
    },
    lottie: {
        width: 60,
        position: 'absolute',
        bottom: 3,
        right: 4,
        transform: [{ rotate: '270deg' }]
    },
    random: {
        position: 'absolute',
        bottom: 7,
        right: 11,
        color: colors.black
    }
});