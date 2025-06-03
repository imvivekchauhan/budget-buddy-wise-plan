
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Dashboard from '@/components/Dashboard';
import ExpenseTracker from '@/components/ExpenseTracker';
import BudgetPlanning from '@/components/BudgetPlanning';
import SavingsGoals from '@/components/SavingsGoals';
import FinancialTips from '@/components/FinancialTips';
import OwnerSection from '@/components/OwnerSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Dashboard />
      <ExpenseTracker />
      <BudgetPlanning />
      <SavingsGoals />
      <FinancialTips />
      <OwnerSection />
      <Footer />
    </div>
  );
};

export default Index;
