import React from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Button, Touchable} from 'react-native';
import { Value } from 'react-native-reanimated';
import db from '../config'
import firebase from 'firebase'

export default class WriteStory extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'hello',
            author: 'hi',
            story: 'bye'
        }
    }   

    submitText = ()=> {
        var transactionMessage = 'Your Story Has Been Submitted';
        ToastAndroid.show(transactionMessage, ToastAndroid.SHORT);
        db.collection('stories').add({
            title: this.state.title,
            author: this.state.author,
            story: this.state.story
        })
    }

    render(){
        return(
            <KeyAvoidingView style={styles.container}>
                <Text style={styles.heads}>Write A Story</Text>
                <View>
                    <TextInput
                    style={styles.titles}
                    onChangeText={()=> {this.setState({title: Value})}}
                    placeholder="Story Title"
                    />
                </View>
                <View>
                    <TextInput
                    style={styles.titles}
                    onChangeText={()=> {this.setState({author: Value})}}
                    placeholder="Author"
                    />
                </View>
                <View>
                    <TextInput
                    style={styles.desc}
                    onChangeText={()=> {this.setState({story: Value})}}
                    placeholder="Write A Story"
                    />
                </View>
                <TouchableOpacity style={styles.buttons}><Text style={styles.texts}>Submit</Text></TouchableOpacity>
            </KeyAvoidingView>
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
    },
    titles: {
        marginTop: 30,
        borderWidth: 4,
        width: 600,
        height: 30,
        marginRight: 20
    },
    desc: {
        borderWidth: 4,
        marginTop: 20,
        width: 600,
        height: 300,
        marginRight: 20
    },
    buttons: {
        alignSelf: 'center',
        color: 'white',
        backgroundColor: 'pink',
        height: 40,
        width: 100,
        justifyContent: 'center',
        borderRadius: 30
    },
    texts:{
        fontSize: 20,
        textAlign: 'center',
    }
})