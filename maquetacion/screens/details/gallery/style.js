import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        height: 150,
        width:100,
        backgroundColor: '#fff',
        borderRadius:6,
        paddingHorizontal: 16,
        paddingVertical: 14,
        display: 'flex',
        flexDirection: 'row',
        maxWidth: 240
      
    },
    text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20, 
        textAlign: 'left',
        
    },  
    buttonCamera:{
        backgroundColor: '#fff', 
        padding: 7, 
        marginEnd: 10 ,
        justifyContent: 'flex-end',
            
    },
   

})

export default styles;