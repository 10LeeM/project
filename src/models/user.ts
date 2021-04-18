type Role = "client" | "doctor" | "admin" | "pharmacy";

interface User {
  id: string;
  login: string;
  role: Role;
  fullName: string;
  name: string;
  phoneNumber: string;
  email: string;
  connectyCubeID: string;
  photo: string;
  userId: string;
  password: string;
}

interface IPatient extends User {
  height: string;
  weight: string;
  nextOfKin: string;
  address: string;
}

interface IDoctor extends User {
  location: string;
  speciality: string;
  status: "pending" | "approved";
  licence: string;
  created: string;
  cost: number;
}

export type { User, IPatient, IDoctor, Role };
