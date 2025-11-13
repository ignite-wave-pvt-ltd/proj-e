// src/components/admission/CoursesIntake.jsx
import React, { useState } from "react";
import { admissionData } from "../../data/admissionData";

const CoursesIntake = () => {
  const [courses, setCourses] = useState(admissionData.courses);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const [formData, setFormData] = useState({
    code: "",
    name: "",
    department: "",
    duration: "",
    seats: "",
    eligibility: "",
    applicationFee: "",
  });

  const departments = [...new Set(courses.map((c) => c.department))];

  const filteredCourses = courses.filter(
    (c) =>
      (c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.code.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (departmentFilter === "all" || c.department === departmentFilter)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCourse) {
      setCourses((prev) =>
        prev.map((c) =>
          c.id === editingCourse.id
            ? {
                ...c,
                ...formData,
                seats: Number(formData.seats),
                applicationFee: Number(formData.applicationFee),
              }
            : c
        )
      );
    } else {
      const newCourse = {
        id: courses.length + 1,
        ...formData,
        seats: Number(formData.seats),
        applicationFee: Number(formData.applicationFee),
        applications: 0,
        approved: 0,
        enrolled: 0,
        status: "active",
      };
      setCourses((prev) => [...prev, newCourse]);
    }
    setShowForm(false);
    setEditingCourse(null);
    setFormData({
      code: "",
      name: "",
      department: "",
      duration: "",
      seats: "",
      eligibility: "",
      applicationFee: "",
    });
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      code: course.code,
      name: course.name,
      department: course.department,
      duration: course.duration,
      seats: course.seats,
      eligibility: course.eligibility,
      applicationFee: course.applicationFee,
    });
    setShowForm(true);
  };

  const handleStatusChange = (id, status) => {
    setCourses((prev) =>
      prev.map((course) => (course.id === id ? { ...course, status } : course))
    );
  };

  const getEnrollmentProgress = (course) => {
    const percentage = (course.applications / course.seats) * 100;
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${
            percentage >= 90
              ? "bg-red-600"
              : percentage >= 75
              ? "bg-yellow-600"
              : "bg-green-600"
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    );
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
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">📘</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  Courses & Intake
                </h1>
              </div>
              <p className="text-gray-600">
                Manage courses, intake capacity, and admission criteria
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Add Course
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {courses.length}
            </div>
            <div className="text-sm text-gray-600">Total Courses</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {courses.reduce((sum, course) => sum + course.seats, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Intake</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {courses.reduce((sum, course) => sum + course.applications, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Applications</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {courses.filter((c) => c.status === "active").length}
            </div>
            <div className="text-sm text-gray-600">Active Courses</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {course.code}
                        </h3>
                        <p className="text-sm text-gray-600">{course.name}</p>
                      </div>
                      {getStatusBadge(course.status)}
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Department:</span>
                        <span className="font-medium">{course.department}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Application Fee:</span>
                        <span className="font-medium">
                          ₹{course.applicationFee}
                        </span>
                      </div>
                    </div>

                    {/* Intake & Applications */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">
                          Applications vs Intake
                        </span>
                        <span className="font-medium">
                          {course.applications}/{course.seats}
                        </span>
                      </div>
                      {getEnrollmentProgress(course)}
                    </div>

                    {/* Approval & Enrollment */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                      <div className="bg-blue-50 p-2 rounded">
                        <div className="text-sm text-blue-600">Approved</div>
                        <div className="font-semibold">{course.approved}</div>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <div className="text-sm text-green-600">Enrolled</div>
                        <div className="font-semibold">{course.enrolled}</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Eligibility:</strong> {course.eligibility}
                    </p>

                    <div className="flex justify-between space-x-2">
                      <button
                        onClick={() => handleEdit(course)}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          handleStatusChange(
                            course.id,
                            course.status === "active" ? "inactive" : "active"
                          )
                        }
                        className="flex-1 px-3 py-2 text-sm border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        {course.status === "active" ? "Deactivate" : "Activate"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <span className="text-4xl">🔍</span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No courses found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {searchTerm || departmentFilter !== "all"
                    ? "Try adjusting your search or filter to find what you're looking for."
                    : "No courses have been added yet."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Add/Edit Course Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {editingCourse ? "Edit Course" : "Add New Course"}
                  </h3>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setEditingCourse(null);
                      setFormData({
                        code: "",
                        name: "",
                        department: "",
                        duration: "",
                        seats: "",
                        eligibility: "",
                        applicationFee: "",
                      });
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Course Code
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.code}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            code: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Course Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Department
                      </label>
                      <select
                        required
                        value={formData.department}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            department: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Duration
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.duration}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            duration: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Total Seats
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.seats}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            seats: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Application Fee (₹)
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.applicationFee}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            applicationFee: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Eligibility Criteria
                    </label>
                    <textarea
                      value={formData.eligibility}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          eligibility: e.target.value,
                        }))
                      }
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      placeholder="Enter eligibility requirements..."
                    />
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      {editingCourse ? "Update Course" : "Add Course"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesIntake;
