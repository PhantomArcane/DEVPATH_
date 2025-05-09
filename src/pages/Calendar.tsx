
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { tasks } from '@/mock/data';
import { format } from 'date-fns';

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Get tasks for the selected date
  const selectedDateTasks = tasks.filter(task => {
    if (!date) return false;
    const taskDate = new Date(task.dueDate);
    return (
      taskDate.getDate() === date.getDate() &&
      taskDate.getMonth() === date.getMonth() &&
      taskDate.getFullYear() === date.getFullYear()
    );
  });

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Calendar</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-white rounded-lg shadow p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border-none"
            />
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardHeader className="bg-yellow-500 text-black">
                <h2 className="text-xl font-bold">
                  {date ? format(date, 'MMMM d, yyyy') : 'No date selected'}
                </h2>
              </CardHeader>
              <CardContent className="p-4">
                {selectedDateTasks.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="font-medium">Tasks due on this date:</h3>
                    <ul className="space-y-2">
                      {selectedDateTasks.map(task => (
                        <li key={task.id} className="border-l-4 border-yellow-500 pl-3 py-2">
                          <div className="font-medium">{task.title}</div>
                          <div className="text-sm text-gray-600">{task.description}</div>
                          <div className="text-xs mt-1">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              task.priority === 'high' ? 'bg-red-100 text-red-800' : 
                              task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-green-100 text-green-800'
                            }`}>
                              {task.priority} priority
                            </span>
                            <span className="ml-2">{task.courseName}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    No tasks due on this date
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
