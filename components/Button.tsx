import { Pressable, Text, useColorScheme } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'black' | 'white' | 'blue';
  size?: 'full' | 'medium' | 'low';
  className?: string;
};

export default function Button({ title, onPress, variant = 'white', size = 'full', className = '' }: ButtonProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // In dark theme, default button is white with black text
  // In light theme, default button is white with black text
  // Blue variant for modal buttons in light mode
  const bgColor = variant === 'black' ? 'bg-black' : variant === 'blue' ? '' : 'bg-white';
  const textColor = variant === 'black' ? 'text-white' : variant === 'blue' ? 'text-white' : 'text-black';
  const widthClass = size === 'full' ? 'w-full' : size === 'medium' ? 'w-2/3' : 'w-1/2';
  const buttonStyle = variant === 'blue' ? { backgroundColor: '#3FA9F5' } : {};

  return (
    <Pressable
      className={`${widthClass} h-[50px] ${bgColor} rounded-full justify-center items-center ${className}`}
      style={buttonStyle}
      onPress={onPress}
    >
      <Text className={`text-base font-semibold ${textColor}`}>{title}</Text>
    </Pressable>
  );
}
