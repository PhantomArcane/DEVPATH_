
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Course } from '@/mock/data';

interface CourseCardProps {
  course: Course;
  enrolled?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, enrolled = false }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <img
          src={course.imageUrl || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'}
          alt={course.name}
          className="w-full h-full object-cover"
        />
        {enrolled && (
          <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
            Enrolled
          </div>
        )}
      </div>
      <CardHeader className="p-4 pb-2 bg-yellow-500 text-black">
        <div className="flex flex-col items-start">
          <p className="text-sm font-medium">{course.code}</p>
          <h3 className="font-bold text-lg text-black">{course.name}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 bg-yellow-500 text-black flex-grow">
        <p className="text-sm line-clamp-2">
          {course.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 bg-yellow-500 text-black text-sm">
        <div className="w-full flex justify-between items-center">
          <span>Year {course.year}, Sem {course.semester}</span>
          <span>{course.credits} Credits</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
