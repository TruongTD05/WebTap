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
  ImageBackground, // Added for banner
} from 'react-native';

const { width } = Dimensions.get('window');

// --- Reusable Interfaces (can be moved to a common types file) ---
interface NavItem {
  label: string;
  target: string;
}

interface FeatureDetail { // Renamed from 'Feature' for clarity
  iconUrl: string;
  title: string;
  description: string;
}

// Adjusted for Physical Server pricing (features are just text)
interface ServerPricingFeature {
  text: string;
}

interface ServerPricingPlanData {
  title: string;
  price: string;
  priceSuffix: string;
  features: ServerPricingFeature[];
  isPopular?: boolean;
  buttonText: string;
  buttonType: 'primary' | 'outline';
}

interface TestimonialItemData {
  quote: string;
  author: string;
  role?: string; // Optional role/company
}

// --- Data for PhysicalServerScreen ---

const navItems: NavItem[] = [ // Assuming same nav items
  { label: 'Trang chủ', target: 'index.html' },
  { label: 'Dịch vụ', target: 'Dichvu.html' },
  { label: 'Hosting', target: 'Hosting.html' },
  { label: 'Máy chủ vật lý', target: 'Mcvl.html' },
  { label: 'Giải pháp', target: 'Giaiphap.html' },
  { label: 'Thông tin', target: 'Thongtin.html' },
  { label: 'Điều khoản', target: 'Dieukhoan.html' },
  { label: 'Trang quản lý', target: 'Tql.html' },
];

const physicalServerFeatures: FeatureDetail[] = [
  {
    iconUrl: 'https://img.icons8.com/?size=96&id=11306&format=png',
    title: 'Hiệu Suất Vượt Trội',
    description: 'Toàn bộ tài nguyên phần cứng dành riêng cho bạn, không chia sẻ, đảm bảo hiệu suất tối đa.',
  },
  {
    iconUrl: 'https://i.imgur.com/03A0v9x.png', // Replaced pngtree link with a stable alternative
    title: 'Kiểm Soát Toàn Diện',
    description: 'Truy cập root/administrator đầy đủ, cho phép bạn tùy chỉnh và quản lý theo nhu cầu.',
  },
  {
    iconUrl: 'https://img.icons8.com/color/96/customer-support.png',
    title: 'Hỗ Trợ Kỹ Thuật 24/7',
    description: 'Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi, đảm bảo hệ thống hoạt động ổn định.',
  },
  {
    iconUrl: 'https://img.icons8.com/?size=96&id=46453&format=png',
    title: 'Bảo Mật Cấp Cao',
    description: 'Môi trường độc lập giúp tăng cường bảo mật dữ liệu và ứng dụng của bạn.',
  },
  {
    iconUrl: 'https://i.imgur.com/744g7S8.png', // Replaced pngtree link with a stable alternative
    title: 'Cấu Hình Tùy Chỉnh',
    description: 'Linh hoạt lựa chọn cấu hình phần cứng (CPU, RAM, SSD/HDD) theo yêu cầu cụ thể.',
  },
  {
    iconUrl: 'https://img.icons8.com/?size=96&id=97327&format=png',
    title: 'Dung Lượng Lưu Trữ Lớn',
    description: 'Phù hợp cho các ứng dụng yêu cầu không gian lưu trữ lớn và khả năng mở rộng.',
  },
];

const serverPricingPlans: ServerPricingPlanData[] = [
  {
    title: 'Máy Chủ Cá Nhân',
    price: '3.000.000',
    priceSuffix: 'VNĐ/tháng',
    features: [
      { text: 'CPU Intel Xeon E3' },
      { text: '8GB DDR4 RAM' },
      { text: '250GB SSD NVMe' },
      { text: '10TB Băng thông' },
      { text: '1 Địa chỉ IPv4' },
      { text: 'Hỗ trợ 24/7' },
    ],
    buttonText: 'Đăng Ký Ngay',
    buttonType: 'outline',
  },
  {
    title: 'Máy Chủ Doanh Nghiệp',
    price: '6.500.000',
    priceSuffix: 'VNĐ/tháng',
    features: [
      { text: 'CPU Intel Xeon E5 Dual' },
      { text: '32GB DDR4 RAM' },
      { text: '500GB SSD NVMe + 1TB HDD' },
      { text: 'Không giới hạn Băng thông' },
      { text: '2 Địa chỉ IPv4' },
      { text: 'Backup Hàng Tuần' },
      { text: 'Hỗ trợ ưu tiên 24/7' },
    ],
    isPopular: true,
    buttonText: 'Đăng Ký Ngay',
    buttonType: 'primary',
  },
  {
    title: 'Máy Chủ Cao Cấp',
    price: '12.000.000',
    priceSuffix: 'VNĐ/tháng',
    features: [
      { text: 'CPU Intel Xeon Scalable' },
      { text: '64GB DDR4 RAM' },
      { text: '1TB SSD NVMe + 2TB HDD' },
      { text: 'Không giới hạn Băng thông' },
      { text: '4 Địa chỉ IPv4' },
      { text: 'Backup Hàng Ngày' },
      { text: 'Hỗ trợ chuyên biệt 24/7' },
    ],
    buttonText: 'Đăng Ký Ngay',
    buttonType: 'outline',
  },
];

const testimonials: TestimonialItemData[] = [
  {
    quote: "Chất lượng máy chủ vật lý của VPSNets thật sự ấn tượng. Hệ thống chạy ổn định và mạnh mẽ.",
    author: "- Lê Hồng Phong",
    role: "CTO TechSolutions",
  },
  {
    quote: "Với máy chủ riêng, tôi hoàn toàn yên tâm về hiệu suất và bảo mật cho ứng dụng của mình.",
    author: "- Nguyễn Thu Thủy",
    role: "Quản lý Dự án Lớn",
  },
  {
    quote: "Dịch vụ hỗ trợ rất chuyên nghiệp và nhanh chóng. Một đối tác đáng tin cậy cho hạ tầng IT.",
    author: "- Phạm Quốc Hưng",
    role: "Giám đốc IT Datacenter",
  },
];

// --- Reusable Sub-components (can be moved to a common components folder) ---

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

const ServerPricingPlan: React.FC<{ plan: ServerPricingPlanData, onPress: () => void }> = ({ plan, onPress }) => (
  <View style={[styles.pricingPlan, plan.isPopular && styles.popularPlan]}>
    {plan.isPopular && <View style={styles.popularBadge}><Text style={styles.popularBadgeText}>Phổ Biến</Text></View>}
    <Text style={styles.pricingPlanTitle}>{plan.title}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.priceAmount}>{plan.price}</Text>
      <Text style={styles.priceSuffix}> {plan.priceSuffix}</Text>
    </View>
    <View style={styles.planFeaturesList}>
      {plan.features.map((feature, index) => (
        <View key={index} style={styles.planFeatureItem}>
          {/* No icon for server plan features in this version */}
          <Text style={styles.planFeatureTextSimple}>• {feature.text}</Text>
        </View>
      ))}
    </View>
    <TouchableOpacity
      style={[
        styles.baseButton,
        plan.buttonType === 'primary' ? styles.ctaButton : styles.ctaButtonOutline
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.baseButtonText,
        plan.buttonType === 'primary' ? styles.ctaButtonText : styles.ctaButtonOutlineText
      ]}>
        {plan.buttonText}
      </Text>
    </TouchableOpacity>
  </View>
);

const TestimonialItem: React.FC<{ item: TestimonialItemData }> = ({ item }) => (
  <View style={styles.testimonialItem}>
    <Text style={styles.testimonialQuote}>"{item.quote}"</Text>
    <Text style={styles.testimonialAuthor}>{item.author}</Text>
    {item.role && <Text style={styles.testimonialRole}>{item.role}</Text>}
  </View>
);

// Placeholder banner image - replace with your actual banner
const BANNER_IMAGE_URL = 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';


// --- Main Screen Component ---
const PhysicalServerScreen: React.FC = () => {
  const handleNavLinkPress = (target: string) => {
    console.log(`Maps to: ${target}`);
    // Implement navigation logic here
  };

  const handleCtaPress = (action: string) => {
    console.log(`CTA Press: ${action}`);
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

      {/* Hero Section with Banner */}
      <ImageBackground source={{ uri: BANNER_IMAGE_URL }} style={styles.heroSection} resizeMode="cover">
        <View style={styles.heroOverlay}> {/* Overlay for text readability */}
          <Text style={styles.mainHeading}>Máy Chủ Vật Lý Mạnh Mẽ - Toàn Quyền Kiểm Soát</Text>
          <Text style={styles.subHeading}>Giải pháp máy chủ riêng tối ưu, hiệu suất cao và bảo mật tuyệt đối cho doanh nghiệp của bạn.</Text>
          <TouchableOpacity style={[styles.baseButton, styles.ctaButton]} onPress={() => handleCtaPress('Xem Các Gói Máy Chủ')}>
            <Text style={[styles.baseButtonText, styles.ctaButtonText]}>Xem Các Gói Máy Chủ</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Features Section */}
      <View style={[styles.featuresSection, styles.containerPadding]}>
        <Text style={styles.sectionTitle}>Tại Sao Chọn Máy Chủ Vật Lý Của Chúng Tôi?</Text>
        <View style={styles.featuresGrid}>
          {physicalServerFeatures.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </View>
      </View>

      {/* Pricing Section */}
      <View style={[styles.pricingSection, styles.containerPadding]}>
        <Text style={styles.sectionTitle}>Bảng Giá Dịch Vụ Máy Chủ Vật Lý</Text>
        <Text style={styles.sectionSubtitle}>Các gói máy chủ vật lý được thiết kế cho hiệu suất và độ tin cậy tối ưu.</Text>
        <View style={styles.pricingGrid}>
          {serverPricingPlans.map((plan) => (
            <ServerPricingPlan key={plan.title} plan={plan} onPress={() => handleCtaPress(`Đăng ký ${plan.title}`)} />
          ))}
        </View>
      </View>

      {/* Testimonials Section */}
      <View style={[styles.testimonialsSection, styles.containerPadding]}>
        <Text style={styles.sectionTitle}>Khách Hàng Nói Gì Về Chúng Tôi</Text>
        <View style={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} item={testimonial} />
          ))}
        </View>
      </View>

      {/* Final CTA Section */}
      <View style={[styles.finalCtaSection, styles.containerPadding]}>
        <Text style={styles.sectionTitleDarkBg}>Sẵn Sàng Nâng Tầm Hạ Tầng Với Máy Chủ Vật Lý?</Text>
        <Text style={styles.subHeadingDarkBg}>Liên hệ ngay với chúng tôi để nhận tư vấn chuyên sâu và cấu hình máy chủ phù hợp nhất với nhu cầu của bạn.</Text>
        <TouchableOpacity style={[styles.baseButton, styles.ctaButton]} onPress={() => handleCtaPress('Bắt Đầu Ngay - Final CTA')}>
          <Text style={[styles.baseButtonText, styles.ctaButtonText]}>Bắt Đầu Ngay</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={[styles.footer, styles.containerPadding]}>
        <Text style={styles.footerText}>&copy; 2024 VPSNets. Đã đăng ký Bản quyền.</Text>
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={() => handleNavLinkPress('Dieu khoan Dich vu')}>
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
// (Many styles can be reused/adapted from the previous HostingScreen styles)
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
  // Header & Nav (same as HostingScreen)
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
    // backgroundColor set by ImageBackground
    paddingVertical: 50, // Increased padding for banner feel
    alignItems: 'center',
    justifyContent: 'center', // Center content within ImageBackground
    minHeight: 250, // Ensure banner has some height
  },
  heroOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text readability
    padding: 20,
    borderRadius: 8, // Optional: give the overlay rounded corners
    alignItems: 'center',
  },
  mainHeading: {
    fontSize: 26, // Slightly smaller to fit potentially complex backgrounds
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
  // Buttons (same as HostingScreen)
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
  ctaButtonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007BFF',
  },
  ctaButtonOutlineText: {
    color: '#007BFF',
  },
  // Section Generic (same as HostingScreen)
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
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
  // Features Section (same as HostingScreen, ensure icons fit)
  featuresSection: {
    paddingVertical: 30,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  featureItem: {
    width: width * 0.42,
    alignItems: 'center',
    marginBottom: 25,
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  featureIcon: {
    width: 60, // Adjusted for potentially different icon sizes
    height: 60, // Adjusted
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  featureDescription: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // Pricing Section (Adapted for Server Plans)
  pricingSection: {
    backgroundColor: '#F0F4F8',
    paddingVertical: 30,
  },
  pricingGrid: {
    // Plans stack vertically
  },
  pricingPlan: { // Same base style
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  popularPlan: { // Same style
    borderColor: '#007BFF',
    borderWidth: 2,
    position: 'relative',
  },
  popularBadge: { // Same style
    position: 'absolute',
    top: -1,
    right: 15,
    backgroundColor: '#007BFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  popularBadgeText: { // Same style
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  pricingPlanTitle: { // Same style
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  priceContainer: { // Same style
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  priceAmount: { // Same style
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  priceSuffix: { // Same style
    fontSize: 14,
    color: '#555',
    marginLeft: 3,
    marginBottom: 3,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  planFeaturesList: { // Same style
    marginBottom: 20,
  },
  planFeatureItem: { // Same style
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  planFeatureTextSimple: { // New style for text-only features
    fontSize: 14,
    color: '#444',
    flex: 1,
    lineHeight: 20,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // Testimonials Section
  testimonialsSection: {
    paddingVertical: 30,
    backgroundColor: '#FFFFFF', // Or a very light grey
  },
  testimonialsGrid: {
    // Stacks vertically
  },
  testimonialItem: {
    backgroundColor: '#F8F9FA', // Light card background
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
  },
  testimonialQuote: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Italic' : 'Roboto_Italic',
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  testimonialRole: {
    fontSize: 13,
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 2,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // Final CTA Section
  finalCtaSection: {
    backgroundColor: '#343A40',
    paddingVertical: 40,
    alignItems: 'center',
  },
  sectionTitleDarkBg: { // For dark backgrounds
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  subHeadingDarkBg: { // For dark backgrounds
    fontSize: 16,
    color: '#E0E0E0', // Lighter than pure white for better readability on dark
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // Footer (same as HostingScreen)
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

export default PhysicalServerScreen;