
import React from 'react';
import { Task } from '@/mock/data';
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { format } from 'date-fns';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (taskId: string, completed: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete }) => {
  const dueDate = new Date(task.dueDate);
  const isOverdue = !task.completed && new Date() > dueDate;
  
  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <div className={`p-4 border rounded-lg mb-2 ${task.completed ? 'bg-gray-50' : 'bg-white'} ${isOverdue ? 'border-red-300' : ''}`}>
      <div className="flex items-start gap-3">
        <div className="pt-1">
          <Checkbox 
            checked={task.completed}
            onCheckedChange={(checked) => onToggleComplete(task.id, checked as boolean)}
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
              {task.title}
            </h4>
            <div className="flex gap-2">
              <Badge variant="outline" className={priorityColors[task.priority]}>
                {task.priority}
              </Badge>
              {isOverdue && (
                <Badge variant="destructive">Overdue</Badge>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
          <div className="flex justify-between text-xs mt-2">
            <span className="text-muted-foreground">{task.courseName}</span>
            <span className={`${isOverdue ? 'text-red-500 font-medium' : 'text-muted-foreground'}`}>
              Due: {format(dueDate, 'MMM d, yyyy')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
