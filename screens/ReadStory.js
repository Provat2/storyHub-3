import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class ReadStory extends React.Component{
    render(){
        return(
            <View style={styles.container}>
               <Text style={styles.heads}>Read A Story</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1
    },
    heads: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: 'pink',
        width: 5000,
        height: 50
    }
})