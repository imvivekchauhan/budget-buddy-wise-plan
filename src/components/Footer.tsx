
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart,
  Smartphone,
  Shield,
  Users,
  TrendingUp
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Dashboard', href: '#dashboard' },
      { name: 'Expense Tracker', href: '#expenses' },
      { name: 'Budget Planning', href: '#budget' },
      { name: 'Savings Goals', href: '#savings' },
      { name: 'Financial Tips', href: '#tips' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Financial Guides', href: '#' },
      { name: 'Student Discounts', href: '#' },
      { name: 'API Documentation', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Tutorials', href: '#' }
    ]
  };

  const features = [
    { icon: Smartphone, title: 'Mobile First', description: 'Optimized for all devices' },
    { icon: Shield, title: 'Secure & Private', description: 'Your data is protected' },
    { icon: Users, title: 'Student Focused', description: 'Built for your needs' },
    { icon: TrendingUp, title: 'Smart Analytics', description: 'Insights that matter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Budget Buddy
              </h3>
              <p className="text-gray-400 mt-2">
                Empowering students with smart financial tools for a brighter future.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white hover:bg-gray-800">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-400 hover:text-white hover:bg-gray-800">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Button size="sm" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Highlight */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Why Choose Us?</h4>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg">
                    <feature.icon className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-sm">{feature.title}</h5>
                    <p className="text-gray-400 text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 Budget Buddy. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for students by Vivek Chauhan</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer;
