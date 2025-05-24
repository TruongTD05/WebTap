import React, { useState } from 'react';
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
  TextInput, // For contact form
  Linking, // To open map URLs or make calls/emails
} from 'react-native';

const { width } = Dimensions.get('window');

// --- Reusable Interfaces ---
interface NavItem {
  label: string;
  target: string;
}

interface FeatureDetail { // Used for contact details items
  iconUrl: string;
  title: string;
  description: string;
  iconTintColor?: string; // Optional tint color for icons
  onPress?: () => void; // For making items clickable (e.g., phone, email)
}

// --- Data for ContactInfoScreen ---

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

const ICON_TINT_COLOR = '#2c3e50'; // From HTML: style="max-width: 50px;" -> implies icons might be originally larger or this color.

const contactDetails: FeatureDetail[] = [
  {
    iconUrl: 'https://img.icons8.com/material-outlined/96/2c3e50/marker.png',
    iconTintColor: ICON_TINT_COLOR,
    title: 'Địa Chỉ Văn Phòng',
    description: 'Số 123, Đường ABC, Phường XYZ, Quận Hoàn Kiếm, Hà Nội, Việt Nam (Ví dụ)',
    onPress: () => {
      // Example: Open map with address (replace with actual coordinates or query)
      // const address = "Số 123, Đường ABC, Phường XYZ, Quận Hoàn Kiếm, Hà Nội";
      // Linking.openURL(`https://maps.google.com/?q=${encodeURIComponent(address)}`);
      console.log('Open address in map');
    }
  },
  {
    iconUrl: 'https://img.icons8.com/material-outlined/96/2c3e50/phone.png',
    iconTintColor: ICON_TINT_COLOR,
    title: 'Điện Thoại Hỗ Trợ',
    description: 'Hotline: (024) 1234 5678\nKỹ thuật: (024) 8765 4321 (Ví dụ)',
    onPress: () => {
      // Example: Initiate a call (replace with actual number)
      // Linking.openURL('tel:02412345678');
      console.log('Call hotline');
    }
  },
  {
    iconUrl: 'https://img.icons8.com/material-outlined/96/2c3e50/mail.png',
    iconTintColor: ICON_TINT_COLOR,
    title: 'Địa Chỉ Email',
    description: 'Hỗ trợ: hotro@vpsnets.vn\nKinh doanh: kinhdoanh@vpsnets.vn (Ví dụ)',
    onPress: () => {
      // Example: Open email client
      // Linking.openURL('mailto:hotro@vpsnets.vn');
      console.log('Email support');
    }
  },
  {
    iconUrl: 'https://img.icons8.com/material-outlined/96/2c3e50/clock.png',
    iconTintColor: ICON_TINT_COLOR,
    title: 'Giờ Làm Việc',
    description: 'Thứ 2 - Thứ 6: 08:00 - 17:30\nThứ 7: 08:00 - 12:00 (Chủ Nhật nghỉ)',
  },
];

// --- Reusable Sub-components ---

const NavLink: React.FC<{ item: NavItem, onPress: (target: string) => void }> = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item.target)} style={styles.navLink}>
    <Text style={styles.navLinkText}>{item.label}</Text>
  </TouchableOpacity>
);

const ContactDetailItem: React.FC<{ detail: FeatureDetail }> = ({ detail }) => {
  const content = (
    <View style={styles.featureItem}>
      <Image
        source={{ uri: detail.iconUrl }}
        style={[styles.featureIcon, { width: 50, height: 50 }, detail.iconTintColor ? { tintColor: detail.iconTintColor } : {}]}
        resizeMode="contain"
      />
      <Text style={styles.featureTitle}>{detail.title}</Text>
      <Text style={styles.featureDescription}>{detail.description}</Text>
    </View>
  );
  return detail.onPress ? <TouchableOpacity onPress={detail.onPress}>{content}</TouchableOpacity> : content;
};


// Placeholder banner image - replace with your actual banner
const BANNER_IMAGE_URL = 'https://images.pexels.com/photos/7709277/pexels-photo-7709277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const MAP_PLACEHOLDER_IMAGE_URL = 'https://i.imgur.com/ZaGf2KV.png'; // Generic map placeholder

// --- Main Screen Component ---
const ContactInfoScreen: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNavLinkPress = (target: string) => {
    console.log(`Maps to: ${target}`);
    // Implement navigation logic here
  };

  const handleCtaPress = (action: string, target?: string) => {
    console.log(`CTA Press: ${action}`);
    if (target) {
      // For anchor links, you might implement scroll logic if it's a single scroll view
      // For page links, you'd use navigation
      console.log(`Target: ${target}`);
    }
  };

  const handleFormSubmit = () => {
    if (!fullName || !email || !subject || !message) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }
    console.log('Form Submitted:', { fullName, email, subject, message });
    // Here you would typically send the data to your backend API
    alert('Tin nhắn của bạn đã được gửi! (Đây là demo)');
    // Optionally clear form
    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');
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

      {/* Hero Section with Banner (id="hero-contact") */}
      <ImageBackground source={{ uri: BANNER_IMAGE_URL }} style={styles.heroSection} resizeMode="cover">
        <View style={styles.heroOverlay}>
          <Text style={styles.mainHeading}>Thông Tin Liên Hệ</Text>
          <Text style={styles.subHeading}>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Đừng ngần ngại kết nối với VPSNets!</Text>
          <TouchableOpacity style={[styles.baseButton, styles.ctaButton]} onPress={() => handleCtaPress('Xem Chi Tiết Liên Hệ', '#contact-details-section')}>
            <Text style={[styles.baseButtonText, styles.ctaButtonText]}>Xem Chi Tiết Liên Hệ</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Contact Details Section (id="contact-details-section") */}
      <View style={[styles.featuresSection, styles.containerPadding]}>
        <Text style={styles.sectionTitle}>Kết Nối Với Chúng Tôi</Text>
        <Text style={styles.sectionSubtitle}>Dưới đây là các thông tin để bạn có thể dễ dàng liên hệ hoặc tìm đến văn phòng của VPSNets.</Text>
        <View style={styles.featuresGrid}>
          {contactDetails.map((detail, index) => (
            <ContactDetailItem key={index} detail={detail} />
          ))}
        </View>
      </View>

      {/* Contact Form Section (id="contact-form-main") */}
      <View style={styles.contactFormMainContainer}>
        <View style={styles.containerPadding}>
              <Text style={styles.formSectionTitle}>Gửi Tin Nhắn Cho Chúng Tôi</Text>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Họ và Tên:</Text>
                <TextInput
                    style={styles.formInput}
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Nhập họ và tên của bạn"
                    placeholderTextColor="#999"
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Địa chỉ Email:</Text>
                <TextInput
                    style={styles.formInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="your.email@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#999"
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Chủ đề:</Text>
                <TextInput
                    style={styles.formInput}
                    value={subject}
                    onChangeText={setSubject}
                    placeholder="Chủ đề tin nhắn"
                    placeholderTextColor="#999"
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Nội dung tin nhắn:</Text>
                <TextInput
                    style={[styles.formInput, styles.formTextarea]}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Nội dung bạn muốn gửi..."
                    multiline
                    numberOfLines={5}
                    textAlignVertical="top" // For Android
                    placeholderTextColor="#999"
                />
            </View>
            <TouchableOpacity style={[styles.baseButton, styles.ctaButton, styles.submitButton]} onPress={handleFormSubmit}>
                   <Text style={[styles.baseButtonText, styles.ctaButtonText]}>Gửi Tin Nhắn</Text>
            </TouchableOpacity>
        </View>
      </View>

      {/* Map Location Section (id="map-location") */}
      <View style={[styles.featuresSection, styles.lightBackgroundSection, styles.containerPadding]}>
        <Text style={styles.sectionTitle}>Vị Trí Của Chúng Tôi Trên Bản Đồ</Text>
        <View style={styles.mapContainer}>
          <Image source={{ uri: MAP_PLACEHOLDER_IMAGE_URL }} style={styles.mapImage} resizeMode="cover" />
          <Text style={styles.mapCaption}>Lưu ý: Đây là ảnh bản đồ minh họa. Sử dụng 'react-native-maps' để hiển thị bản đồ tương tác.</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={[styles.footer, styles.containerPadding]}>
        <Text style={styles.footerText}>© 2024 VPSNets. Đã đăng ký Bản quyền.</Text>
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
    minHeight: 250,
  },
  heroOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 10,
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
    backgroundColor: '#28A745', // Main CTA color
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
    marginBottom: 10,
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
  // Features Section (Used for Contact Details)
  featuresSection: {
    paddingVertical: 30,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Center the items in the grid
    paddingHorizontal: 10, // Add some horizontal padding to the grid itself
    // Use gap for consistent spacing (React Native 0.71+). For older versions, use margins on featureItem.
    rowGap: 20, // Space between rows
    columnGap: 20, // Space between columns
  },
  featureItem: { // Used by ContactDetailItem
    width: (width - 60) / 2, // Calculate width for 2 columns, accounting for padding and gap: (screen_width - (2*containerPadding) - columnGap) / 2
    alignItems: 'center',
    padding: 15, // Increased padding inside the item
    backgroundColor: '#FFFFFF',
    borderRadius: 10, // Slightly more rounded corners
    elevation: 4, // Increased Android shadow
    shadowColor: 'rgba(0,0,0,0.1)', // More prominent but soft iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: '#EFEFEF', // Lighter border color
  },
  featureIcon: {
    marginBottom: 15, // Increased space below icon
  },
  featureTitle: {
    fontSize: 16, // Slightly larger title
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8, // Adjusted spacing
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  featureDescription: {
    fontSize: 14, // Slightly larger description
    color: '#666',
    textAlign: 'center',
    lineHeight: 20, // Adjusted line height
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  lightBackgroundSection: {
    backgroundColor: '#f9f9f9',
  },
  // Contact Form Section Styles (from inline HTML styles)
  contactFormMainContainer: { // Equivalent to .contact-form-container
    maxWidth: 700, // MaxWidth works, but margin auto needs care in RN
    alignSelf: 'center', // To center it if ScrollView/parent is wider
    width: '100%', // Take full width up to maxWidth
    marginVertical: 40, // margin: 40px auto;
    padding: 25, // Overridden by containerPadding for horizontal
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    // box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    elevation: 3, // Android shadow
    shadowColor: 'rgba(0,0,0,0.08)', // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  formSectionTitle: { // Equivalent to .contact-form-container h2
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 22, // Reusing sectionTitle size
    fontWeight: 'bold',
    color: '#333',
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
  },
  formGroup: {
    marginBottom: 20,
  },
  formLabel: {
    // display: block; // Default in RN for Text
    marginBottom: 8,
    fontWeight: '400', // RN uses strings: 'normal', 'bold', '100'-'900'
    color: '#333',
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
  },
  formInput: {
    // width: 100%; // Default for TextInput in a View
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular', // Ensure font applies
    fontSize: 16, // font-size: 1em;
    backgroundColor: '#FFFFFF', // Inputs usually have a white background
    color: '#333',
  },
  formTextarea: {
    minHeight: 120, // For multiline TextInput
    // resize: vertical; // Not directly applicable, height adjusts with content or numberOfLines
  },
  submitButton: { // .form-group input[type="submit"], .contact-form-container .cta-button
    // width: 100%; // Button already spans width due to alignItems: 'stretch' on parent or specific width style
    // padding: 12px; // Handled by baseButton
    // font-size: 1.1em; // Handled by baseButtonText
    marginTop: 10, // Add some space above the button
  },
  // Map Location Section
  mapContainer: {
    marginTop: 20, // Adjusted from 40px
    alignItems: 'center', // Center the map image
  },
  mapImage: { // Equivalent to .map-container iframe
    width: '100%', // Max-width 100%
    height: 250, // Fixed height for placeholder, adjust as needed (HTML was 450)
    borderRadius: 8,
    // box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); (Shadow on container is usually better for images)
    elevation: 2,
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  mapCaption: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
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

export default ContactInfoScreen;