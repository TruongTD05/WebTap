
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function TermsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Điều khoản sử dụng</Text>
      <Text style={styles.text}>
        Đây là các điều khoản sử dụng dịch vụ CloudNest. Người dùng cần tuân thủ đầy đủ để đảm bảo quyền lợi.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, color: '#444', lineHeight: 22 },
});