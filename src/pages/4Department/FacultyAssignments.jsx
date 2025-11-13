// src/components/department/FacultyAssignments.jsx
import React, { useState } from "react";
import { departmentData } from "../../data/departmentData";

const FacultyAssignments = () => {
  const [facultyAssignments, setFacultyAssignments] = useState(
    departmentData.facultyAssignments
  );
  const [facultyMembers] = useState(departmentData.facultyMembers);
  const [courses] = useState(departmentData.courses);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [assignmentForm, setAssignmentForm] = useState({
    facultyId: "",
    courseId: "",
    courseType: "Theory",
  });

  const filteredAssignments = facultyAssignments
    .filter(
      (assignment) =>
        assignment.facultyName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        assignment.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (assignment) =>
        statusFilter === "all" || assignment.status === statusFilter
    );

  const unassignedFaculty = facultyMembers.filter(
    (faculty) =>
      !facultyAssignments.find(
        (assignment) => assignment.employeeId === faculty.employeeId
      )
  );

  const availableCourses = courses.filter(
    (course) =>
      !facultyAssignments.find((assignment) =>
        assignment.assignedCourses.find((ac) => ac.code === course.code)
      )
  );

  const handleAssignCourse = (e) => {
    e.preventDefault();
    const faculty = facultyMembers.find(
      (f) => f.id === parseInt(assignmentForm.facultyId)
    );
    const course = courses.find(
      (c) => c.id === parseInt(assignmentForm.courseId)
    );

    if (!faculty || !course) return;

    const existingAssignment = facultyAssignments.find(
      (a) => a.employeeId === faculty.employeeId
    );

    if (existingAssignment) {
      // Add course to existing faculty assignment
      setFacultyAssignments((prev) =>
        prev.map((assignment) =>
          assignment.employeeId === faculty.employeeId
            ? {
                ...assignment,
                assignedCourses: [
                  ...assignment.assignedCourses,
                  {
                    code: course.code,
                    name: course.name,
                    type: assignmentForm.courseType,
                  },
                ],
                totalCredits: assignment.totalCredits + course.credits,
              }
            : assignment
        )
      );
    } else {
      // Create new faculty assignment
      const newAssignment = {
        id: facultyAssignments.length + 1,
        facultyName: faculty.name,
        employeeId: faculty.employeeId,
        designation: faculty.designation,
        assignedCourses: [
          {
            code: course.code,
            name: course.name,
            type: assignmentForm.courseType,
          },
        ],
        totalCredits: course.credits,
        maxCapacity: 3,
        status: "active",
      };
      setFacultyAssignments((prev) => [...prev, newAssignment]);
    }

    setShowAssignModal(false);
    setAssignmentForm({
      facultyId: "",
      courseId: "",
      courseType: "Theory",
    });
  };

  const handleRemoveCourse = (employeeId, courseCode) => {
    setFacultyAssignments((prev) =>
      prev.map((assignment) => {
        if (assignment.employeeId === employeeId) {
          const removedCourse = assignment.assignedCourses.find(
            (c) => c.code === courseCode
          );
          const course = courses.find((c) => c.code === courseCode);
          return {
            ...assignment,
            assignedCourses: assignment.assignedCourses.filter(
              (c) => c.code !== courseCode
            ),
            totalCredits: assignment.totalCredits - (course?.credits || 0),
          };
        }
        return assignment;
      })
    );
  };

  const getStatusBadge = (status) => {
    const styles = {
      active: "bg-green-100 text-green-800",
      on_leave: "bg-yellow-100 text-yellow-800",
      inactive: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
      >
        {status.replace("_", " ").charAt(0).toUpperCase() +
          status.slice(1).replace("_", " ")}
      </span>
    );
  };

  const getCourseTypeBadge = (type) => {
    const styles = {
      Theory: "bg-blue-100 text-blue-800",
      Lab: "bg-green-100 text-green-800",
      "Theory + Lab": "bg-purple-100 text-purple-800",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[type]}`}
      >
        {type}
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
                <span className="text-2xl mr-3">📋</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  Faculty Assignments
                </h1>
              </div>
              <p className="text-gray-600">
                Manage faculty course assignments and workload
              </p>
            </div>
            <button
              onClick={() => setShowAssignModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Assign Course
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {facultyAssignments.length}
            </div>
            <div className="text-sm text-gray-600">Assigned Faculty</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {facultyAssignments.reduce(
                (sum, assignment) => sum + assignment.assignedCourses.length,
                0
              )}
            </div>
            <div className="text-sm text-gray-600">Total Assignments</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {unassignedFaculty.length}
            </div>
            <div className="text-sm text-gray-600">Unassigned Faculty</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {availableCourses.length}
            </div>
            <div className="text-sm text-gray-600">Available Courses</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search faculty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="on_leave">On Leave</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Faculty Assignments Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {assignment.facultyName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {assignment.designation}
                        </p>
                        <p className="text-sm text-gray-500">
                          ID: {assignment.employeeId}
                        </p>
                      </div>
                      {getStatusBadge(assignment.status)}
                    </div>

                    {/* Assigned Courses */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Assigned Courses
                      </h4>
                      <div className="space-y-2">
                        {assignment.assignedCourses.map((course, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {course.code}
                              </div>
                              <div className="text-xs text-gray-600">
                                {course.name}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getCourseTypeBadge(course.type)}
                              <button
                                onClick={() =>
                                  handleRemoveCourse(
                                    assignment.employeeId,
                                    course.code
                                  )
                                }
                                className="text-red-600 hover:text-red-800 text-xs"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                        {assignment.assignedCourses.length === 0 && (
                          <p className="text-sm text-gray-500 text-center py-2">
                            No courses assigned
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Workload Summary */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-600">
                          Total Credits
                        </div>
                        <div className="text-lg font-semibold text-gray-900">
                          {assignment.totalCredits}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Capacity</div>
                        <div className="text-sm font-medium text-gray-900">
                          {assignment.assignedCourses.length}/
                          {assignment.maxCapacity}
                        </div>
                      </div>
                    </div>

                    {/* Workload Indicator */}
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Workload</span>
                        <span className="text-gray-600">
                          {Math.round(
                            (assignment.assignedCourses.length /
                              assignment.maxCapacity) *
                              100
                          )}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            assignment.assignedCourses.length >=
                            assignment.maxCapacity
                              ? "bg-red-600"
                              : assignment.assignedCourses.length >=
                                assignment.maxCapacity * 0.75
                              ? "bg-yellow-600"
                              : "bg-green-600"
                          }`}
                          style={{
                            width: `${
                              (assignment.assignedCourses.length /
                                assignment.maxCapacity) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredAssignments.length === 0 && (
              <div className="text-center py-12">
                <span className="text-4xl">📋</span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No faculty assignments found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {searchTerm || statusFilter !== "all"
                    ? "Try adjusting your search or filter to find what you're looking for."
                    : "No faculty assignments have been created yet."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Unassigned Faculty Section */}
        {unassignedFaculty.length > 0 && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 bg-yellow-50">
              <h3 className="text-lg font-medium text-yellow-900">
                Unassigned Faculty
              </h3>
              <p className="text-sm text-yellow-700">
                Faculty members without course assignments
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {unassignedFaculty.map((faculty) => (
                  <div
                    key={faculty.id}
                    className="border border-yellow-200 rounded-lg p-4 bg-yellow-50"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {faculty.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {faculty.designation}
                        </p>
                        <p className="text-xs text-gray-500">
                          ID: {faculty.employeeId}
                        </p>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Unassigned
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {faculty.specialization}
                    </p>
                    <button
                      onClick={() => {
                        setAssignmentForm((prev) => ({
                          ...prev,
                          facultyId: faculty.id.toString(),
                        }));
                        setShowAssignModal(true);
                      }}
                      className="w-full px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                    >
                      Assign Course
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Assign Course Modal */}
        {showAssignModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Assign Course to Faculty
                  </h3>
                  <button
                    onClick={() => {
                      setShowAssignModal(false);
                      setAssignmentForm({
                        facultyId: "",
                        courseId: "",
                        courseType: "Theory",
                      });
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleAssignCourse} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Select Faculty
                    </label>
                    <select
                      required
                      value={assignmentForm.facultyId}
                      onChange={(e) =>
                        setAssignmentForm((prev) => ({
                          ...prev,
                          facultyId: e.target.value,
                        }))
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="">Choose Faculty</option>
                      {facultyMembers.map((faculty) => (
                        <option key={faculty.id} value={faculty.id}>
                          {faculty.name} ({faculty.designation})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Select Course
                    </label>
                    <select
                      required
                      value={assignmentForm.courseId}
                      onChange={(e) =>
                        setAssignmentForm((prev) => ({
                          ...prev,
                          courseId: e.target.value,
                        }))
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="">Choose Course</option>
                      {availableCourses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.code} - {course.name} ({course.credits}{" "}
                          credits)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Course Type
                    </label>
                    <select
                      required
                      value={assignmentForm.courseType}
                      onChange={(e) =>
                        setAssignmentForm((prev) => ({
                          ...prev,
                          courseType: e.target.value,
                        }))
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="Theory">Theory</option>
                      <option value="Lab">Lab</option>
                      <option value="Theory + Lab">Theory + Lab</option>
                    </select>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowAssignModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Assign Course
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

export default FacultyAssignments;
