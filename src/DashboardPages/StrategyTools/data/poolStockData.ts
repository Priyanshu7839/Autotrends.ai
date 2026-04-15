export type MatchStatus = 'full' | 'partial' | 'missing';

export interface PoolStockRecord {
  id: string;
  asmName: string;
  modelCode: string;
  trim: string;
  exteriorColor: string;
  interiorColor: string;
  fsc: string;
  allIndiaPoolStock: number;
  availableDealerTrims: string;
  vnaNumber: string;
  matchStatus: MatchStatus;
  oemData?: {
    trim: string;
    exteriorColor: string;
    interiorColor: string;
    stock: number;
  };
  dealerData?: {
    trim: string;
    exteriorColor: string;
    interiorColor: string;
    stock: number;
  };
  insights?: string[];
}

export interface UploadInfo {
  name: string;
  uploadTime: string;
  fileName: string;
  totalRecords: number;
  status: 'uploaded' | 'pending' | 'updated';
}

export const asmUpload: UploadInfo = {
  name: 'Divyajeet Kumar',
  uploadTime: '2026-03-28 09:45 AM',
  fileName: 'ASM_North_Zone_Mar2026.xlsx',
  totalRecords: 1247,
  status: 'uploaded'
};

export const dealerUpload: UploadInfo = {
  name: 'Shivam Aggrawal',
  uploadTime: '2026-03-28 10:15 AM',
  fileName: 'Dealer_Network_Stock_Mar2026.xlsx',
  totalRecords: 1198,
  status: 'uploaded'
};

export const poolStockRecords: PoolStockRecord[] = [
  {
    id: '1',
    asmName: 'Rajesh Kumar',
    modelCode: 'XUV700',
    trim: 'AX7',
    exteriorColor: 'Everest White',
    interiorColor: 'Black',
    fsc: 'FSC-2024-001',
    allIndiaPoolStock: 145,
    availableDealerTrims: 'AX7, AX5',
    vnaNumber: 'VNA-DL-001',
    matchStatus: 'full',
    oemData: {
      trim: 'AX7',
      exteriorColor: 'Everest White',
      interiorColor: 'Black',
      stock: 145
    },
    dealerData: {
      trim: 'AX7',
      exteriorColor: 'Everest White',
      interiorColor: 'Black',
      stock: 145
    }
  },
  {
    id: '2',
    asmName: 'Rajesh Kumar',
    modelCode: 'XUV700',
    trim: 'AX5',
    exteriorColor: 'Midnight Black',
    interiorColor: 'Tan',
    fsc: 'FSC-2024-002',
    allIndiaPoolStock: 89,
    availableDealerTrims: 'AX5',
    vnaNumber: 'VNA-DL-002',
    matchStatus: 'partial',
    oemData: {
      trim: 'AX5',
      exteriorColor: 'Midnight Black',
      interiorColor: 'Tan',
      stock: 89
    },
    dealerData: {
      trim: 'AX5',
      exteriorColor: 'Midnight Black',
      interiorColor: 'Black',
      stock: 89
    },
    insights: ['Interior color mismatch between OEM and dealer']
  },
  {
    id: '3',
    asmName: 'Vikram Singh',
    modelCode: 'Scorpio N',
    trim: 'Z8L',
    exteriorColor: 'Dazzling Silver',
    interiorColor: 'Black',
    fsc: 'FSC-2024-003',
    allIndiaPoolStock: 67,
    availableDealerTrims: 'Z8, Z6',
    vnaNumber: 'VNA-MH-003',
    matchStatus: 'missing',
    oemData: {
      trim: 'Z8L',
      exteriorColor: 'Dazzling Silver',
      interiorColor: 'Black',
      stock: 67
    },
    insights: ['Stock exists in OEM but not visible to dealer', 'Trim available but not allocated']
  },
  {
    id: '4',
    asmName: 'Anjali Verma',
    modelCode: 'Thar',
    trim: 'LX Hard Top',
    exteriorColor: 'Aquamarine',
    interiorColor: 'Black',
    fsc: 'FSC-2024-004',
    allIndiaPoolStock: 234,
    availableDealerTrims: 'LX Hard Top, AX',
    vnaNumber: 'VNA-KA-004',
    matchStatus: 'full',
    oemData: {
      trim: 'LX Hard Top',
      exteriorColor: 'Aquamarine',
      interiorColor: 'Black',
      stock: 234
    },
    dealerData: {
      trim: 'LX Hard Top',
      exteriorColor: 'Aquamarine',
      interiorColor: 'Black',
      stock: 234
    }
  },
  {
    id: '5',
    asmName: 'Rajesh Kumar',
    modelCode: 'XUV700',
    trim: 'AX7 Diesel',
    exteriorColor: 'Everest White',
    interiorColor: 'Black',
    fsc: 'FSC-2024-005',
    allIndiaPoolStock: 112,
    availableDealerTrims: 'AX7 Diesel',
    vnaNumber: 'VNA-DL-005',
    matchStatus: 'partial',
    oemData: {
      trim: 'AX7 Diesel',
      exteriorColor: 'Everest White',
      interiorColor: 'Black',
      stock: 112
    },
    dealerData: {
      trim: 'AX7 Diesel',
      exteriorColor: 'Everest White',
      interiorColor: 'Black',
      stock: 98
    },
    insights: ['Stock mismatch: OEM shows 112 units, dealer shows 98 units']
  },
  {
    id: '6',
    asmName: 'Vikram Singh',
    modelCode: 'Scorpio N',
    trim: 'Z4',
    exteriorColor: 'Everest White',
    interiorColor: 'Black',
    fsc: 'FSC-2024-006',
    allIndiaPoolStock: 156,
    availableDealerTrims: 'Z4',
    vnaNumber: 'VNA-MH-006',
    matchStatus: 'full',
    oemData: {
      trim: 'Z4',
      exteriorColor: 'Everest White',
      interiorColor: 'Black',
      stock: 156
    },
    dealerData: {
      trim: 'Z4',
      exteriorColor: 'Everest White',
      interiorColor: 'Black',
      stock: 156
    }
  },
  {
    id: '7',
    asmName: 'Anjali Verma',
    modelCode: 'XUV300',
    trim: 'W8(O)',
    exteriorColor: 'Red Rage',
    interiorColor: 'Black',
    fsc: 'FSC-2024-007',
    allIndiaPoolStock: 78,
    availableDealerTrims: 'W8, W6',
    vnaNumber: 'VNA-KA-007',
    matchStatus: 'missing',
    oemData: {
      trim: 'W8(O)',
      exteriorColor: 'Red Rage',
      interiorColor: 'Black',
      stock: 78
    },
    insights: ['Color mismatch between OEM and dealer', 'Trim available but not allocated']
  },
  {
    id: '8',
    asmName: 'Pradeep Malhotra',
    modelCode: 'XUV700',
    trim: 'AX5 Petrol',
    exteriorColor: 'Midnight Black',
    interiorColor: 'Tan',
    fsc: 'FSC-2024-008',
    allIndiaPoolStock: 203,
    availableDealerTrims: 'AX5 Petrol, AX3',
    vnaNumber: 'VNA-RJ-008',
    matchStatus: 'full',
    oemData: {
      trim: 'AX5 Petrol',
      exteriorColor: 'Midnight Black',
      interiorColor: 'Tan',
      stock: 203
    },
    dealerData: {
      trim: 'AX5 Petrol',
      exteriorColor: 'Midnight Black',
      interiorColor: 'Tan',
      stock: 203
    }
  },
  {
    id: '9',
    asmName: 'Vikram Singh',
    modelCode: 'Scorpio N',
    trim: 'Z8',
    exteriorColor: 'Molten Red',
    interiorColor: 'Black',
    fsc: 'FSC-2024-009',
    allIndiaPoolStock: 45,
    availableDealerTrims: 'Z8',
    vnaNumber: 'VNA-MH-009',
    matchStatus: 'partial',
    oemData: {
      trim: 'Z8',
      exteriorColor: 'Molten Red',
      interiorColor: 'Black',
      stock: 45
    },
    dealerData: {
      trim: 'Z8',
      exteriorColor: 'Deep Red',
      interiorColor: 'Black',
      stock: 45
    },
    insights: ['Color mismatch: OEM shows "Molten Red", dealer shows "Deep Red"']
  },
  {
    id: '10',
    asmName: 'Anjali Verma',
    modelCode: 'Thar',
    trim: 'AX(O) Convertible',
    exteriorColor: 'Napoli Black',
    interiorColor: 'Tan',
    fsc: 'FSC-2024-010',
    allIndiaPoolStock: 189,
    availableDealerTrims: 'AX(O) Convertible',
    vnaNumber: 'VNA-KA-010',
    matchStatus: 'full',
    oemData: {
      trim: 'AX(O) Convertible',
      exteriorColor: 'Napoli Black',
      interiorColor: 'Tan',
      stock: 189
    },
    dealerData: {
      trim: 'AX(O) Convertible',
      exteriorColor: 'Napoli Black',
      interiorColor: 'Tan',
      stock: 189
    }
  }
];
