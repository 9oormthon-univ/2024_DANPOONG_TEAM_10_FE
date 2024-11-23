import Header from '@/components/layouts/Header';
import FontText from '@/components/theme/FontText';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

type ChatData = {
  nickname: string;
  profile: string;
  message: string;
  date: Date;
  isFirst?: boolean;
  isLast?: boolean;
};

export default function Chat() {
  const [chatData, setChatData] = useState<ChatData[]>([]);

  const username = '나';

  useEffect(() => {
    setChatData([
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message:
          'asdiojfiasdjfpijioajsdfiopjasdpoifjsadopifjiopsadjfiopdasjfiosdajfasdjfiposdajfpoijadsoifpdsjapfiosadjfpoidsjafiopasdjfpoidsjfiopjdsapofjaopisjfiopdsajㄴ어랸ㅁ얼',
        date: new Date(),
        isFirst: true,
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
        isLast: true,
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
        isFirst: true,
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message:
          'jasiopdfjopaisdjfopisadjfoipjasiopdfjdsalfjsd;lkfj;alskdjf;laksjdf;lkajsd;flkjas;ldkjf;lkajsdf;ljasd;lkjfkl;asdjf;lkjasdk;lfja;lskjfklajskdlfjkl;sadjfkl;ja;ksdljfjs;alk',
        date: new Date(),
        isLast: true,
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message:
          'asdiojfiasdjfpijioajsdfiopjasdpoifjsadopifjiopsadjfiopdasjfiosdajfasdjfiposdajfpoijadsoifpdsjapfiosadjfpoidsjafiopasdjfpoidsjfiopjdsapofjaopisjfiopdsajㄴ어랸ㅁ얼',
        date: new Date(),
        isFirst: true,
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
        isLast: true,
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
        isFirst: true,
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message:
          'jasiopdfjopaisdjfopisadjfoipjasiopdfjdsalfjsd;lkfj;alskdjf;laksjdf;lkajsd;flkjas;ldkjf;lkajsdf;ljasd;lkjfkl;asdjf;lkjasdk;lfja;lskjfklajskdlfjkl;sadjfkl;ja;ksdljfjs;alk',
        date: new Date(),
        isLast: true,
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message:
          'asdiojfiasdjfpijioajsdfiopjasdpoifjsadopifjiopsadjfiopdasjfiosdajfasdjfiposdajfpoijadsoifpdsjapfiosadjfpoidsjafiopasdjfpoidsjfiopjdsapofjaopisjfiopdsajㄴ어랸ㅁ얼',
        date: new Date(),
        isFirst: true,
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '유저',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
        isLast: true,
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
        isFirst: true,
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message: 'ㅁ냐ㅐ어랴ㅐㅁㄴ어랸ㅁ얼',
        date: new Date(),
      },
      {
        nickname: '나',
        profile: 'ㅁㄴㅇㄹ',
        message:
          'jasiopdfjopaisdjfopisadjfoipjasiopdfjdsalfjsd;lkfj;alskdjf;laksjdf;lkajsd;flkjas;ldkjf;lkajsdf;ljasd;lkjfkl;asdjf;lkjasdk;lfja;lskjfklajskdlfjkl;sadjfkl;ja;ksdljfjs;alk',
        date: new Date(),
        isLast: true,
      },
    ]);
  }, []);

  const otherUser = (item: ChatData) => (
    <View>
      {/* 첫 메시지면 프로필 띄움 */}
      {item.isFirst && (
        <View className="flex-row items-center gap-3">
          <View className="h-10 w-10 bg-gray-500 rounded-full"></View>
          <FontText>{item.nickname}</FontText>
        </View>
      )}

      {item.isFirst && (
        <View className="w-5 h-5 bg-gray-400 absolute top-[50] left-[4]" />
      )}
      <View className="flex-row mt-3 justify-start items-end gap-3 ml-5  w-full">
        <FontText className="bg-gray-400 p-2 rounded-xl max-w-[70%]">
          {item.message}
        </FontText>
        {/* 마지막 메시지면 시간 띄움 */}
        {item.isLast && <FontText>{item.date.toString()}</FontText>}
      </View>
    </View>
  );
  const thisUser = (item: ChatData) => (
    <View>
      {item.isFirst && (
        <View className="w-5 h-5 bg-blue-300 absolute top-[14] right-[5]" />
      )}
      <View className="flex-row justify-end items-end mt-3 gap-3">
        {/* 마지막 메시지면 시간 띄움 */}
        {item.isLast ? <FontText>{item.date.toString()}</FontText> : null}
        <FontText className="bg-blue-300 mr-5 p-2 rounded-xl max-w-[70%]">
          {item.message}
        </FontText>
      </View>
    </View>
  );

  const renderItem = ({ item, index }: { item: ChatData; index: number }) => {
    if (item.nickname === username) {
      return thisUser(item);
    } else {
      return otherUser(item);
    }
  };

  return (
    <View className="flex-1">
      <Header
        left={
          <View>
            <FontText>단풍톤 교류방</FontText>
          </View>
        }
      />
      <View className="p-5 flex-1">
        <FlatList
          data={chatData}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
}
