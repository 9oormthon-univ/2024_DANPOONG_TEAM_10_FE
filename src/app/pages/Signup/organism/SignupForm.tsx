// import React, { useState, useEffect } from "react";
// import { View, TextInput, Image, ActivityIndicator } from "react-native";
// import FontText from "@/components/theme/FontText";

// interface SignupFormProps {
//   name: string;
//   onValidChange: (isValid: boolean) => void;
//   onNameChange: (name: string) => void;
//   placeholder: string; // Add placeholder prop
// }

// export default function SignupForm({
//   name,
//   onValidChange,
//   onNameChange,
//   placeholder,
// }: SignupFormProps) {
//   const [inputName, setInputName] = useState<string>(name);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [existingNames, setExistingNames] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchExistingNames = async () => {
//       try {
//         setLoading(true);
//         const data = ["john", "jane", "doe"]; // Temporary data
//         setExistingNames(data.map((name) => name.toLowerCase()));
//       } catch (error) {
//         console.error("Failed to fetch existing names:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExistingNames();
//   }, []);

//   // Name change handler
//   const handleNameChange = (text: string) => {
//     setInputName(text);
//     onNameChange(text);

//     let newError: string | null = null;

//     if (text.length < 2 || text.length > 10) {
//       newError = "닉네임은 2~10글자 사이로 입력해주세요.";
//     } else if (existingNames.includes(text.toLowerCase())) {
//       newError = "이미 사용 중인 닉네임입니다.";
//     }

//     setError(newError);
//     onValidChange(newError === null); // No error means valid
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <View className="w-full justify-center">
//       <FontText style={{ fontSize: 16, fontWeight: "bold" }}>이름</FontText>
//       <TextInput
//         className={`h-11 border rounded-lg mt-3 px-3 text-xs ${
//           error ? "border-[#FB8401]" : "border-[#E9EBED]"
//         }`}
//         placeholder={placeholder}
//         value={inputName}
//         onChangeText={handleNameChange}
//         placeholderTextColor="#9FA4A9"
//       />

//       {error ? (
//         <View className="flex-row items-center mt-1">
//           <Image source={require("@/assets/warning-icon.png")} className="mr-1" />
//           <FontText className="text-[#053C57]" style={{ fontSize: 12 }}>
//             {error}
//           </FontText>
//         </View>
//       ) : (
//         inputName && (
//           <View className="flex-row items-center mt-1">
//             <Image source={require("@/assets/check-icon.png")} className="mr-1" />
//             <FontText className="text-[#053C57]" style={{ fontSize: 12 }}>
//               사용 가능한 닉네임입니다.
//             </FontText>
//           </View>
//         )
//       )}
//     </View>
//   );
// }



import React, { useState, useEffect } from "react";
import { View, TextInput, Image, ActivityIndicator } from "react-native";
import FontText from "@/components/theme/FontText";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SignupFormProps {
  name: string;
  onValidChange: (isValid: boolean) => void;
  onNameChange: (name: string) => void;
  placeholder: string;
}

export default function SignupForm({
  name,
  onValidChange,
  onNameChange,
  placeholder,
}: SignupFormProps) {
  const [inputName, setInputName] = useState<string>(name);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [existingNames, setExistingNames] = useState<string[]>([]);

  // Fetch existing names (simulate API call)
  useEffect(() => {
    const fetchExistingNames = async () => {
      try {
        setLoading(true);
        const data = ["john", "jane", "doe"]; // Temporary data
        setExistingNames(data.map((name) => name.toLowerCase()));
      } catch (error) {
        console.error("Failed to fetch existing names:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExistingNames();
  }, []);

  // Name change handler
  const handleNameChange = async (text: string) => {
    setInputName(text);
    onNameChange(text);

    let newError: string | null = null;

    if (text.length < 2 || text.length > 10) {
      newError = "닉네임은 2~10글자 사이로 입력해주세요.";
    } else if (existingNames.includes(text.toLowerCase())) {
      newError = "이미 사용 중인 닉네임입니다.";
    }

    setError(newError);
    onValidChange(newError === null); // No error means valid

    // Save the valid name to AsyncStorage if there's no error
    if (newError === null) {
      await AsyncStorage.setItem("userName", text);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View className="w-full justify-center">
      <FontText style={{ fontSize: 16, fontWeight: "bold" }}>이름</FontText>
      <TextInput
        className={`h-11 border rounded-lg mt-3 px-3 text-xs ${
          error ? "border-[#FB8401]" : "border-[#E9EBED]"
        }`}
        placeholder={placeholder}
        value={inputName}
        onChangeText={handleNameChange}
        placeholderTextColor="#9FA4A9"
      />

      {error ? (
        <View className="flex-row items-center mt-1">
          <Image source={require("@/assets/warning-icon.png")} className="mr-1" />
          <FontText className="text-[#053C57]" style={{ fontSize: 12 }}>
            {error}
          </FontText>
        </View>
      ) : (
        inputName && (
          <View className="flex-row items-center mt-1">
            <Image source={require("@/assets/check-icon.png")} className="mr-1" />
            <FontText className="text-[#053C57]" style={{ fontSize: 12 }}>
              사용 가능한 닉네임입니다.
            </FontText>
          </View>
        )
      )}
    </View>
  );
}


