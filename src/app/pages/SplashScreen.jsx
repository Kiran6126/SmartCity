import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Building2, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SplashScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gradient-to-br from-[#1A3C6E] via-[#00C2CB] to-[#FF6B35] flex flex-col items-center justify-center p-6 overflow-hidden",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "absolute inset-0 overflow-hidden",
      children: [/*#__PURE__*/_jsx(motion.div, {
        className: "absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl",
        animate: {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        },
        transition: {
          duration: 3,
          repeat: Infinity
        }
      }), /*#__PURE__*/_jsx(motion.div, {
        className: "absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl",
        animate: {
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        },
        transition: {
          duration: 4,
          repeat: Infinity,
          delay: 1
        }
      })]
    }), /*#__PURE__*/_jsxs(motion.div, {
      className: "relative z-10 flex flex-col items-center",
      initial: {
        scale: 0.5,
        opacity: 0
      },
      animate: {
        scale: 1,
        opacity: 1
      },
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
      children: [/*#__PURE__*/_jsx(motion.div, {
        className: "relative mb-6",
        animate: {
          rotate: [0, 5, -5, 0]
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          delay: 1
        },
        children: /*#__PURE__*/_jsxs("div", {
          className: "relative",
          children: [/*#__PURE__*/_jsx(Building2, {
            className: "w-24 h-24 md:w-32 md:h-32 text-white drop-shadow-2xl",
            strokeWidth: 2
          }), /*#__PURE__*/_jsx(motion.div, {
            className: "absolute -top-2 -right-2",
            animate: {
              scale: [1, 1.2, 1]
            },
            transition: {
              duration: 1.5,
              repeat: Infinity
            },
            children: /*#__PURE__*/_jsx(Zap, {
              className: "w-8 h-8 md:w-10 md:h-10 text-[#FF6B35] fill-[#FF6B35] drop-shadow-lg"
            })
          })]
        })
      }), /*#__PURE__*/_jsx(motion.h1, {
        className: "text-4xl md:text-6xl font-bold text-white mb-3 text-center",
        initial: {
          y: 20,
          opacity: 0
        },
        animate: {
          y: 0,
          opacity: 1
        },
        transition: {
          delay: 0.3,
          duration: 0.6
        },
        style: {
          fontFamily: 'Poppins, sans-serif'
        },
        children: "SmartCity"
      }), /*#__PURE__*/_jsx(motion.p, {
        className: "text-lg md:text-xl text-white/90 text-center max-w-md",
        initial: {
          y: 20,
          opacity: 0
        },
        animate: {
          y: 0,
          opacity: 1
        },
        transition: {
          delay: 0.5,
          duration: 0.6
        },
        children: "Your City, Simplified"
      }), /*#__PURE__*/_jsx(motion.div, {
        className: "mt-12 flex items-end gap-2",
        initial: {
          y: 50,
          opacity: 0
        },
        animate: {
          y: 0,
          opacity: 1
        },
        transition: {
          delay: 0.7,
          duration: 0.8
        },
        children: [40, 60, 45, 70, 50, 65, 55].map((height, index) => /*#__PURE__*/_jsx(motion.div, {
          className: "w-8 md:w-12 bg-white/30 backdrop-blur-sm rounded-t-md",
          style: {
            height: `${height}px`
          },
          initial: {
            scaleY: 0
          },
          animate: {
            scaleY: 1
          },
          transition: {
            delay: 0.8 + index * 0.1,
            duration: 0.4
          },
          children: /*#__PURE__*/_jsx("div", {
            className: "flex flex-col gap-1 p-1",
            children: Array.from({
              length: Math.floor(height / 15)
            }).map((_, i) => /*#__PURE__*/_jsx("div", {
              className: "w-full h-1.5 bg-white/50 rounded-sm"
            }, i))
          })
        }, index))
      }), /*#__PURE__*/_jsx(motion.div, {
        className: "mt-12 flex gap-2",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        transition: {
          delay: 1.2
        },
        children: [0, 1, 2].map(index => /*#__PURE__*/_jsx(motion.div, {
          className: "w-2 h-2 bg-white rounded-full",
          animate: {
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          },
          transition: {
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2
          }
        }, index))
      })]
    })]
  });
}
