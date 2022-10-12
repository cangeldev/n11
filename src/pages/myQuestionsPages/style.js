import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1
    },
    searchView: {
        backgroundColor: colors.white,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        elevation: 3,
        marginBottom: 15
    },
    image: {
        width: 18,
        height: 18,
        marginLeft: 10,
        tintColor: colors.tabBarIconBackground
    },
    txtInput: {
        fontSize: 15,
        paddingLeft: 10,
        height: 40,
        width: 320,
    }
})