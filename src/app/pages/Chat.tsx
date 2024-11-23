import Header from '@/components/layouts/Header';
import FontText from '@/components/theme/FontText';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native';

import ChatLeftSvg from '@/components/svgs/ChatLeftSvg';
import ChatRightSvg from '@/components/svgs/ChatRightSvg';

type ChatData = {
  nickname: string;
  profile: string;
  message: string;
  date: Date;
  isFirst?: boolean;
  isLast?: boolean;
};

export default function Chat() {
  // 채팅 데이터
  const [chatData, setChatData] = useState<ChatData[]>([]);
  // 입력한 메시지
  const [message, setMessage] = useState<string>('');

  // 로그인한 유저 (async storage에서 가져오기)
  const username = '나';

  const sendMessage = async () => {
    console.log(message);
    return;
  };

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
        <View className="flex-row items-center gap-3 mb-3">
          <View className="h-10 w-10 bg-gray-500 rounded-full"></View>
          <FontText>{item.nickname}</FontText>
        </View>
      )}

      {item.isFirst && (
        <View className="w-5 h-5 absolute top-[50] left-[4]">
          <ChatLeftSvg height={20} width={20} color={'#aaaaaa'} />
        </View>
      )}
      <View className="flex-row mb-3 justify-start items-end gap-3 ml-5  w-full">
        <FontText className="bg-gray-400 p-3 rounded-xl max-w-[70%]">
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
        <View className="w-5 h-5 absolute top-[14] right-[5]">
          <ChatRightSvg height={20} width={20} color={'#7bcfff'} />
        </View>
      )}
      <View className="flex-row justify-end items-end mb-3 gap-3">
        {/* 마지막 메시지면 시간 띄움 */}
        {item.isLast && <FontText>{item.date.toString()}</FontText>}
        <FontText className="bg-blue-300 mr-5 p-3 rounded-xl max-w-[70%]">
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
      <View className="px-5 flex-1">
        <FlatList
          data={chatData}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <View className="p-5 flex-row gap-5">
        <TextInput
          className="border p-3 rounded-xl flex-1"
          placeholder="메시지를 입력하세요"
          onChangeText={setMessage}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity
          onPress={sendMessage}
          className="p-3 w-10 h-10 bg-gray-500 rounded-full"
        >
          <View />
        </TouchableOpacity>
      </View>
    </View>
  );
}
