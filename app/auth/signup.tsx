import Button from '@/components/Button';
import { Formik } from 'formik';
import { Pressable, Text, TextInput, View, useColorScheme } from 'react-native';
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  fullName: Yup.string().min(2, 'Name must be at least 2 characters').required('Full name is required'),
  phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  otp: Yup.string().matches(/^[0-9]{6}$/, 'OTP must be 6 digits').required('OTP is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  communityCode: Yup.string().required('Community code is required'),
  flatNumber: Yup.string().required('Flat number is required'),
});

interface SignupPageProps {
  onLoginPress?: () => void;
}

export default function SignupPage({ onLoginPress }: SignupPageProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View className="w-full max-w-[350px] self-center">
      <Formik
        initialValues={{ fullName: '', phoneNumber: '', otp: '', email: '', communityCode: '', flatNumber: '' }}
        validationSchema={signupSchema}
        onSubmit={(values) => console.log('Sign up pressed', values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              className="w-full h-[50px] border rounded-lg px-4 mb-4 text-base"
              placeholder="Full Name"
              placeholderTextColor="#999"
              autoCapitalize="words"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
              style={{
                backgroundColor: isDark ? '#1E1E1E' : 'rgba(255, 255, 255, 0.9)',
                borderColor: touched.fullName && errors.fullName ? 'red' : (isDark ? '#2A2A2A' : '#d1d5db'),
                color: isDark ? '#FFFFFF' : '#000000'
              }}
            />
            {touched.fullName && errors.fullName && (
              <Text className="text-red-500 text-xs mb-2">{errors.fullName}</Text>
            )}
            
            <View className="flex-row mb-4 gap-2">
              <TextInput
                className="flex-1 h-[50px] border rounded-lg px-4 text-base"
                placeholder="Phone Number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                style={{
                  backgroundColor: isDark ? '#1E1E1E' : 'rgba(255, 255, 255, 0.9)',
                  borderColor: touched.phoneNumber && errors.phoneNumber ? 'red' : (isDark ? '#2A2A2A' : '#d1d5db'),
                  color: isDark ? '#FFFFFF' : '#000000'
                }}
              />
              <Pressable className="rounded-lg justify-center items-center px-4" style={{ backgroundColor: '#3FA9F5' }}>
                <Text className="text-white text-sm font-semibold">Send OTP</Text>
              </Pressable>
            </View>
            {touched.phoneNumber && errors.phoneNumber && (
              <Text className="text-red-500 text-xs mb-2">{errors.phoneNumber}</Text>
            )}
            
            <TextInput
              className="w-full h-[50px] border rounded-lg px-4 mb-4 text-base"
              placeholder="Enter OTP"
              placeholderTextColor="#999"
              keyboardType="number-pad"
              onChangeText={handleChange('otp')}
              onBlur={handleBlur('otp')}
              value={values.otp}
              style={{
                backgroundColor: isDark ? '#1E1E1E' : 'rgba(255, 255, 255, 0.9)',
                borderColor: touched.otp && errors.otp ? 'red' : (isDark ? '#2A2A2A' : '#d1d5db'),
                color: isDark ? '#FFFFFF' : '#000000'
              }}
            />
            {touched.otp && errors.otp && (
              <Text className="text-red-500 text-xs mb-2">{errors.otp}</Text>
            )}
            
            <TextInput
              className="w-full h-[50px] border rounded-lg px-4 mb-4 text-base"
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={{
                backgroundColor: isDark ? '#1E1E1E' : 'rgba(255, 255, 255, 0.9)',
                borderColor: touched.email && errors.email ? 'red' : (isDark ? '#2A2A2A' : '#d1d5db'),
                color: isDark ? '#FFFFFF' : '#000000'
              }}
            />
            {touched.email && errors.email && (
              <Text className="text-red-500 text-xs mb-2">{errors.email}</Text>
            )}
            
            <TextInput
              className="w-full h-[50px] border rounded-lg px-4 mb-4 text-base"
              placeholder="Community Code"
              placeholderTextColor="#999"
              autoCapitalize="characters"
              onChangeText={handleChange('communityCode')}
              onBlur={handleBlur('communityCode')}
              value={values.communityCode}
              style={{
                backgroundColor: isDark ? '#1E1E1E' : 'rgba(255, 255, 255, 0.9)',
                borderColor: touched.communityCode && errors.communityCode ? 'red' : (isDark ? '#2A2A2A' : '#d1d5db'),
                color: isDark ? '#FFFFFF' : '#000000'
              }}
            />
            {touched.communityCode && errors.communityCode && (
              <Text className="text-red-500 text-xs mb-2">{errors.communityCode}</Text>
            )}
            
            <TextInput
              className="w-full h-[50px] border rounded-lg px-4 mb-4 text-base"
              placeholder="Flat Number"
              placeholderTextColor="#999"
              autoCapitalize="characters"
              onChangeText={handleChange('flatNumber')}
              onBlur={handleBlur('flatNumber')}
              value={values.flatNumber}
              style={{
                backgroundColor: isDark ? '#1E1E1E' : 'rgba(255, 255, 255, 0.9)',
                borderColor: touched.flatNumber && errors.flatNumber ? 'red' : (isDark ? '#2A2A2A' : '#d1d5db'),
                color: isDark ? '#FFFFFF' : '#000000'
              }}
            />
            {touched.flatNumber && errors.flatNumber && (
              <Text className="text-red-500 text-xs mb-2">{errors.flatNumber}</Text>
            )}
            
            <Button 
              title="Sign Up"
              variant="blue"
              size="low"
              onPress={handleSubmit}
              className="mt-2 self-center"
            />
            
            <View className="flex-row justify-center items-center mt-4">
              <Text className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Already have an account?{' '}
              </Text>
              <Pressable onPress={onLoginPress || (() => console.log('Navigate to login'))}>
                <Text className="text-sm font-semibold" style={{ color: '#3FA9F5' }}>
                  Login
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
