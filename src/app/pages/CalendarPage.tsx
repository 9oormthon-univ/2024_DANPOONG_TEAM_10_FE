import Header from '@/components/layouts/Header';
import FontText from '@/components/theme/FontText';
import { DropDownItems } from '@/utils/Types';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';

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

  // 좋아요 누른 날
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

  // 축제가 있는 날
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

  useEffect(() => {
    // 2000년 이후 ~
    const yearArray = Array.from({
      length: new Date().getFullYear() - 1999,
    })
      .map((_, i) => {
        return {
          label: 2000 + i + '년',
          value: (2000 + i).toString(),
        };
      })
      .reverse();
    setYearItems(yearArray);
    setYear(new Date().getFullYear().toString());

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
    setMonth(new Date().getMonth().toString());
  }, []);

  return (
    <View>
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
      <Calendar
        renderHeader={() => null}
        hideArrows={true}
        markingType={'custom'}
        markedDates={{
          '2024-11-19': markedDateStyle,
          '2024-11-23': selectedDateStyle,
        }}
        theme={{
          textDayHeaderFontSize: 20,
          textDayHeaderFontWeight: 'bold',
          todayTextColor: '#053C57',
        }}
      />
      <View></View>
    </View>
  );
}
