
import { View, Text, StyleSheet } from 'react-native';

export default function SolutionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải pháp</Text>
      <Text style={styles.text}>Tổng hợp các giải pháp công nghệ, bảo mật, tối ưu hệ thống...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, color: '#444' },
});