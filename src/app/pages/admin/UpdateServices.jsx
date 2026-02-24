import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { Plus, Edit, Trash2, MapPin, Clock, Phone, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';
import { useApp } from '../../context/AppContext';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const initialServices = [{
  id: '1',
  name: 'Government General Hospital',
  category: 'Health',
  location: 'Governorpet, Vijayawada',
  hours: '24/7',
  phone: '(0866) 257 4444',
  status: 'active',
  description: 'Emergency medical services and urgent care'
}, {
  id: '2',
  name: 'Vijayawada Bus Station',
  category: 'Transport',
  location: 'Pandit Nehru Bus Station',
  hours: '24/7',
  phone: '(0866) 247 7777',
  status: 'active',
  description: 'Main bus terminal with multiple routes'
}, {
  id: '3',
  name: 'Vijayawada Water Supply',
  category: 'Utilities',
  location: 'Water Works, Vijayawada',
  hours: '24/7 Operations',
  phone: '(0866) 244 4444',
  status: 'maintenance',
  description: 'Municipal water supply and treatment'
}, {
  id: '4',
  name: 'Indira Gandhi Municipal Stadium',
  category: 'Parks',
  location: 'Governorpet, Vijayawada',
  hours: '6:00 AM - 9:00 PM',
  phone: '(0866) 257 7777',
  status: 'active',
  description: 'Sports complex and recreational facilities'
}];
const categories = ['Health', 'Transport', 'Utilities', 'Parks', 'Emergency', 'Education'];
export function UpdateServices() {
  const { services, updateServices } = useApp();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    location: '',
    hours: '',
    phone: '',
    status: 'active',
    description: ''
  });
  const handleOpenDialog = service => {
    if (service) {
      setEditingService(service);
      setFormData({
        name: service.name,
        category: service.category,
        location: service.location,
        hours: service.hours,
        phone: service.phone,
        status: service.status,
        description: service.description
      });
    } else {
      setEditingService(null);
      setFormData({
        name: '',
        category: '',
        location: '',
        hours: '',
        phone: '',
        status: 'active',
        description: ''
      });
    }
    setIsDialogOpen(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.location) {
      toast.error('Please fill in all required fields');
      return;
    }
    let updatedServices;
    if (editingService) {
      updatedServices = services.map(s => s.id === editingService.id ? {
        ...formData,
        id: editingService.id
      } : s);
      toast.success('Service updated successfully');
    } else {
      const newService = {
        ...formData,
        id: Date.now().toString()
      };
      updatedServices = [newService, ...services];
      toast.success('Service added successfully');
    }
    updateServices(updatedServices);
    setIsDialogOpen(false);
  };
  const handleDelete = id => {
    const updatedServices = services.filter(s => s.id !== id);
    updateServices(updatedServices);
    toast.success('Service deleted successfully');
  };
  const getCategoryColor = category => {
    const colors = {
      Health: 'bg-red-500',
      Transport: 'bg-blue-500',
      Utilities: 'bg-cyan-500',
      Parks: 'bg-green-500',
      Emergency: 'bg-orange-600',
      Education: 'bg-purple-500'
    };
    return colors[category] || 'bg-gray-500';
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",
    children: [/*#__PURE__*/_jsx(Toaster, {}), /*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto space-y-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-3xl md:text-4xl font-bold mb-2",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "Manage Services"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-600",
            children: "Add, edit, or remove city services"
          })]
        }), /*#__PURE__*/_jsxs(Dialog, {
          open: isDialogOpen,
          onOpenChange: setIsDialogOpen,
          children: [/*#__PURE__*/_jsx(DialogTrigger, {
            asChild: true,
            children: /*#__PURE__*/_jsxs(Button, {
              onClick: () => handleOpenDialog(),
              className: "bg-gradient-to-r from-[#00C2CB] to-[#1A3C6E]",
              children: [/*#__PURE__*/_jsx(Plus, {
                className: "w-4 h-4 mr-2"
              }), "Add New Service"]
            })
          }), /*#__PURE__*/_jsxs(DialogContent, {
            className: "max-w-2xl max-h-[90vh] overflow-y-auto",
            children: [/*#__PURE__*/_jsx(DialogHeader, {
              children: /*#__PURE__*/_jsx(DialogTitle, {
                className: "text-2xl",
                style: {
                  fontFamily: 'Poppins, sans-serif'
                },
                children: editingService ? 'Edit Service' : 'Add New Service'
              })
            }), /*#__PURE__*/_jsxs("form", {
              onSubmit: handleSubmit,
              className: "space-y-4 mt-4",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "grid md:grid-cols-2 gap-4",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "space-y-2",
                  children: [/*#__PURE__*/_jsx(Label, {
                    htmlFor: "name",
                    children: "Service Name *"
                  }), /*#__PURE__*/_jsx(Input, {
                    id: "name",
                    value: formData.name,
                    onChange: e => setFormData({
                      ...formData,
                      name: e.target.value
                    }),
                    placeholder: "e.g., City Hospital"
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "space-y-2",
                  children: [/*#__PURE__*/_jsx(Label, {
                    htmlFor: "category",
                    children: "Category *"
                  }), /*#__PURE__*/_jsxs(Select, {
                    value: formData.category,
                    onValueChange: value => setFormData({
                      ...formData,
                      category: value
                    }),
                    children: [/*#__PURE__*/_jsx(SelectTrigger, {
                      children: /*#__PURE__*/_jsx(SelectValue, {
                        placeholder: "Select category"
                      })
                    }), /*#__PURE__*/_jsx(SelectContent, {
                      children: categories.map(cat => /*#__PURE__*/_jsx(SelectItem, {
                        value: cat,
                        children: cat
                      }, cat))
                    })]
                  })]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "location",
                  children: "Location *"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "location",
                  value: formData.location,
                  onChange: e => setFormData({
                    ...formData,
                    location: e.target.value
                  }),
                  placeholder: "e.g., Downtown District, Main Street"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "grid md:grid-cols-2 gap-4",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "space-y-2",
                  children: [/*#__PURE__*/_jsx(Label, {
                    htmlFor: "hours",
                    children: "Operating Hours *"
                  }), /*#__PURE__*/_jsx(Input, {
                    id: "hours",
                    value: formData.hours,
                    onChange: e => setFormData({
                      ...formData,
                      hours: e.target.value
                    }),
                    placeholder: "e.g., 9:00 AM - 5:00 PM"
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "space-y-2",
                  children: [/*#__PURE__*/_jsx(Label, {
                    htmlFor: "phone",
                    children: "Phone *"
                  }), /*#__PURE__*/_jsx(Input, {
                    id: "phone",
                    value: formData.phone,
                    onChange: e => setFormData({
                      ...formData,
                      phone: e.target.value
                    }),
                    placeholder: "e.g., (555) 0100"
                  })]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "status",
                  children: "Status *"
                }), /*#__PURE__*/_jsxs(Select, {
                  value: formData.status,
                  onValueChange: value => setFormData({
                    ...formData,
                    status: value
                  }),
                  children: [/*#__PURE__*/_jsx(SelectTrigger, {
                    children: /*#__PURE__*/_jsx(SelectValue, {})
                  }), /*#__PURE__*/_jsxs(SelectContent, {
                    children: [/*#__PURE__*/_jsx(SelectItem, {
                      value: "active",
                      children: "Active"
                    }), /*#__PURE__*/_jsx(SelectItem, {
                      value: "maintenance",
                      children: "Under Maintenance"
                    })]
                  })]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "description",
                  children: "Description *"
                }), /*#__PURE__*/_jsx(Textarea, {
                  id: "description",
                  value: formData.description,
                  onChange: e => setFormData({
                    ...formData,
                    description: e.target.value
                  }),
                  placeholder: "Brief description of the service...",
                  className: "resize-none"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex gap-3 pt-4",
                children: [/*#__PURE__*/_jsx(Button, {
                  type: "submit",
                  className: "flex-1 bg-gradient-to-r from-[#00C2CB] to-[#1A3C6E]",
                  children: editingService ? 'Update Service' : 'Add Service'
                }), /*#__PURE__*/_jsx(Button, {
                  type: "button",
                  variant: "outline",
                  onClick: () => setIsDialogOpen(false),
                  children: "Cancel"
                })]
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
        children: [/*#__PURE__*/_jsxs(Card, {
          className: "p-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-[#1A3C6E] mb-1",
            children: services.length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-gray-600",
            children: "Total Services"
          })]
        }), /*#__PURE__*/_jsxs(Card, {
          className: "p-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-green-600 mb-1",
            children: services.filter(s => s.status === 'active').length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-gray-600",
            children: "Active"
          })]
        }), /*#__PURE__*/_jsxs(Card, {
          className: "p-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-orange-600 mb-1",
            children: services.filter(s => s.status === 'maintenance').length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-gray-600",
            children: "Maintenance"
          })]
        }), /*#__PURE__*/_jsxs(Card, {
          className: "p-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-purple-600 mb-1",
            children: categories.length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-gray-600",
            children: "Categories"
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "space-y-4",
        children: /*#__PURE__*/_jsx(AnimatePresence, {
          children: services.map((service, index) => /*#__PURE__*/_jsx(motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            exit: {
              opacity: 0,
              x: -100
            },
            transition: {
              delay: index * 0.05
            },
            children: /*#__PURE__*/_jsx(Card, {
              className: "p-5 hover:shadow-lg transition-shadow",
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex flex-col md:flex-row gap-4",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "flex items-start justify-between mb-3",
                    children: /*#__PURE__*/_jsxs("div", {
                      children: [/*#__PURE__*/_jsx("h3", {
                        className: "text-xl font-bold mb-2",
                        children: service.name
                      }), /*#__PURE__*/_jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [/*#__PURE__*/_jsx(Badge, {
                          className: `${getCategoryColor(service.category)} text-white`,
                          children: service.category
                        }), service.status === 'active' ? /*#__PURE__*/_jsxs(Badge, {
                          className: "bg-green-100 text-green-700 flex items-center gap-1",
                          children: [/*#__PURE__*/_jsx(CheckCircle, {
                            className: "w-3 h-3"
                          }), "Active"]
                        }) : /*#__PURE__*/_jsxs(Badge, {
                          className: "bg-orange-100 text-orange-700 flex items-center gap-1",
                          children: [/*#__PURE__*/_jsx(AlertTriangle, {
                            className: "w-3 h-3"
                          }), "Maintenance"]
                        })]
                      })]
                    })
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-gray-700 mb-4",
                    children: service.description
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "grid md:grid-cols-3 gap-3 text-sm",
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex items-center gap-2 text-gray-600",
                      children: [/*#__PURE__*/_jsx(MapPin, {
                        className: "w-4 h-4 text-[#00C2CB]"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "line-clamp-1",
                        children: service.location
                      })]
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "flex items-center gap-2 text-gray-600",
                      children: [/*#__PURE__*/_jsx(Clock, {
                        className: "w-4 h-4 text-[#00C2CB]"
                      }), /*#__PURE__*/_jsx("span", {
                        children: service.hours
                      })]
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "flex items-center gap-2 text-gray-600",
                      children: [/*#__PURE__*/_jsx(Phone, {
                        className: "w-4 h-4 text-[#00C2CB]"
                      }), /*#__PURE__*/_jsx("span", {
                        children: service.phone
                      })]
                    })]
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "flex md:flex-col gap-2",
                  children: [/*#__PURE__*/_jsxs(Button, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => handleOpenDialog(service),
                    className: "flex-1 md:flex-none",
                    children: [/*#__PURE__*/_jsx(Edit, {
                      className: "w-4 h-4 md:mr-2"
                    }), /*#__PURE__*/_jsx("span", {
                      className: "hidden md:inline",
                      children: "Edit"
                    })]
                  }), /*#__PURE__*/_jsxs(Button, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => handleDelete(service.id),
                    className: "flex-1 md:flex-none text-red-600 hover:text-red-700 hover:bg-red-50",
                    children: [/*#__PURE__*/_jsx(Trash2, {
                      className: "w-4 h-4 md:mr-2"
                    }), /*#__PURE__*/_jsx("span", {
                      className: "hidden md:inline",
                      children: "Delete"
                    })]
                  })]
                })]
              })
            })
          }, service.id))
        })
      })]
    })]
  });
}
