import React, { useState } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet, ScrollView } from 'react-native';

export default function DaftarPesertaScreen({ navigation }) {
  const [nama, setNama] = useState('');
  const [tarikhLahir, setTarikhLahir] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (!nama || !tarikhLahir) {
      Alert.alert("Ralat", "Sila isi nama dan tarikh lahir");
      return;
    }
    // Simulasi no keahlian
    const today = new Date();
    const dateCode = today.toISOString().slice(2, 10).replace(/-/g, '');
    const no_keahlian = `EKM-${dateCode}-${Math.floor(Math.random() * 900 + 100)}`;
    Alert.alert("Berjaya", `Peserta ${nama} berjaya didaftarkan!\nNo Keahlian: ${no_keahlian}`);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Peserta Baru</Text>
      <Text>Nama Penuh:</Text>
      <TextInput style={styles.input} value={nama} onChangeText={setNama} placeholder="Nama peserta" />
      <Text>Tarikh Lahir (YYYY-MM-DD):</Text>
      <TextInput style={styles.input} value={tarikhLahir} onChangeText={setTarikhLahir} placeholder="cth: 1990-01-01" />
      <Text>No Telefon:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="cth: 0123456789" keyboardType="phone-pad" />
      <View style={{ height: 16 }} />
      <Button title="Daftar" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#fafafa' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 18 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginBottom: 12 }
});