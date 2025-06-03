
import React, { useState } from 'react';
import { Menu, X, User, Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gradient">Budget Buddy</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#dashboard" className="text-gray-600 hover:text-green-600 transition-colors">Dashboard</a>
            <a href="#expenses" className="text-gray-600 hover:text-green-600 transition-colors">Expenses</a>
            <a href="#budget" className="text-gray-600 hover:text-green-600 transition-colors">Budget</a>
            <a href="#savings" className="text-gray-600 hover:text-green-600 transition-colors">Savings</a>
            <a href="#tips" className="text-gray-600 hover:text-green-600 transition-colors">Tips</a>
          </nav>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#dashboard" className="block px-3 py-2 text-gray-600 hover:text-green-600">Dashboard</a>
              <a href="#expenses" className="block px-3 py-2 text-gray-600 hover:text-green-600">Expenses</a>
              <a href="#budget" className="block px-3 py-2 text-gray-600 hover:text-green-600">Budget</a>
              <a href="#savings" className="block px-3 py-2 text-gray-600 hover:text-green-600">Savings</a>
              <a href="#tips" className="block px-3 py-2 text-gray-600 hover:text-green-600">Tips</a>
              <div className="border-t pt-3 mt-3">
                <Button variant="outline" size="sm" className="w-full mb-2">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
