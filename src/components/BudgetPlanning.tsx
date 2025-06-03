
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Settings,
  Plus,
  Coffee,
  Car,
  Film,
  ShoppingBag,
  Home,
  GraduationCap
} from 'lucide-react';

const BudgetPlanning = () => {
  const monthlyBudget = 12000;
  const totalSpent = 8940;
  const budgetUsedPercentage = (totalSpent / monthlyBudget) * 100;

  const budgetCategories = [
    {
      name: 'Food & Dining',
      icon: Coffee,
      budgeted: 4000,
      spent: 3200,
      color: 'red',
      status: 'good'
    },
    {
      name: 'Transportation',
      icon: Car,
      budgeted: 2000,
      spent: 1800,
      color: 'blue',
      status: 'good'
    },
    {
      name: 'Entertainment',
      icon: Film,
      budgeted: 1500,
      spent: 1600,
      color: 'purple',
      status: 'over'
    },
    {
      name: 'Shopping',
      icon: ShoppingBag,
      budgeted: 3000,
      spent: 2200,
      color: 'green',
      status: 'good'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      budgeted: 1000,
      spent: 140,
      color: 'yellow',
      status: 'under'
    },
    {
      name: 'Utilities',
      icon: Home,
      budgeted: 500,
      spent: 0,
      color: 'gray',
      status: 'under'
    }
  ];

  const getStatusBadge = (status: string, spent: number, budgeted: number) => {
    const percentage = (spent / budgeted) * 100;
    
    if (status === 'over') {
      return <Badge variant="destructive" className="text-xs">Over Budget</Badge>;
    } else if (percentage < 50) {
      return <Badge variant="secondary" className="text-xs">Under Used</Badge>;
    } else if (percentage < 90) {
      return <Badge className="bg-green-100 text-green-700 text-xs">On Track</Badge>;
    } else {
      return <Badge className="bg-yellow-100 text-yellow-700 text-xs">Near Limit</Badge>;
    }
  };

  const getProgressColor = (percentage: number, status: string) => {
    if (status === 'over') return 'bg-red-500';
    if (percentage < 50) return 'bg-gray-400';
    if (percentage < 75) return 'bg-green-500';
    if (percentage < 90) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <section id="budget" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Budget <span className="text-gradient">Planning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Set smart budget goals and track your spending across different categories
          </p>
        </div>

        {/* Budget Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="card-hover bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  <span>Monthly Budget Overview</span>
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Adjust Budget
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">₹{totalSpent} / ₹{monthlyBudget}</p>
                    <p className="text-gray-600">Monthly spending progress</p>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className={`h-4 rounded-full transition-all duration-500 ${
                          budgetUsedPercentage > 100 ? 'bg-red-500' : 
                          budgetUsedPercentage > 80 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(budgetUsedPercentage, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>0%</span>
                      <span className="font-medium">{budgetUsedPercentage.toFixed(1)}% used</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-700">₹{monthlyBudget - totalSpent}</p>
                      <p className="text-sm text-green-600">Remaining</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-700">{Math.round(((monthlyBudget - totalSpent) / 30))}₹</p>
                      <p className="text-sm text-blue-600">Daily Budget</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-700">15</p>
                      <p className="text-sm text-purple-600">Days Left</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="card-hover bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Category
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Budget Limits
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                
                <div className="pt-4 border-t">
                  <h4 className="font-medium text-gray-900 mb-3">Budget Tips</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Follow the 50/30/20 rule</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Review budget monthly</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Category Budgets */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Category Budgets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {budgetCategories.map((category, index) => {
                const percentage = (category.spent / category.budgeted) * 100;
                const Icon = category.icon;
                
                return (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-${category.color}-100`}>
                          <Icon className={`h-5 w-5 text-${category.color}-600`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{category.name}</h3>
                          <p className="text-sm text-gray-600">₹{category.spent} / ₹{category.budgeted}</p>
                        </div>
                      </div>
                      {getStatusBadge(category.status, category.spent, category.budgeted)}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(percentage, category.status)}`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{percentage.toFixed(0)}% used</span>
                        <span>₹{category.budgeted - category.spent} left</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BudgetPlanning;
