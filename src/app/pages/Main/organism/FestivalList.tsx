import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { fetchFestivalData, FestivalData } from './fetchFestivalData';

export default function FestivalList() {
  const [festivalData, setFestivalData] = useState<FestivalData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchFestivalData();
      setFestivalData(data);
    };

    loadData();
  }, []);

  if (festivalData.length === 0) {
    return (
      <Text className="text-center text-lg font-semibold mt-5">Loading...</Text>
    );
  }

  return (
    <FlatList
      data={festivalData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="flex-row p-3 border-b border-gray-300 items-center">
          <Image
            source={{ uri: item.image }}
            className="w-[100px] h-[100px] rounded-l mr-4"
            resizeMode="cover"
          />
          <View className="flex-1">
            <Text className="text-lg font-bold">{item.title}</Text>
            <Text className="text-sm text-gray-500">{item.date}</Text>
          </View>
        </View>
      )}
    />
  );
}
