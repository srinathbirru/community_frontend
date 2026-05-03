import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, Text, View, useColorScheme } from 'react-native';

interface HalfModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showUserIcon?: boolean;
}

export default function HalfModal({ visible, onClose, title, children, showUserIcon = false }: HalfModalProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/60">
        <View className={`w-full rounded-t-3xl p-6 ${isDark ? 'bg-[#1E1E1E]' : 'bg-white'} shadow-2xl`}>
          {/* Handle bar */}
          <View className="w-12 h-1 bg-gray-400 rounded-full self-center mb-6" />
          
          {/* Header */}
          {title && (
            <View className="flex-row justify-between items-center mb-6">
              <View className="flex-row items-center">
                {showUserIcon && (
                  <View className="w-10 h-10 rounded-full justify-center items-center mr-3" style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)' }}>
                    <Ionicons name="person" size={24} color={isDark ? '#FFFFFF' : '#000000'} />
                  </View>
                )}
                <Text className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {title}
                </Text>
              </View>
              <Pressable onPress={onClose} className="p-2">
                <Text className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>✕</Text>
              </Pressable>
            </View>
          )}
          
          {/* Content */}
          <View className="w-full">
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}
