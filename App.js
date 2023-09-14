import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' translucent={false} />
      <Image
      
      style={styles.logo}
      />
      <TextInput
      placeholder='email'
      style={styles.input}
      />
       <TextInput
      placeholder='senha'
      style={styles.input}
      />

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    marginTop: '13%',
    marginBottom: '15%'
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'e0e0e0'
  },
  forgotContainer:{
    width: '90%',
    alignItems: 'flex-end'
  },
  forgotText: {
    color: '399fff'
  },
  loginButton: {
  marginTop: "5%",
  backgroundColor: '399fff',
  width: '90%',
  height: 42,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 17
  }
});
