import Header from '@/components/layouts/Header';
import FontText from '@/components/theme/FontText';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { DropDownItems } from '@/utils/Types';
import { useRouter } from 'expo-router';

export default function EventPage() {
  const router = useRouter();
  // 드롭다운 옵션들 (value : 선택된 시도)
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<DropDownItems[]>([]);

  // 도장 정보
  const [stampData, setStampData] = useState<boolean[]>([true, false, false]);

  // 데이터 불러오기
  const fetchData = async () => {};

  useEffect(() => {
    // fetchData();
    setValue('서울특별시');
    setItems([{ label: '서울특별시', value: '서울특별시' }]);
  }, []);

  return (
    <View className="flex-1">
      <Image
        style={{ width: '100%', height: '100%', position: 'absolute' }}
        source={require('@/assets/event.png')}
      />
      <View className="flex-1">
        <Header
          left={
            <TouchableOpacity
              onPress={() => {
                router.replace('pages/Main');
              }}
              className="py-5"
            >
              <FontText className="text-white font-bold">{'< 이벤트'}</FontText>
            </TouchableOpacity>
          }
        />
        <View className="flex-1 justify-end">
          <View className="h-[50%] p-5 gap-6 items-center">
            <View className="w-[60%]">
              <DropDownPicker
                open={open}
                setOpen={setOpen}
                value={value}
                setValue={setValue}
                items={items}
                setItems={setItems}
                textStyle={{
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
                style={{
                  borderWidth: 0,
                }}
                dropDownContainerStyle={{
                  borderWidth: 1,
                  borderColor: '#aaa',
                }}
              />
            </View>
            <FontText className="text-center">
              {'행사를 즐기고 해당 행사의\n리뷰를 작성하면 스탬프를 받아요'}
            </FontText>
            <View className="flex-row justify-between gap-5 bg-white p-5 rounded-xl">
              {stampData.length !== 0 &&
                stampData.map((stamp, i) => (
                  <View className="w-[70] h-[70]" key={i}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      source={
                        stamp
                          ? require('@/assets/stamp_on.png')
                          : require('@/assets/stamp_off.png')
                      }
                    />
                  </View>
                ))}
            </View>
            <FontText>스탬프 지급까지 일정 시간이 소요될 수 있습니다</FontText>
          </View>
        </View>
      </View>
    </View>
  );
}
