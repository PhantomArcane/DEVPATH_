
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [studentNumber, setStudentNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [semester, setSemester] = useState('Summer (2025)');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - in a real app, this would be an API call
    setTimeout(() => {
      // Mock authentication
      if (userId.endsWith('@tip.edu.ph') || studentNumber) {
        toast({
          title: "Login successful",
          description: "Welcome to ARIS Portal!"
        });
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Please enter valid credentials"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-[400px] p-4">
        <div className="flex flex-col items-center justify-center space-y-6 mb-8">
          <h1 className="text-5xl font-bold tracking-wider text-black">ARIS PORTAL MANILA</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Input 
              placeholder="Student Number" 
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
              className="border border-gray-300 rounded-md h-12"
            />
          </div>
          
          <div>
            <Input 
              placeholder="User ID" 
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="border border-gray-300 rounded-md h-12"
            />
          </div>
          
          <div>
            <Input 
              placeholder="Password" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md h-12"
            />
          </div>
          
          <div>
            <Select value={semester} onValueChange={setSemester}>
              <SelectTrigger className="w-full h-12 border border-gray-300 rounded-md bg-white text-black flex justify-between items-center px-4">
                <SelectValue placeholder="Select semester">{semester}</SelectValue>
                <ChevronDown className="h-4 w-4" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="Summer (2025)">Summer (2025)</SelectItem>
                <SelectItem value="Second Semester (2024-2025)">Second Semester (2024-2025)</SelectItem>
                <SelectItem value="First Semester (2024-2025)">First Semester (2024-2025)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 bg-[#FFD700] hover:bg-[#F0C800] text-black font-semibold rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
