
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { courses, codingLessons } from '@/mock/data';
import { ArrowLeft, Clock, CalendarDays, GraduationCap, BookOpen } from 'lucide-react';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container px-4 py-8">
          <Button variant="outline" onClick={() => navigate(-1)} className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to courses
          </Button>
          <div className="text-center p-12">
            <h1 className="text-2xl font-bold mb-4">Course not found</h1>
            <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/courses')}>View all courses</Button>
          </div>
        </div>
      </div>
    );
  }

  const lessons = codingLessons[course.code] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 py-8">
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to courses
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 lg:h-64 relative">
                <img 
                  src={course.imageUrl} 
                  alt={course.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="px-8 py-4 text-white">
                    <h1 className="text-3xl font-bold mb-2">{course.name}</h1>
                    <p className="text-yellow-400 text-lg">{course.code}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>{course.credits} Credits</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>Year {course.year}, Sem {course.semester}</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>{course.instructor}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold mb-4">About this course</h2>
                <p className="text-muted-foreground mb-6">{course.description}</p>
                
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4">Learning Path</h2>
                  <div className="space-y-4">
                    {lessons.map((lesson, index) => (
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
                </div>
                
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Start Learning Path</Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Materials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <BookOpen className="h-5 w-5 text-yellow-500" />
                  <span>Course syllabus</span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <BookOpen className="h-5 w-5 text-yellow-500" />
                  <span>Lecture notes</span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <BookOpen className="h-5 w-5 text-yellow-500" />
                  <span>Practice exercises</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Related Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses
                  .filter(c => c.id !== course.id && c.year === course.year)
                  .slice(0, 3)
                  .map(relatedCourse => (
                    <div 
                      key={relatedCourse.id} 
                      className="flex gap-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                      onClick={() => navigate(`/courses/${relatedCourse.id}`)}
                    >
                      <div>
                        <p className="font-medium">{relatedCourse.name}</p>
                        <p className="text-xs text-muted-foreground">{relatedCourse.code}</p>
                      </div>
                    </div>
                  ))
                }
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
