import { Text, View, StyleSheet } from "react-native";

export function Usuarios()
{
    return(
        <View style = {styles.container}>
            <Text style = {styles.textP}> USUARIOS </Text>

            <View style = {styles.vw}>
                <Text style = {styles.texts}>Nome:</Text>
                <Text style = {styles.texts}>Idade</Text>
                <Text style = {styles.texts}>Sexo</Text>
                <Text style = {styles.texts}>Recebe Notificação</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        margin: '10px'
    },

    textP: {
        fontSize: '100px',
        fontWeight: 'bold'
    },

    vw: {
        border: 'solid 2px grey',
        width: '600px',
        height: '150px',
        borderRadius: '10px',
    },

    texts: {
        margin: '8px'
    }
})