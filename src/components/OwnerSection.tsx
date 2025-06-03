
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/spotlight';
import { SplineScene } from '@/components/ui/spline-scene';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const OwnerSection = () => {
  const skills = [
    "React.js", "Node.js", "TypeScript", "Python", "MongoDB", 
    "Express.js", "Tailwind CSS", "Financial Analysis", "UI/UX Design"
  ];

  const achievements = [
    { icon: Code, title: "Full Stack Developer", description: "5+ years experience" },
    { icon: Award, title: "Finance Enthusiast", description: "Personal finance advocate" },
    { icon: Briefcase, title: "Product Builder", description: "Multiple successful projects" },
    { icon: GraduationCap, title: "Continuous Learner", description: "Always exploring new tech" }
  ];

  const backgroundStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    opacity: 0.2
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0" style={backgroundStyle}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Creator</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about empowering students with smart financial tools and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Interactive 3D Scene */}
          <div className="order-2 lg:order-1">
            <Card className="h-[500px] bg-black/[0.96] relative overflow-hidden border-gray-700">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                size={200}
              />
              
              <div className="flex h-full">
                {/* Owner Info Overlay */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                  <div className="space-y-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
                      Creator & Developer
                    </Badge>
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                      Vivek Chauhan
                    </h1>
                    <p className="text-gray-300 text-lg">
                      Full Stack Developer & Financial Technology Enthusiast
                    </p>
                    
                    {/* Location & Experience */}
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>India</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Building tech solutions since 2019</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-3 pt-4">
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 3D Scene */}
                <div className="flex-1 relative">
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Detailed Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* About */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">About Budget Buddy</h3>
              <p className="text-gray-300 leading-relaxed">
                Budget Buddy was born from my personal experience as a student struggling to manage finances. 
                After seeing countless friends overspend and stress about money, I decided to create a solution 
                that makes financial management simple, engaging, and educational for students.
              </p>
            </Card>

            {/* Achievements */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">What I Bring</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg">
                      <achievement.icon className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{achievement.title}</p>
                      <p className="text-gray-400 text-xs">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 border-green-500/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Mission */}
            <Card className="p-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                "My goal is to democratize financial literacy and make money management 
                accessible to every student. Through Budget Buddy, I want to empower the next 
                generation with the tools and knowledge they need to build a secure financial future."
              </p>
            </Card>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </Button>
              <Button variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800">
                View Projects
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-700">
          <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-4">
            "Financial freedom is not about having a lot of money. It's about having options and the knowledge to make smart choices."
          </blockquote>
          <cite className="text-green-400 font-medium">- Vivek Chauhan, Creator of Budget Buddy</cite>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
