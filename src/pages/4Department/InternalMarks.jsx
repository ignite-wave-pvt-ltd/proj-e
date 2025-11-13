// src/components/department/InternalMarks.jsx
import React, { useState } from "react";
import { departmentData } from "../../data/departmentData";

const InternalMarks = () => {
  const [internalMarks, setInternalMarks] = useState(
    departmentData.internalMarks
  );
  const [showMarksModal, setShowMarksModal] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [semesterFilter, setSemesterFilter] = useState("all");

  const [marksForm, setMarksForm] = useState({
    courseCode: "",
    assessmentType: "",
    totalMarks: "",
    dueDate: "",
    semester: 1,
  });

  const courses = departmentData.courses;
  const facultyMembers = departmentData.facultyMembers;

  const filteredMarks = internalMarks
    .filter(
      (marks) =>
        marks.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        marks.assessmentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        marks.courseCode.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (marks) =>
        (courseFilter === "all" || marks.courseCode === courseFilter) &&
        (semesterFilter === "all" ||
          marks.semester.toString() === semesterFilter)
    );

  const handleAddAssessment = (e) => {
    e.preventDefault();
    const course = courses.find((c) => c.code === marksForm.courseCode);
    const newAssessment = {
      id: internalMarks.length + 1,
      courseCode: marksForm.courseCode,
      courseName: course?.name || "Unknown Course",
      faculty: facultyMembers[0]?.name || "Unknown Faculty",
      semester: marksForm.semester,
      assessmentType: marksForm.assessmentType,
      totalMarks: parseInt(marksForm.totalMarks),
      averageMarks: 0,
      submissionRate: 0,
      gradedStudents: 0,
      totalStudents: 50,
      dueDate: marksForm.dueDate,
    };
    setInternalMarks((prev) => [...prev, newAssessment]);
    setShowMarksModal(false);
    setMarksForm({
      courseCode: "",
      assessmentType: "",
      totalMarks: "",
      dueDate: "",
      semester: 1,
    });
  };

  const handleDeleteAssessment = (assessmentId) => {
    setInternalMarks((prev) =>
      prev.filter((marks) => marks.id !== assessmentId)
    );
  };

  const getSubmissionRateColor = (rate) => {
    if (rate >= 90) return "text-green-600";
    if (rate >= 75) return "text-yellow-600";
    return "text-red-600";
  };

  const getAverageMarksColor = (average, total) => {
    const percentage = (average / total) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const calculateOverallStats = () => {
    const totalAssessments = internalMarks.length;
    const totalStudents = internalMarks.reduce(
      (sum, marks) => sum + marks.totalStudents,
      0
    );
    const gradedStudents = internalMarks.reduce(
      (sum, marks) => sum + marks.gradedStudents,
      0
    );
    const averageSubmissionRate =
      internalMarks.reduce((sum, marks) => sum + marks.submissionRate, 0) /
        totalAssessments || 0;
    const overallAverage =
      internalMarks.reduce((sum, marks) => sum + marks.averageMarks, 0) /
        totalAssessments || 0;

    return {
      totalAssessments,
      totalStudents,
      gradedStudents,
      averageSubmissionRate,
      overallAverage,
    };
  };

  const stats = calculateOverallStats();

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
                  Internal Marks
                </h1>
              </div>
              <p className="text-gray-600">
                Manage internal assessments and student marks
              </p>
            </div>
            <button
              onClick={() => setShowMarksModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Add Assessment
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {stats.totalAssessments}
            </div>
            <div className="text-sm text-gray-600">Total Assessments</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {stats.gradedStudents}
            </div>
            <div className="text-sm text-gray-600">Graded Students</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {stats.averageSubmissionRate.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Avg Submission Rate</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {stats.overallAverage.toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Overall Average</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search assessments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Courses</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.code}>
                    {course.code}
                  </option>
                ))}
              </select>
              <select
                value={semesterFilter}
                onChange={(e) => setSemesterFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Semesters</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <option key={sem} value={sem.toString()}>
                    Semester {sem}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Assessments Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMarks.map((assessment) => (
                <div
                  key={assessment.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {assessment.courseCode}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {assessment.courseName}
                        </p>
                        <p className="text-sm text-gray-500">
                          Sem {assessment.semester}
                        </p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {assessment.assessmentType}
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Faculty:</span>
                        <span className="font-medium">
                          {assessment.faculty}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Marks:</span>
                        <span className="font-medium">
                          {assessment.totalMarks}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Average Marks:</span>
                        <span
                          className={`font-medium ${getAverageMarksColor(
                            assessment.averageMarks,
                            assessment.totalMarks
                          )}`}
                        >
                          {assessment.averageMarks.toFixed(1)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Submission Rate:</span>
                        <span
                          className={`font-medium ${getSubmissionRateColor(
                            assessment.submissionRate
                          )}`}
                        >
                          {assessment.submissionRate}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Graded:</span>
                        <span className="font-medium">
                          {assessment.gradedStudents}/{assessment.totalStudents}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-2 mb-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Submission Rate</span>
                          <span>{assessment.submissionRate}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              assessment.submissionRate >= 90
                                ? "bg-green-600"
                                : assessment.submissionRate >= 75
                                ? "bg-yellow-600"
                                : "bg-red-600"
                            }`}
                            style={{ width: `${assessment.submissionRate}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Average Performance</span>
                          <span>
                            {(
                              (assessment.averageMarks /
                                assessment.totalMarks) *
                              100
                            ).toFixed(1)}
                            %
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              assessment.averageMarks / assessment.totalMarks >=
                              0.8
                                ? "bg-green-600"
                                : assessment.averageMarks /
                                    assessment.totalMarks >=
                                  0.6
                                ? "bg-yellow-600"
                                : "bg-red-600"
                            }`}
                            style={{
                              width: `${
                                (assessment.averageMarks /
                                  assessment.totalMarks) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-600">
                        Due: {new Date(assessment.dueDate).toLocaleDateString()}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedAssessment(assessment)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDeleteAssessment(assessment.id)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMarks.length === 0 && (
              <div className="text-center py-12">
                <span className="text-4xl">📘</span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No assessments found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {searchTerm ||
                  courseFilter !== "all" ||
                  semesterFilter !== "all"
                    ? "Try adjusting your search or filters to find what you're looking for."
                    : "No internal assessments have been created yet."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Performance Summary by Course
            </h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Assessments
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Avg Submission Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Avg Marks %
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Performance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {courses.map((course) => {
                    const courseAssessments = internalMarks.filter(
                      (m) => m.courseCode === course.code
                    );
                    const avgSubmissionRate =
                      courseAssessments.length > 0
                        ? courseAssessments.reduce(
                            (sum, a) => sum + a.submissionRate,
                            0
                          ) / courseAssessments.length
                        : 0;
                    const avgMarksPercentage =
                      courseAssessments.length > 0
                        ? courseAssessments.reduce(
                            (sum, a) =>
                              sum + (a.averageMarks / a.totalMarks) * 100,
                            0
                          ) / courseAssessments.length
                        : 0;

                    return (
                      <tr key={course.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {course.code}
                            </div>
                            <div className="text-sm text-gray-500">
                              {course.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {courseAssessments.length}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {avgSubmissionRate.toFixed(1)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {avgMarksPercentage.toFixed(1)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              avgMarksPercentage >= 80
                                ? "bg-green-100 text-green-800"
                                : avgMarksPercentage >= 60
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {avgMarksPercentage >= 80
                              ? "Excellent"
                              : avgMarksPercentage >= 60
                              ? "Good"
                              : "Needs Improvement"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add Assessment Modal */}
        {showMarksModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Add Internal Assessment
                  </h3>
                  <button
                    onClick={() => {
                      setShowMarksModal(false);
                      setMarksForm({
                        courseCode: "",
                        assessmentType: "",
                        totalMarks: "",
                        dueDate: "",
                        semester: 1,
                      });
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleAddAssessment} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Course
                    </label>
                    <select
                      required
                      value={marksForm.courseCode}
                      onChange={(e) =>
                        setMarksForm((prev) => ({
                          ...prev,
                          courseCode: e.target.value,
                        }))
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="">Select Course</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.code}>
                          {course.code} - {course.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Assessment Type
                    </label>
                    <input
                      type="text"
                      required
                      value={marksForm.assessmentType}
                      onChange={(e) =>
                        setMarksForm((prev) => ({
                          ...prev,
                          assessmentType: e.target.value,
                        }))
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      placeholder="e.g., Assignment 1, Quiz 2, Midterm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Total Marks
                      </label>
                      <input
                        type="number"
                        required
                        value={marksForm.totalMarks}
                        onChange={(e) =>
                          setMarksForm((prev) => ({
                            ...prev,
                            totalMarks: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="e.g., 20, 30, 50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Semester
                      </label>
                      <select
                        required
                        value={marksForm.semester}
                        onChange={(e) =>
                          setMarksForm((prev) => ({
                            ...prev,
                            semester: parseInt(e.target.value),
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                          <option key={sem} value={sem}>
                            Semester {sem}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Due Date
                    </label>
                    <input
                      type="date"
                      required
                      value={marksForm.dueDate}
                      onChange={(e) =>
                        setMarksForm((prev) => ({
                          ...prev,
                          dueDate: e.target.value,
                        }))
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowMarksModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Add Assessment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Assessment Details Modal */}
        {selectedAssessment && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Assessment Details
                  </h3>
                  <button
                    onClick={() => setSelectedAssessment(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Course Code
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedAssessment.courseCode}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Course Name
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedAssessment.courseName}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Faculty
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedAssessment.faculty}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Semester
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        Sem {selectedAssessment.semester}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Assessment Type
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedAssessment.assessmentType}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Total Marks
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedAssessment.totalMarks}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Average Marks
                      </label>
                      <p
                        className={`mt-1 text-sm font-medium ${getAverageMarksColor(
                          selectedAssessment.averageMarks,
                          selectedAssessment.totalMarks
                        )}`}
                      >
                        {selectedAssessment.averageMarks.toFixed(1)}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Submission Rate
                      </label>
                      <p
                        className={`mt-1 text-sm font-medium ${getSubmissionRateColor(
                          selectedAssessment.submissionRate
                        )}`}
                      >
                        {selectedAssessment.submissionRate}%
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Graded Students
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedAssessment.gradedStudents}/
                        {selectedAssessment.totalStudents}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Due Date
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {new Date(
                          selectedAssessment.dueDate
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternalMarks;
