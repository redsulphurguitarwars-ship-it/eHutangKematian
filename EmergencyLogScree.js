import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const emergencyLog = [
  { id: 1, peserta_id: 1, action_by: 1, action_type: "emergency_called", action_time: "2024-08-16 09:12:00" }
];

export default function EmergencyLogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Log</Text>
      <FlatList
        data={emergencyLog}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Peserta ID: {item.peserta_id}</Text>
            <Text>Action By (Admin ID): {item.action_by}</Text>
            <Text>Action Type: {item.action_type}</Text>
            <Text>Action Time: {item.action_time}</Text>
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
