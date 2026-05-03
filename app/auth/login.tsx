import Button from '@/components/Button';
import { router } from 'expo-router';
import { Formik } from 'formik';
import { Pressable, Text, TextInput, View, useColorScheme } from 'react-native';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface LoginPageProps {
  onSignupPress?: () => void;
}

export default function LoginPage({ onSignupPress }: LoginPageProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View className="w-full max-w-[350px] self-center">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values) => console.log('Login pressed', values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
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
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={{
                backgroundColor: isDark ? '#1E1E1E' : 'rgba(255, 255, 255, 0.9)',
                borderColor: touched.password && errors.password ? 'red' : (isDark ? '#2A2A2A' : '#d1d5db'),
                color: isDark ? '#FFFFFF' : '#000000'
              }}
            />
            {touched.password && errors.password && (
              <Text className="text-red-500 text-xs mb-2">{errors.password}</Text>
            )}
            
            <Button 
              title="Login"
              variant="blue"
              size="low"
              onPress={handleSubmit}
              className="mt-2 self-center"
            />
            
            <View className="flex-row justify-center items-center mt-4">
              <Text className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Don't have an account?{' '}
              </Text>
              <Pressable onPress={onSignupPress || (() => router.push('/auth/signup'))}>
                <Text className="text-sm font-semibold" style={{ color: '#3FA9F5' }}>
                  Sign up
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
