export interface FestivalData {
    id: number;
    title: string;
    date: string;
    image: string;
  }
  
  // 목업 데이터
  export const mockData: FestivalData[] = [
    {
      id: 1,
      title: '구름톤 유니브 3기 단풍톤',
      date: '2024.11.23 ~ 2024.11.24',
      image: 'https://i.ibb.co/pfgRwzY/danpung-Thon.png',
    },
    {
      id: 2,
      title: '공생광장 특별 프로그램 <늦깎이 배우수업>',
      date: '2024-09-12 ~ 2024-12-05',
      image: 'https://i.ibb.co/ZmhyPTF/image-17.png',
    },
    {
      id: 3,
      title: '2024 밴드 오브 아트트럭 ',
      date: '2024년 11월 24일 일요일 오후1시',
      image: 'https://i.ibb.co/pxTpg8d/image-19.png',
    },
  ];
  
  // 목업 데이터를 반환하는 함수
  export const fetchFestivalData = async (): Promise<FestivalData[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 500); // 0.5초 지연 후 데이터 반환
    });
  };
  