import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainCard:{
        flex: 1,
        justifyContent:"space-between"
        
    },
    imgCard: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 50,
        paddingBottom: 30
    },
    pictureLogo: {
        width: 210,
        // height: 100
    },
    inpuCard: {
        padding: 40
    },
    textSecondary: {
        color: "#CFCFCF",
        marginTop: 20,
        marginBottom: 10
    },
    dropdownNumber: {
        backgroundColor: "rgba(255,255,255,0)",
        width: "50%",
        height: 50,
        borderWidth: 0
    },
    DropdownCard: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        paddingStart: 50,
        paddingEnd: 50,
        backgroundColor: "#8E8E931F",
        borderRadius: 22
    },
    input: {
        backgroundColor: "rgba(255,255,255,0)",
        width: 100,
        height: 50
    },
    centeredText: {
        textAlign: "center",
        padding: 10,
        paddingTop: 20,
        paddingBottom:30
    },
    aText: {
        textAlign: "center",
        color: "#0550EA",
    },
    mainButton:{
        backgroundColor:"#0550EA",
        padding: 20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginStart:60,
        marginEnd:60,
        borderRadius:10,
        marginBottom:20
    },
    mainButtonText:{
        color:"white",
        fontSize:13
    }
})

export default styles