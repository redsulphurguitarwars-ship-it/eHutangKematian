import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

// Dummy data peserta
const initialPeserta = [
  {
    id: 1,
    nama: "Ahmad Bin Ali",
    tarikh_lahir: "1985-01-01",
    no_keahlian: "EKM-240101-1",
    status: "aktif",
    phone: "0123456789",
    tarikh_keahlian: "2024-01-01"
  },
  {
    id: 2,
    nama: "Siti Binti Abu",
    tarikh_lahir: "1990-05-13",
    no_keahlian: "EKM-240513-2",
    status: "aktif",
    phone: "0198765432",
    tarikh_keahlian: "2024-01-05"
  }
];

export default function PesertaScreen({ navigation }) {
  const [peserta, setPeserta] = useState(initialPeserta);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senarai Peserta</Text>
      <FlatList
        data={peserta}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nama}</Text>
            <Text>No Keahlian: {item.no_keahlian}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Tarikh Lahir: {item.tarikh_lahir}</Text>
            <Text>Tarikh Keahlian: {item.tarikh_keahlian}</Text>
            <Text>No Telefon: {item.phone}</Text>
          </View>
        )}
      />
      <Button title="Daftar Peserta Baru" onPress={() => navigation.navigate('Daftar Peserta')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fafafa' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 12, elevation: 2 },
  name: { fontSize: 18, fontWeight: 'bold' }
});