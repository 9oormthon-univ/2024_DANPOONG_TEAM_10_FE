import Header from '@/components/layouts/Header';
import FontText from '@/components/theme/FontText';
import { DropDownItems } from '@/utils/Types';
import { useEffect, useReducer, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';

type MarkedDateType = {
  [key: string]: Object;
};

type CalendarData = {
  date: Date;
  type: string;
  id: number;
};

export default function CalendarPage() {
  // 드롭다운 옵션들
  // 드롭다운이 열렸는지
  const [yearOpen, setYearOpen] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);
  // 드롭다운으로 선택된 값
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  // 드롭다운에 들어가는 옵션 (라벨, 값)
  const [yearItems, setYearItems] = useState<DropDownItems[]>([]);
  const [monthItems, setMonthItems] = useState<DropDownItems[]>([]);
  const [date, setDate] = useState<number>(0);

  // 달력의 현재 날짜
  const [currentDate, setCurrentDate] = useState<string>('2000-01-01');
  // 달력 데이터 (월별 데이터)
  const [calendarDataList, setCalendarDataList] = useState<CalendarData[]>([]);
  // 달력에 표시되는 마커 정보
  const [markedDate, setMarkedDate] = useState<MarkedDateType>();

  // 년 드롭다운 열기
  const openYear = () => {
    setMonthOpen(false);
    yearOpen ? setYearOpen(false) : setYearOpen(true);
  };
  // 월 드롭다운 열기
  const openMonth = () => {
    setYearOpen(false);
    monthOpen ? setMonthOpen(false) : setMonthOpen(true);
  };

  // 달력 글자 커스텀
  LocaleConfig.locales['kr'] = {
    monthNames: [
      '01월',
      '02월',
      '03월',
      '04월',
      '05월',
      '06월',
      '07월',
      '08월',
      '09월',
      '10월',
      '11월',
      '12월',
    ],
    monthNamesShort: [
      '01월',
      '02월',
      '03월',
      '04월',
      '05월',
      '06월',
      '07월',
      '08월',
      '09월',
      '10월',
      '11월',
      '12월',
    ],
    dayNames: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  };
  LocaleConfig.defaultLocale = 'kr';

  // 좋아요 누른 날 스타일
  const markedDateStyle: any = {
    customStyles: {
      container: {
        backgroundColor: '#053C57',
      },
      text: {
        color: 'white', // 선택된 날짜 텍스트 색상
        fontWeight: 'bold', // 텍스트 굵기
        textDecorationLine: 'underline',
      },
    },
  };
  // 축제가 있는 날 스타일
  const selectedDateStyle: any = {
    selected: true,
    customStyles: {
      container: {
        backgroundColor: '#c7c7c7',
      },
      text: {
        color: 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },
    },
  };

  const dateClickHandler = () => {};
  const eventClickHandler = () => {};

  // 데이터 불러오기
  const fetchData = async () => {
    setCalendarDataList;
    // calendarData의 type에 맞춰서 좋아요/축제 스타일 설정하기
    setMarkedDate({
      '2024-11-19': markedDateStyle,
      '2024-11-23': selectedDateStyle,
      '2024-11-20': markedDateStyle,
      '2024-11-10': selectedDateStyle,
    });
  };

  // 년/월이 변경되면 날짜 변경
  useEffect(() => {
    const formatedMonth = month.length === 1 ? '0' + month : month;
    setCurrentDate(`${year}-${formatedMonth}-01`);
  }, [year, month]);

  // 첫 랜더링
  useEffect(() => {
    // 드롭다운 범위 지정
    const today = new Date();
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth() + 1;
    setYear(thisYear.toString());
    setMonth(thisMonth.toString());
    // 2000년 이후 ~ 현재 년도 + 10년
    const yearArray = Array.from({
      length: thisYear + 10 - 1999,
    })
      .map((_, i) => {
        return {
          label: 2000 + i + '년',
          value: (2000 + i).toString(),
        };
      })
      .reverse();
    setYearItems(yearArray);

    // 1~12월
    const monthArray = Array.from({
      length: 12,
    }).map((_, i) => {
      return {
        label: i + 1 + '월',
        value: (i + 1).toString(),
      };
    });
    setMonthItems(monthArray);

    fetchData();
    // 현재 날짜로 초기화 (렌더링 문제때문에 해야함)
    setCurrentDate(new Date('2000-01-01').toString());
  }, []);

  return (
    <View className="flex-1">
      {/* 드롭다운 년/월 선택 */}
      <Header
        left={
          <View>
            <DropDownPicker
              open={yearOpen}
              value={year}
              items={yearItems}
              setOpen={openYear}
              setValue={setYear}
              setItems={setYearItems}
              zIndex={2000}
              zIndexInverse={1000}
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
            <DropDownPicker
              open={monthOpen}
              value={month}
              items={monthItems}
              setOpen={openMonth}
              setValue={setMonth}
              setItems={setMonthItems}
              zIndex={1000}
              zIndexInverse={2000}
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
        }
      />
      {/* 달력 */}
      <View className="px-5">
        <Calendar
          current={currentDate}
          key={currentDate}
          renderHeader={() => null}
          hideArrows={true}
          markingType={'custom'}
          markedDates={markedDate}
          theme={{
            textDayHeaderFontSize: 20,
            textDayHeaderFontWeight: 'bold',
            // todayTextColor: '#053C57',
            todayTextColor: '#ffffff',
            todayBackgroundColor: '#c82a2a',
          }}
          onDayPress={(day) => {
            setDate(day.day);
          }}
        />
      </View>
      <View className="flex-1 h-full p-5">
        <View className="flex-1 p-5 bg-gray-300 rounded-xl">
          <FontText className="font-bold text-2xl">
            {currentDate.split('-').join('. ')}
          </FontText>
          <ScrollView>
            {/* 월별 데이터의 date에 맞게 데이터 리스트 */}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
