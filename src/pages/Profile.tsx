
import React from 'react';
import { currentUser, courses } from '@/mock/data';
import { Layout } from '@/components/Layout';

const Profile = () => {
  const enrolledCourses = courses.filter(course => course.enrolled);

  return (
    <Layout>
      <div className="container py-8">
        <div className="bg-yellow-500 rounded-lg p-8 text-black">
          <h1 className="text-4xl font-bold mb-4">Profile</h1>
          <p className="text-lg mb-8">
            Welcome to your profile page. Here you can view and update your personal information.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold">Name:</span> {currentUser.name}</li>
              <li><span className="font-bold">Student ID:</span> {currentUser.studentId}</li>
              <li><span className="font-bold">Program:</span> {currentUser.program}</li>
              <li><span className="font-bold">Year:</span> {currentUser.year}</li>
              <li><span className="font-bold">Section:</span> {currentUser.studentId}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
            <ul className="list-disc pl-6 space-y-2">
              {enrolledCourses.map(course => (
                <li key={course.id}>{course.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
