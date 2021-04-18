interface IProduct {
  id: string;
  name: string;
  serialNumber: string;
  currentPrice: string;
  pastPrice: string;
  image: string;
  description: string;
  quantity: string;
  effects: string;
  pharmacyId: string;
}

interface IOrder {
  id: string;
  patientId: string;
  pharmacyId: string;
}

interface IPharmacy {
  id: string;
  name: string;
  email: string;
  logo: string;
  location: string;
  country: string;
  description: string;
  createdAt: string;
  coordinates: {};
  userId: string;
}

export type { IProduct, IOrder, IPharmacy };
