import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme, View } from 'react-native';

export default function Background({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  if (isDark) {
    // Dark mode: solid background color, no gradient
    return (
      <View className="flex-1" style={{ backgroundColor: '#121212' }}>
        {children}
      </View>
    );
  }

  // Light theme: blue to white gradient
  const colors: readonly [string, string, string] = ['#0F5ED7', '#2E86DE', '#3FA9F5'];

  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      {children}
    </LinearGradient>
  );
}
