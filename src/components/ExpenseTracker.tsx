
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar,
  ShoppingBag,
  Coffee,
  Car,
  Film,
  Trash2,
  TrendingDown,
  Loader2
} from 'lucide-react';
import { useExpenses } from '@/hooks/useExpenses';
import { useAuth } from '@/hooks/useAuth';

const ExpenseTracker = () => {
  const { expenses, isLoading, addExpense, deleteExpense, isAdding, isDeleting } = useExpenses();
  const { user } = useAuth();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Form state
  const [newExpense, setNewExpense] = useState({
    title: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  const categories = [
    { name: 'Food', icon: Coffee, color: 'bg-red-100 text-red-600' },
    { name: 'Transport', icon: Car, color: 'bg-blue-100 text-blue-600' },
    { name: 'Entertainment', icon: Film, color: 'bg-purple-100 text-purple-600' },
    { name: 'Shopping', icon: ShoppingBag, color: 'bg-green-100 text-green-600' }
  ];

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.name === category);
    return categoryData ? categoryData.icon : ShoppingBag;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.name === category);
    return categoryData ? categoryData.color : 'bg-gray-100 text-gray-600';
  };

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (expense.description || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || expense.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newExpense.title || !newExpense.amount || !newExpense.category) {
      return;
    }

    addExpense({
      title: newExpense.title,
      amount: parseFloat(newExpense.amount),
      category: newExpense.category,
      date: newExpense.date,
      description: newExpense.description
    });

    // Reset form
    setNewExpense({
      title: '',
      amount: '',
      category: '',
      date: new Date().toISOString().split('T')[0],
      description: ''
    });
    setShowAddForm(false);
  };

  if (!user) {
    return (
      <section id="expenses" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expense <span className="text-gradient">Tracker</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Please sign in to track your expenses
          </p>
          <Button 
            onClick={() => window.location.href = '/auth'}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            Sign In
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="expenses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expense <span className="text-gradient">Tracker</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep track of every rupee spent and categorize your expenses for better insights
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <TrendingDown className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">₹{totalExpenses}</p>
              <p className="text-sm text-gray-600">Total Expenses</p>
            </CardContent>
          </Card>
          
          {categories.slice(0, 3).map((category, index) => {
            const categoryTotal = expenses
              .filter(expense => expense.category === category.name)
              .reduce((sum, expense) => sum + expense.amount, 0);
            
            return (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <category.icon className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                  <p className="text-2xl font-bold text-gray-900">₹{categoryTotal}</p>
                  <p className="text-sm text-gray-600">{category.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.name} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Expense
          </Button>
        </div>

        {/* Add Expense Form */}
        {showAddForm && (
          <Card className="mb-8 border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="text-green-800">Add New Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddExpense}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input 
                    placeholder="Expense title" 
                    value={newExpense.title}
                    onChange={(e) => setNewExpense({...newExpense, title: e.target.value})}
                    required
                  />
                  <Input 
                    placeholder="Amount (₹)" 
                    type="number" 
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                    required
                    min="0"
                    step="0.01"
                  />
                  <Select 
                    value={newExpense.category} 
                    onValueChange={(value) => setNewExpense({...newExpense, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.name} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input 
                    type="date" 
                    value={newExpense.date}
                    onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                  />
                  <Input 
                    placeholder="Description (optional)" 
                    className="md:col-span-2" 
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button 
                    type="submit" 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700"
                    disabled={isAdding}
                  >
                    {isAdding ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      'Save Expense'
                    )}
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Expenses List */}
        <Card>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                <span className="ml-2 text-gray-600">Loading expenses...</span>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {filteredExpenses.map((expense) => {
                  const CategoryIcon = getCategoryIcon(expense.category);
                  return (
                    <div key={expense.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className={`p-3 rounded-lg ${getCategoryColor(expense.category)}`}>
                            <CategoryIcon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-1">
                              <h3 className="font-semibold text-gray-900">{expense.title}</h3>
                              <Badge variant="secondary" className="text-xs">
                                {expense.category}
                              </Badge>
                            </div>
                            {expense.description && (
                              <p className="text-sm text-gray-600 truncate">{expense.description}</p>
                            )}
                            <div className="flex items-center space-x-2 mt-1">
                              <Calendar className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-500">{expense.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-red-600">₹{expense.amount}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-red-600 hover:text-red-700"
                            onClick={() => deleteExpense(expense.id)}
                            disabled={isDeleting}
                          >
                            {isDeleting ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {filteredExpenses.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <TrendingDown className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No expenses found</h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Start by adding your first expense'
              }
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpenseTracker;
