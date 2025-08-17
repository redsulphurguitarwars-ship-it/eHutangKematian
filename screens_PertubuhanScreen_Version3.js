import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const pertubuhan = {
  id: 1,
  nama: "Pertubuhan Contoh",
  visi: "Memperkasakan komuniti melalui kebajikan.",
  misi: "Membantu ahli dan waris dalam urusan kematian.",
  background_url: "",
  background_music_url: "",
  syarat_kelayakan: "Warganegara Malaysia",
  syarat_keahlian: "Berumur 18 tahun ke atas",
};

export default function PertubuhanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info Pertubuhan</Text>
      <Text style={styles.label}>Nama:</Text>
      <Text style={styles.value}>{pertubuhan.nama}</Text>
      <Text style={styles.label}>Visi:</Text>
      <Text style={styles.value}>{pertubuhan.visi}</Text>
      <Text style={styles.label}>Misi:</Text>
      <Text style={styles.value}>{pertubuhan.misi}</Text>
      <Text style={styles.label}>Syarat Kelayakan:</Text>
      <Text style={styles.value}>{pertubuhan.syarat_kelayakan}</Text>
      <Text style={styles.label}>Syarat Keahlian:</Text>
      <Text style={styles.value}>{pertubuhan.syarat_keahlian}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fafafa' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  label: { fontWeight: 'bold', marginTop: 12 },
  value: { marginLeft: 12 }
});