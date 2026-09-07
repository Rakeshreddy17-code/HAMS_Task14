export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  department: string;
  experience: number;
  rating: number;
  patients: number;
  fee: number;
  image: string;
  available: boolean;
  qualification: string;
  about: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Appointment {
  id: number;
  doctorId: number;
  doctorName: string;
  patientName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
  status: "Upcoming" | "Completed" | "Cancelled";
}