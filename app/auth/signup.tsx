import Background from '@/components/Background';
import Button from '@/components/Button';
import { router } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function SignupPage() {
  return (
    <Background>
      <View className="flex-1 justify-center items-center p-5">
        <View className="w-full max-w-[400px]">
          <Text className="text-3xl font-bold mb-8 text-white">Sign Up</Text>
          
          <TextInput
            className="w-full h-[50px] border border-gray-300 rounded-lg px-4 mb-4 text-base bg-white/90"
            placeholder="Name"
            placeholderTextColor="#999"
            autoCapitalize="words"
          />
          
          <TextInput
            className="w-full h-[50px] border border-gray-300 rounded-lg px-4 mb-4 text-base bg-white/90"
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            className="w-full h-[50px] border border-gray-300 rounded-lg px-4 mb-4 text-base bg-white/90"
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
          
          <TextInput
            className="w-full h-[50px] border border-gray-300 rounded-lg px-4 mb-4 text-base bg-white/90"
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
          
          <Button 
            title="Sign Up"
            onPress={() => console.log('Sign up pressed')}
            className="mt-2"
          />
          
          <Pressable onPress={() => router.back()}>
            <Text className="text-blue-400 text-base mt-5 text-center">Back</Text>
          </Pressable>
        </View>
      </View>
    </Background>
  );
}
