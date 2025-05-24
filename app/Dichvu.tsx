import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ImageBackground, // Import ImageBackground
} from 'react-native';

const { width } = Dimensions.get('window');

const DichvuScreen = () => {
  // URL hoặc require cho hình ảnh banner
  const bannerImageUrl = "https://lanit.com.vn/wp-content/uploads/2023/07/vps-cao-cap-banner-scaled.jpg";
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header (tương tự như <nav> trong HTML) */}
        <View style={styles.header}>
          <Text style={styles.logo}>
            🌐 VPS<Text style={styles.logoSpan}>Nets</Text>
          </Text>
          <View style={styles.nav}>
            <TouchableOpacity onPress={() => console.log('Trang chủ')}>
              <Text style={styles.navLink}>Trang chủ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Dịch vụ')}>
              <Text style={styles.navLink}>Dịch vụ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Hosting')}>
              <Text style={styles.navLink}>Hosting</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Máy chủ vật lý')}>
              <Text style={styles.navLink}>Máy chủ vật lý</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Giải pháp')}>
              <Text style={styles.navLink}>Giải pháp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Thông tin')}>
              <Text style={styles.navLink}>Thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Điều khoản')}>
              <Text style={styles.navLink}>Điều khoản</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Trang quản lý')}>
              <Text style={styles.navLink}>Trang quản lý</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hero Section với Banner (tương tự như <section id="services-intro">) */}
        <ImageBackground
          source={{ uri: bannerImageUrl }} // Hoặc source={require('./assets/banner.jpg')}
          style={styles.heroSection}
          resizeMode="cover"
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Các Dịch Vụ Của Chúng Tôi</Text>
            <Text style={styles.heroSubtitle}>
              VPSNets cung cấp đa dạng các dịch vụ điện toán đám mây và máy chủ để đáp ứng mọi
              nhu cầu của bạn. Khám phá các giải pháp mạnh mẽ và linh hoạt của chúng tôi.
            </Text>
            <TouchableOpacity style={styles.ctaButton} onPress={() => { }}>
              <Text style={styles.ctaButtonText}>Tìm Hiểu Thêm</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Service Details Section (tương tự như <section id="service-details">) */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Giải Pháp Toàn Diện Cho Doanh Nghiệp Của Bạn</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureItem}>
              <Image
                source={{ uri: 'https://img.icons8.com/?size=96&id=12906&format=png' }}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.featureItemTitle}>Dịch Vụ VPS</Text>
              <Text style={styles.featureItemDescription}>
                Máy chủ riêng ảo (VPS) hiệu năng cao với ổ cứng SSD NVMe, đảm bảo tốc độ và độ
                ổn định vượt trội cho website và ứng dụng của bạn.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2344/2344532.png' }}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.featureItemTitle}>Shared Hosting</Text>
              <Text style={styles.featureItemDescription}>
                Giải pháp hosting giá cả phải chăng cho các website nhỏ và cá nhân, dễ dàng quản lý
                và triển khai nhanh chóng.
              </Text>
            </View>
            {/* Thêm các feature item khác tương tự */}
            <View style={styles.featureItem}>
              <Image
                source={{ uri: 'https://img.icons8.com/ios/100/server.png' }}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.featureItemTitle}>Máy Chủ Vật Lý</Text>
              <Text style={styles.featureItemDescription}>
                Tùy chỉnh cấu hình máy chủ vật lý theo yêu cầu, mang lại hiệu suất tối đa và quyền
                kiểm soát hoàn toàn cho các dự án lớn.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={{ uri: 'https://img.icons8.com/ios/100/cloud.png' }}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.featureItemTitle}>Giải Pháp Cloud</Text>
              <Text style={styles.featureItemDescription}>
                Mở rộng hạ tầng của bạn với các giải pháp điện toán đám mây linh hoạt, đáp ứng nhu
                cầu tăng trưởng không giới hạn.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={{ uri: 'https://img.icons8.com/ios/100/network.png' }}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.featureItemTitle}>Dịch Vụ Mạng & Bảo Mật</Text>
              <Text style={styles.featureItemDescription}>
                Bảo vệ dữ liệu và hệ thống của bạn với các giải pháp bảo mật mạng toàn diện, bao
                gồm tường lửa và chống DDoS.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Image
                source={{ uri: 'https://img.icons8.com/ios/100/database.png' }}
                style={styles.featureIcon}
                resizeMode="contain"
              />
              <Text style={styles.featureItemTitle}>Quản Lý Cơ Sở Dữ Liệu</Text>
              <Text style={styles.featureItemDescription}>
                Tối ưu hóa và quản lý cơ sở dữ liệu của bạn, đảm bảo hiệu suất cao và an toàn dữ
                liệu tuyệt đối.
              </Text>
            </View>
          </View>
        </View>

        {/* Why Choose Us Section (tương tự như <section id="why-choose-us">) */}
        <View style={styles.pricingSection}>
          <Text style={styles.sectionTitle}>Tại Sao Nên Chọn Dịch Vụ Của VPSNets?</Text>
          <View style={styles.pricingGrid}>
            <View style={styles.pricingPlan}>
              <Text style={styles.pricingPlanTitle}>Hiệu Suất Vượt Trội</Text>
              <View style={styles.checklistItem}>
                <Image
                  source={{ uri: 'https://img.icons8.com/ios-filled/20/checkmark--v1.png' }}
                  style={styles.checkmarkIcon}
                />
                <Text>Ổ cứng SSD NVMe tốc độ cao</Text>
              </View>
              <View style={styles.checklistItem}>
                <Image
                  source={{ uri: 'https://img.icons8.com/ios-filled/20/checkmark--v1.png' }}
                  style={styles.checkmarkIcon}
                />
                <Text>Uptime 99.9% đảm bảo liên tục</Text>
              </View>
              <View style={styles.checklistItem}>
                <Image
                  source={{ uri: 'https://img.icons8.com/ios-filled/20/checkmark--v1.png' }}
                  style={styles.checkmarkIcon}
                />
                <Text>Hạ tầng mạnh mẽ, ổn định</Text>
              </View>
            </View>

            <View style={[styles.pricingPlan, styles.popularPlan]}>
              <View style={styles.popularBadge}>
                <Text style={styles.popularBadgeText}>Ưu Điểm Nổi Bật</Text>
              </View>
              <Text style={styles.pricingPlanTitle}>Hỗ Trợ Chuyên Nghiệp</Text>
              <View style={styles.checklistItem}>
                <Image
                  source={{ uri: 'https://img.icons8.com/ios-filled/20/checkmark--v1.png' }}
                  style={styles.checkmarkIcon}
                />
                <Text>Đội ngũ kỹ thuật 24/7</Text>
              </View>
              <View style={styles.checklistItem}>
                <Image
                  source={{ uri: 'https://img.icons8.com/ios-filled/20/checkmark--v1.png' }}
                  style={styles.checkmarkIcon}
                />
                <Text>Hỗ trợ qua nhiều kênh</Text>
              </View>
              <View style={styles.checklistItem}>
                <Image
                  source={{ uri: 'https://img.icons8.com/ios-filled/20/checkmark--v1.png' }}
                  style={styles.checkmarkIcon}
                />
                <Text>Tư vấn giải pháp chuyên sâu</Text>
              </View>
            </View>

            <View style={styles.pricingPlan}>
              <Text style={styles.pricingPlanTitle}>Linh Hoạt & Bảo Mật</Text>
              <View style={styles.checklistItem}>
                <Image
                  source={{ uri: 'https://img.icons8.com/ios-filled/20/checkmark--v1.png' }}
                  style={styles.checkmarkIcon}
                />
                <Text>Dễ dàng nâng cấp tài nguyên</Text>
              </View>
              <View style={styles.checklistItem}>
                <Image
                  source={{ uri: 'https://img.icons8.com/ios-filled/20/checkmark--v1.png' }}
                  style={styles.checkmarkIcon}
                />
                <Text>Đa dạng hệ điều hành</Text>
              </View>
              <View style={styles.checklistItem}>
                <Image
                  source={{ uri: 'https://img.icons8.com/ios-filled/20/checkmark--v1.png' }}
                  style={styles.checkmarkIcon}
                />
                <Text>Bảo mật nhiều lớp, an toàn dữ liệu</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Contact Section (tương tự như <section id="contact-services">) */}
        <View style={styles.ctaFinalSection}>
          <Text style={styles.ctaFinalTitle}>Bạn Đã Sẵn Sàng Nâng Cấp Hạ Tầng?</Text>
          <Text style={styles.ctaFinalSubtitle}>
            Liên hệ ngay với chúng tôi để nhận được sự tư vấn chuyên nghiệp và lựa chọn dịch vụ
            phù hợp nhất cho doanh nghiệp của bạn.
          </Text>
          <TouchableOpacity style={styles.ctaButton} onPress={() => console.log('Liên hệ')}>
            <Text style={styles.ctaButtonText}>Liên Hệ Chúng Tôi</Text>
          </TouchableOpacity>
        </View>

        {/* Footer (tương tự như <footer>) */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>&copy; 2024 VPSNets. Đã đăng ký Bản quyền.</Text>
          <View style={styles.footerLinks}>
            <TouchableOpacity onPress={() => console.log('Điều khoản Dịch vụ')}>
              <Text style={styles.footerLink}>Điều khoản Dịch vụ</Text>
            </TouchableOpacity>
            <Text style={styles.footerSeparator}> | </Text>
            <TouchableOpacity onPress={() => console.log('Chính sách Bảo mật')}>
              <Text style={styles.footerLink}>Chính sách Bảo mật</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Stylesheet (tương tự như Dichvu.css)
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  logoSpan: {
    color: '#28a745',
  },
  nav: {
    flexDirection: 'row',
  },
  navLink: {
    marginLeft: 15,
    color: '#333',
  },
  heroSection: {
    width: '100%',
    height: 250, // Điều chỉnh chiều cao banner
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    width: '48%',
    marginBottom: 30,
    alignItems: 'center',
  },
  featureIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  featureItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  featureItemDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  pricingSection: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  pricingGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  pricingPlan: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '30%',
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  popularPlan: {
    borderColor: '#28a745',
  },
  popularBadge: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    top: -10,
    right: 10,
  },
  popularBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  pricingPlanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkmarkIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  ctaFinalSection: {
    backgroundColor: '#007bff',
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  ctaFinalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  ctaFinalSubtitle: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
    marginBottom: 25,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerText: {
    color: '#666',
    marginBottom: 10,
  },
  footerLinks: {
    flexDirection: 'row',
  },
  footerLink: {
    color: '#007bff',
    marginHorizontal: 5,
  },
  footerSeparator: {
    color: '#ccc',
    marginHorizontal: 5,
  },
});

export default DichvuScreen;