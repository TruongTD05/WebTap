import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const VpsNetsLogo = () => (
  <View style={styles.logoContainer}>
    <Text style={styles.logoText}>🌐 VPS</Text>
    <Text style={[styles.logoText, styles.logoSpan]}>Nets</Text>
  </View>
);

const Header = () => (
  <View style={styles.header}>
    <View style={styles.navContainer}>
      <VpsNetsLogo />
      <View style={styles.navLinks}>
        <Text style={styles.navLink}>Trang chủ</Text>
        <Text style={styles.navLink}>Dịch vụ</Text>
        <Text style={styles.navLink}>Hosting</Text>
        <Text style={styles.navLink}>Máy chủ vật lý</Text>
        <Text style={styles.navLink}>Giải pháp</Text>
        <Text style={styles.navLink}>Thông tin</Text>
        <Text style={styles.navLinkActive}>Điều khoản</Text>
        <Text style={styles.navLink}>Trang quản lý</Text>
      </View>
    </View>
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>&copy; 2024 VPSNets. Đã đăng ký Bản quyền.</Text>
    <View style={styles.footerLinks}>
      <Text style={styles.footerLink}>Điều khoản Dịch vụ</Text>
      <Text style={styles.footerText}> | </Text>
      <Text style={styles.footerLink}>Chính sách Bảo mật</Text>
    </View>
  </View>
);

const CtaSection = () => (
    <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Sẵn Sàng Trải Nghiệm Dịch Vụ VPS Tốt Nhất?</Text>
        <Text style={styles.ctaText}>Đừng ngần ngại liên hệ với chúng tôi để được tư vấn hoặc chọn ngay gói VPS phù hợp với bạn.</Text>
        <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Bắt Đầu Ngay</Text>
        </TouchableOpacity>
    </View>
);


const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <View style={styles.listItemContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.listItemText}>{children}</Text>
    </View>
);

const NumberedPoint = ({ number, children }: { number: number, children: React.ReactNode }) => (
    <View style={styles.listItemContainer}>
        <Text style={styles.bullet}>{number}.</Text>
        <Text style={styles.listItemText}>{children}</Text>
    </View>
);


const TermsOfServiceScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {/* Header - Simplified for React Native - Use a proper header component in a real app */}
        {/* <Header /> */}

        <View style={styles.contentSection}>
          <View style={styles.container}>
            <Text style={styles.h2}>Điều Khoản Dịch Vụ</Text>
            <Text style={styles.p}>
              Chào mừng bạn đến với VPSNets! Vui lòng đọc kỹ các điều khoản dịch
              vụ dưới đây trước khi sử dụng bất kỳ dịch vụ nào của chúng tôi.
              Bằng việc truy cập hoặc sử dụng dịch vụ, bạn đồng ý tuân thủ và
              bị ràng buộc bởi các điều khoản này.
            </Text>

            <Text style={styles.h3}>1. Chấp Thuận Điều Khoản</Text>
            <Text style={styles.p}>
              Bằng cách sử dụng các dịch vụ của VPSNets (sau đây gọi là "Dịch
              Vụ"), bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý bị ràng buộc
              bởi các Điều Khoản Dịch Vụ này, cũng như Chính Sách Bảo Mật của
              chúng tôi. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui
              lòng không sử dụng Dịch Vụ của chúng tôi.
            </Text>

            <Text style={styles.h3}>2. Thay Đổi Điều Khoản</Text>
            <Text style={styles.p}>
                VPSNets có quyền sửa đổi hoặc cập nhật các Điều Khoản Dịch Vụ này bất cứ lúc nào mà không cần thông báo trước. Mọi thay đổi sẽ có hiệu lực ngay lập tức khi được đăng tải trên trang web của chúng tôi. Việc bạn tiếp tục sử dụng Dịch Vụ sau khi các thay đổi được đăng tải sẽ cấu thành sự chấp thuận của bạn đối với các điều khoản đã sửa đổi.
            </Text>

             <Text style={styles.h3}>3. Mô Tả Dịch Vụ</Text>
             <Text style={styles.p}>
                VPSNets cung cấp các dịch vụ máy chủ ảo (VPS), hosting, máy chủ vật lý và các giải pháp liên quan. Chi tiết về từng loại dịch vụ, tính năng và giá cả được niêm yết trên trang web của chúng tôi. Chúng tôi cam kết cung cấp dịch vụ với chất lượng tốt nhất, ổn định và bảo mật.
             </Text>

            <Text style={styles.h3}>4. Quyền và Trách Nhiệm của Người Dùng</Text>
            <View style={styles.list}>
                <BulletPoint>Bạn cam kết cung cấp thông tin chính xác và đầy đủ khi đăng ký và sử dụng Dịch Vụ.</BulletPoint>
                <BulletPoint>Bạn chịu trách nhiệm hoàn toàn về việc bảo mật thông tin đăng nhập của mình.</BulletPoint>
                <BulletPoint>Bạn không được sử dụng Dịch Vụ cho bất kỳ mục đích bất hợp pháp hoặc vi phạm pháp luật hiện hành.</BulletPoint>
                <BulletPoint>Bạn không được thực hiện các hành vi gây hại, tấn công mạng, phát tán mã độc, spam, hoặc bất kỳ hành vi nào gây ảnh hưởng đến hoạt động của VPSNets hoặc các người dùng khác.</BulletPoint>
                <BulletPoint>Bạn phải tuân thủ các chính sách sử dụng hợp lý (AUP) của chúng tôi, được đăng tải riêng hoặc tích hợp trong các điều khoản này.</BulletPoint>
            </View>

            <Text style={styles.h3}>5. Thanh Toán và Hoàn Tiền</Text>
            <View style={styles.list}>
                <BulletPoint>Tất cả các khoản phí dịch vụ phải được thanh toán đầy đủ và đúng hạn theo chu kỳ thanh toán đã chọn.</BulletPoint>
                <BulletPoint>VPSNets có quyền tạm ngừng hoặc chấm dứt dịch vụ nếu việc thanh toán không được thực hiện đúng thời hạn.</BulletPoint>
                <BulletPoint>Chính sách hoàn tiền của chúng tôi được quy định cụ thể trong mục Chính Sách Hoàn Tiền riêng biệt. Vui lòng tham khảo chính sách đó để biết thêm chi tiết.</BulletPoint>
            </View>

            <Text style={styles.h3}>6. Tạm Ngừng và Chấm Dứt Dịch Vụ</Text>
             <Text style={styles.p}>VPSNets có quyền tạm ngừng hoặc chấm dứt Dịch Vụ của bạn ngay lập tức mà không cần thông báo nếu:</Text>
            <View style={styles.list}>
                <NumberedPoint number={1}>Bạn vi phạm bất kỳ điều khoản nào trong thỏa thuận này.</NumberedPoint>
                <NumberedPoint number={2}>Bạn sử dụng Dịch Vụ cho các hoạt động bất hợp pháp.</NumberedPoint>
                <NumberedPoint number={3}>Có yêu cầu từ cơ quan pháp luật có thẩm quyền.</NumberedPoint>
                <NumberedPoint number={4}>Có lý do hợp lý khác để tin rằng việc tiếp tục cung cấp dịch vụ có thể gây hại đến hệ thống của chúng tôi hoặc các bên thứ ba.</NumberedPoint>
            </View>
             <Text style={styles.p}>Trong trường hợp chấm dứt dịch vụ do vi phạm, bạn có thể không được hoàn lại bất kỳ khoản phí nào đã thanh toán.</Text>

            <Text style={styles.h3}>7. Giới Hạn Trách Nhiệm</Text>
             <Text style={styles.p}>VPSNets sẽ không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, đặc biệt hoặc do hậu quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng Dịch Vụ, bao gồm nhưng không giới hạn ở mất mát dữ liệu, gián đoạn kinh doanh, hoặc thiệt hại về lợi nhuận, ngay cả khi chúng tôi đã được thông báo về khả năng xảy ra các thiệt hại đó.</Text>
             <Text style={styles.p}>Trong mọi trường hợp, tổng trách nhiệm của VPSNets đối với bạn cho tất cả các khiếu nại phát sinh từ hoặc liên quan đến các Điều Khoản Dịch Vụ này sẽ không vượt quá số tiền bạn đã thanh toán cho Dịch Vụ trong ba (3) tháng trước đó.</Text>

             <Text style={styles.h3}>8. Bảo Mật Dữ Liệu</Text>
             <Text style={styles.p}>Chúng tôi cam kết bảo vệ dữ liệu của bạn và áp dụng các biện pháp bảo mật hợp lý để ngăn chặn truy cập, sử dụng hoặc tiết lộ trái phép. Tuy nhiên, không có phương thức truyền tải qua internet hoặc lưu trữ điện tử nào là an toàn 100%. Bạn có trách nhiệm tự sao lưu dữ liệu của mình.</Text>

            <Text style={styles.h3}>9. Luật Điều Chỉnh và Giải Quyết Tranh Chấp</Text>
             <Text style={styles.p}>Các Điều Khoản Dịch Vụ này sẽ được điều chỉnh và giải thích theo luật pháp Việt Nam. Mọi tranh chấp phát sinh từ hoặc liên quan đến các điều khoản này sẽ được giải quyết thông qua đàm phán thiện chí. Nếu không đạt được thỏa thuận, tranh chấp sẽ được đưa ra Tòa án có thẩm quyền tại Việt Nam để giải quyết.</Text>

            <Text style={styles.h3}>10. Liên Hệ</Text>
             <Text style={styles.p}>Nếu bạn có bất kỳ câu hỏi nào về các Điều Khoản Dịch Vụ này, vui lòng liên hệ với chúng tôi qua thông tin được cung cấp trên trang "Thông tin" hoặc "Liên hệ" của chúng tôi.</Text>

            <Text style={styles.p}>Cập nhật lần cuối: 21 tháng 5 năm 2025</Text>

          </View>
        </View>

        <CtaSection />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  // Header styles (Simplified - adapt as needed)
  header: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      // Styles for web header (flex row, space between) need adaptation for mobile nav
  },
  navContainer: {
      flexDirection: 'row', // Or 'column' for mobile menu
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
  },
  logoContainer: {
      flexDirection: 'row',
  },
  logoText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
  },
  logoSpan: {
      color: '#007bff', // Example color
  },
  navLinks: {
      // For a real app, use a hamburger menu on mobile
      flexDirection: 'row',
      flexWrap: 'wrap', // May need better handling
  },
  navLink: {
      marginLeft: 15,
      fontSize: 16,
      color: '#555',
  },
   navLinkActive: {
      marginLeft: 15,
      fontSize: 16,
      color: '#007bff', // Example active color
      fontWeight: 'bold',
   },
  // Content Section Styles
  contentSection: {
    paddingVertical: 40, // Reduced from 80px
    backgroundColor: '#f9f9f9',
  },
  container: {
    maxWidth: 960,
    marginHorizontal: 'auto', // Works well on web, adjust for native if needed
    paddingHorizontal: 20,
  },
  h2: {
    textAlign: 'center',
    marginBottom: 30, // Reduced from 40px
    fontSize: 28, // Adjusted from 2.5em
    fontWeight: '700',
    color: '#333',
  },
  h3: {
    fontSize: 22, // Adjusted from 1.8em
    color: '#444',
    marginTop: 25, // Reduced from 30px
    marginBottom: 15,
    fontWeight: '700',
  },
  p: {
    fontSize: 16, // Adjusted from 1.1em
    lineHeight: 24, // Adjusted from 1.7
    color: '#666',
    marginBottom: 15,
  },
  list: {
      marginLeft: 10, // Indent list items
      marginBottom: 15,
  },
  listItemContainer: {
      flexDirection: 'row',
      marginBottom: 8,
      alignItems: 'flex-start',
  },
  bullet: {
      fontSize: 16,
      lineHeight: 24,
      color: '#666',
      marginRight: 8,
      minWidth: 15, // Ensure alignment
  },
  listItemText: {
      fontSize: 16,
      lineHeight: 24,
      color: '#666',
      flex: 1, // Allow text to wrap
  },
  // CTA Section Styles
  ctaSection: {
      paddingVertical: 40,
      backgroundColor: '#007bff', // Example blue
      alignItems: 'center',
      paddingHorizontal: 20,
  },
  ctaTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: 15,
  },
  ctaText: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 25,
      lineHeight: 24,
  },
  ctaButton: {
      backgroundColor: '#fff',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 25,
  },
  ctaButtonText: {
      fontSize: 18,
      color: '#007bff',
      fontWeight: 'bold',
  },
  // Footer Styles
  footer: {
    paddingVertical: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 14,
    marginBottom: 5,
  },
  footerLinks: {
    flexDirection: 'row',
  },
  footerLink: {
    color: '#007bff', // Example link color
    fontSize: 14,
  },
});

export default TermsOfServiceScreen;