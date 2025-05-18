import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🌐 VPSNets</Text>
        <Text style={styles.nav}>Trang chủ | Dịch vụ | Hosting | Giải pháp</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Cloud VPS Giá Rẻ - Hiệu Năng Cao</Text>
        <Text style={styles.bannerSubtitle}>Hạ tầng hiện đại, hỗ trợ 24/7, tốc độ tối ưu cho doanh nghiệp của bạn.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Khám phá ngay</Text>
        </TouchableOpacity>
      </View>

      {/* VPS Priority Section */}
      <Text style={styles.sectionTitle}>Dịch vụ VPS Ưu Tiên</Text>
      <View style={styles.cardRow}>
        <Card 
          title="VPS Pro"
          price="Từ 300.000đ / tháng"
          desc="Hiệu suất cao, uptime 99.99%"
          img="https://img.icons8.com/color/96/cloud-sync.png"
        />
        <Card 
          title="VPS Business"
          price="Từ 500.000đ / tháng"
          desc="IP riêng, bảo mật cao"
          img="https://img.icons8.com/?size=100&id=XrxIAvEuZTRG&format=png&color=000000"
        />
        <Card 
          title="VPS Enterprise"
          price="Từ 900.000đ / tháng"
          desc="Hạ tầng riêng, hỗ trợ SLA"
          img="https://img.icons8.com/color/96/cloud-storage.png"
        />
      </View>

      {/* Dịch vụ nổi bật */}
      <Text style={styles.sectionTitle}>Dịch vụ nổi bật</Text>
      <View style={styles.cardRow}>
        <Card 
          title="Cloud VPS VN"
          price="Từ 80.000đ / tháng"
          desc="Hiệu năng cao, uptime 99.99%"
          img="https://img.icons8.com/clouds/100/server.png"
        />
        <Card 
          title="Cloud VPS US"
          price="Từ 100.000đ / tháng"
          desc="Hạ tầng quốc tế, ổn định"
          img="https://img.icons8.com/clouds/100/database.png"
        />
        <Card 
          title="Máy chủ vật lý"
          price="Từ 1.500.000đ / tháng"
          desc="Toàn quyền quản lý"
          img="https://img.icons8.com/fluency/96/server.png"
        />
        <Card 
          title="Hosting SSD"
          price="Chỉ từ 25.000đ / tháng"
          desc="Băng thông không giới hạn"
          img="https://img.icons8.com/clouds/100/domain.png"
        />
      </View>
    </ScrollView>
  );
}

// Component cho thẻ dịch vụ
const Card = ({ title, price, desc, img }) => (
  <View style={styles.card}>
    <Image source={{ uri: img }} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardPrice}>{price}</Text>
    <Text style={styles.cardDesc}>{desc}</Text>
    <TouchableOpacity style={styles.smallButton}>
      <Text style={styles.smallButtonText}>Xem chi tiết</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fbff',
  },
  header: {
    backgroundColor: '#003366',
    padding: 16,
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nav: {
    color: '#cce6ff',
    marginTop: 4,
  },
  banner: {
    backgroundColor: '#cce6ff',
    padding: 20,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 10,
  },
  bannerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    color: '#003366',
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 20,
    color: '#003366',
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    width: '45%',
    margin: 8,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: 64,
    height: 64,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  cardPrice: {
    color: '#cc0000',
    fontWeight: 'bold',
    marginVertical: 4,
  },
  cardDesc: {
    textAlign: 'center',
    fontSize: 13,
    color: '#444',
  },
  smallButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#0066cc',
    borderRadius: 6,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});
