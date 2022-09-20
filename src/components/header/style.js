import colors from "assets/colors/colors";
import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        backgroundColor: colors.statusBarBackground,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    txtInput: {
        backgroundColor: colors.white,
        borderRadius: 30,
        marginVertical: 10,
        fontSize: 16,
        color: colors.black,
        width: windowWidth - 70,
        height: 40,
        paddingLeft: 64,
        paddingRight: 35
    },
    notificationsView:
    {
        backgroundColor: '#FFFFFF25',
        borderRadius: 100,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    imageView: {
        backgroundColor: "#f5f5f5",
        height: 40,
        width: 58,
        position: "absolute",
        left: 10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    search: {
        position: "absolute",
        right: 72,
        color: colors.grey,
    },
    image: {
        width: 38,
        height: 38,
        resizeMode: "center",
        marginLeft: 10
    }
});