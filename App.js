import { SafeAreaView ,StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';

export default function App() {

  const img_url = 'https://avatars.githubusercontent.com/u/74997292?v=4';
  const URL_GITHUB = 'https://github.com/GuilhermeCostaDF';
  const URL_INSTAGRAM = 'https://www.instagram.com/chileninhow';
  const URL_LINKEDIN = 'https://www.linkedin.com/in/guilherme-costa-75535622/';

  const handlePressGoToGitHub = async () => {
    const res = await Linking.canOpenURL(URL_GITHUB);

    if(res) {
      await Linking.openURL(URL_GITHUB);
    }
  }

  const handlePressGoToInstagram = async () => {
    const res = await Linking.canOpenURL(URL_INSTAGRAM);

    if(res) {
      await Linking.openURL(URL_INSTAGRAM);
    }
  }

  const handlePressGoToLinkedin = async () => {
    const res = await Linking.canOpenURL(URL_LINKEDIN);

    if(res) {
      await Linking.openURL(URL_LINKEDIN);
    }
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={ styles.containerCabecalho}>
        <Image source = { {uri: img_url} } style = {styles.fotoPerfil} />
        <Text style={styles.nome}> Guilherme Costa</Text>
        <Text style={styles.funcao}> Front-end Developer @avanade</Text>
        <View style={styles.redesSociais} >
          <Pressable onPress={handlePressGoToGitHub} > 
            <Image source={require('./assets/github.png')}  style={styles.icons}  /> 
          </Pressable>

          <Pressable onPress={handlePressGoToInstagram} > 
            <Image source={require('./assets/instagram.png')} style={styles.icons} /> 
          </Pressable>

          <Pressable onPress={handlePressGoToLinkedin} > 
           <Image source={require('./assets/linkedin.png')} style={styles.icons}/> 
          </Pressable>
        </View>
      </View>

      <View style={styles.card}> 
        <View style={styles.cardHeader}>
          <Text>Exemplo de card</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardContentText}> React Native </Text>
          <Text style={styles.cardContentText}> React </Text>
        </View>
      </View>

      <View style={styles.card}> 
        <View style={styles.cardHeader}>
          <Text>Exemplo de card</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardContentText}> React Native </Text>
          <Text style={styles.cardContentText}> React </Text>
          <Text style={styles.cardContentText}> Node.js </Text>
          <Text style={styles.cardContentText}> Github</Text>
        </View>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  containerCabecalho: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fotoPerfil: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderColor: 'black',
    borderWidth: 5,
  },

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },

  funcao: {
    color:'black',
    fontSize: 16,
    marginBottom: 15,
  },

  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 5,
  },
 
  card:{
    alignSelf: 'center',
    marginTop: 20,
    width: '85%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    backgroundColor:'white',
  },

  cardContentText: {
    color: 'pink',
    padding: 10,
    textAlign: 'left'
  },

  icons: {
    width: 25,
    height: 25
  }

});
