// src/components/college/CollegeDashboard.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const CollegeDashboard = () => {
  const location = useLocation();

  const navigation = [
    {
      name: "Departments",
      href: "/college/departments",
      icon: "🏢",
      description: "Manage academic departments",
    },
    {
      name: "Faculty & Staff",
      href: "/college/faculty",
      icon: "👩‍🏫",
      description: "Manage teaching staff",
    },
    {
      name: "Students",
      href: "/college/students",
      icon: "🎓",
      description: "Student management",
    },
    {
      name: "Courses",
      href: "/college/courses",
      icon: "📚",
      description: "Course catalog",
    },
    {
      name: "Fees Setup",
      href: "/college/fees",
      icon: "💰",
      description: "Fee structure management",
    },
    {
      name: "Reports",
      href: "/college/reports",
      icon: "📑",
      description: "Analytics & reports",
    },
  ];

  const stats = [
    { label: "Total Departments", value: "4", change: "+0", icon: "🏢" },
    { label: "Faculty Members", value: "24", change: "+2", icon: "👩‍🏫" },
    { label: "Total Students", value: "1,550", change: "+45", icon: "🎓" },
    { label: "Active Courses", value: "48", change: "+3", icon: "📚" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            College Admin Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Welcome to ABC University Management System
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <span className="ml-2 text-sm text-green-600">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`block p-6 bg-white rounded-lg shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                  isActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-transparent hover:border-blue-300"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">🎓</span>
                </div>
                <div>
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">5 new students</span>{" "}
                    enrolled in Computer Science
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">👩‍🏫</span>
                </div>
                <div>
                  <p className="text-sm text-gray-900">
                    New faculty member{" "}
                    <span className="font-semibold">Dr. Sarah Lee</span> joined
                  </p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">💰</span>
                </div>
                <div>
                  <p className="text-sm text-gray-900">
                    Fee structure updated for{" "}
                    <span className="font-semibold">MBA Program</span>
                  </p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDashboard;
