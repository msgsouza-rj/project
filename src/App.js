import React from "react";
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking
} from 'react-native';

const colorGithub ='#010409';
const darkgray = '#808080';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/88602895?s=400&u=a385fa0a872211903ef710e88f03b66620a5de98&v=4';
const urlToMyGithub = 'https://github.com/msgsouza-rj';

const App = ()=>{
    const handlePressGoToGithub = async() => {
       const res = await Linking.canOpenURL(urlToMyGithub);
       if (res){
        await Linking.openURL(urlToMyGithub);
       }
    }

    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle = 'ligth-content' />
    <View style = {style.content}>
       <Image accessibilityLabel="Mauro em frente aos coqueiros"
        style={style.avatar}
        source={{uri:imageProfileGitHub}}
        />
        <Text 
        accessibilityLabel="Nome Mauro Souza" 
        style = {[style.defaultText, style.name]} >
        Mauro Souza
        </Text>
        <Text 
        accessibilityLabel="Nickname m s g s o u z a - r j" 
        style = {[style.defaultText, style.nickName]} >
        msgsouza-rj
        </Text>
        <Text 
        accessibilityLabel="Descição: Estudande de programação, Java, HTML, CSS, Javascript e QA" 
        style = {[style.defaultText, style.description]} >
        Estudande de programação  |  Java  |  HTML   
        
        </Text>
        <Text 
        accessibilityLabel="Descição: Estudande de programação, Java, HTML, CSS, Javascript e QA" 
        style = {[style.defaultText, style.description]} >
        CSS  |  Javascript  |  QA
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
            <View style= {style.button}>
              <Text style = {[style.defaultText, style.defaultButton]}>
                 Open in Github
             </Text>
         </View>
        </Pressable>
    </View>
    </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGithub,
        flex:1, // expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height:200,
        width:200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: 'white',
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickName:{
        fontSize: 18,
        color: darkgray,
    },
    description:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    button:{
        
        marginTop: 20,
        backgroundColor: darkgray,
        borderRadius: 10,
        padding: 20,
    },
    defaultButton:{
        fontWeight: 'bold',
        fontSize: 16,
    },

    
});