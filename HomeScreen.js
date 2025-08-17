import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>eKematian</Text>
      <Text style={styles.subtitle}>Sistem Pengurusan Kematian</Text>
      <View style={styles.menu}>
        <Button title="Peserta" onPress={() => navigation.navigate('Peserta')} />
        <Button title="Daftar Peserta" onPress={() => navigation.navigate('Daftar Peserta')} />
        <Button title="Pertubuhan" onPress={() => navigation.navigate('Pertubuhan')} />
        <Button title="Waris" onPress={() => navigation.navigate('Waris')} />
        <Button title="Transaksi" onPress={() => navigation.navigate('Transaksi')} />
        <Button title="Kematian" onPress={() => navigation.navigate('Kematian')} />
        <Button title="Playlist" onPress={() => navigation.navigate('Playlist')} />
        <Button title="Emergency Log" onPress={() => navigation.navigate('Emergency Log')} />
      </View>
      <Text style={styles.info}>
        * Aplikasi ini menggunakan data dummy/simulasi. Untuk kegunaan sebenar, sambungkan ke backend API.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#fafafa' },
  title: { fontSize: 32, fontWeight: 'bold', marginVertical: 12, color: '#444' },
  subtitle: { fontSize: 18, marginBottom: 20, color: '#666' },
  menu: { width: '100%', gap: 10, marginBottom: 30 },
  info: { fontSize: 13, color: '#888', marginTop: 30, textAlign: 'center' }
});
