import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginHorizontal: 12,
        padding: 15,
        borderRadius: 10,
        marginTop: 15
    },
    containerTouch: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    image: {
        marginRight: 15,
        tintColor:colors.grey,
        width: 21,
        height: 21
    },
    icon: {
        position: "absolute", right: 10
    },
    title: {
        fontSize: 15,
        color: colors.black,
        fontFamily: "OpenSans-Regular"
    },
    switchs: {
        marginLeft: 198
    }
})