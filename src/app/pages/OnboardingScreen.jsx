import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { ChevronRight, MapPin, FileText, Bell, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const slides = [{
  icon: MapPin,
  title: 'Explore City Services',
  description: 'Access all public services, utilities, and amenities in one place. Find what you need, when you need it.',
  color: '#1A3C6E',
  bgGradient: 'from-[#1A3C6E] to-[#2a5a9e]'
}, {
  icon: FileText,
  title: 'Report Issues Instantly',
  description: 'Spotted a problem? Report it with photos and location. Track your reports in real-time.',
  color: '#00C2CB',
  bgGradient: 'from-[#00C2CB] to-[#00e5f0]'
}, {
  icon: Bell,
  title: 'Stay Updated',
  description: 'Get real-time notifications about city news, service updates, and emergency alerts.',
  color: '#FF6B35',
  bgGradient: 'from-[#FF6B35] to-[#ff8c5f]'
}];
export function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };
  const handleSkip = () => {
    navigate('/login');
  };
  const slide = slides[currentSlide];
  const Icon = slide.icon;
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-white flex flex-col",
    children: [/*#__PURE__*/_jsx("div", {
      className: "absolute top-6 right-6 z-10",
      children: /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        onClick: handleSkip,
        className: "text-gray-600 hover:text-gray-900",
        children: "Skip"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "flex-1 flex flex-col items-center justify-center p-6 md:p-12",
      children: /*#__PURE__*/_jsx(AnimatePresence, {
        mode: "wait",
        children: /*#__PURE__*/_jsxs(motion.div, {
          initial: {
            opacity: 0,
            x: 50
          },
          animate: {
            opacity: 1,
            x: 0
          },
          exit: {
            opacity: 0,
            x: -50
          },
          transition: {
            duration: 0.4
          },
          className: "w-full max-w-2xl flex flex-col items-center text-center",
          children: [/*#__PURE__*/_jsx(motion.div, {
            className: `w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${slide.bgGradient} flex items-center justify-center mb-8 shadow-2xl`,
            initial: {
              scale: 0
            },
            animate: {
              scale: 1
            },
            transition: {
              delay: 0.2,
              type: 'spring',
              stiffness: 200
            },
            children: /*#__PURE__*/_jsx(Icon, {
              className: "w-16 h-16 md:w-20 md:h-20 text-white",
              strokeWidth: 2
            })
          }), /*#__PURE__*/_jsxs(motion.div, {
            className: "mb-8",
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              delay: 0.3
            },
            children: [currentSlide === 0 && /*#__PURE__*/_jsx("div", {
              className: "flex gap-3 items-end",
              children: [50, 70, 60, 85, 65].map((height, i) => /*#__PURE__*/_jsx("div", {
                className: "w-12 bg-gradient-to-t from-[#1A3C6E] to-[#00C2CB] rounded-t-lg",
                style: {
                  height: `${height}px`
                }
              }, i))
            }), currentSlide === 1 && /*#__PURE__*/_jsxs("div", {
              className: "flex gap-4",
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-16 h-16 bg-[#00C2CB] rounded-lg flex items-center justify-center",
                children: /*#__PURE__*/_jsx(Check, {
                  className: "w-8 h-8 text-white"
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "w-16 h-16 bg-[#00C2CB]/30 rounded-lg"
              }), /*#__PURE__*/_jsx("div", {
                className: "w-16 h-16 bg-[#00C2CB]/30 rounded-lg"
              })]
            }), currentSlide === 2 && /*#__PURE__*/_jsxs("div", {
              className: "relative",
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center",
                children: /*#__PURE__*/_jsx(Bell, {
                  className: "w-10 h-10 text-white"
                })
              }), /*#__PURE__*/_jsx(motion.div, {
                className: "absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold",
                animate: {
                  scale: [1, 1.2, 1]
                },
                transition: {
                  duration: 1,
                  repeat: Infinity
                },
                children: "3"
              })]
            })]
          }), /*#__PURE__*/_jsx(motion.h2, {
            className: "text-3xl md:text-5xl font-bold mb-4",
            style: {
              fontFamily: 'Poppins, sans-serif',
              color: slide.color
            },
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              delay: 0.4
            },
            children: slide.title
          }), /*#__PURE__*/_jsx(motion.p, {
            className: "text-lg md:text-xl text-gray-600 max-w-lg",
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              delay: 0.5
            },
            children: slide.description
          })]
        }, currentSlide)
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "p-6 md:p-12",
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-2xl mx-auto",
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex justify-center gap-2 mb-8",
          children: slides.map((_, index) => /*#__PURE__*/_jsx("button", {
            onClick: () => setCurrentSlide(index),
            className: `h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-[#00C2CB]' : 'w-2 bg-gray-300'}`
          }, index))
        }), /*#__PURE__*/_jsxs(Button, {
          onClick: handleNext,
          className: "w-full h-14 text-lg font-bold bg-gradient-to-r from-[#00C2CB] to-[#1A3C6E] hover:opacity-90 transition-opacity",
          size: "lg",
          children: [currentSlide === slides.length - 1 ? "Get Started" : "Next", /*#__PURE__*/_jsx(ChevronRight, {
            className: "ml-2 w-5 h-5"
          })]
        })]
      })
    })]
  });
}
