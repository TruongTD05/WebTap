
import { View, Text, StyleSheet } from 'react-native';

export default function HostingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hosting</Text>
      <Text style={styles.text}>Thông tin các gói hosting sẽ được hiển thị ở đây.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, color: '#444' },
});