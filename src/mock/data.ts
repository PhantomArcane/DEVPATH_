
export interface Course {
  id: string;
  code: string;
  name: string;
  description: string;
  instructor: string;
  year: number;
  semester: number;
  credits: number;
  enrolled: boolean;
  imageUrl: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  courseId: string;
  courseName: string;
  dueDate: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface User {
  id: string;
  name: string;
  email: string;
  studentId: string;
  program: string;
  year: number;
  profileImage: string;
}

export const currentUser: User = {
  id: "1",
  name: "Juan Dela Cruz",
  email: "jdelacruz@tip.edu.ph",
  studentId: "TUPT-18-0001",
  program: "BS Computer Science",
  year: 3,
  profileImage: "https://i.pravatar.cc/300?img=8"
};

export const courses: Course[] = [
  {
    id: "1",
    code: "CSC101",
    name: "Introduction to Programming",
    description: "Fundamentals of programming using Python language.",
    instructor: "Dr. Maria Santos",
    year: 1,
    semester: 1,
    credits: 3,
    enrolled: true,
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000"
  },
  {
    id: "2",
    code: "CSC201",
    name: "Data Structures and Algorithms",
    description: "Study of data structures and algorithms for efficient problem solving.",
    instructor: "Engr. Roberto Tiongson",
    year: 2,
    semester: 1,
    credits: 4,
    enrolled: true,
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000"
  },
  {
    id: "3",
    code: "CSC301",
    name: "Database Systems",
    description: "Introduction to database design, development, and management.",
    instructor: "Prof. Ana Reyes",
    year: 2,
    semester: 2,
    credits: 3,
    enrolled: true,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000"
  },
  {
    id: "4",
    code: "CSC401",
    name: "Software Engineering",
    description: "Principles and practices of software development life cycle.",
    instructor: "Dr. Jose Rizal",
    year: 3,
    semester: 1,
    credits: 4,
    enrolled: true,
    imageUrl: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=1000"
  },
  {
    id: "5",
    code: "MTH101",
    name: "Calculus I",
    description: "Limits, derivatives, and integration of functions of one variable.",
    instructor: "Prof. Elena Magtanggol",
    year: 1,
    semester: 1,
    credits: 4,
    enrolled: false,
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000"
  },
  {
    id: "6",
    code: "PHY201",
    name: "General Physics",
    description: "Classical mechanics, thermodynamics, and electromagnetism.",
    instructor: "Dr. Benjamin Luna",
    year: 1,
    semester: 2,
    credits: 4,
    enrolled: false,
    imageUrl: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1000"
  },
];

export const tasks: Task[] = [
  {
    id: "1",
    title: "Programming Assignment 3",
    description: "Complete exercises 5-10 in Chapter 7",
    courseId: "1",
    courseName: "Introduction to Programming",
    dueDate: "2025-05-15",
    completed: false,
    priority: "high"
  },
  {
    id: "2",
    title: "Algorithm Analysis Report",
    description: "Write a comparative analysis of sorting algorithms",
    courseId: "2",
    courseName: "Data Structures and Algorithms",
    dueDate: "2025-05-10",
    completed: false,
    priority: "medium"
  },
  {
    id: "3",
    title: "Database Design Project",
    description: "Submit ER diagram and schema for library system",
    courseId: "3",
    courseName: "Database Systems",
    dueDate: "2025-05-20",
    completed: false,
    priority: "high"
  },
  {
    id: "4",
    title: "Software Requirements Doc",
    description: "Complete Section 3: User Stories",
    courseId: "4",
    courseName: "Software Engineering",
    dueDate: "2025-05-12",
    completed: true,
    priority: "medium"
  },
  {
    id: "5",
    title: "Midterm Review Quiz",
    description: "Take practice quiz for chapters 1-5",
    courseId: "2",
    courseName: "Data Structures and Algorithms",
    dueDate: "2025-05-08",
    completed: true,
    priority: "low"
  },
];

export const curriculum: { [key: string]: { [key: string]: Course[] } } = {
  "1": {
    "1": [
      {
        id: "101",
        code: "GEC101",
        name: "Understanding the Self",
        description: "Exploration of the self in relation to identity, society, and personal goals.",
        instructor: "Dr. Pedro Balagtas",
        year: 1,
        semester: 1,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=1000"
      },
      {
        id: "102",
        code: "MTH101",
        name: "Calculus I",
        description: "Limits, derivatives, and integration of functions of one variable.",
        instructor: "Prof. Elena Magtanggol",
        year: 1,
        semester: 1,
        credits: 4,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000"
      },
      {
        id: "103",
        code: "CSC101",
        name: "Introduction to Programming",
        description: "Fundamentals of programming using Python language.",
        instructor: "Dr. Maria Santos",
        year: 1,
        semester: 1,
        credits: 3,
        enrolled: true,
        imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000"
      }
    ],
    "2": [
      {
        id: "104",
        code: "GEC102",
        name: "Readings in Philippine History",
        description: "Historical analysis of Philippine development as a nation.",
        instructor: "Prof. Juan Bonifacio",
        year: 1,
        semester: 2,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000"
      },
      {
        id: "105",
        code: "MTH102",
        name: "Calculus II",
        description: "Applications of integration, infinite sequences and series.",
        instructor: "Prof. Elena Magtanggol",
        year: 1,
        semester: 2,
        credits: 4,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1000"
      },
      {
        id: "106",
        code: "PHY201",
        name: "General Physics",
        description: "Classical mechanics, thermodynamics, and electromagnetism.",
        instructor: "Dr. Benjamin Luna",
        year: 1,
        semester: 2,
        credits: 4,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1000"
      }
    ]
  },
  "2": {
    "1": [
      {
        id: "201",
        code: "CSC201",
        name: "Data Structures and Algorithms",
        description: "Study of data structures and algorithms for efficient problem solving.",
        instructor: "Engr. Roberto Tiongson",
        year: 2,
        semester: 1,
        credits: 4,
        enrolled: true,
        imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000"
      },
      {
        id: "202",
        code: "CSC202",
        name: "Computer Architecture",
        description: "Organization and design of computer systems.",
        instructor: "Dr. Felix Manalo",
        year: 2,
        semester: 1,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
      }
    ],
    "2": [
      {
        id: "203",
        code: "CSC301",
        name: "Database Systems",
        description: "Introduction to database design, development, and management.",
        instructor: "Prof. Ana Reyes",
        year: 2,
        semester: 2,
        credits: 3,
        enrolled: true,
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000"
      },
      {
        id: "204",
        code: "CSC302",
        name: "Object-Oriented Programming",
        description: "Design and implementation using object-oriented principles.",
        instructor: "Engr. Carlos Magno",
        year: 2,
        semester: 2,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1000"
      }
    ]
  },
  "3": {
    "1": [
      {
        id: "301",
        code: "CSC401",
        name: "Software Engineering",
        description: "Principles and practices of software development life cycle.",
        instructor: "Dr. Jose Rizal",
        year: 3,
        semester: 1,
        credits: 4,
        enrolled: true,
        imageUrl: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=1000"
      },
      {
        id: "302",
        code: "CSC402",
        name: "Web Development",
        description: "Client-side and server-side programming for web applications.",
        instructor: "Prof. Lilia Ferrer",
        year: 3,
        semester: 1,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000"
      }
    ],
    "2": [
      {
        id: "303",
        code: "CSC403",
        name: "Artificial Intelligence",
        description: "Fundamentals of AI including search, knowledge representation, and learning.",
        instructor: "Dr. Gloria Santiago",
        year: 3,
        semester: 2,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1677442135136-760009dba4d3?q=80&w=1000"
      },
      {
        id: "304",
        code: "CSC404",
        name: "Mobile Application Development",
        description: "Programming for mobile devices and platforms.",
        instructor: "Engr. Teodoro Cruz",
        year: 3,
        semester: 2,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?q=80&w=1000"
      }
    ]
  },
  "4": {
    "1": [
      {
        id: "401",
        code: "CSC501",
        name: "Cybersecurity",
        description: "Security principles, threats, vulnerabilities, and protection methods.",
        instructor: "Dr. Ramon Reyes",
        year: 4,
        semester: 1,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1000"
      },
      {
        id: "402",
        code: "CSC502",
        name: "Capstone Project I",
        description: "First part of the culminating project in the program.",
        instructor: "Prof. Victoria Gomez",
        year: 4,
        semester: 1,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000"
      }
    ],
    "2": [
      {
        id: "403",
        code: "CSC503",
        name: "Cloud Computing",
        description: "Principles, architecture, and applications of cloud computing.",
        instructor: "Engr. Rafael Torres",
        year: 4,
        semester: 2,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000"
      },
      {
        id: "404",
        code: "CSC504",
        name: "Capstone Project II",
        description: "Completion and presentation of the capstone project.",
        instructor: "Prof. Victoria Gomez",
        year: 4,
        semester: 2,
        credits: 3,
        enrolled: false,
        imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000"
      }
    ]
  }
};
