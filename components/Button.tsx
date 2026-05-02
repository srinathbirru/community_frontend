import { Pressable, Text } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'black' | 'white';
  className?: string;
};

export default function Button({ title, onPress, variant = 'black', className = '' }: ButtonProps) {
  const bgColor = variant === 'black' ? 'bg-black' : 'bg-white';
  const textColor = variant === 'black' ? 'text-white' : 'text-black';

  return (
    <Pressable
      className={`w-full h-[50px] ${bgColor} rounded-full justify-center items-center ${className}`}
      onPress={onPress}
    >
      <Text className={`text-base font-semibold ${textColor}`}>{title}</Text>
    </Pressable>
  );
}
