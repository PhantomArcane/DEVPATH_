
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { curriculum } from '@/mock/data';

interface LessonInfo {
  title: string;
  description: string;
  duration: string;
}

interface CourseLesson {
  [key: string]: LessonInfo[];
}

const codingLessons: CourseLesson = {
  "CSC101": [
    { 
      title: "Introduction to Python", 
      description: "Learn the syntax and basic concepts of Python programming language", 
      duration: "45 min" 
    },
    { 
      title: "Variables and Data Types", 
      description: "Understanding different variable types and data structures", 
      duration: "30 min" 
    },
    { 
      title: "Control Flow", 
      description: "Working with conditional statements and loops", 
      duration: "40 min" 
    }
  ],
  "CSC201": [
    { 
      title: "Array Fundamentals", 
      description: "Understanding array operations and implementation", 
      duration: "35 min" 
    },
    { 
      title: "Linked Lists", 
      description: "Implementation and operations on singly and doubly linked lists", 
      duration: "50 min" 
    },
    { 
      title: "Sorting Algorithms", 
      description: "Learning different sorting techniques with time complexity analysis", 
      duration: "60 min" 
    }
  ],
  "CSC301": [
    { 
      title: "Database Design", 
      description: "Entity-relationship modeling and normalization", 
      duration: "40 min" 
    },
    { 
      title: "SQL Fundamentals", 
      description: "Writing basic and advanced SQL queries", 
      duration: "55 min" 
    },
    { 
      title: "Database Management", 
      description: "Transactions, indexing, and optimization techniques", 
      duration: "45 min" 
    }
  ],
  "CSC401": [
    { 
      title: "Software Development Lifecycle", 
      description: "Understanding different phases of software development", 
      duration: "30 min" 
    },
    { 
      title: "Agile Methodology", 
      description: "Principles of agile development and scrum framework", 
      duration: "45 min" 
    },
    { 
      title: "Requirements Engineering", 
      description: "Gathering, analyzing and documenting software requirements", 
      duration: "50 min" 
    }
  ],
  "CSC402": [
    { 
      title: "HTML & CSS Basics", 
      description: "Building structure and styling for web pages", 
      duration: "40 min" 
    },
    { 
      title: "JavaScript Fundamentals", 
      description: "Adding interactivity to web pages using JavaScript", 
      duration: "60 min" 
    },
    { 
      title: "Backend Development", 
      description: "Server-side programming with Node.js", 
      duration: "55 min" 
    }
  ],
  "CSC403": [
    { 
      title: "AI Fundamentals", 
      description: "Core concepts of artificial intelligence", 
      duration: "45 min" 
    },
    { 
      title: "Machine Learning Basics", 
      description: "Understanding supervised and unsupervised learning", 
      duration: "60 min" 
    },
    { 
      title: "Neural Networks", 
      description: "Building and training basic neural networks", 
      duration: "70 min" 
    }
  ],
  "CSC404": [
    { 
      title: "Mobile UI Design", 
      description: "Design principles for mobile interfaces", 
      duration: "35 min" 
    },
    { 
      title: "Native App Development", 
      description: "Building apps for iOS and Android", 
      duration: "65 min" 
    },
    { 
      title: "Cross-platform Development", 
      description: "Using React Native and Flutter", 
      duration: "50 min" 
    }
  ]
};

const Curriculum: React.FC = () => {
  const [activeYear, setActiveYear] = useState('1');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const years = Object.keys(curriculum);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Learning Paths</h1>
          <p className="text-muted-foreground">
            Programming courses with guided lessons for developers
          </p>
        </div>
        
        <Tabs defaultValue="1" value={activeYear} onValueChange={setActiveYear}>
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              {years.map(year => (
                <TabsTrigger key={year} value={year}>
                  Year {year}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button variant="outline">Download Path Map</Button>
          </div>
          
          {years.map(year => (
            <TabsContent key={year} value={year}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">1st Semester</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {curriculum[year]['1']
                      .filter(course => course.code.startsWith('CSC') || course.name.includes('Programming') || course.name.includes('Data'))
                      .map(course => (
                        <div key={course.id} onClick={() => setSelectedCourse(course.code)}>
                          <CourseCard 
                            course={course} 
                            enrolled={course.enrolled}
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">2nd Semester</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {curriculum[year]['2']
                      .filter(course => course.code.startsWith('CSC') || course.name.includes('Programming') || course.name.includes('Data'))
                      .map(course => (
                        <div key={course.id} onClick={() => setSelectedCourse(course.code)}>
                          <CourseCard 
                            course={course} 
                            enrolled={course.enrolled}
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>

              {/* Course lessons modal */}
              {selectedCourse && codingLessons[selectedCourse] && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <Card className="w-full max-w-2xl overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>{selectedCourse}: {curriculum[activeYear][selectedCourse?.charAt(3) === '1' || selectedCourse?.charAt(3) === '2' ? '1' : '2']
                            .find(course => course.code === selectedCourse)?.name}</CardTitle>
                          <CardDescription>
                            Short lessons to help you master this course
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedCourse(null)}>×</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {codingLessons[selectedCourse].map((lesson, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:bg-yellow-50 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">{lesson.title}</h3>
                                <p className="text-sm text-muted-foreground">{lesson.description}</p>
                              </div>
                              <span className="text-xs bg-yellow-100 px-2 py-1 rounded-full">
                                {lesson.duration}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Start Learning Path</Button>
                    </CardFooter>
                  </Card>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default Curriculum;
