
'use client'

import React from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={`relative ${className}`}>
      {/* 3D Robot Animation with CSS */}
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        {/* Robot Body */}
        <div className="robot-container">
          {/* Robot Head */}
          <div className="robot-head">
            <div className="robot-eye left"></div>
            <div className="robot-eye right"></div>
            <div className="robot-mouth"></div>
          </div>
          
          {/* Robot Body */}
          <div className="robot-body">
            <div className="robot-chest"></div>
            <div className="robot-arm left"></div>
            <div className="robot-arm right"></div>
          </div>
          
          {/* Robot Legs */}
          <div className="robot-leg left"></div>
          <div className="robot-leg right"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .robot-container {
          position: relative;
          animation: float 3s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .robot-head {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #4ade80, #3b82f6);
          border-radius: 15px;
          position: relative;
          margin: 0 auto 10px;
          box-shadow: 0 4px 20px rgba(74, 222, 128, 0.3);
          animation: headBob 2s ease-in-out infinite;
        }

        .robot-eye {
          width: 8px;
          height: 8px;
          background: #ffffff;
          border-radius: 50%;
          position: absolute;
          top: 20px;
          animation: blink 3s infinite;
        }

        .robot-eye.left { left: 15px; }
        .robot-eye.right { right: 15px; }

        .robot-mouth {
          width: 20px;
          height: 3px;
          background: #ffffff;
          border-radius: 2px;
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .robot-body {
          width: 80px;
          height: 100px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border-radius: 20px;
          position: relative;
          margin: 0 auto;
          box-shadow: 0 6px 25px rgba(59, 130, 246, 0.3);
        }

        .robot-chest {
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 10px;
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          animation: pulse 2s infinite;
        }

        .robot-arm {
          width: 20px;
          height: 60px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 10px;
          position: absolute;
          top: 15px;
          animation: armSwing 2.5s ease-in-out infinite;
        }

        .robot-arm.left {
          left: -25px;
          animation-delay: 0s;
        }

        .robot-arm.right {
          right: -25px;
          animation-delay: 1.25s;
        }

        .robot-leg {
          width: 25px;
          height: 80px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          border-radius: 12px;
          position: absolute;
          top: 110px;
          animation: legMove 2s ease-in-out infinite;
        }

        .robot-leg.left {
          left: 15px;
          animation-delay: 0s;
        }

        .robot-leg.right {
          right: 15px;
          animation-delay: 1s;
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #4ade80, #3b82f6);
          border-radius: 50%;
          animation: particleFloat 4s ease-in-out infinite;
        }

        .particle-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 60%;
          right: 20%;
          animation-delay: 1s;
        }

        .particle-3 {
          bottom: 30%;
          left: 30%;
          animation-delay: 2s;
        }

        .particle-4 {
          top: 30%;
          right: 30%;
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateY(180deg); }
        }

        @keyframes headBob {
          0%, 100% { transform: rotateX(0deg); }
          50% { transform: rotateX(10deg); }
        }

        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.1); }
        }

        @keyframes armSwing {
          0%, 100% { transform: rotateZ(0deg); }
          50% { transform: rotateZ(20deg); }
        }

        @keyframes legMove {
          0%, 100% { transform: rotateX(0deg); }
          50% { transform: rotateX(-10deg); }
        }

        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-30px) scale(1.2);
            opacity: 1;
          }
        }
        `
      }} />
    </div>
  )
}
