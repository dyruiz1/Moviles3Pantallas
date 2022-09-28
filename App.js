import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//generar una constante que permita definir las pantallas donde se navegara

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home"component={HomeScreen}options ={{title:'Inicio'}}/>
        <Stack.Screen name = "profile"component = {ProfileScreen}options = {{title:'perfil de usuario'}}/>
        <Stack.Screen name = "Dashboard"component = {DashBoardScreen}options = {{title:'tablero principal'}}/>
      </Stack.Navigator>        
   </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) =>{
  return(
    <View style = {styles.container}>

      <TouchableOpacity style={{backgroundColor:"green", padding:10, borderRadius:10}}
        onPress={()=>{navigation.navigate('profile', {name:'pepe perez', usarname:"pperez",rol:2})}}>
        <Text style={{color:"white", fontSize:20}}> Ir a perfil de usuario</Text>
      </TouchableOpacity>

    </View>
  );
}

const ProfileScreen = ({navigation, route})=>{
  return(
    <View style={styles.container}>
      <Text>Este es el usuario {route.params.usarname}, con nombre {route.params.name}</Text>
      <TouchableOpacity style={{backgroundColor:"red", padding:10, borderRadius:10, marginTop:10}}
          onPress={() => {route.params.rol == 1 ? navigation.navigate('Dashboard', {name:'pepe pereaz', usarname:"pperez"})  : navigation.navigate('Home')}}>
        <Text style={{color:"white", fontSize:20}}> Ingresar al Panel de control</Text>
      </TouchableOpacity>
    </View>
  );
}

const DashBoardScreen = ({navigation, route})=>{
  return(
    <View style={styles.container}>
      <Text>Estas como usuario adiministrador del sistema con nombre {route.params.name}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});