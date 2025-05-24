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
} from 'react-native';

const { width } = Dimensions.get('window');

// Helper data structure for cleaner rendering
interface NavItem {
  label: string;
  target: string;
}

interface Feature {
  iconUrl: string;
  title: string;
  description: string;
}

interface PricingFeature {
  text: string;
  iconUrl: string; // Added for consistency
}

interface PricingPlanData {
  title: string;
  price: string;
  priceSuffix: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText: string;
  buttonType: 'primary' | 'outline';
}

interface FaqItemData {
  question: string;
  answer: string;
}

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

const hostingFeatures: Feature[] = [
  {
    iconUrl: 'https://img.icons8.com/ios-filled/100/007bff/ssd.png',
    title: 'Ổ Cứng NVMe Siêu Tốc',
    description: 'Tối đa hóa tốc độ tải trang với công nghệ ổ cứng NVMe mới nhất.',
  },
  {
    iconUrl: 'https://img.icons8.com/?size=128&id=55124&format=png',
    title: 'SSL Miễn Phí',
    description: "Bảo mật website của bạn với chứng chỉ SSL Let's Encrypt miễn phí không giới hạn.",
  },
  {
    iconUrl: 'https://www.svgrepo.com/show/330229/cpanel.svg',
    title: 'cPanel/DirectAdmin',
    description: 'Quản lý hosting dễ dàng với bảng điều khiển cPanel hoặc DirectAdmin thân thiện.',
  },
  {
    iconUrl: 'https://img.icons8.com/ios-filled/100/007bff/cloud-storage.png',
    title: 'Sao Lưu Định Kỳ',
    description: 'Dữ liệu của bạn luôn được an toàn với các bản sao lưu hàng ngày/hàng tuần.',
  },
  {
    iconUrl: 'https://img.icons8.com/?size=96&id=11947&format=png',
    title: 'Hỗ Trợ Chuyên Nghiệp',
    description: 'Đội ngũ hỗ trợ kỹ thuật 24/7 sẵn sàng giải đáp mọi thắc mắc của bạn.',
  },
  {
    iconUrl: 'https://img.icons8.com/ios-filled/100/007bff/domain.png',
    title: 'Tên Miền Miễn Phí',
    description: 'Nhận ngay tên miền .com hoặc .net miễn phí khi đăng ký gói hosting từ 1 năm.',
  },
];

const checkmarkIconUrl = "https://img.icons8.com/ios-filled/20/28a745/checkmark--v1.png";

const pricingPlans: PricingPlanData[] = [
  {
    title: 'Hosting Cá Nhân',
    price: '99.000',
    priceSuffix: 'VNĐ/tháng',
    features: [
      { text: '1 Website', iconUrl: checkmarkIconUrl },
      { text: '5GB SSD NVMe', iconUrl: checkmarkIconUrl },
      { text: '50GB Băng thông', iconUrl: checkmarkIconUrl },
      { text: '5 Tài khoản Email', iconUrl: checkmarkIconUrl },
      { text: 'SSL Miễn Phí', iconUrl: checkmarkIconUrl },
      { text: 'Hỗ trợ 24/7', iconUrl: checkmarkIconUrl },
    ],
    buttonText: 'Đăng Ký Ngay',
    buttonType: 'outline',
  },
  {
    title: 'Hosting Doanh Nghiệp',
    price: '249.000',
    priceSuffix: 'VNĐ/tháng',
    features: [
      { text: 'Không giới hạn Website', iconUrl: checkmarkIconUrl },
      { text: '20GB SSD NVMe', iconUrl: checkmarkIconUrl },
      { text: 'Không giới hạn Băng thông', iconUrl: checkmarkIconUrl },
      { text: 'Không giới hạn Tài khoản Email', iconUrl: checkmarkIconUrl },
      { text: 'SSL Miễn Phí', iconUrl: checkmarkIconUrl },
      { text: 'Backup Hàng Ngày', iconUrl: checkmarkIconUrl },
      { text: 'Hỗ trợ ưu tiên 24/7', iconUrl: checkmarkIconUrl },
    ],
    isPopular: true,
    buttonText: 'Đăng Ký Ngay',
    buttonType: 'primary',
  },
  {
    title: 'Hosting Cao Cấp',
    price: '499.000',
    priceSuffix: 'VNĐ/tháng',
    features: [
      { text: 'Không giới hạn Website', iconUrl: checkmarkIconUrl },
      { text: '50GB SSD NVMe', iconUrl: checkmarkIconUrl },
      { text: 'Băng thông không giới hạn', iconUrl: checkmarkIconUrl },
      { text: 'Không giới hạn Tài khoản Email', iconUrl: checkmarkIconUrl },
      { text: 'SSL Miễn Phí', iconUrl: checkmarkIconUrl },
      { text: 'IP Dedicate (tùy chọn)', iconUrl: checkmarkIconUrl },
      { text: 'Hỗ trợ chuyên biệt 24/7', iconUrl: checkmarkIconUrl },
    ],
    buttonText: 'Đăng Ký Ngay',
    buttonType: 'outline',
  },
];

const faqs: FaqItemData[] = [
  {
    question: 'Hosting là gì và tôi có cần nó không?',
    answer: 'Hosting là không gian lưu trữ trực tuyến cho phép website của bạn truy cập được trên internet. Mọi website đều cần hosting để hoạt động.',
  },
  {
    question: 'Tôi có thể nâng cấp gói hosting sau này không?',
    answer: 'Chắc chắn rồi! Bạn có thể dễ dàng nâng cấp gói hosting của mình bất cứ lúc nào khi nhu cầu phát triển.',
  },
  {
    question: 'Làm thế nào để chuyển website hiện tại của tôi sang VPSNets?',
    answer: 'Chúng tôi cung cấp dịch vụ hỗ trợ chuyển đổi website miễn phí và nhanh chóng. Hãy liên hệ với đội ngũ hỗ trợ của chúng tôi.',
  },
];


// Sub-components for better structure
const NavLink: React.FC<{ item: NavItem, onPress: (target: string) => void }> = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item.target)} style={styles.navLink}>
    <Text style={styles.navLinkText}>{item.label}</Text>
  </TouchableOpacity>
);

const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
  <View style={styles.featureItem}>
    <Image source={{ uri: feature.iconUrl }} style={styles.featureIcon} resizeMode="contain" />
    <Text style={styles.featureTitle}>{feature.title}</Text>
    <Text style={styles.featureDescription}>{feature.description}</Text>
  </View>
);

const PricingPlan: React.FC<{ plan: PricingPlanData, onPress: () => void }> = ({ plan, onPress }) => (
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
          <Image source={{ uri: feature.iconUrl }} style={styles.checkmarkIcon} />
          <Text style={styles.planFeatureText}>{feature.text}</Text>
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

const FaqItem: React.FC<{ item: FaqItemData }> = ({ item }) => (
  <View style={styles.faqItem}>
    <Text style={styles.faqQuestion}>{item.question}</Text>
    <Text style={styles.faqAnswer}>{item.answer}</Text>
  </View>
);


const HostingScreen: React.FC = () => {
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

      {/* Hero Section */}
      <View style={[styles.heroSection, styles.containerPadding]}>
        <Text style={styles.mainHeading}>Hosting Mạnh Mẽ & Tối Ưu Cho Website Của Bạn</Text>
        <Text style={styles.subHeading}>Đảm bảo website của bạn luôn hoạt động nhanh chóng, ổn định và an toàn với các gói hosting chất lượng cao.</Text>
        <TouchableOpacity style={[styles.baseButton, styles.ctaButton]} onPress={() => handleCtaPress('Xem Các Gói Hosting')}>
          <Text style={[styles.baseButtonText, styles.ctaButtonText]}>Xem Các Gói Hosting</Text>
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={[styles.featuresSection, styles.containerPadding]}>
        <Text style={styles.sectionTitle}>Tính Năng Chính Của Dịch Vụ Hosting</Text>
        <View style={styles.featuresGrid}>
          {hostingFeatures.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </View>
      </View>

      {/* Pricing Section */}
      <View style={[styles.pricingSection, styles.containerPadding]}>
        <Text style={styles.sectionTitle}>Bảng Giá Dịch Vụ Hosting</Text>
        <Text style={styles.sectionSubtitle}>Lựa chọn gói hosting phù hợp với quy mô và lưu lượng truy cập website của bạn.</Text>
        <View style={styles.pricingGrid}>
          {pricingPlans.map((plan) => (
            <PricingPlan key={plan.title} plan={plan} onPress={() => handleCtaPress(`Đăng ký ${plan.title}`)} />
          ))}
        </View>
      </View>

      {/* FAQ Section */}
      <View style={[styles.faqSection, styles.containerPadding]}>
        <Text style={styles.sectionTitle}>Câu Hỏi Thường Gặp Về Hosting</Text>
        <View style={styles.faqGrid}>
          {faqs.map((faq) => (
            <FaqItem key={faq.question} item={faq} />
          ))}
        </View>
      </View>

      {/* Final CTA Section */}
      <View style={[styles.finalCtaSection, styles.containerPadding]}>
        <Text style={styles.sectionTitle}>Bạn Đã Sẵn Sàng Để Website Hoạt Động Hiệu Quả?</Text>
        <Text style={styles.subHeading}>Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn và bắt đầu hành trình trực tuyến của bạn.</Text>
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  containerPadding: { // Simulates .container padding
    paddingHorizontal: 15,
  },
  // Header & Nav
  header: {
    backgroundColor: '#F8F9FA', // Light background for header
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15, // Specific padding for nav container
  },
  logoContainer: {
    paddingVertical: 5,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF', // Primary color
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  logoSpan: {
    color: '#28A745', // A secondary color
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  navLinksWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow nav links to wrap on smaller screens
    justifyContent: 'flex-end',
    flex: 1, // Allow wrapper to take remaining space
    marginLeft: 10,
  },
  navLink: {
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  navLinkText: {
    fontSize: 14, // Smaller for nav links
    color: '#333',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // Hero Section
  heroSection: {
    backgroundColor: '#007BFF', // Example hero background
    paddingVertical: 40,
    alignItems: 'center',
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  subHeading: {
    fontSize: 16,
    color: '#FFFFFF', // Adjusted for dark background
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
    backgroundColor: '#28A745', // Green CTA
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
  // Section Generic
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
  // Features Section
  featuresSection: {
    paddingVertical: 30,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Or 'space-between'
  },
  featureItem: {
    width: width * 0.42, // Roughly 2 items per row with some spacing
    alignItems: 'center',
    marginBottom: 25,
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  featureIcon: {
    width: 50,
    height: 50,
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
  // Pricing Section
  pricingSection: {
    backgroundColor: '#F0F4F8', // Light grey background
    paddingVertical: 30,
  },
  pricingGrid: {
    // alignItems: 'center', // Plans will stack vertically
  },
  pricingPlan: {
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
  popularPlan: {
    borderColor: '#007BFF', // Highlight popular plan
    borderWidth: 2,
    position: 'relative', // For badge
  },
  popularBadge: {
    position: 'absolute',
    top: -1, // Adjusted for border
    right: 15,
    backgroundColor: '#007BFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5, // Match card's radius
  },
  popularBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  pricingPlanTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  priceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  priceSuffix: {
    fontSize: 14,
    color: '#555',
    marginLeft: 3,
    marginBottom: 3, // Align baseline a bit
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  planFeaturesList: {
    marginBottom: 20,
  },
  planFeatureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkmarkIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  planFeatureText: {
    fontSize: 14,
    color: '#444',
    flex: 1, // Allow text to wrap
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // FAQ Section
  faqSection: {
    paddingVertical: 30,
  },
  faqGrid: {
    // Stacks vertically by default
  },
  faqItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E9ECEF'
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 8,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  faqAnswer: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  // Final CTA Section
  finalCtaSection: {
    backgroundColor: '#343A40', 
    paddingVertical: 40,
    alignItems: 'center',
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

export default HostingScreen;
