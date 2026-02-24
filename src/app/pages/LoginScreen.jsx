import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Building2, Mail, Lock, Chrome, RefreshCw, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { toast } from 'sonner';
import { Toaster } from '../components/ui/sonner';
import { users } from '../data';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('citizen');
  const [isSignUp, setIsSignUp] = useState(false);
  const [captchaText, setCaptchaText] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const navigate = useNavigate();
  const {
    setUserRole
  } = useApp();

  // Generate random captcha text
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    if (!username || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    if (isSignUp && username.length < 5) {
      toast.error('Username must be at least 5 characters long');
      return;
    }
    if (captchaInput.toLowerCase() !== captchaText.toLowerCase()) {
      toast.error('Incorrect CAPTCHA. Please try again.');
      setCaptchaInput('');
      generateCaptcha();
      return;
    }

    const userList = role === 'admin' ? users.admins : users.citizens;
    const storedUsers = JSON.parse(localStorage.getItem(`${role}s`) || '[]');
    const allUsers = [...userList, ...storedUsers];

    if (isSignUp) {
      // Check if user already exists
      const existingUser = allUsers.find(user => user.username === username);
      if (existingUser) {
        toast.error('Username already exists');
        return;
      }
      // Add new user
      const newUser = { username, password };
      storedUsers.push(newUser);
      localStorage.setItem(`${role}s`, JSON.stringify(storedUsers));
      toast.success('Account created successfully!');
    } else {
      // Sign in
      const user = allUsers.find(user => user.username === username && user.password === password);
      if (!user) {
        toast.error('Invalid username or password');
        return;
      }
      toast.success('Login successful!');
    }

    setUserRole(role);
    setTimeout(() => {
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/citizen');
      }
    }, 500);
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4",
    children: [/*#__PURE__*/_jsx(Toaster, {}), /*#__PURE__*/_jsxs("div", {
      className: "w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden",
      children: [/*#__PURE__*/_jsxs(motion.div, {
        className: "md:w-1/2 bg-gradient-to-br from-[#1A3C6E] via-[#00C2CB] to-[#FF6B35] p-8 md:p-12 flex flex-col justify-center items-center text-white",
        initial: {
          opacity: 0,
          x: -50
        },
        animate: {
          opacity: 1,
          x: 0
        },
        transition: {
          duration: 0.6
        },
        children: [/*#__PURE__*/_jsx(Building2, {
          className: "w-20 h-20 mb-6",
          strokeWidth: 2
        }), /*#__PURE__*/_jsx("h1", {
          className: "text-4xl md:text-5xl font-bold mb-4 text-center",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "SmartCity"
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-2 mb-8",
          children: [/*#__PURE__*/_jsx(MapPin, {
            className: "w-5 h-5"
          }), /*#__PURE__*/_jsx("span", {
            className: "text-lg font-semibold",
            children: "Vijayawada"
          })]
        }), /*#__PURE__*/_jsx("p", {
          className: "text-lg text-center mb-8 text-white/90",
          children: "Your City, Simplified"
        }), /*#__PURE__*/_jsx("div", {
          className: "flex items-end gap-2 mt-8",
          children: [30, 45, 35, 55, 40, 50].map((height, i) => /*#__PURE__*/_jsx(motion.div, {
            className: "w-8 bg-white/20 backdrop-blur-sm rounded-t-md",
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
              delay: 0.7 + i * 0.1
            }
          }, i))
        })]
      }), /*#__PURE__*/_jsx(motion.div, {
        className: "md:w-1/2 p-8 md:p-12",
        initial: {
          opacity: 0,
          x: 50
        },
        animate: {
          opacity: 1,
          x: 0
        },
        transition: {
          duration: 0.6
        },
        children: /*#__PURE__*/_jsxs("div", {
          className: "max-w-md mx-auto",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-3xl font-bold mb-2",
            style: {
              fontFamily: 'Poppins, sans-serif',
              color: '#1A3C6E'
            },
            children: isSignUp ? 'Create Account' : 'Welcome Back'
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-600 mb-8",
            children: isSignUp ? 'Sign up to get started' : 'Sign in to continue'
          }), /*#__PURE__*/_jsxs("form", {
            onSubmit: handleSubmit,
            className: "space-y-6",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "space-y-2",
              children: [/*#__PURE__*/_jsx(Label, {
                htmlFor: "username",
                children: "Username"
              }), /*#__PURE__*/_jsxs("div", {
                className: "relative",
                children: [/*#__PURE__*/_jsx(Mail, {
                  className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "username",
                  type: "text",
                  placeholder: "Enter your username",
                  value: username,
                  onChange: e => setUsername(e.target.value),
                  className: "pl-11 h-12"
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "space-y-2",
              children: [/*#__PURE__*/_jsx(Label, {
                htmlFor: "password",
                children: "Password"
              }), /*#__PURE__*/_jsxs("div", {
                className: "relative",
                children: [/*#__PURE__*/_jsx(Lock, {
                  className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "password",
                  type: "password",
                  placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                  value: password,
                  onChange: e => setPassword(e.target.value),
                  className: "pl-11 h-12"
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "space-y-2",
              children: [/*#__PURE__*/_jsx(Label, {
                children: "I am a"
              }), /*#__PURE__*/_jsxs("div", {
                className: "grid grid-cols-2 gap-3",
                children: [/*#__PURE__*/_jsxs("button", {
                  type: "button",
                  onClick: () => setRole('citizen'),
                  className: `p-4 rounded-xl border-2 transition-all ${role === 'citizen' ? 'border-[#00C2CB] bg-[#00C2CB]/10' : 'border-gray-200 hover:border-gray-300'}`,
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "font-semibold",
                    children: "Citizen"
                  }), /*#__PURE__*/_jsx("div", {
                    className: "text-sm text-gray-600",
                    children: "Access services"
                  })]
                }), /*#__PURE__*/_jsxs("button", {
                  type: "button",
                  onClick: () => setRole('admin'),
                  className: `p-4 rounded-xl border-2 transition-all ${role === 'admin' ? 'border-[#FF6B35] bg-[#FF6B35]/10' : 'border-gray-200 hover:border-gray-300'}`,
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "font-semibold",
                    children: "Admin"
                  }), /*#__PURE__*/_jsx("div", {
                    className: "text-sm text-gray-600",
                    children: "Manage city"
                  })]
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "space-y-2",
              children: [/*#__PURE__*/_jsx(Label, {
                children: "Type the letters below"
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-3",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "flex-1 p-3 bg-gray-100 rounded-lg font-mono text-lg font-bold text-gray-800 tracking-wider select-none",
                  style: {
                    fontFamily: 'monospace',
                    letterSpacing: '0.2em',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                  },
                  children: captchaText
                }), /*#__PURE__*/_jsx(Button, {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  onClick: generateCaptcha,
                  className: "p-2",
                  children: /*#__PURE__*/_jsx(RefreshCw, {
                    className: "w-4 h-4"
                  })
                })]
              }), /*#__PURE__*/_jsx(Input, {
                type: "text",
                placeholder: "Enter the letters",
                value: captchaInput,
                onChange: e => setCaptchaInput(e.target.value),
                className: "h-12"
              })]
            }), /*#__PURE__*/_jsx(Button, {
              type: "submit",
              className: "w-full h-12 text-lg font-bold bg-gradient-to-r from-[#00C2CB] to-[#1A3C6E] hover:opacity-90 transition-opacity",
              children: isSignUp ? 'Sign Up' : 'Sign In'
            }), /*#__PURE__*/_jsxs("div", {
              className: "relative my-6",
              children: [/*#__PURE__*/_jsx("div", {
                className: "absolute inset-0 flex items-center",
                children: /*#__PURE__*/_jsx("div", {
                  className: "w-full border-t border-gray-200"
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "relative flex justify-center text-sm",
                children: /*#__PURE__*/_jsx("span", {
                  className: "px-4 bg-white text-gray-500",
                  children: "Or continue with"
                })
              })]
            }), /*#__PURE__*/_jsxs(Button, {
              type: "button",
              variant: "outline",
              className: "w-full h-12 border-2",
              children: [/*#__PURE__*/_jsx(Chrome, {
                className: "mr-2 w-5 h-5"
              }), "Google"]
            }), /*#__PURE__*/_jsx("div", {
              className: "text-center pt-4",
              children: /*#__PURE__*/_jsx("button", {
                type: "button",
                onClick: () => setIsSignUp(!isSignUp),
                className: "text-[#00C2CB] hover:underline font-medium",
                children: isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"
              })
            })]
          })]
        })
      })]
    })]
  });
}
