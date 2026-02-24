import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Building2, Users, MapPin, TrendingUp, Edit, Save, X } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const initialCityData = {
  name: 'Vijayawada Municipal Corporation',
  population: '1,476,931',
  area: '218 km²',
  mayor: 'Gadde Ramamohan Reddy',
  established: '1888',
  website: 'www.vmc.gov.in',
  email: 'info@vmc.gov.in',
  phone: '(0866) 242 7777'
};
const initialDepartments = [{
  id: '1',
  name: 'Municipal Administration',
  head: 'Gadde Ramamohan Reddy',
  employees: 1200,
  budget: '₹450 Cr',
  status: 'active'
}, {
  id: '2',
  name: 'Health & Sanitation',
  head: 'Dr. S. Venkata Rao',
  employees: 850,
  budget: '₹320 Cr',
  status: 'active'
}, {
  id: '3',
  name: 'Transport & Roads',
  head: 'K. Siva Prasad',
  employees: 400,
  budget: '₹280 Cr',
  status: 'active'
}, {
  id: '4',
  name: 'Parks & Gardens',
  head: 'M. Lakshmi Narayana',
  employees: 200,
  budget: '₹80 Cr',
  status: 'active'
}, {
  id: '5',
  name: 'Fire & Emergency Services',
  head: 'Chief Fire Officer',
  employees: 150,
  budget: '₹45 Cr',
  status: 'active'
}, {
  id: '6',
  name: 'Water Supply',
  head: 'P. Rajendra Prasad',
  employees: 300,
  budget: '₹200 Cr',
  status: 'active'
}];
export function ManageCityInfo() {
  const [cityData, setCityData] = useState(initialCityData);
  const [departments] = useState(initialDepartments);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(initialCityData);
  const handleEdit = () => {
    setEditedData(cityData);
    setIsEditing(true);
  };
  const handleSave = () => {
    setCityData(editedData);
    setIsEditing(false);
    toast.success('City information updated successfully');
  };
  const handleCancel = () => {
    setEditedData(cityData);
    setIsEditing(false);
  };
  const totalEmployees = departments.reduce((sum, dept) => sum + dept.employees, 0);
  const totalBudget = departments.reduce((sum, dept) => {
    const budget = parseInt(dept.budget.replace(/[^0-9]/g, ''));
    return sum + budget;
  }, 0);
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",
    children: [/*#__PURE__*/_jsx(Toaster, {}), /*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto space-y-6",
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h1", {
          className: "text-3xl md:text-4xl font-bold mb-2",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "City Information"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-gray-600",
          children: "Manage city data and department information"
        })]
      }), /*#__PURE__*/_jsxs(Tabs, {
        defaultValue: "overview",
        className: "space-y-6",
        children: [/*#__PURE__*/_jsxs(TabsList, {
          className: "grid w-full max-w-md grid-cols-3",
          children: [/*#__PURE__*/_jsx(TabsTrigger, {
            value: "overview",
            children: "Overview"
          }), /*#__PURE__*/_jsx(TabsTrigger, {
            value: "departments",
            children: "Departments"
          }), /*#__PURE__*/_jsx(TabsTrigger, {
            value: "statistics",
            children: "Statistics"
          })]
        }), /*#__PURE__*/_jsxs(TabsContent, {
          value: "overview",
          className: "space-y-6",
          children: [/*#__PURE__*/_jsxs(Card, {
            className: "p-6",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [/*#__PURE__*/_jsx("h2", {
                className: "text-2xl font-bold",
                style: {
                  fontFamily: 'Poppins, sans-serif'
                },
                children: "City Details"
              }), !isEditing ? /*#__PURE__*/_jsxs(Button, {
                onClick: handleEdit,
                variant: "outline",
                children: [/*#__PURE__*/_jsx(Edit, {
                  className: "w-4 h-4 mr-2"
                }), "Edit"]
              }) : /*#__PURE__*/_jsxs("div", {
                className: "flex gap-2",
                children: [/*#__PURE__*/_jsxs(Button, {
                  onClick: handleSave,
                  className: "bg-[#00C2CB]",
                  children: [/*#__PURE__*/_jsx(Save, {
                    className: "w-4 h-4 mr-2"
                  }), "Save"]
                }), /*#__PURE__*/_jsxs(Button, {
                  onClick: handleCancel,
                  variant: "outline",
                  children: [/*#__PURE__*/_jsx(X, {
                    className: "w-4 h-4 mr-2"
                  }), "Cancel"]
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "grid md:grid-cols-2 gap-6",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "name",
                  children: "City Name"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "name",
                  value: isEditing ? editedData.name : cityData.name,
                  onChange: e => setEditedData({
                    ...editedData,
                    name: e.target.value
                  }),
                  disabled: !isEditing,
                  className: !isEditing ? 'bg-gray-50' : ''
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "mayor",
                  children: "Mayor"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "mayor",
                  value: isEditing ? editedData.mayor : cityData.mayor,
                  onChange: e => setEditedData({
                    ...editedData,
                    mayor: e.target.value
                  }),
                  disabled: !isEditing,
                  className: !isEditing ? 'bg-gray-50' : ''
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "population",
                  children: "Population"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "population",
                  value: isEditing ? editedData.population : cityData.population,
                  onChange: e => setEditedData({
                    ...editedData,
                    population: e.target.value
                  }),
                  disabled: !isEditing,
                  className: !isEditing ? 'bg-gray-50' : ''
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "area",
                  children: "Area"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "area",
                  value: isEditing ? editedData.area : cityData.area,
                  onChange: e => setEditedData({
                    ...editedData,
                    area: e.target.value
                  }),
                  disabled: !isEditing,
                  className: !isEditing ? 'bg-gray-50' : ''
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "established",
                  children: "Established"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "established",
                  value: isEditing ? editedData.established : cityData.established,
                  onChange: e => setEditedData({
                    ...editedData,
                    established: e.target.value
                  }),
                  disabled: !isEditing,
                  className: !isEditing ? 'bg-gray-50' : ''
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "website",
                  children: "Website"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "website",
                  value: isEditing ? editedData.website : cityData.website,
                  onChange: e => setEditedData({
                    ...editedData,
                    website: e.target.value
                  }),
                  disabled: !isEditing,
                  className: !isEditing ? 'bg-gray-50' : ''
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "email",
                  children: "Email"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "email",
                  value: isEditing ? editedData.email : cityData.email,
                  onChange: e => setEditedData({
                    ...editedData,
                    email: e.target.value
                  }),
                  disabled: !isEditing,
                  className: !isEditing ? 'bg-gray-50' : ''
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "phone",
                  children: "Phone"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "phone",
                  value: isEditing ? editedData.phone : cityData.phone,
                  onChange: e => setEditedData({
                    ...editedData,
                    phone: e.target.value
                  }),
                  disabled: !isEditing,
                  className: !isEditing ? 'bg-gray-50' : ''
                })]
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "grid md:grid-cols-4 gap-4",
            children: [/*#__PURE__*/_jsx(motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              children: /*#__PURE__*/_jsxs(Card, {
                className: "p-5 bg-gradient-to-br from-[#1A3C6E] to-[#2a5a9e] text-white",
                children: [/*#__PURE__*/_jsx(Building2, {
                  className: "w-8 h-8 mb-2 opacity-80"
                }), /*#__PURE__*/_jsx("div", {
                  className: "text-2xl font-bold mb-1",
                  children: departments.length
                }), /*#__PURE__*/_jsx("div", {
                  className: "text-sm text-white/80",
                  children: "Departments"
                })]
              })
            }), /*#__PURE__*/_jsx(motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                delay: 0.1
              },
              children: /*#__PURE__*/_jsxs(Card, {
                className: "p-5 bg-gradient-to-br from-[#00C2CB] to-[#00e5f0] text-white",
                children: [/*#__PURE__*/_jsx(Users, {
                  className: "w-8 h-8 mb-2 opacity-80"
                }), /*#__PURE__*/_jsx("div", {
                  className: "text-2xl font-bold mb-1",
                  children: totalEmployees.toLocaleString()
                }), /*#__PURE__*/_jsx("div", {
                  className: "text-sm text-white/80",
                  children: "Employees"
                })]
              })
            }), /*#__PURE__*/_jsx(motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                delay: 0.2
              },
              children: /*#__PURE__*/_jsxs(Card, {
                className: "p-5 bg-gradient-to-br from-[#FF6B35] to-[#ff8c5f] text-white",
                children: [/*#__PURE__*/_jsx(MapPin, {
                  className: "w-8 h-8 mb-2 opacity-80"
                }), /*#__PURE__*/_jsx("div", {
                  className: "text-2xl font-bold mb-1",
                  children: cityData.area
                }), /*#__PURE__*/_jsx("div", {
                  className: "text-sm text-white/80",
                  children: "Total Area"
                })]
              })
            }), /*#__PURE__*/_jsx(motion.div, {
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
              children: /*#__PURE__*/_jsxs(Card, {
                className: "p-5 bg-gradient-to-br from-green-500 to-emerald-500 text-white",
                children: [/*#__PURE__*/_jsx(TrendingUp, {
                  className: "w-8 h-8 mb-2 opacity-80"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "text-2xl font-bold mb-1",
                  children: ["$", totalBudget, "M"]
                }), /*#__PURE__*/_jsx("div", {
                  className: "text-sm text-white/80",
                  children: "Total Budget"
                })]
              })
            })]
          })]
        }), /*#__PURE__*/_jsx(TabsContent, {
          value: "departments",
          className: "space-y-4",
          children: /*#__PURE__*/_jsx("div", {
            className: "grid md:grid-cols-2 gap-4",
            children: departments.map((dept, index) => /*#__PURE__*/_jsx(motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                delay: index * 0.05
              },
              children: /*#__PURE__*/_jsxs(Card, {
                className: "p-5 hover:shadow-lg transition-shadow",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-start justify-between mb-3",
                  children: [/*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsx("h3", {
                      className: "text-lg font-bold mb-1",
                      children: dept.name
                    }), /*#__PURE__*/_jsx(Badge, {
                      className: "bg-green-100 text-green-700",
                      children: dept.status === 'active' ? 'Active' : 'Inactive'
                    })]
                  }), /*#__PURE__*/_jsx(Button, {
                    variant: "ghost",
                    size: "sm",
                    children: /*#__PURE__*/_jsx(Edit, {
                      className: "w-4 h-4"
                    })
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "space-y-2 text-sm",
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex justify-between",
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "text-gray-600",
                      children: "Department Head:"
                    }), /*#__PURE__*/_jsx("span", {
                      className: "font-medium",
                      children: dept.head
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "flex justify-between",
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "text-gray-600",
                      children: "Employees:"
                    }), /*#__PURE__*/_jsx("span", {
                      className: "font-medium",
                      children: dept.employees.toLocaleString()
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "flex justify-between",
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "text-gray-600",
                      children: "Annual Budget:"
                    }), /*#__PURE__*/_jsx("span", {
                      className: "font-medium",
                      children: dept.budget
                    })]
                  })]
                })]
              })
            }, dept.id))
          })
        }), /*#__PURE__*/_jsx(TabsContent, {
          value: "statistics",
          className: "space-y-6",
          children: /*#__PURE__*/_jsxs(Card, {
            className: "p-6",
            children: [/*#__PURE__*/_jsx("h2", {
              className: "text-2xl font-bold mb-6",
              style: {
                fontFamily: 'Poppins, sans-serif'
              },
              children: "City Statistics"
            }), /*#__PURE__*/_jsxs("div", {
              className: "grid md:grid-cols-2 gap-6",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "space-y-4",
                children: [/*#__PURE__*/_jsx("h3", {
                  className: "font-semibold text-lg",
                  children: "Demographics"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "space-y-3",
                  children: [/*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex justify-between mb-1 text-sm",
                      children: [/*#__PURE__*/_jsx("span", {
                        children: "Population Growth"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "font-medium",
                        children: "+3.2%"
                      })]
                    }), /*#__PURE__*/_jsx("div", {
                      className: "h-2 bg-gray-200 rounded-full overflow-hidden",
                      children: /*#__PURE__*/_jsx("div", {
                        className: "h-full w-[32%] bg-green-500 rounded-full"
                      })
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex justify-between mb-1 text-sm",
                      children: [/*#__PURE__*/_jsx("span", {
                        children: "Employment Rate"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "font-medium",
                        children: "94.8%"
                      })]
                    }), /*#__PURE__*/_jsx("div", {
                      className: "h-2 bg-gray-200 rounded-full overflow-hidden",
                      children: /*#__PURE__*/_jsx("div", {
                        className: "h-full w-[95%] bg-blue-500 rounded-full"
                      })
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex justify-between mb-1 text-sm",
                      children: [/*#__PURE__*/_jsx("span", {
                        children: "Education Level"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "font-medium",
                        children: "87.5%"
                      })]
                    }), /*#__PURE__*/_jsx("div", {
                      className: "h-2 bg-gray-200 rounded-full overflow-hidden",
                      children: /*#__PURE__*/_jsx("div", {
                        className: "h-full w-[88%] bg-purple-500 rounded-full"
                      })
                    })]
                  })]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-4",
                children: [/*#__PURE__*/_jsx("h3", {
                  className: "font-semibold text-lg",
                  children: "Infrastructure"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "space-y-3",
                  children: [/*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex justify-between mb-1 text-sm",
                      children: [/*#__PURE__*/_jsx("span", {
                        children: "Public Transport Coverage"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "font-medium",
                        children: "92%"
                      })]
                    }), /*#__PURE__*/_jsx("div", {
                      className: "h-2 bg-gray-200 rounded-full overflow-hidden",
                      children: /*#__PURE__*/_jsx("div", {
                        className: "h-full w-[92%] bg-cyan-500 rounded-full"
                      })
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex justify-between mb-1 text-sm",
                      children: [/*#__PURE__*/_jsx("span", {
                        children: "Green Space Coverage"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "font-medium",
                        children: "28%"
                      })]
                    }), /*#__PURE__*/_jsx("div", {
                      className: "h-2 bg-gray-200 rounded-full overflow-hidden",
                      children: /*#__PURE__*/_jsx("div", {
                        className: "h-full w-[28%] bg-green-500 rounded-full"
                      })
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex justify-between mb-1 text-sm",
                      children: [/*#__PURE__*/_jsx("span", {
                        children: "Digital Connectivity"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "font-medium",
                        children: "96%"
                      })]
                    }), /*#__PURE__*/_jsx("div", {
                      className: "h-2 bg-gray-200 rounded-full overflow-hidden",
                      children: /*#__PURE__*/_jsx("div", {
                        className: "h-full w-[96%] bg-orange-500 rounded-full"
                      })
                    })]
                  })]
                })]
              })]
            })]
          })
        })]
      })]
    })]
  });
}
