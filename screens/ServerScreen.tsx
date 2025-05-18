
import { View, Text, StyleSheet } from 'react-native';

export default function ServerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Máy chủ vật lý</Text>
      <Text style={styles.text}>Danh sách máy chủ vật lý, thông số kỹ thuật sẽ hiển thị tại đây.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, color: '#444' },
});
