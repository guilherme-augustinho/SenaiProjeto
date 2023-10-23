import { View, Image, StyleSheet, Text, TextInput, Switch,  TouchableOpacity } from "react-native";
import { useState } from 'react';

export function Cadastro(props)
{
    const [inicio, setInicio] = useState(false)

    return(
        <View style = {styles.container}>
            <Image
                style = {styles.image}
                source = {require('./image/img.png')}
            />

            <Text style = {styles.texts}>Nome:</Text>
            <TextInput style = {styles.inputs}/>

            <Text style = {styles.texts}>Idade:</Text>
            <TextInput style = {styles.inputs}/>

            <Text style = {styles.texts}>Sexo:</Text>
            <TextInput style = {styles.inputs}/>

            <Text style = {styles.texts}>Email:</Text>
            <TextInput style = {styles.inputs}/>

            <Text style = {styles.texts}>Senha:</Text>
            <TextInput style = {styles.inputs}/>

            <Text style = {styles.Confirm}>Confirmar senha:</Text>
            <TextInput style = {styles.inputs}/>

            <Text style = {styles.notfy}>Deseja receber notificações?</Text>

            <Switch
                style = {styles.sw}
                onValueChange = {() => setInicio(!inicio)}
                value = {inicio}
                trackColor = {{false: "#767577", true: "#81b0ff"}}
                thumbColor = {"black"}
                activeThumpColor = {"#f4f3f4"}
            />

            <TouchableOpacity style = { styles.btn} onPress = {() => props.navigation.navigate("Login")}>
                <Text style={{ alignItems: 'center', marginTop:'15px' }}>Cadastrar</Text>
                
            </TouchableOpacity>

            

            <Text style = {{margin: '10px'}}>Cancelar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: '10px'
    },

    image: {
        height: '200px',
        width: '200px'
    },

    texts: {
        margin: '15px',
        right: '230px',
        fontWeight: 'bold'
    },

    inputs: {
        backgroundColor: 'white',
        width: '500px',
        height: '30px'
    },

    Confirm: {
        margin: '15px',
        right: '195px',
        fontWeight: 'bold'
    },

    notfy: {
        margin: '15px',
        right: '160px',
        fontWeight: 'bold'
    },

    sw: {
        right: '230px'
    },

    btn: {
        backgroundColor: 'white',
        width: '300px',
        height: '50px',
        alignItems: 'center',
        borderRadius: '10px',
        marginTop: '20px'
    }
    
});