
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { curriculum } from '@/mock/data';

const Curriculum: React.FC = () => {
  const [activeYear, setActiveYear] = useState('1');
  const years = Object.keys(curriculum);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Curriculum View</h1>
          <p className="text-muted-foreground">
            Explore the full curriculum for your program
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
            <Button variant="outline">Download Curriculum</Button>
          </div>
          
          {years.map(year => (
            <TabsContent key={year} value={year}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">1st Semester</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {curriculum[year]['1'].map(course => (
                      <CourseCard 
                        key={course.id} 
                        course={course} 
                        enrolled={course.enrolled}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">2nd Semester</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {curriculum[year]['2'].map(course => (
                      <CourseCard 
                        key={course.id} 
                        course={course} 
                        enrolled={course.enrolled}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default Curriculum;
