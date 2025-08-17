import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const playlist = [
  { id: 1, nama_lagu: "Lagu Peringatan", file_url: "https://example.com/lagu.mp3", is_active: true }
];

export default function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senarai Lagu Playlist</Text>
      <FlatList
        data={playlist}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Nama Lagu: {item.nama_lagu}</Text>
            <Text>Fail: {item.file_url}</Text>
            <Text>Status: {item.is_active ? "Aktif" : "Tidak Aktif"}</Text>
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