// fetchCityData.ts

export interface CityData {
    id: number;
    name: string;
    image: string;
  }
  
  // 목업 데이터
  export const mockCityData: CityData[] = [
    {
      id: 1,
      name: '용인',
      image: 'https://s3-alpha-sig.figma.com/img/f8ca/b426/04d0d28cf53c77a43c3d21be9cecef9a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hVBbsC7kUtE2BVMxrLeajMh5Cl8r24cO2ZQqC2yjIe60M5mzH9H8Bn1TEXMEqlEQtNH0AXdXVrHPKNtW2TzvckMYsnwu2BJCR8Agk9B9vDQKTHLpKTnjOLTHMdVsPdoMSD53xgDbqj4rCokWHssPb86FVqoHiSr8ij6tfaCt-Pgga8DxvRvhRw2ENsLOBhv7yNhhUiATsMNLMRWk41~z~3Z5uUMs83IUDoQbAboZvDKl8xmoWk9l1EvDA0mqinBziwYVRHF779IIzvTRT1oWvbSVChLcyzSbBZMKgLWAVQ4FC~pxtnm4bxyYZdMwtX2U9zjQpCLSCmoYTORdTcU4Hg__', // 같은 이미지 사용
    },
    {
      id: 2,
      name: '안양',
      image: 'https://s3-alpha-sig.figma.com/img/7fab/3f93/9df94451647734a259719970209876df?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=es7J8JWOKrwjxhhH97BTZAShk2sdrGy1LrHG32wNvtjkUBkCLGeHVoP6uP6MEVrL-mAzOke-R8uQ424eDqHaZYjLRVCIeP269zoZvn~FMlwpGZJChOPlNKGcmN-Z5Wf6M~OustKhwISSJR58nasKVXGl7-QNHN3H2DRKofdrWjOSAgX~9sipg2A6LRSpXEVlja9dGz4WMJeYWjsC4VW2pAp7ICs-Bfu2GdpLXxCnv0Ixj5G6Q7Xil2dIdNzSUbx-Jg3ocNJoijTGJFHMHs7mJoWMFZjoqb4mZZWPFMTIDrdPsERxhfwtvy4Ru8Nfm03oYtojqtxcSCajFMRMxGHqDQ__', // 같은 이미지 사용
    },
    {
      id: 3,
      name: '광주',
      image: 'https://s3-alpha-sig.figma.com/img/eeb3/1228/8b8d6c79c14615a3c0703d0b7de6bf65?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IbKjIoVSxcyAfnKP0MBcDpQ9c9Uxk7qPVzH3jBsr9VmNhkTJWq9KsOPgxqysc87umwTuVwJrWMbcKj53U8~VA7DcUcsezc-BCETQ3opEnPnqIffOIkCGT~BJKuKZu2Ub3GwFovX11WDhZaCJ~buHOsGmsJfoDNrTPpUOlZi8yX6RZsaCjBcmUi4~xgg2HeCFYbRlE9KkkPg7WbgPMChYqcidV0Z~ZdZ4uRUBEmYrT5xJxLgJ1dKhO8Ki5p4AFZCUkUBl2xToOvc1fPuJTOGNU7InndvLA9-mywqj5W3pPj1kxeHXEXRzSNafH4sbvTmdUoqzhhcu6lBGCN6BWIf6xA__', // 같은 이미지 사용
    },
    {
        id: 4,
        name: '과천',
        image: 'https://s3-alpha-sig.figma.com/img/e2bb/038f/ac2d8635e86de51bd0129607559f7c6f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0CTP8~MT41pscEzk3Uc3Zkm9Y8smJqBubGqpok9cEomkLwxiuxpHWtLdlq5hS4gWFAjhtLINuDiuMEdsMUT2OD3JV9hP2OxJQLOZNAyqHmb7ZJvPLGZzGPNSAYA-frIqX9toCZkh1SeleoGsJpNNYHcjbYNIsZdSCAhSAbpjtzEkHfZgWg51RbR4f7Gqo4JhwXvnxUpxklTQc-1WZd4swEk0id3Is1Zy7neeeKJqvUTP0fR9GlqSi3PNib1MY8cq4HDjlIJksx1v8hicL4kAJDnjautW02eurxKYAPWvM4kjeV3JugSU0xj3wlypbau2PGLKGaKwxiluQbtFWtzRQ__', // 같은 이미지 사용
      },
      {
        id: 5,
        name: '안산',
        image: 'https://s3-alpha-sig.figma.com/img/5a13/0a6f/c577ceac11da77a6a6b69bced935aaed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=modQ5uwaka8Ao2mLACQzgwQq3zYOECjZnM9hhJ~aOiGNuC3GhCov~n3M0UgQ24~0QM2DiNpfRy-3JQXRbNeWakwxXPqa0zeIaGsCVRJC~63PLWihB7Y45225Enw9FxCm2dne0UhszYHk1ZX7U1j2IqMpaW~lRF3PS0bBwJbo1de1Qf0YsHPttWPdYigvDqoT9LboTVE1gkTTm3qLKiww9L0lTs9S1KOUnpylLWpy9MjrjwOaYItMOwWKY3XJvlWgmAR34nv7NvFRniD9pTmdYpKloaF4S2i596diPgnDrJo6QKQLcntTJfDRqS~JxsTWyYoxXYiTjMv8mvI-OrVhog__', // 같은 이미지 사용
      },
      {
        id: 3,
        name: '하남',
        image: 'https://s3-alpha-sig.figma.com/img/6a22/ade4/5462a72a7aeba5dd228e2ea9bdff1e6d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdGfEElOtuZh2O6GR3gWfKTO3fCxOeo69VkOXFJSjs3WNbHNyKGCQPmfWNXL8ZVQaFDjr0h7uPYkg1TgP4Etzy7dz9NSqRg9QfU4iceqr9fLVGxCh-qo~~cDcs7DQYvTajd77Ka2uXLHCzStzamqX1Xdn3b81bw2kXNvNNYlgPRM-D6ecO1-CPHponCjdXWkIEv7kVyL0ibgcIACQv3nkddNd-B6lYlgFabGTKv4uA9DnyiJ7bCMDyj9CTd0mkpUIJS~vMKq-YIx4jUBB1j9xfVscAj2Vb-oDNutPkZQdCEKwxo04pCpdYCOwmN2bY3K24cKoOOvE29MEsvMnB1ByA__', // 같은 이미지 사용
      },
  ];
  
  // 목업 데이터를 반환하는 함수
  export const fetchCityData = async (): Promise<CityData[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCityData); // 0.5초 지연 후 데이터 반환
      }, 500);
    });
  };
  