import Header from '@/components/layouts/Header';
import Navbar from '@/components/layouts/Navbar';
import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';

export default function PagesLayout() {
  return (
    <View>
      <Header />
      <Slot></Slot>
      <Navbar />
    </View>
  );
}
