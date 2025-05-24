import { Background } from '@react-navigation/elements';
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
  ImageBackground, 
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

// --- Reusable Components ---

interface FeatureItemProps {
  iconUrl: string;
  title: string;
  description: string;
  isLocal?: boolean; 
}

const FeatureItem: React.FC<FeatureItemProps> = ({ iconUrl, title, description, isLocal }) => (
  <View style={styles.featureItem}>
    <Image
      source={isLocal ? iconUrl : { uri: iconUrl }}
      style={styles.featureIcon}
      resizeMode="contain"
    />
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </View>
);

interface PricingPlanProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  isOutlineButton?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, features, isPopular, isOutlineButton }) => (
  <View style={[styles.pricingPlan, isPopular && styles.popularPlan]}>
    {isPopular && <View style={styles.popularBadgeContainer}><Text style={styles.popularBadge}>Phổ Biến</Text></View>}
    <Text style={styles.planTitle}>{title}</Text>
    <Text style={styles.planPrice}>
      <Text style={styles.priceAmount}>{price}</Text> VNĐ/tháng
    </Text>
    <View style={styles.planFeaturesList}>
      {features.map((feature, index) => (
        <Text key={index} style={styles.planFeatureItem}>• {feature}</Text>
      ))}
    </View>
    <TouchableOpacity style={isOutlineButton ? styles.ctaButtonOutline : styles.ctaButton}>
      <Text style={isOutlineButton ? styles.ctaButtonOutlineText : styles.ctaButtonText}>Đăng Ký Ngay</Text>
    </TouchableOpacity>
  </View>
);

interface TestimonialItemProps {
  quote: string;
  author: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ quote, author }) => (
  <View style={styles.testimonialItem}>
    <Text style={styles.testimonialQuote}>"{quote}"</Text>
    <Text style={styles.testimonialAuthor}>- {author}</Text>
  </View>
);

// --- Main Screen Component ---

const VpsNetsScreen = () => {
  const placeholderBaoMatIcon = "https://via.placeholder.com/96/CCCCCC/FFFFFF?text=Icon";
  const placeholderHeDieuHanhIcon = "https://via.placeholder.com/96/CCCCCC/FFFFFF?text=Icon";
  const bannerImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEn3Zm5WewjFaMxQvcDY28omrwW8uHSCaNKg&s";

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>
            🌐 VPS<Text style={styles.logoSpan}>Nets</Text>
          </Text>
          <View style={styles.navLinksContainer}>
            <TouchableOpacity><Text style={styles.navLink}>Trang chủ</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navLink}>Dịch vụ</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navLink}>Hosting</Text></TouchableOpacity>
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>VPS Hiệu Năng Cao - Ổn Định Vượt Trội</Text>
          <Text style={styles.heroSubtitle}>
            Giải pháp máy chủ ảo mạnh mẽ, linh hoạt và đáng tin cậy cho mọi dự án của bạn. Khởi động ngay hôm nay!
          </Text>
          {/* Thêm hình ảnh banner vào đây */}
          <Image
            source={{ uri: bannerImageUrl }}
            style={styles.bannerImage}
            resizeMode="cover" 
          />
          <TouchableOpacity style={[styles.ctaButton, styles.heroCtaButton]}>
            <Text style={styles.ctaButtonText}>Xem Các Gói VPS</Text>
          </TouchableOpacity>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tại Sao Chọn VPS Của Chúng Tôi?</Text>
          <View style={styles.featuresGrid}>
            <FeatureItem
              iconUrl="https://img.icons8.com/?size=96&id=12906&format=png"
              title="Ổ Cứng SSD Tốc Độ Cao"
              description="Trải nghiệm tốc độ truy xuất dữ liệu vượt trội với ổ cứng SSD NVMe thế hệ mới."
            />
            <FeatureItem
              iconUrl="https://img.icons8.com/?size=160&id=bznB5YNaw4Va&format=png"
              title="Uptime 99.9%"
              description="Cam kết thời gian hoạt động liên tục, đảm bảo website và ứng dụng của bạn luôn trực tuyến."
            />
            <FeatureItem
              iconUrl="https://img.icons8.com/color/96/customer-support.png"
              title="Hỗ Trợ Kỹ Thuật 24/7"
              description="Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi qua nhiều kênh liên lạc."
            />
            <FeatureItem
              iconUrl="https://png.pngtree.com/png-clipart/20231005/original/pngtree-scalability-turquoise-concept-icon-stroke-infographic-editable-vector-png-image_12964880.png"
              title="Dễ Dàng Nâng Cấp"
              description="Linh hoạt nâng cấp tài nguyên VPS của bạn một cách nhanh chóng khi có nhu cầu."
            />
            <FeatureItem
              iconUrl={placeholderBaoMatIcon} // Replace with: bảoMậtIcon and add isLocal={true}
              title="Bảo Mật Toàn Diện"
              description="Hệ thống bảo mật nhiều lớp giúp bảo vệ dữ liệu và ứng dụng của bạn an toàn tuyệt đối."
            />
            <FeatureItem
              iconUrl={placeholderHeDieuHanhIcon} // Replace with: hệĐiềuHànhIcon and add isLocal={true}
              title="Đa Dạng Hệ Điều Hành"
              description="Tự do lựa chọn hệ điều hành Linux hoặc Windows phù hợp với nhu cầu sử dụng."
            />
          </View>
        </View>

        {/* Pricing Section */}
        <View style={[styles.section, styles.pricingSectionBackground]}>
          <Text style={styles.sectionTitle}>Bảng Giá Dịch Vụ VPS</Text>
          <Text style={styles.sectionSubtitle}>
            Chọn gói VPS phù hợp nhất với nhu cầu của bạn. Tất cả các gói đều có thể tùy chỉnh.
          </Text>
          <View style={styles.pricingGrid}>
            <PricingPlan
              title="VPS Cơ Bản"
              price="250.000"
              features={["2 vCPU", "2GB RAM", "50GB SSD NVMe", "1TB Băng thông", "1 Địa chỉ IPv4", "Hỗ trợ 24/7"]}
              isOutlineButton
            />
            <PricingPlan
              title="VPS Chuyên Nghiệp"
              price="550.000"
              features={["4 vCPU", "4GB RAM", "100GB SSD NVMe", "3TB Băng thông", "1 Địa chỉ IPv4", "Backup Hàng Tuần", "Hỗ trợ ưu tiên 24/7"]}
              isPopular
            />
            <PricingPlan
              title="VPS Doanh Nghiệp"
              price="1.200.000"
              features={["8 vCPU", "8GB RAM", "200GB SSD NVMe", "5TB Băng thông", "2 Địa chỉ IPv4", "Backup Hàng Ngày", "Hỗ trợ chuyên biệt 24/7"]}
              isOutlineButton
            />
          </View>
        </View>

        {/* Testimonials Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Khách Hàng Nói Gì Về Chúng Tôi</Text>
          <View style={styles.testimonialsGrid}>
            <TestimonialItem
              quote="Dịch vụ VPS rất ổn định, tốc độ nhanh và đội ngũ hỗ trợ nhiệt tình. Tôi rất hài lòng!"
              author="Nguyễn Văn An, CEO ABC Corp"
            />
            <TestimonialItem
              quote="Chuyển sang VPSKing là một quyết định đúng đắn. Website của tôi chạy mượt mà hơn hẳn."
              author="Trần Thị Bích, Blogger Chuyên Nghiệp"
            />
            <TestimonialItem
              quote="Giá cả hợp lý, chất lượng vượt trội. Sẽ tiếp tục ủng hộ VPSNets dài lâu."
              author="Lê Minh Cường, Nhà Phát Triển Web"
            />
          </View>
        </View>

        {/* Final CTA Section */}
        <View style={styles.finalCTASection}>
          <Text style={styles.finalCTATitle}>Sẵn Sàng Trải Nghiệm Dịch Vụ VPS Tốt Nhất?</Text>
          <Text style={styles.finalCTASubtitle}>
            Đừng ngần ngại liên hệ với chúng tôi để được tư vấn hoặc chọn ngay gói VPS phù hợp với bạn.
          </Text>
          <TouchableOpacity style={[styles.ctaButton, styles.finalCtaButtonMain]}>
            <Text style={styles.ctaButtonText}>Bắt Đầu Ngay</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>&copy; 2024 VPSNets. Đã đăng ký Bản quyền.</Text>
          <View style={styles.footerLinksContainer}>
            <TouchableOpacity><Text style={styles.footerLink}>Điều khoản Dịch vụ</Text></TouchableOpacity>
            <Text style={styles.footerSeparator}> | </Text>
            <TouchableOpacity><Text style={styles.footerLink}>Chính sách Bảo mật</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const PRIMARY_COLOR = '#007AFF'; 
const SECONDARY_COLOR = '#4CD964'; 
const TEXT_COLOR_PRIMARY = '#333';
const TEXT_COLOR_SECONDARY = '#555';
const BACKGROUND_COLOR_LIGHT = '#FFFFFF';
const BACKGROUND_COLOR_DARK = '#F0F0F0'; 
const BORDER_COLOR = '#DDDDDD';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR_LIGHT,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  // --- Global "container" like padding ---
  section: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  // --- Header ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    backgroundColor: BACKGROUND_COLOR_LIGHT,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
  },
  logoSpan: {
    color: SECONDARY_COLOR, 
  },
  navLinksContainer: {
    flexDirection: 'row',
  },
  navLink: {
    fontSize: 14,
    color: PRIMARY_COLOR,
    marginLeft: 10,
  },
  // --- Hero Section ---
  heroSection: {
    backgroundColor: PRIMARY_COLOR, 
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: BACKGROUND_COLOR_LIGHT,
    textAlign: 'center',
    marginBottom: 15,
  },
  heroSubtitle: {
    fontSize: 16,
    color: BACKGROUND_COLOR_LIGHT,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  heroCtaButton: {
    backgroundColor: SECONDARY_COLOR, 
  },
  // --- Section Titles ---
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_COLOR_PRIMARY,
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: TEXT_COLOR_SECONDARY,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  // --- Features Section ---
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  featureItem: {
    width: (width - 60) / 2,
    alignItems: 'center',
    marginBottom: 30,
    padding: 10,
  },
  featureIcon: {
    width: 60,
    height: 60,
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600', 
    color: TEXT_COLOR_PRIMARY,
    textAlign: 'center',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: TEXT_COLOR_SECONDARY,
    textAlign: 'center',
    lineHeight: 20,
  },
  // --- Pricing Section ---
  pricingSectionBackground: {
    backgroundColor: BACKGROUND_COLOR_DARK,
  },
  pricingGrid: {
    marginTop: 20,
  },
  pricingPlan: {
    backgroundColor: BACKGROUND_COLOR_LIGHT,
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android
  },
  popularPlan: {
    borderColor: SECONDARY_COLOR,
    borderWidth: 2,
    position: 'relative', 
  },
  popularBadgeContainer: {
    position: 'absolute',
    top: -12, // Adjust to look good
    right: 15,
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 1,
  },
  popularBadge: {
    color: BACKGROUND_COLOR_LIGHT,
    fontSize: 12,
    fontWeight: 'bold',
  },
  planTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: TEXT_COLOR_PRIMARY,
    textAlign: 'center',
    marginBottom: 10,
  },
  planPrice: {
    fontSize: 18,
    color: TEXT_COLOR_SECONDARY,
    textAlign: 'center',
    marginBottom: 15,
  },
  priceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
  },
  planFeaturesList: {
    marginBottom: 20,
    alignItems: 'flex-start', 
  },
  planFeatureItem: {
    fontSize: 15,
    color: TEXT_COLOR_SECONDARY,
    marginBottom: 8,
    lineHeight: 20,
  },
  // --- Testimonials Section ---
  testimonialsGrid: {
    marginTop: 20,
  },
  testimonialItem: {
    backgroundColor: BACKGROUND_COLOR_DARK,
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  testimonialQuote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: TEXT_COLOR_PRIMARY,
    marginBottom: 10,
    lineHeight: 22,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    textAlign: 'right',
  },
  // --- Final CTA Section ---
  finalCTASection: {
    backgroundColor: PRIMARY_COLOR, 
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  finalCTATitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: BACKGROUND_COLOR_LIGHT,
    textAlign: 'center',
    marginBottom: 15,
  },
  finalCTASubtitle: {
    fontSize: 16,
    color: BACKGROUND_COLOR_LIGHT,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  finalCtaButtonMain: {
    backgroundColor: SECONDARY_COLOR, 
  },
  // --- Footer ---
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderTopWidth: 1,
    borderTopColor: BORDER_COLOR,
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR_DARK,
  },
  footerText: {
    fontSize: 13,
    color: TEXT_COLOR_SECONDARY,
    textAlign: 'center',
    marginBottom: 10,
  },
  footerLinksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 13,
    color: PRIMARY_COLOR,
  },
  footerSeparator: {
    fontSize: 13,
    color: TEXT_COLOR_SECONDARY,
    marginHorizontal: 5,
  },
  ctaButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 180,
  },
  ctaButtonText: {
    color: BACKGROUND_COLOR_LIGHT,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ctaButtonOutline: {
    backgroundColor: 'transparent',
    paddingVertical: 10, 
    paddingHorizontal: 28, 
    borderRadius: 25,
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 180,
  },
  ctaButtonOutlineText: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
   bannerImage: {
    width: width - 10, 
    height: 200, 
    borderRadius: 10, 
    marginTop: -180, 
    marginBottom: 10, 
    zIndex: -1,
  },
});

export default VpsNetsScreen;