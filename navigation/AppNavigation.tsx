import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ServiceScreen from '../screens/ServiceScreen';
import HostingScreen from '../screens/HostingScreen';
import ServerScreen from '../screens/ServerScreen';
import SolutionScreen from '../screens/SolutionScreen';
import InfoScreen from '../screens/InfoScreen';
import TermsScreen from '../screens/TermsScreen';
import AdminScreen from '../screens/AdminScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Dịch vụ" component={ServiceScreen} />
      <Tab.Screen name="Hosting" component={HostingScreen} />
      <Tab.Screen name="Máy chủ" component={ServerScreen} />
      <Tab.Screen name="Giải pháp" component={SolutionScreen} />
      <Tab.Screen name="Thông tin" component={InfoScreen} />
      <Tab.Screen name="Điều khoản" component={TermsScreen} />
      <Tab.Screen name="Quản lý" component={AdminScreen} />
    </Tab.Navigator>
  );
}
