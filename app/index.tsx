import Background from '@/components/Background';
import Button from '@/components/Button';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

export default function Landing() {
  return (
    <Background>
      <View className="flex-1 justify-center items-center p-5">
        <View className="w-full max-w-[400px] items-center">
          <Text className="text-3xl font-bold mb-2.5 text-white">
            Welcome
          </Text>

          <Text className="text-base text-white/80 mb-10">
            Join our community today
          </Text>
          
          <Button 
            title="Login"
            variant="white"
            onPress={() => router.push('/auth/login')}
            className="mb-4"
          />
          
          <Button 
            title="Sign Up"
            variant="white"
            onPress={() => router.push('/auth/signup')}
            className="mb-4"
          />
        </View>
      </View>
    </Background>
  );
}
