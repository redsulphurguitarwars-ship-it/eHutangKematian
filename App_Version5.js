import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PesertaScreen from './screens/PesertaScreen';
import DaftarPesertaScreen from './screens/DaftarPesertaScreen';
import PertubuhanScreen from './screens/PertubuhanScreen';
import WarisScreen from './screens/WarisScreen';
import TransaksiScreen from './screens/TransaksiScreen';
import KematianScreen from './screens/KematianScreen';
import PlaylistScreen from './screens/PlaylistScreen';
import EmergencyLogScreen from './screens/EmergencyLogScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Utama">
        <Stack.Screen name="Utama" component={HomeScreen} />
        <Stack.Screen name="Peserta" component={PesertaScreen} />
        <Stack.Screen name="Daftar Peserta" component={DaftarPesertaScreen} />
        <Stack.Screen name="Pertubuhan" component={PertubuhanScreen} />
        <Stack.Screen name="Waris" component={WarisScreen} />
        <Stack.Screen name="Transaksi" component={TransaksiScreen} />
        <Stack.Screen name="Kematian" component={KematianScreen} />
        <Stack.Screen name="Playlist" component={PlaylistScreen} />
        <Stack.Screen name="Emergency Log" component={EmergencyLogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}