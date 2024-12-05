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
}

export const mockData: Work[] = [
  {
    id: 1,
    uniformColor: "Blue",
    schoolName: "Greenwood High",
    schoolAddress: "123 Elm Street, Springfield",
    assignedMemberId: 101,
  },
  {
    id: 2,
    uniformColor: "Red",
    schoolName: "Springfield Elementary",
    schoolAddress: "456 Maple Avenue, Springfield",
    assignedMemberId: 102,
  },
  {
    id: 3,
    uniformColor: "Green",
    schoolName: "Hillside School",
    schoolAddress: "789 Oak Lane, Hillview",
    assignedMemberId: 103,
  },
  {
    id: 4,
    uniformColor: "Yellow",
    schoolName: "Sunnydale High",
    schoolAddress: "101 Sun Street, Sunnydale",
    assignedMemberId: 104,
  },
];
