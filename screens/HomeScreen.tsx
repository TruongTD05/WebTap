import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Image source={require('../assets/images/banner.png')} style={styles.banner} />
      <Text style={styles.heading}>Chào mừng đến với CloudNest!</Text>
      <Text style={styles.description}>
        Giải pháp hạ tầng điện toán đám mây hàng đầu Việt Nam.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  logo: { width: 160, height: 40, alignSelf: 'center', margin: 20, resizeMode: 'contain' },
  banner: { width: '100%', height: 200, resizeMode: 'cover' },
  heading: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
  description: { fontSize: 16, textAlign: 'center', marginVertical: 10, color: '#555' },
});

