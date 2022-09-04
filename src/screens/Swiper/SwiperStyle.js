import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles= StyleSheet.create({
    container:{
        flex: 1
    },
    wrap:{
        width: WIDTH,
        height: HEIGHT * 0.25
    }
})

export default styles