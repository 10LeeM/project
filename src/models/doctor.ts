interface IDoctor {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  connectyCubeID: string;
  location: string;
  speciality: string;
  status: "pending" | "verified";
  photo: string;
  licence: string;
  userId: string;
  created: string;
  consultationFee: number;
}

export type { IDoctor };
