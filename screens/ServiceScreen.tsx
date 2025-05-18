import { View, Text, StyleSheet } from 'react-native';

export default function ServiceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dịch vụ</Text>
      <Text style={styles.description}>Chúng tôi cung cấp các dịch vụ như Cloud Server, CDN, Domain, SSL...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#555' },
});

