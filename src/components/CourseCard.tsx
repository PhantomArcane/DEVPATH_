
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Course } from '@/mock/data';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
  enrolled?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, enrolled = true }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md hover:shadow-primary/20 transition-shadow duration-300 border-primary/30">
      <Link to={`/courses/${course.id}`}>
        <div className="relative h-40 overflow-hidden">
          <img
            src={course.imageUrl}
            alt={course.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {enrolled && (
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              Enrolled
            </div>
          )}
        </div>
        <CardHeader className="p-4 pb-0">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-muted-foreground">{course.code}</p>
              <h3 className="font-bold text-foreground">{course.name}</h3>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
          <div className="w-full flex justify-between items-center">
            <span>Year {course.year}, Sem {course.semester}</span>
            <span>{course.credits} Credits</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default CourseCard;
