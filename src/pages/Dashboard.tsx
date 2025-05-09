
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, GraduationCap, BarChart3, BookOpen } from "lucide-react";
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import TaskItem from '@/components/TaskItem';
import { currentUser, courses, tasks } from '@/mock/data';

const Dashboard: React.FC = () => {
  const enrolledCourses = courses.filter(course => course.enrolled);
  const upcomingTasks = tasks.filter(task => !task.completed).slice(0, 3);
  
  const handleToggleComplete = (taskId: string, completed: boolean) => {
    console.log(`Task ${taskId} marked as ${completed ? 'complete' : 'incomplete'}`);
    // In a real app, this would update the task in the database
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Main Content */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Welcome Section */}
            <section>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {currentUser.name.split(' ')[0]}</h1>
              <p className="text-muted-foreground">
                {currentUser.program} • Year {currentUser.year} • {currentUser.studentId}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <Card className="bg-yellow-400 text-black">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
                    <BookOpen className="h-4 w-4 text-black" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{enrolledCourses.length}</div>
                    <p className="text-xs text-black/70">Active courses</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-yellow-400 text-black">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                    <Calendar className="h-4 w-4 text-black" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{tasks.filter(t => !t.completed).length}</div>
                    <p className="text-xs text-black/70">Assignments & quizzes</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-yellow-400 text-black">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Academic Progress</CardTitle>
                    <GraduationCap className="h-4 w-4 text-black" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">75%</div>
                    <p className="text-xs text-black/70">Towards your degree</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-yellow-400 text-black">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">GPA</CardTitle>
                    <BarChart3 className="h-4 w-4 text-black" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.7</div>
                    <p className="text-xs text-black/70">Current GPA</p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            {/* My Courses Section */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">My Coding Courses</h2>
                <Link to="/courses">
                  <Button variant="ghost" size="sm">View all</Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {enrolledCourses.slice(0, 3).map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Upcoming Tasks */}
            <Card className="bg-yellow-400 text-black overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <Link to="/tasks">
                    <Button variant="ghost" size="sm">View all</Button>
                  </Link>
                </div>
                <CardDescription className="text-black/70">
                  You have {tasks.filter(t => !t.completed).length} pending tasks
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white text-black">
                <div className="space-y-4">
                  {upcomingTasks.length > 0 ? (
                    upcomingTasks.map(task => (
                      <TaskItem 
                        key={task.id}
                        task={task}
                        onToggleComplete={handleToggleComplete}
                      />
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground py-6">
                      No pending tasks. Great job!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
            
            {/* Announcements */}
            <Card className="bg-yellow-400 text-black">
              <CardHeader>
                <CardTitle>Announcements</CardTitle>
              </CardHeader>
              <CardContent className="bg-white text-black">
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <p className="font-medium">Coding Challenge Posted</p>
                    <p className="text-sm text-muted-foreground">Join the weekly coding challenge for extra credit</p>
                    <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <p className="font-medium">Tech Industry Webinar</p>
                    <p className="text-sm text-muted-foreground">Meet industry experts this Friday</p>
                    <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
