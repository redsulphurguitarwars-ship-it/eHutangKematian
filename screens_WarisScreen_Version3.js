import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const waris = [
  { id: 1, peserta_id: 1, nama: "Fatimah Binti Ali", hubungan: "Ibu", no_tel: "01122334455" },
  { id: 2, peserta_id: 2, nama: "Abu Bin Ali", hubungan: "Bapa", no_tel: "0123344556" }
];

export default function WarisScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senarai Waris</Text>
      <FlatList
        data={waris}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nama}</Text>
            <Text>Hubungan: {item.hubungan}</Text>
            <Text>No Tel: {item.no_tel}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fafafa' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 8, marginBottom: 10, elevation: 2 },
  name: { fontWeight: 'bold', fontSize: 16 }
});