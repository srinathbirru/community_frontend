import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient
      colors={['#0F5ED7', '#2E86DE', '#3FA9F5', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      {children}
    </LinearGradient>
  );
}
