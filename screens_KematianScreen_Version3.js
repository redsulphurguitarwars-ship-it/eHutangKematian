import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const kematian = [
  { id: 1, peserta_id: 1, tarikh: "2024-07-10", sebab: "Sakit tua" }
];

export default function KematianScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rekod Kematian</Text>
      <FlatList
        data={kematian}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Peserta ID: {item.peserta_id}</Text>
            <Text>Tarikh: {item.tarikh}</Text>
            <Text>Sebab: {item.sebab}</Text>
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