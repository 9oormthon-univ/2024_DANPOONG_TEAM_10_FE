import FestStatus from '@/components/FestStatus';
import Hr from '@/components/Hr';
import Header from '@/components/layouts/Header';
import Stars from '@/components/Stars';
import FontText from '@/components/theme/FontText';
import { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

type LikeData = {
  isOpen: boolean;
  name: string;
  stars: number;
  reviewCount: number;
  location: string;
};

export default function LikePage() {
  // 정렬 선택 드롭다운 옵션들
  // 드롭다운이 열렸는지
  const [orderOpen, setOrderOpen] = useState(false);
  // 드롭다운으로 선택된 값
  const [order, setOrder] = useState<string>('개최일');
  // 드롭다운에 들어가는 옵션 (라벨, 값)
  const [orderItems, setOrderItems] = useState<
    { label: string; value: string }[]
  >([
    { label: '축재 개최일 순', value: '개최일' },
    { label: '축재 종료일 순', value: '종료일' },
  ]);

  const [likeDataList, setLikeDataList] = useState<LikeData[]>([]);

  const fetchData = async () => {
    setLikeDataList([
      {
        isOpen: false,
        name: '2023 거창 마당 대축제',
        stars: 5,
        reviewCount: 3,
        location: '경상남도 거창군 거창읍 심소정길 39-36',
      },
      {
        isOpen: true,
        name: '2023 거창 마당 대축제',
        stars: 5,
        reviewCount: 3,
        location: '경상남도 거창군 거창읍 심소정길 39-36',
      },
      {
        isOpen: false,
        name: '2023 거창 마당 대축제',
        stars: 5,
        reviewCount: 3,
        location: '경상남도 거창군 거창읍 심소정길 39-36',
      },
    ]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item, index }: { item: LikeData; index: number }) => (
    <View className="p-5 bg-gray-200 gap-2 mb-5 rounded-xl">
      <View className="flex-row justify-between">
        <FestStatus isOpen={item.isOpen} />
        <View className="h-10 w-10 bg-cyan-900 rounded-full" />
      </View>
      <FontText className="font-bold text-2xl">{item.name}</FontText>
      <View className="flex-row gap-2">
        <Stars count={item.stars} />
        <FontText>{item.stars}.0</FontText>
        <FontText>({item.reviewCount})</FontText>
      </View>
      <View className="flex-row gap-2">
        <View className="h-5 w-5 bg-cyan-900 rounded-full" />
        <FontText>{item.location}</FontText>
      </View>
    </View>
  );

  return (
    <View>
      <Header
        left={
          <View>
            <FontText>좋아요 표시한 항목</FontText>
            <FontText>2</FontText>
          </View>
        }
      />
      <Hr />

      {/* 드롭다운 */}
      <View className="p-5 items-end">
        <DropDownPicker
          open={orderOpen}
          value={order}
          items={orderItems}
          setOpen={setOrderOpen}
          setValue={setOrder}
          setItems={setOrderItems}
          textStyle={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
          containerStyle={{
            width: '50%',
          }}
          style={{
            borderWidth: 0,
            boxShadow: '0 0 2 gray',
          }}
          dropDownContainerStyle={{
            borderWidth: 0,
            boxShadow: '0 0 2 gray',
          }}
        />
      </View>

      <View className="p-5">
        <FlatList
          data={likeDataList}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
}
