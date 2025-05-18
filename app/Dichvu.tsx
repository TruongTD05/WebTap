import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const services = [
  {
    key: '1',
    img: 'https://img.icons8.com/clouds/100/server.png',
    title: 'Cloud VPS VN',
    price: 'Từ 80.000đ / tháng',
    desc: 'Hiệu năng cao, uptime 99.99%, đặt tại Việt Nam',
  },
  {
    key: '2',
    img: 'https://img.icons8.com/clouds/100/database.png',
    title: 'Cloud VPS US',
    price: 'Từ 100.000đ / tháng',
    desc: 'Máy chủ tại Mỹ, tốc độ truy cập toàn cầu, ổn định cao',
  },
  {
    key: '3',
    img: 'https://img.icons8.com/fluency/96/server.png',
    title: 'Máy chủ vật lý',
    price: 'Từ 1.500.000đ / tháng',
    desc: 'Toàn quyền quản lý, cấu hình theo yêu cầu, hiệu suất tối đa',
  },
  {
    key: '4',
    img: 'https://img.icons8.com/clouds/100/domain.png',
    title: 'Hosting SSD',
    price: 'Từ 25.000đ / tháng',
    desc: 'Ổ cứng SSD, bảo mật cao, băng thông không giới hạn',
  },
];

const reasons = [
  {
    key: '1',
    img: 'https://img.icons8.com/color/96/rocket--v1.png',
    title: 'Hiệu năng cao',
    desc: 'Trang bị CPU mạnh, SSD NVMe giúp xử lý nhanh chóng mọi yêu cầu.',
  },
  {
    key: '2',
    img: 'https://img.icons8.com/color/96/security-checked.png',
    title: 'Bảo mật hàng đầu',
    desc: 'Bảo vệ dữ liệu với hệ thống Firewall, backup định kỳ, chống DDoS.',
  },
  {
    key: '3',
    img: 'https://img.icons8.com/color/96/customer-support.png',
    title: 'Hỗ trợ 24/7',
    desc: 'Đội ngũ kỹ thuật sẵn sàng hỗ trợ nhanh chóng qua nhiều kênh.',
  },
  {
    key: '4',
    img: 'https://img.icons8.com/color/96/price-tag-euro.png',
    title: 'Giá hợp lý',
    desc: 'Các gói dịch vụ linh hoạt, phù hợp với mọi đối tượng khách hàng.',
  },
];

export default function VPSNetsScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.navbar}>
        <Text style={styles.logo}>🌐 VPSNets</Text>
        <View style={styles.navMenu}>
          {['Trang chủ', 'Dịch vụ', 'Hosting', 'Máy chủ vật lý'].map((item, idx) => (
            <TouchableOpacity key={idx} style={item === 'Dịch vụ' ? styles.navItemActive : styles.navItem}>
              <Text style={item === 'Dịch vụ' ? styles.navTextActive : styles.navText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Banner */}
      <ImageBackground
        source={{ uri: 'https://img.freepik.com/premium-vector/cloud-computing-banner-design-concept_1017-33595.jpg' }}
        style={styles.banner}
        resizeMode="cover"
      >
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>Dịch vụ tại VPSNets</Text>
          <Text style={styles.bannerDesc}>Đa dạng lựa chọn từ Cloud VPS, Hosting đến Máy chủ vật lý chuyên nghiệp</Text>
        </View>
      </ImageBackground>

      {/* Services */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Danh mục dịch vụ</Text>
        <View style={styles.serviceGrid}>
          {services.map((service) => (
            <View key={service.key} style={styles.serviceCard}>
              <Image source={{ uri: service.img }} style={styles.serviceImg} />
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.price}>{service.price}</Text>
              <Text style={styles.serviceDesc}>{service.desc}</Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Xem chi tiết</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* Why Us */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lý do chọn VPSNets?</Text>
        <View style={styles.whyGrid}>
          {reasons.map((reason) => (
            <View key={reason.key} style={styles.whyCard}>
              <Image source={{ uri: reason.img }} style={styles.whyImg} />
              <Text style={styles.whyTitle}>{reason.title}</Text>
              <Text style={styles.whyDesc}>{reason.desc}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004aad',
    paddingHorizontal: 10,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  logo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  navMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  navItem: {
    marginHorizontal: 6,
    paddingVertical: 4,
  },
  navItemActive: {
    marginHorizontal: 6,
    paddingVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#ffd700',
  },
  navText: {
    color: '#ccc',
    fontSize: 14,
  },
  navTextActive: {
    color: '#ffd700',
    fontSize: 14,
    fontWeight: 'bold',
  },

  banner: {
    height: 200,
    justifyContent: 'center',
  },
  bannerOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bannerDesc: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
  },

  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#004aad',
  },

  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  serviceImg: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#ff6f00',
    marginVertical: 4,
  },
  serviceDesc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#004aad',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },

  whyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  whyCard: {
    width: '48%',
    backgroundColor: '#e6f0ff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  whyImg: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  whyTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#004aad',
    marginBottom: 6,
  },
  whyDesc: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
