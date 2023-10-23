import { Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native-web";

export  function Login(props)
{
    return(
        <View style = {styles.container}>
            <Text style = {styles.textP}> LOGIN </Text>

            <Text style = {styles.textsA}>Email:</Text>
            <TextInput style = {styles.inputs} />

            <Text style = {styles.textsB}>Senha:</Text>
            <TextInput style = {styles.inputs} />

            <TouchableOpacity style = { styles.btn} onPress = {() => props.navigation.navigate("Usuarios")}>
                <Text style={{ alignItems: 'center', marginTop:'15px' }}>Login</Text>
            </TouchableOpacity>

            

            <Text style = {{margin: '10px'}}>Cadastrar</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: '10px',
    },

    textP: {
        fontWeight: 'bold',
        fontSize: '100px'
    },

    textsA: {
        fontWeight: 'bold',
        margin: '10px',
        marginTop: '100px',
        right: '200px'
    },

    textsB: {
        fontWeight: 'bold',
        margin: '10px',
        right: '200px'

    },

    inputs: {
        backgroundColor: 'white',
        width: '440px',
        height: '30px'
        
    },

    btn: {
        backgroundColor: 'white',
        width: '300px',
        height: '50px',
        alignItems: 'center',
        borderRadius: '10px',
        marginTop: '100px'
    }
    
});