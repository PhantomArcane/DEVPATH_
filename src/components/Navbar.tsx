
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, BookOpen, Calendar, Home, LogOut, Search, User } from 'lucide-react';
import { currentUser } from '@/mock/data';
import { useToast } from '@/hooks/use-toast';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleProfile = () => {
    toast({
      title: "Profile",
      description: "Profile page coming soon!",
    });
  };

  const handleCalendar = () => {
    toast({
      title: "Calendar",
      description: "Calendar page coming soon!",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <Link to="/dashboard" className="flex items-center gap-2 mr-6">
          <div className="h-6 w-6 bg-primary rounded-md"></div>
          <span className="font-bold text-xl text-primary hidden sm:inline-block">Dev Path Learning</span>
        </Link>
        
        <div className="flex-1 flex justify-center">
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link
              to="/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/courses"
              className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
            >
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">My Courses</span>
            </Link>
            <Link
              to="/course-search"
              className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Find Courses</span>
            </Link>
            <Link
              to="/curriculum"
              className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
            >
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Learning Paths</span>
            </Link>
            <Link
              to="/tasks"
              className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
            >
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Tasks</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={currentUser.profileImage} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{currentUser.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {currentUser.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleProfile} className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCalendar} className="cursor-pointer">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
