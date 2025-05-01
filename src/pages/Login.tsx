
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - in a real app, this would be an API call
    setTimeout(() => {
      // Mock authentication
      if (email.endsWith('@tip.edu.ph')) {
        toast({
          title: "Login successful",
          description: "Welcome back to LearnAhead Portal!"
        });
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Please use a valid TIP email address"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center p-4 order-2 md:order-1">
          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-md"></div>
              <h1 className="text-3xl font-bold text-primary">LearnAhead</h1>
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Sign in to your TIP student account to access your courses, assignments, and more.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your TIP email and password to access your account
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="youremail@tip.edu.ph"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button type="button" variant="link" className="p-0 h-auto text-xs">
                      Forgot password?
                    </Button>
                  </div>
                  <Input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </CardFooter>
            </form>
          </Card>
          
          <p className="text-sm text-center text-muted-foreground mt-4">
            Don't have an account? Contact your school administrator.
          </p>
        </div>
        
        <div className="relative hidden md:block order-1 md:order-2">
          <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000"
              alt="Campus"
              className="rounded-lg object-cover w-full h-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
