
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Target, 
  Calendar, 
  TrendingUp, 
  Plus, 
  Smartphone,
  Car,
  GraduationCap,
  MapPin,
  Gift,
  Home,
  CheckCircle,
  Clock
} from 'lucide-react';

const SavingsGoals = () => {
  const savingsGoals = [
    {
      id: 1,
      title: "New iPhone 15",
      targetAmount: 80000,
      savedAmount: 45000,
      deadline: "2024-06-15",
      category: "Technology",
      icon: Smartphone,
      color: "blue",
      priority: "high",
      monthlyTarget: 5833
    },
    {
      id: 2,
      title: "Europe Trip",
      targetAmount: 150000,
      savedAmount: 30000,
      deadline: "2024-12-01",
      category: "Travel",
      icon: MapPin,
      color: "green",
      priority: "medium",
      monthlyTarget: 12000
    },
    {
      id: 3,
      title: "Emergency Fund",
      targetAmount: 50000,
      savedAmount: 25000,
      deadline: "2024-08-30",
      category: "Financial Security",
      icon: Target,
      color: "red",
      priority: "high",
      monthlyTarget: 4167
    },
    {
      id: 4,
      title: "Laptop Upgrade",
      targetAmount: 60000,
      savedAmount: 52000,
      deadline: "2024-03-15",
      category: "Technology",
      icon: GraduationCap,
      color: "purple",
      priority: "low",
      monthlyTarget: 1000
    },
    {
      id: 5,
      title: "Birthday Gift for Mom",
      targetAmount: 5000,
      savedAmount: 2800,
      deadline: "2024-02-20",
      category: "Personal",
      icon: Gift,
      color: "pink",
      priority: "medium",
      monthlyTarget: 550
    },
    {
      id: 6,
      title: "Future Apartment",
      targetAmount: 500000,
      savedAmount: 125000,
      deadline: "2025-12-31",
      category: "Real Estate",
      icon: Home,
      color: "yellow",
      priority: "low",
      monthlyTarget: 15625
    }
  ];

  const totalSaved = savingsGoals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const totalTarget = savingsGoals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const overallProgress = (totalSaved / totalTarget) * 100;

  const getDaysLeft = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 70) return 'bg-blue-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  const getPriorityBadge = (priority: string) => {
    const colors = {
      high: 'bg-red-100 text-red-700',
      medium: 'bg-yellow-100 text-yellow-700',
      low: 'bg-green-100 text-green-700'
    };
    return (
      <Badge className={`text-xs ${colors[priority as keyof typeof colors]}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
      </Badge>
    );
  };

  return (
    <section id="savings" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Savings <span className="text-gradient">Goals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Set and achieve your financial goals with our smart savings tracker
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{savingsGoals.length}</p>
              <p className="text-sm text-gray-600">Active Goals</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">₹{totalSaved.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Total Saved</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{overallProgress.toFixed(1)}%</p>
              <p className="text-sm text-gray-600">Overall Progress</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-600">Goals This Year</p>
            </CardContent>
          </Card>
        </div>

        {/* Add New Goal Button */}
        <div className="text-center mb-8">
          <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New Savings Goal
          </Button>
        </div>

        {/* Savings Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savingsGoals.map((goal) => {
            const percentage = (goal.savedAmount / goal.targetAmount) * 100;
            const daysLeft = getDaysLeft(goal.deadline);
            const Icon = goal.icon;
            
            return (
              <Card key={goal.id} className="card-hover bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-${goal.color}-100`}>
                        <Icon className={`h-5 w-5 text-${goal.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{goal.title}</CardTitle>
                        <p className="text-sm text-gray-600">{goal.category}</p>
                      </div>
                    </div>
                    {getPriorityBadge(goal.priority)}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Progress</span>
                      <span>{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(percentage)}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Saved</span>
                      <span className="font-medium">₹{goal.savedAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Target</span>
                      <span className="font-medium">₹{goal.targetAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Remaining</span>
                      <span className="font-medium text-red-600">₹{(goal.targetAmount - goal.savedAmount).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">Deadline</span>
                      </div>
                      <span className="font-medium">{new Date(goal.deadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">Days left</span>
                      </div>
                      <span className={`font-medium ${daysLeft < 30 ? 'text-red-600' : 'text-green-600'}`}>
                        {daysLeft} days
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Monthly target</span>
                      <span className="font-medium text-blue-600">₹{goal.monthlyTarget.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Add Money
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1">
                      Edit Goal
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Savings Tips */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">💡 Smart Savings Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Set up automatic transfers to savings accounts</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Break large goals into smaller, manageable milestones</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Track progress weekly to stay motivated</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Consider high-interest savings accounts</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Celebrate milestones to maintain momentum</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SavingsGoals;
