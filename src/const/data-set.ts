export interface Member {
  id: number;
  memberId: string; // Example: "M1", "M2"
  name: string;
  workAssigned: string[];
  isBlocked: boolean;
}

export const mockMembers: Member[] = [
  {
    id: 1,
    memberId: "M1",
    name: "John Doe",
    workAssigned: ["Greenwood High", "Springfield Elementary"],
    isBlocked: false,
  },
  {
    id: 2,
    memberId: "M2",
    name: "Jane Smith",
    workAssigned: ["Hillside School", "Sunnydale High"],
    isBlocked: true,
  },
  {
    id: 3,
    memberId: "M3",
    name: "Michael Brown",
    workAssigned: ["Riverside Academy"],
    isBlocked: false,
  },
  {
    id: 4,
    memberId: "M4",
    name: "Emily Davis",
    workAssigned: ["Hilltop School"],
    isBlocked: false,
  },
];

export interface Work {
  id: number;
  uniformColor: string;
  schoolName: string;
  schoolAddress: string;
  assignedMemberId: number;
  status: "pending" | "completed" | "progressing";
}

export const mockData: Work[] = [
  {
    id: 1,
    uniformColor: "Blue",
    schoolName: "Greenwood High",
    schoolAddress: "123 Elm Street, Springfield",
    assignedMemberId: 101,
    status: "completed",
  },
  {
    id: 2,
    uniformColor: "Red",
    schoolName: "Springfield Elementary",
    schoolAddress: "456 Maple Avenue, Springfield",
    assignedMemberId: 102,
    status: "progressing",
  },
  {
    id: 3,
    uniformColor: "Green",
    schoolName: "Hillside School",
    schoolAddress: "789 Oak Lane, Hillview",
    assignedMemberId: 103,
    status: "pending",
  },
  {
    id: 4,
    uniformColor: "Yellow",
    schoolName: "Sunnydale High",
    schoolAddress: "101 Sun Street, Sunnydale",
    assignedMemberId: 104,
    status: "progressing",
  },
  {
    id: 5,
    uniformColor: "Yellow",
    schoolName: "Sunnydale High",
    schoolAddress: "101 Sun Street, Sunnydale",
    assignedMemberId: 104,
    status: "completed",
  },
];

export const users = [
  {
    id: 1,
    memberId: "M1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    joinDate: "2023-02-15",
    role: "Teacher",
    profileImage: "https://via.placeholder.com/150",
    workDetails: [
      { schoolName: "Greenwood High School", status: "Shipped" },
      { schoolName: "Springfield Elementary", status: "Pending" },
    ],
  },
  {
    id: 2,
    memberId: "M2",
    name: "Michael Smith",
    email: "michael.smith@example.com",
    joinDate: "2021-10-10",
    role: "Principal",
    profileImage: "https://via.placeholder.com/150",
    workDetails: [
      { schoolName: "Blue Ridge Academy", status: "Delivered" },
      { schoolName: "Riverside Secondary School", status: "Shipped" },
    ],
  },
  {
    id: 3,
    memberId: "M3",
    name: "Sophia Brown",
    email: "sophia.brown@example.com",
    joinDate: "2022-07-20",
    role: "Administrator",
    profileImage: "https://via.placeholder.com/150",
    workDetails: [
      { schoolName: "Hillside High", status: "Delivered" },
      { schoolName: "Lakeshore Academy", status: "Pending" },
      { schoolName: "Evergreen Primary", status: "Shipped" },
    ],
  },
  {
    id: 4,
    memberId: "M4",
    name: "James Wilson",
    email: "james.wilson@example.com",
    joinDate: "2020-05-01",
    role: "Supervisor",
    profileImage: "https://via.placeholder.com/150",
    workDetails: [
      { schoolName: "Cedarwood High", status: "Delivered" },
      { schoolName: "Meadowbrook Academy", status: "Pending" },
    ],
  },
];
