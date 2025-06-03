
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  PiggyBank,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "Total Balance",
      value: "₹15,420",
      change: "+12%",
      trend: "up",
      icon: DollarSign,
      color: "green"
    },
    {
      title: "Monthly Expenses",
      value: "₹8,940",
      change: "-5%",
      trend: "down",
      icon: TrendingDown,
      color: "red"
    },
    {
      title: "Savings Goal",
      value: "65%",
      change: "+8%",
      trend: "up",
      icon: Target,
      color: "blue"
    },
    {
      title: "Total Savings",
      value: "₹6,480",
      change: "+15%",
      trend: "up",
      icon: PiggyBank,
      color: "purple"
    }
  ];

  const recentTransactions = [
    { id: 1, description: "Grocery Shopping", amount: -850, category: "Food", date: "Today" },
    { id: 2, description: "Freelance Payment", amount: +2500, category: "Income", date: "Yesterday" },
    { id: 3, description: "Coffee & Snacks", amount: -120, category: "Food", date: "2 days ago" },
    { id: 4, description: "Movie Tickets", amount: -400, category: "Entertainment", date: "3 days ago" },
    { id: 5, description: "Bus Pass", amount: -500, category: "Transport", date: "4 days ago" }
  ];

  const budgetCategories = [
    { category: "Food", spent: 3200, budget: 4000, color: "bg-red-500" },
    { category: "Transport", spent: 1500, budget: 2000, color: "bg-blue-500" },
    { category: "Entertainment", spent: 800, budget: 1500, color: "bg-purple-500" },
    { category: "Shopping", spent: 2200, budget: 3000, color: "bg-green-500" }
  ];

  return (
    <section id="dashboard" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Financial <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a complete overview of your finances with real-time insights and analytics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      {stat.trend === 'up' ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span className={`text-sm font-medium ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Transactions</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Transaction
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transaction.amount > 0 ? (
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.description}</p>
                          <p className="text-sm text-gray-600">{transaction.category} • {transaction.date}</p>
                        </div>
                      </div>
                      <span className={`font-semibold ${
                        transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Budget Overview */}
          <div>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Budget Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {budgetCategories.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-gray-600">₹{item.spent}/₹{item.budget}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${item.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${(item.spent / item.budget) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{Math.round((item.spent / item.budget) * 100)}% used</span>
                        <span>₹{item.budget - item.spent} left</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
