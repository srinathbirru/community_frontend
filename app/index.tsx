import Background from '@/components/Background';
import Button from '@/components/Button';
import HalfModal from '@/components/HalfModal';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image as RNImage, Text, View, useColorScheme } from 'react-native';
import { features } from '../constants/constants';
import LoginPage from './auth/login';
import SignupPage from './auth/signup';
// @ts-ignore
import logoImage from '../assets/images/logo.png';
// @ts-ignore
import featuresImage from '../assets/images/features.png';

const Image = RNImage as any;

export default function Landing() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);

  return (
    <Background>
      <View className="flex-1 justify-center items-center p-6 pt-2">
        <View className="w-full max-w-[400px] items-center">
          {/* Illustration */}
          <View className="mb-1 -mt-8">
            <Image 
              source={logoImage}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>

          {/* Headline */}
          <Text className={`text-3xl font-extrabold mb-2 text-center leading-tight ${isDark ? 'text-white' : 'text-white'}`}>
            Smart Living Starts Here
          </Text>

          {/* Subtext */}
          <Text className={`text-base text-center mb-0 px-2 leading-relaxed ${isDark ? 'text-white/80' : 'text-white/90'}`}>
            Complaints, visitors, and payments
          </Text>
          <Text className={`text-base text-center mb-0 px-2 leading-relaxed ${isDark ? 'text-white/80' : 'text-white/90'}`}>
            All in one place
          </Text>

          {/* Features Image */}
          <View className="mb-3 w-full">
            <Image 
              source={featuresImage}
              style={{ width: '100%', height: 320 }}
              resizeMode="contain"
            />
          </View>

          {/* Feature Cards */}
          <View className="w-full mb-4">
            {features.map((feature: { icon: string; text: string }, index: number) => (
              <View key={index} className={`p-3 rounded-lg flex-row items-center ${isDark ? 'bg-white/10' : 'bg-white/20'} mb-0.5`}>
                <View className="w-8 h-8 rounded-lg justify-center items-center mr-2" style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.25)' }}>
                  <Ionicons name={feature.icon as any} size={18} color={isDark ? '#FFFFFF' : '#FFFFFF'} />
                </View>
                <Text className={`text-base font-medium ${isDark ? 'text-white' : 'text-white'}`}>
                  {feature.text}
                </Text>
              </View>
            ))}
          </View>
          
          {/* CTA Button */}
          <Button 
            title="Get Started"
            size="medium"
            onPress={() => setIsLoginModalVisible(true)}
          />
        </View>
      </View>
      
      <HalfModal
        visible={isLoginModalVisible}
        onClose={() => setIsLoginModalVisible(false)}
        title="Login"
        showUserIcon={true}
      >
        <LoginPage onSignupPress={() => {
          setIsLoginModalVisible(false);
          setIsSignupModalVisible(true);
        }} />
      </HalfModal>
      
      <HalfModal
        visible={isSignupModalVisible}
        onClose={() => setIsSignupModalVisible(false)}
        title="Sign Up"
        showUserIcon={true}
      >
        <SignupPage onLoginPress={() => {
          setIsSignupModalVisible(false);
          setIsLoginModalVisible(true);
        }} />
      </HalfModal>
    </Background>
  );
}
