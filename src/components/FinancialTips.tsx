
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Shield, 
  Lightbulb,
  Clock,
  User,
  ArrowRight,
  Star
} from 'lucide-react';

const FinancialTips = () => {
  const tips = [
    {
      id: 1,
      title: "The 50/30/20 Budget Rule",
      excerpt: "A simple way to manage your money: 50% for needs, 30% for wants, and 20% for savings and debt repayment.",
      content: "This budgeting method helps you allocate your income efficiently. 50% goes to essential expenses like rent, groceries, and utilities. 30% is for discretionary spending like entertainment and dining out. The remaining 20% should be split between savings and paying off debt.",
      category: "Budgeting",
      readTime: 5,
      author: "Budget Buddy Team",
      rating: 4.8,
      icon: Target,
      color: "blue"
    },
    {
      id: 2,
      title: "Emergency Fund Essentials",
      excerpt: "Why every student needs an emergency fund and how to build one with just ₹100 per week.",
      content: "Start small but start now. Even ₹100 per week adds up to ₹5,200 in a year. Aim for 3-6 months of expenses. Keep it in a separate savings account that you can access quickly but won't be tempted to spend from.",
      category: "Savings",
      readTime: 4,
      author: "Financial Expert",
      rating: 4.9,
      icon: Shield,
      color: "green"
    },
    {
      id: 3,
      title: "Student Discounts You're Missing",
      excerpt: "Discover hidden student discounts that can save you thousands every year on software, food, and entertainment.",
      content: "Many companies offer student discounts you might not know about. Adobe Creative Suite, Spotify Premium, Amazon Prime, and even local restaurants often have special rates for students. Always ask 'Do you have a student discount?' before making purchases.",
      category: "Money Saving",
      readTime: 3,
      author: "Savings Expert",
      rating: 4.7,
      icon: DollarSign,
      color: "yellow"
    },
    {
      id: 4,
      title: "Investing Basics for Beginners",
      excerpt: "Start your investment journey with as little as ₹500. Learn about SIPs, mutual funds, and the power of compounding.",
      content: "You don't need lakhs to start investing. Begin with SIPs (Systematic Investment Plans) in diversified mutual funds. Even ₹500 per month can grow significantly over time due to compound interest. Start early to maximize the power of compounding.",
      category: "Investing",
      readTime: 7,
      author: "Investment Advisor",
      rating: 4.6,
      icon: TrendingUp,
      color: "purple"
    },
    {
      id: 5,
      title: "Cashless Payment Safety Tips",
      excerpt: "Protect yourself from digital payment fraud while enjoying the convenience of UPI and card payments.",
      content: "Use strong PINs, enable transaction alerts, never share OTPs, and regularly check your bank statements. Set spending limits on your cards and use virtual payment numbers for online shopping when possible.",
      category: "Digital Safety",
      readTime: 4,
      author: "Security Expert",
      rating: 4.8,
      icon: Shield,
      color: "red"
    },
    {
      id: 6,
      title: "Part-time Income Ideas",
      excerpt: "Legitimate ways students can earn extra money without affecting their studies.",
      content: "Consider freelance writing, tutoring juniors, online content creation, or part-time jobs in retail. Focus on skills that complement your studies and can be done flexibly around your schedule.",
      category: "Income",
      readTime: 6,
      author: "Career Guide",
      rating: 4.5,
      icon: Lightbulb,
      color: "orange"
    }
  ];

  const categories = [
    { name: "All", count: tips.length },
    { name: "Budgeting", count: tips.filter(tip => tip.category === "Budgeting").length },
    { name: "Savings", count: tips.filter(tip => tip.category === "Savings").length },
    { name: "Investing", count: tips.filter(tip => tip.category === "Investing").length },
    { name: "Money Saving", count: tips.filter(tip => tip.category === "Money Saving").length }
  ];

  const featuredTip = tips[0];

  return (
    <section id="tips" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial <span className="text-gradient">Tips & Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn smart money management with our curated financial tips designed specifically for students
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-gradient-to-r from-green-600 to-blue-600" : ""}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Featured Tip */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 card-hover">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className="bg-yellow-100 text-yellow-800">✨ Featured Tip</Badge>
                  <Badge variant="secondary">{featuredTip.category}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{featuredTip.title}</h3>
                <p className="text-gray-700 text-lg mb-4">{featuredTip.excerpt}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredTip.readTime} min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredTip.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{featuredTip.rating}</span>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="p-8 bg-white rounded-2xl shadow-lg">
                  <featuredTip.icon className={`h-16 w-16 text-${featuredTip.color}-600 mx-auto`} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.slice(1).map((tip) => {
            const Icon = tip.icon;
            return (
              <Card key={tip.id} className="card-hover bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">{tip.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span className="text-xs text-gray-600">{tip.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-${tip.color}-100`}>
                      <Icon className={`h-5 w-5 text-${tip.color}-600`} />
                    </div>
                    <CardTitle className="text-lg leading-tight">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm line-clamp-3">{tip.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{tip.readTime} min read</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{tip.author}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-2">Get Weekly Financial Tips</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive personalized financial tips, 
              budgeting advice, and money-saving strategies directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinancialTips;
