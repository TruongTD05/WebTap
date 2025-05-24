import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  ImageBackground,
} from 'react-native';

const { width } = Dimensions.get('window');

// --- Reusable Interfaces ---
interface NavItem {
  label: string;
  target: string;
}

interface FeatureDetail {
  iconUrl: string;
  title: string;
  description: string;
}

// --- Data for VpsSolutionsScreen ---

const navItems: NavItem[] = [
  { label: 'Trang chủ', target: 'index.html' },
  { label: 'Dịch vụ', target: 'Dichvu.html' },
  { label: 'Hosting', target: 'Hosting.html' },
  { label: 'Máy chủ vật lý', target: 'Mcvl.html' },
  { label: 'Giải pháp', target: 'Giaiphap.html' },
  { label: 'Thông tin', target: 'Thongtin.html' },
  { label: 'Điều khoản', target: 'Dieukhoan.html' },
  { label: 'Trang quản lý', target: 'Tql.html' },
];

// Icon URLs are replaced with stable alternatives where necessary
const vpsSolutionsList: FeatureDetail[] = [
  {
    iconUrl: 'https://img.icons8.com/?size=96&id=12906&format=png', // Lưu trữ Website Icon
    title: 'Giải Pháp Lưu Trữ Website',
    description: 'Nền tảng VPS tốc độ cao, ổn định cho website cá nhân, blog, diễn đàn và trang tin tức. Tối ưu SEO và trải nghiệm người dùng.',
  },
  {
    iconUrl: 'https://img.icons8.com/?size=160&id=bznB5YNaw4Va&format=png', // Thương mại điện tử Icon
    title: 'Giải Pháp Thương Mại Điện Tử',
    description: 'Đảm bảo website e-commerce của bạn hoạt động mượt mà, an toàn với khả năng chịu tải cao trong các mùa cao điểm.',
  },
  {
    iconUrl: 'https://img.icons8.com/ios-filled/96/007bff/software-application-design.png', // Replacement for Images/2.png (Phát triển ứng dụng Icon)
    title: 'Giải Pháp Phát Triển & Kiểm Thử',
    description: 'Môi trường lý tưởng để các nhà phát triển xây dựng, kiểm thử (test) và triển khai (deploy) ứng dụng một cách nhanh chóng.',
  },
  {
    iconUrl: 'https://img.icons8.com/ios-filled/96/007bff/game-controller.png', // Replacement for pngtree (Máy chủ Game Icon)
    title: 'Giải Pháp Máy Chủ Game',
    description: 'VPS cấu hình mạnh, latency thấp, đảm bảo trải nghiệm chơi game online mượt mà, không gián đoạn cho cộng đồng game thủ.',
  },
  {
    iconUrl: 'https://img.icons8.com/ios-filled/96/007bff/database.png', // Replacement for Images/1.png (Lưu trữ dữ liệu Icon)
    title: 'Giải Pháp Lưu Trữ Dữ Liệu & Backup',
    description: 'An toàn và bảo mật cho dữ liệu quan trọng của bạn với các giải pháp backup tự động và khôi phục dễ dàng.',
  },
  {
    iconUrl: 'https://img.icons8.com/color/96/customer-support.png', // Giải pháp tùy chỉnh Icon
    title: 'Giải Pháp Doanh Nghiệp Tùy Chỉnh',
    description: 'Chúng tôi tư vấn và xây dựng giải pháp VPS theo yêu cầu đặc thù, phù hợp với quy mô và mục tiêu của doanh nghiệp bạn.',
  },
];

const vpsSolutionBenefits: FeatureDetail[] = [
  {
    iconUrl: 'https://img.icons8.com/?size=96&id=12906&format=png', // Hiệu suất cao Icon (reused)
    title: 'Hiệu Suất Vượt Trội',
    description: 'Mỗi giải pháp được tinh chỉnh để mang lại hiệu suất tối đa cho mục đích sử dụng cụ thể, từ tốc độ xử lý đến băng thông.',
  },
  {
    iconUrl: 'https://img.icons8.com/ios-filled/96/007bff/resize.png', // Replacement for pngtree (Linh hoạt mở rộng Icon)
    title: 'Linh Hoạt & Dễ Mở Rộng',
    description: 'Dễ dàng nâng cấp hoặc điều chỉnh tài nguyên khi nhu cầu của bạn thay đổi, đảm bảo giải pháp luôn phù hợp.',
  },
  {
    iconUrl: 'https://img.icons8.com/ios-filled/96/007bff/shield.png', // Replacement for Images/1.png (Bảo mật chuyên sâu Icon)
    title: 'Bảo Mật Chuyên Sâu',
    description: 'Áp dụng các biện pháp bảo mật tiên tiến nhất để bảo vệ dữ liệu và ứng dụng của bạn khỏi các mối đe dọa.',
  },
  {
    iconUrl: 'https://img.icons8.com/color/96/customer-support.png', // Hỗ trợ chuyên gia Icon (reused)
    title: 'Hỗ Trợ Bởi Chuyên Gia',
    description: 'Đội ngũ kỹ thuật viên giàu kinh nghiệm sẵn sàng tư vấn và hỗ trợ bạn lựa chọn, triển khai giải pháp tối ưu.',
  },
];

// --- Reusable Sub-components ---

const NavLink: React.FC<{ item: NavItem, onPress: (target: string) => void }> = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item.target)} style={styles.navLink}>
    <Text style={styles.navLinkText}>{item.label}</Text>
  </TouchableOpacity>
);

const FeatureItem: React.FC<{ feature: FeatureDetail }> = ({ feature }) => (
  <View style={styles.featureItem}>
    <Image source={{ uri: feature.iconUrl }} style={styles.featureIcon} resizeMode="contain" />
    <Text style={styles.featureTitle}>{feature.title}</Text>
    <Text style={styles.featureDescription}>{feature.description}</Text>
  </View>
);

// Placeholder banner image - replace with your actual banner
const BANNER_IMAGE_URL = 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

// --- Main Screen Component ---
const VpsSolutionsScreen: React.FC = () => {
  const handleNavLinkPress = (target: string) => {
    console.log(`Maps to: ${target}`);
    // Implement navigation logic here (e.g., using React Navigation)
  };

  const handleCtaPress = (action: string, target?: string) => {
    console.log(`CTA Press: ${action}`);
    if (target) {
      handleNavLinkPress(target); // Or specific anchor link scroll if implemented
    }
    // Implement action logic here
  };

  return (
    <ScrollView style={styles.safeArea} contentContainerStyle={styles.scrollViewContent}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => handleNavLinkPress('index.html')} style={styles.logoContainer}>
            <Text style={styles.logoText}>🌐 VPS<Text style={styles.logoSpan}>Nets</Text></Text>
          </TouchableOpacity>
          <View style={styles.navLinksWrapper}>
            {navItems.map((item) => (
              <NavLink key={item.target} item={item} onPress={handleNavLinkPress} />
            ))}
          </View>
        </View>
      </View>

      {/* Hero Section with Banner (id="hero-solutions") */}
      <ImageBackground source={{ uri: BANNER_IMAGE_URL }} style={styles.heroSection} resizeMode="cover">
        <View style={styles.heroOverlay}>
          <Text style={styles.mainHeading}>Giải Pháp Máy Chủ Ảo Linh Hoạt & Tối Ưu</Text>
          <Text style={styles.subHeading}>Khám phá các giải pháp VPS được thiết kế chuyên biệt, đáp ứng mọi nhu cầu từ website cá nhân đến ứng dụng doanh nghiệp phức tạp.</Text>
          <TouchableOpacity style={[styles.baseButton, styles.ctaButton]} onPress={() => handleCtaPress('Khám Phá Các Giải Pháp', '#solution-list')}>
            <Text style={[styles.baseButtonText, styles.ctaButtonText]}>Khám Phá Các Giải Pháp</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Solution List Section (id="solution-list") */}
      <View style={[styles.featuresSection, styles.containerPadding]}>
        <Text style={styles.sectionTitle}>Giải Pháp VPS Phù Hợp Mọi Nhu Cầu</Text>
        <Text style={styles.sectionSubtitle}>Chúng tôi cung cấp các giải pháp VPS được tối ưu hóa cho từng mục đích sử dụng cụ thể.</Text>
        <View style={styles.featuresGrid}>
          {vpsSolutionsList.map((solution, index) => (
            <FeatureItem key={index} feature={solution} />
          ))}
        </View>
      </View>

      {/* Solution Benefits Section (id="solution-benefits") */}
      <View style={[styles.featuresSection, styles.containerPadding, styles.lightBackgroundSection]}>
        <Text style={styles.sectionTitle}>Lợi Ích Khi Chọn Giải Pháp VPS Của Chúng Tôi</Text>
        <View style={styles.featuresGrid}>
          {vpsSolutionBenefits.map((benefit, index) => (
            <FeatureItem key={index} feature={benefit} />
          ))}
        </View>
      </View>

      {/* Contact Solutions Section (id="contact-solutions") */}
      <View style={[styles.finalCtaSection, styles.containerPadding]}>
        <Text style={styles.sectionTitleDarkBg}>Bạn Cần Tư Vấn Giải Pháp Phù Hợp?</Text>
        <Text style={styles.subHeadingDarkBg}>Hãy để đội ngũ chuyên gia của VPSNets giúp bạn tìm ra giải pháp máy chủ ảo hoàn hảo nhất cho dự án của mình.</Text>
        <TouchableOpacity style={[styles.baseButton, styles.ctaButton]} onPress={() => handleCtaPress('Liên Hệ Tư Vấn Ngay', 'Thongtin.html')}>
          <Text style={[styles.baseButtonText, styles.ctaButtonText]}>Liên Hệ Tư Vấn Ngay</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={[styles.footer, styles.containerPadding]}>
        <Text style={styles.footerText}>&copy; 2024 VPSNets. Đã đăng ký Bản quyền.</Text>
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={() => handleNavLinkPress('Dieukhoan.html')}>
            <Text style={styles.footerLinkText}>Điều khoản Dịch vụ</Text>
          </TouchableOpacity>
          <Text style={styles.footerLinkSeparator}> | </Text>
          <TouchableOpacity onPress={() => handleNavLinkPress('Chinh sach Bao mat')}>
            <Text style={styles.footerLinkText}>Chính sách Bảo mật</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  containerPadding: {
    paddingHorizontal: 15,
  },
  // Header & Nav
  header: {
    backgroundColor: '#F8F9FA',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  logoContainer: {
    paddingVertical: 5,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  logoSpan: {
    color: '#28A745',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  navLinksWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    flex: 1,
    marginLeft: 10,
  },
  navLink: {
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  navLinkText: {
    fontSize: 14,
    color: '#333',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // Hero Section with Banner
  heroSection: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 280, // Slightly taller for more impact
  },
  heroOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)', // Slightly darker overlay
    paddingHorizontal: 15, // Ensure padding on sides
    paddingVertical: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 10, // Add horizontal margin for the overlay box itself
  },
  mainHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  subHeading: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // Buttons
  baseButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
  },
  baseButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  ctaButton: {
    backgroundColor: '#28A745',
  },
  ctaButtonText: {
    color: '#FFFFFF',
  },
  // Section Generic
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10, // Adjusted
    marginTop: 30,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // Features Section (used for Solution List and Benefits)
  featuresSection: {
    paddingVertical: 30,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  featureItem: {
    width: width * 0.43, // Adjusted for slightly better fit if many items
    alignItems: 'center',
    marginBottom: 25,
    padding: 12,
    backgroundColor: '#FFFFFF', // Default white, overridden by lightBackgroundSection if needed
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderWidth: 1, // Adding a subtle border
    borderColor: '#E9ECEF',
  },
  featureIcon: {
    width: 50, // Standardized icon size
    height: 50,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 15, // Slightly adjusted
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 7,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  featureDescription: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  lightBackgroundSection: { // For "Solution Benefits" section
    backgroundColor: '#f9f9f9',
  },
  // Final CTA Section
  finalCtaSection: {
    backgroundColor: '#343A40',
    paddingVertical: 40,
    alignItems: 'center',
  },
  sectionTitleDarkBg: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  subHeadingDarkBg: {
    fontSize: 16,
    color: '#E0E0E0',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // Footer
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLinkText: {
    fontSize: 13,
    color: '#007BFF',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  footerLinkSeparator: {
    fontSize: 13,
    color: '#666',
    marginHorizontal: 5,
  },
});

export default VpsSolutionsScreen;
