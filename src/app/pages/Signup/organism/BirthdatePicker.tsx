import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import DropdownPicker from "react-native-dropdown-picker";
import FontText from "@/components/theme/FontText";

interface BirthdatePickerProps {
  onDateChange: (date: { year: string | null; month: string | null; day: string | null }) => void;
}

export default function BirthdatePicker({ onDateChange }: BirthdatePickerProps) {
  const [year, setYear] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);

  const [yearOpen, setYearOpen] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);
  const [dayOpen, setDayOpen] = useState(false);

  // 연도, 월, 일 데이터 생성
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 100 }, (_, i) => ({
      label: `${currentYear - i}`,
      value: `${currentYear - i}`,
    }));
  };

  const generateMonths = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      label: `${i + 1}`,
      value: `${i + 1}`,
    }));
  };

  const generateDays = () => {
    return Array.from({ length: 31 }, (_, i) => ({
      label: `${i + 1}`,
      value: `${i + 1}`,
    }));
  };

  useEffect(() => {
    const newDate = { year, month, day };
    onDateChange(newDate);
  }, [year, month, day]);

  return (
    <View className="w-full justify-center">
      <FontText style={{ fontSize: 16, fontWeight: "bold" }}>생년월일</FontText>
      <View style={styles.row}>
        {/* 연도 선택 */}
        <DropdownPicker
          open={yearOpen}
          value={year}
          items={generateYears()}
          setOpen={setYearOpen}
          setValue={setYear}
          placeholder="연도"
          style={{
            backgroundColor: "#F2F2F2",
            borderColor: "#E9EBED",
            borderWidth: 1,
            borderRadius: 10,
          }}
          placeholderStyle={{ fontSize: 12, color: "#9FA4A9" }}
          selectedItemLabelStyle={{ fontSize: 12, color: "black" }}
        />

        {/* 월 선택 */}
        <DropdownPicker
          open={monthOpen}
          value={month}
          items={generateMonths()}
          setOpen={setMonthOpen}
          setValue={setMonth}
          placeholder="월"
          style={{
            backgroundColor: "#F2F2F2",
            borderColor: "#E9EBED",
            borderWidth: 1,
            borderRadius: 10,
          }}
          placeholderStyle={{ fontSize: 12, color: "#9FA4A9" }}
          selectedItemLabelStyle={{ fontSize: 12, color: "black" }}
        />

        {/* 일 선택 */}
        <DropdownPicker
          open={dayOpen}
          value={day}
          items={generateDays()}
          setOpen={setDayOpen}
          setValue={setDay}
          placeholder="일"
          style={{
            backgroundColor: "#F2F2F2",
            borderColor: "#E9EBED",
            borderWidth: 1,
            borderRadius: 10,
          }}
          placeholderStyle={{ fontSize: 12, color: "#9FA4A9" }}
          selectedItemLabelStyle={{ fontSize: 12, color: "black" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    marginTop: 12,
    gap:4,
  },
});
