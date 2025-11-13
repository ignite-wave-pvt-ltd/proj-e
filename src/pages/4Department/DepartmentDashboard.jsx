// src/components/department/DepartmentDashboard.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { departmentData } from "../../data/departmentData";

const DepartmentDashboard = () => {
  const location = useLocation();
  const { departments } = departmentData;

  const navigation = [
    {
      name: "Department Dashboard",
      href: "/department/dashboard",
      icon: "📊",
      description: "Overview of department activities",
    },
    {
      name: "HOD Panel",
      href: "/department/hod",
      icon: "🧑‍💼",
      description: "Head of Department management",
    },
    {
      name: "Faculty Assignments",
      href: "/department/faculty-assign",
      icon: "📋",
      description: "Manage faculty course assignments",
    },
    {
      name: "Class Scheduling",
      href: "/department/schedule",
      icon: "📅",
      description: "Create and manage class schedules",
    },
    {
      name: "Internal Marks",
      href: "/department/internal-marks",
      icon: "📘",
      description: "Manage internal assessments and marks",
    },
  ];

  const stats = [
    {
      label: "Total Departments",
      value: departments.length,
      change: "+0",
      icon: "🏢",
      color: "blue",
    },
    {
      label: "Active Faculty",
      value: departments.reduce((sum, dept) => sum + dept.totalFaculty, 0),
      change: "+2",
      icon: "👩‍🏫",
      color: "green",
    },
    {
      label: "Total Students",
      value: departments.reduce((sum, dept) => sum + dept.totalStudents, 0),
      change: "+45",
      icon: "🎓",
      color: "purple",
    },
    {
      label: "Active Courses",
      value: departments.reduce((sum, dept) => sum + dept.activeCourses, 0),
      change: "+3",
      icon: "📚",
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600",
    };
    return colors[color] || colors.blue;
  };

  const getStatusBadge = (status) => {
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          status === "active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Department Management
          </h1>
          <p className="mt-2 text-gray-600">
            Comprehensive management system for academic departments
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div
                  className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}
                >
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

        {/* Departments Overview */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Departments Overview
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept) => (
                <div
                  key={dept.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {dept.name}
                      </h3>
                      <p className="text-sm text-gray-600">Code: {dept.code}</p>
                    </div>
                    {getStatusBadge(dept.status)}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">HOD:</span>
                      <span className="font-medium">{dept.hod}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Faculty:</span>
                      <span className="font-medium">{dept.totalFaculty}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Students:</span>
                      <span className="font-medium">{dept.totalStudents}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Courses:</span>
                      <span className="font-medium">{dept.activeCourses}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-600">
                      Budget: ₹{dept.budget?.toLocaleString()}
                    </span>
                    <Link
                      to={`/department/hod?dept=${dept.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Manage →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Quick Actions
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/department/faculty-assign"
                  className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl block mb-2">📋</span>
                  <span className="text-sm font-medium text-gray-900">
                    Assign Faculty
                  </span>
                  <span className="text-xs text-gray-600 block mt-1">
                    Course assignments
                  </span>
                </Link>
                <Link
                  to="/department/schedule"
                  className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl block mb-2">📅</span>
                  <span className="text-sm font-medium text-gray-900">
                    Create Schedule
                  </span>
                  <span className="text-xs text-gray-600 block mt-1">
                    Class timetables
                  </span>
                </Link>
                <Link
                  to="/department/internal-marks"
                  className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl block mb-2">📘</span>
                  <span className="text-sm font-medium text-gray-900">
                    Enter Marks
                  </span>
                  <span className="text-xs text-gray-600 block mt-1">
                    Internal assessments
                  </span>
                </Link>
                <Link
                  to="/department/hod"
                  className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl block mb-2">🧑‍💼</span>
                  <span className="text-sm font-medium text-gray-900">
                    HOD Panel
                  </span>
                  <span className="text-xs text-gray-600 block mt-1">
                    Department management
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Department Events
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 border border-blue-200 rounded-lg bg-blue-50">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">🎓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      CS Department Seminar
                    </p>
                    <p className="text-xs text-gray-600">
                      AI in Modern Education - Feb 20, 2024
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border border-green-200 rounded-lg bg-green-50">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">📚</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Faculty Meeting
                    </p>
                    <p className="text-xs text-gray-600">
                      Curriculum Review - Feb 22, 2024
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 border border-purple-200 rounded-lg bg-purple-50">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">💼</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Industry Workshop
                    </p>
                    <p className="text-xs text-gray-600">
                      Cloud Computing Trends - Feb 25, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDashboard;
