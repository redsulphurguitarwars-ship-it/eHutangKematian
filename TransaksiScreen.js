import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const transaksi = [
  { id: 1, peserta_id: 1, tarikh: "2024-03-01", jenis: "yuran", jumlah: 100.00 },
  { id: 2, peserta_id: 2, tarikh: "2024-04-01", jenis: "derma", jumlah: 50.00 }
];

export default function TransaksiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senarai Transaksi</Text>
      <FlatList
        data={transaksi}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Peserta ID: {item.peserta_id}</Text>
            <Text>Tarikh: {item.tarikh}</Text>
            <Text>Jenis: {item.jenis}</Text>
            <Text>Jumlah: RM{item.jumlah.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fafafa' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 8, marginBottom: 10, elevation: 2 }
});
