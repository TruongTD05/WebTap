import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions, // To handle responsiveness
} from 'react-native';

// Get screen width for potential responsive layout
const { width } = Dimensions.get('window');

// --- Reusable or Shared Components (Can be moved to separate files) ---

const VpsNetsLogo = () => (
  <View style={styles.logoContainer}>
    <Text style={styles.logoText}>🌐 VPS</Text>
    <Text style={[styles.logoText, styles.logoSpan]}>Nets</Text>
  </View>
);

const Header = () => (
    // Simplified Header for the example. Use a proper navigation header in a real app.
  <View style={styles.header}>
    <VpsNetsLogo />
    <Text style={styles.headerTitle}>Trang Quản Lý</Text>
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
    <View style={styles.ctaFinalSection}>
        <Text style={styles.ctaTitle}>Cần Hỗ Trợ Thêm?</Text>
        <Text style={styles.ctaText}>Đội ngũ của chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7.</Text>
        <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Liên Hệ Hỗ Trợ</Text>
        </TouchableOpacity>
    </View>
);


// --- Specific Components for this Screen ---

interface DashboardCardProps {
  title: string;
  value: string;
  description: string;
  buttonText: string;
  onPress: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  description,
  buttonText,
  onPress,
}) => (
  <TouchableOpacity style={styles.dashboardCard} onPress={onPress} activeOpacity={0.8}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
    <View style={styles.ctaButtonSmall}>
        <Text style={styles.ctaButtonSmallText}>{buttonText}</Text>
    </View>
  </TouchableOpacity>
);

interface ActionButtonProps {
    text: string;
    onPress: () => void;
    type?: 'primary' | 'danger';
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onPress, type = 'primary' }) => (
    <TouchableOpacity
        style={[styles.actionButton, type === 'danger' && styles.actionButtonDanger]}
        onPress={onPress}
        activeOpacity={0.7}
    >
        <Text style={styles.actionButtonText}>{text}</Text>
    </TouchableOpacity>
);


interface ManagementAreaProps {
  title: string;
  description: string;
  actions: { text: string; onPress: () => void; type?: 'primary' | 'danger' }[];
}

const ManagementArea: React.FC<ManagementAreaProps> = ({ title, description, actions }) => (
    <View style={styles.managementArea}>
        <Text style={styles.managementAreaTitle}>{title}</Text>
        <Text style={styles.managementAreaDescription}>{description}</Text>
        <View style={styles.managementActions}>
            {actions.map((action, index) => (
                <ActionButton
                    key={index}
                    text={action.text}
                    onPress={action.onPress}
                    type={action.type}
                />
            ))}
        </View>
    </View>
);


// --- Main Screen Component ---

const ManagementScreen = () => {

    const handlePress = (action: string) => {
        console.log(`Action: ${action}`);
        // Implement navigation or action logic here
    };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {/* <Header /> */}

        <View style={styles.managementSection}>
          <View style={styles.container}>
            <Text style={styles.h2}>Chào Mừng Đến Với Trang Quản Lý Của Bạn!</Text>
            <Text style={styles.subHeading}>
              Dưới đây là tổng quan về các dịch vụ và tài khoản của bạn. Vui lòng chọn hành động bạn muốn thực hiện.
            </Text>

            <View style={styles.dashboardGrid}>
              <DashboardCard
                title="Dịch Vụ Đang Hoạt Động"
                value="3"
                description="Số lượng VPS/Hosting bạn đang sử dụng."
                buttonText="Quản lý dịch vụ"
                onPress={() => handlePress('Manage Services')}
              />
              <DashboardCard
                title="Số Dư Tài Khoản"
                value="500.000 VNĐ"
                description="Số tiền khả dụng trong tài khoản của bạn."
                buttonText="Nạp tiền ngay"
                onPress={() => handlePress('Add Funds')}
              />
              <DashboardCard
                title="Yêu Cầu Hỗ Trợ"
                value="0"
                description="Các yêu cầu hỗ trợ đang chờ xử lý."
                buttonText="Mở yêu cầu mới"
                onPress={() => handlePress('Open Ticket')}
              />
            </View>

             <ManagementArea
                title="Quản Lý Dịch Vụ Máy Chủ"
                description="Xem và quản lý tất cả các máy chủ ảo (VPS) và dịch vụ hosting của bạn tại đây."
                actions={[
                    { text: 'Xem Danh Sách VPS', onPress: () => handlePress('List VPS') },
                    { text: 'Quản Lý Hosting', onPress: () => handlePress('Manage Hosting') },
                    { text: 'Tạo VPS Mới', onPress: () => handlePress('New VPS') },
                ]}
            />

            <ManagementArea
                title="Thanh Toán & Hóa Đơn"
                description="Kiểm tra lịch sử giao dịch, hóa đơn và quản lý các phương thức thanh toán."
                actions={[
                    { text: 'Xem Hóa Đơn', onPress: () => handlePress('View Invoices') },
                    { text: 'Lịch Sử Giao Dịch', onPress: () => handlePress('Transaction History') },
                    { text: 'Cập Nhật Thông Tin Thanh Toán', onPress: () => handlePress('Update Billing') },
                ]}
            />

            <ManagementArea
                title="Hỗ Trợ Kỹ Thuật"
                description="Gửi yêu cầu hỗ trợ, theo dõi trạng thái ticket và tìm kiếm câu trả lời trong cơ sở tri thức của chúng tôi."
                actions={[
                    { text: 'Tạo Yêu Cầu Mới', onPress: () => handlePress('New Ticket') },
                    { text: 'Xem Ticket Của Bạn', onPress: () => handlePress('View Tickets') },
                    { text: 'Cơ Sở Tri Thức', onPress: () => handlePress('Knowledge Base') },
                ]}
            />

             <ManagementArea
                title="Cài Đặt Tài Khoản"
                description="Cập nhật thông tin cá nhân, thay đổi mật khẩu và quản lý các tùy chọn bảo mật."
                actions={[
                    { text: 'Cập Nhật Thông Tin', onPress: () => handlePress('Update Info') },
                    { text: 'Đổi Mật Khẩu', onPress: () => handlePress('Change Password') },
                    { text: 'Xóa Tài Khoản (Không khuyến khích)', onPress: () => handlePress('Delete Account'), type: 'danger' },
                ]}
            />

          </View>
        </View>

        <CtaSection />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Styles ---

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Match section background
  },
  scrollView: {
    flex: 1,
  },
  // Header styles (Simplified)
  header: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      alignItems: 'center',
      marginBottom: 10, // Add some space
  },
   headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 5,
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
  // Main Section Styles
  managementSection: {
    paddingVertical: 40, // Reduced padding
    backgroundColor: '#f0f2f5',
  },
  container: {
    paddingHorizontal: 20,
  },
  h2: {
    textAlign: 'center',
    marginBottom: 20, // Reduced margin
    fontSize: 26, // Adjusted size
    color: '#333',
    fontWeight: '700',
  },
  subHeading: {
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 16, // Adjusted size
    color: '#555',
  },
  // Dashboard Grid Styles
  dashboardGrid: {
      flexDirection: 'row', // Use row for horizontal layout
      flexWrap: 'wrap', // Allow items to wrap
      justifyContent: 'center', // Center items when wrapped
      gap: 20, // Use gap for spacing (Needs polyfill or check RN version)
      marginBottom: 50, // Reduced margin
      // If 'gap' isn't supported, use margin on dashboardCard
  },
  dashboardCard: {
      backgroundColor: '#ffffff',
      padding: 25, // Adjusted padding
      borderRadius: 10,
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)', // Web shadow
      // React Native Shadow (requires both for cross-platform)
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.08,
      shadowRadius: 15,
      elevation: 5, // Android shadow
      alignItems: 'center',
      width: width > 768 ? '45%' : '90%', // Example responsive width (2 columns or 1)
      marginBottom: 20, // Add margin if 'gap' isn't working
      marginHorizontal: 5, // Add horizontal margin if 'gap' isn't working
      minHeight: 200, // Ensure cards have similar height
      justifyContent: 'space-between',
  },
  cardTitle: {
      fontSize: 20, // Adjusted size
      color: '#3498db',
      marginBottom: 15,
      fontWeight: '600',
  },
   cardValue: {
      fontSize: 28, // Adjusted size
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: 10,
  },
   cardDescription: {
      fontSize: 15, // Adjusted size
      color: '#666',
      marginBottom: 20,
      textAlign: 'center',
      flexGrow: 1, // Make text take available space
  },
  ctaButtonSmall: {
      backgroundColor: '#2ecc71',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
  },
   ctaButtonSmallText: {
      color: '#fff',
      fontSize: 14, // Adjusted size
      fontWeight: '600',
  },
  // Management Area Styles
  managementArea: {
      backgroundColor: '#ffffff',
      padding: 30, // Adjusted padding
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.08,
      shadowRadius: 15,
      elevation: 5,
      marginBottom: 30, // Reduced margin
  },
  managementAreaTitle: {
      fontSize: 22, // Adjusted size
      color: '#34495e',
      marginBottom: 20, // Reduced margin
      borderBottomWidth: 1, // Thinner border
      borderBottomColor: '#eee',
      paddingBottom: 10,
      fontWeight: '600',
  },
  managementAreaDescription: {
      fontSize: 16,
      color: '#555',
      marginBottom: 20,
      lineHeight: 22,
  },
  managementActions: {
      flexDirection: 'row', // Default to row
      flexWrap: 'wrap', // Allow wrapping
      gap: 15, // Use gap (or margins)
      marginTop: 10, // Reduced margin
      // On small screens, consider setting flexDirection: 'column'
  },
  actionButton: {
      backgroundColor: '#3498db',
      paddingVertical: 12,
      paddingHorizontal: 20, // Adjusted padding
      borderRadius: 5,
      alignItems: 'center',
      marginRight: 10, // Add margin for spacing if gap not used
      marginBottom: 10, // Add margin for wrapping
  },
  actionButtonText: {
      color: '#fff',
      fontSize: 15, // Adjusted size
      fontWeight: '600',
  },
  actionButtonDanger: {
      backgroundColor: '#e74c3c',
  },
  // CTA Final Section Styles
  ctaFinalSection: {
      paddingVertical: 40,
      backgroundColor: '#34495e', // Example dark blue/grey
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
      backgroundColor: '#3498db',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 25,
  },
  ctaButtonText: {
      fontSize: 18,
      color: '#fff',
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
    color: '#007bff',
    fontSize: 14,
  },
});

export default ManagementScreen;
