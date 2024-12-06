export interface Member {
  id: number;
  memberId: string;
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
  assignedMemberId: string;
  status: "pending" | "completed" | "progressing";
}

export const mockData: Work[] = [
  {
    id: 1,
    uniformColor: "Blue",
    schoolName: "Greenwood High",
    schoolAddress: "123 Elm Street, Springfield",
    assignedMemberId: "M1",
    status: "completed",
  },
  {
    id: 2,
    uniformColor: "Red",
    schoolName: "Springfield Elementary",
    schoolAddress: "456 Maple Avenue, Springfield",
    assignedMemberId: "M2",
    status: "progressing",
  },
  {
    id: 3,
    uniformColor: "Green",
    schoolName: "Hillside School",
    schoolAddress: "789 Oak Lane, Hillview",
    assignedMemberId: "M3",
    status: "pending",
  },
  {
    id: 4,
    uniformColor: "Yellow",
    schoolName: "Lakeshore Academy",
    schoolAddress: "101 Sun Street, Sunnydale",
    assignedMemberId: "M4",
    status: "progressing",
  },
  {
    id: 5,
    uniformColor: "Yellow",
    schoolName: "Meadowbrook Academy",
    schoolAddress: "101 Sun Street, Sunnydale",
    assignedMemberId: "M5",
    status: "completed",
  },
  {
    id: 6,
    uniformColor: "Yellow",
    schoolName: "Blue Ridge Academy",
    schoolAddress: "101 Sun Street, Sunnydale",
    assignedMemberId: "M1",
    status: "pending",
  },
  {
    id: 7,
    uniformColor: "Yellow",
    schoolName: "Riverside Secondary School",
    schoolAddress: "101 Sun Street, Sunnydale",
    assignedMemberId: "M2",
    status: "completed",
  },
  {
    id: 8,
    uniformColor: "Yellow",
    schoolName: "Cedarwood High",
    schoolAddress: "101 Sun Street, Sunnydale",
    assignedMemberId: "M8",
    status: "completed",
  },
  {
    id: 9,
    uniformColor: "Yellow",
    schoolName: "Evergreen Primary",
    schoolAddress: "101 Sun Street, Sunnydale",
    assignedMemberId: "M1",
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
    isBlocked: false,
    workDetails: [
      {
        workId: 1,
        schoolName: "Greenwood High School",
        status: "Shipped",
        shippedDate: "2023-09-10",
      },
      {
        workId: 2,
        schoolName: "Springfield Elementary",
        status: "Pending",
      },
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
    isBlocked: false,
    workDetails: [
      {
        workId: 6,
        schoolName: "Blue Ridge Academy",
        status: "Delivered",
        shippedDate: "2023-09-08",
        deliveredDate: "2023-09-15",
        creditedAmount: "$1000",
      },
      {
        workId: 7,
        schoolName: "Riverside Secondary School",
        status: "Shipped",
        shippedDate: "2023-09-11",
      },
    ],
  },
  {
    id: 3,
    memberId: "M3",
    name: "Sophia Williams",
    email: "sophia.williams@example.com",
    joinDate: "2022-05-20",
    role: "Coordinator",
    profileImage: "https://via.placeholder.com/150",
    isBlocked: false,
    workDetails: [
      {
        workId: 3,
        schoolName: "Oakwood Academy",
        status: "Delivered",
        shippedDate: "2023-08-05",
        deliveredDate: "2023-08-10",
        creditedAmount: "$750",
      },
      {
        workId: 4,
        schoolName: "Sunnydale High School",
        status: "Pending",
      },
    ],
  },
  {
    id: 4,
    memberId: "M4",
    name: "James Brown",
    email: "james.brown@example.com",
    joinDate: "2020-03-12",
    role: "Supervisor",
    profileImage: "https://via.placeholder.com/150",
    isBlocked: false,
    workDetails: [
      {
        workId: 5,
        schoolName: "Hillcrest Secondary School",
        status: "Shipped",
        shippedDate: "2023-09-12",
      },
      {
        workId: 8,
        schoolName: "Willow Creek Academy",
        status: "Pending",
      },
    ],
  },
  {
    id: 5,
    memberId: "M5",
    name: "Emma Davis",
    email: "emma.davis@example.com",
    joinDate: "2021-07-01",
    role: "Teacher",
    profileImage: "https://via.placeholder.com/150",
    isBlocked: false,
    workDetails: [
      {
        workId: 9,
        schoolName: "Lakeside High School",
        status: "Delivered",
        shippedDate: "2023-08-20",
        deliveredDate: "2023-08-25",
        creditedAmount: "$500",
      },
    ],
  },
];
