// src/components/attendance/ViewAttendance.jsx
import React, { useState } from "react";
import { attendanceData } from "../../data/attendanceData";

const ViewAttendance = () => {
  const [courses] = useState(attendanceData.courses);
  const [students] = useState(attendanceData.students);
  const [attendanceRecords] = useState(attendanceData.attendanceRecords);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [dateRange, setDateRange] = useState({
    start: "2024-02-01",
    end: new Date().toISOString().split("T")[0],
  });
  const [viewType, setViewType] = useState("course"); // 'course' or 'student'

  // Filter records based on selections
  const filteredRecords = attendanceRecords
    .filter((record) => {
      if (viewType === "course" && selectedCourse) {
        return record.courseCode === selectedCourse;
      }
      if (viewType === "student" && selectedStudent) {
        const student = students.find((s) => s.studentId === selectedStudent);
        return student && record.courseCode === student.course;
      }
      return true;
    })
    .filter((record) => {
      const recordDate = new Date(record.date);
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      return recordDate >= startDate && recordDate <= endDate;
    });

  // Calculate course-wise statistics
  const courseStats = courses.map((course) => {
    const courseRecords = attendanceRecords.filter(
      (record) => record.courseCode === course.code
    );
    const totalClasses = courseRecords.length;
    const totalPossibleAttendance = totalClasses * course.totalStudents;
    const totalActualAttendance = courseRecords.reduce(
      (sum, record) => sum + record.totalPresent + record.totalLate,
      0
    );
    const attendancePercentage =
      totalPossibleAttendance > 0
        ? ((totalActualAttendance / totalPossibleAttendance) * 100).toFixed(1)
        : 0;

    return {
      ...course,
      totalClasses,
      attendancePercentage,
      totalActualAttendance,
      totalPossibleAttendance,
    };
  });

  // Calculate student-wise statistics
  const studentStats = students.map((student) => {
    const studentRecords = attendanceRecords.filter((record) =>
      record.students.some((s) => s.studentId === student.studentId)
    );
    const totalClasses = studentRecords.length;
    const presentClasses = studentRecords.filter((record) =>
      record.students.some(
        (s) =>
          s.studentId === student.studentId &&
          (s.status === "present" || s.status === "late")
      )
    ).length;
    const attendancePercentage =
      totalClasses > 0 ? ((presentClasses / totalClasses) * 100).toFixed(1) : 0;

    return {
      ...student,
      totalClasses,
      presentClasses,
      absentClasses: totalClasses - presentClasses,
      attendancePercentage,
    };
  });

  const getStatusBadge = (status) => {
    const styles = {
      present: "bg-green-100 text-green-800",
      absent: "bg-red-100 text-red-800",
      late: "bg-yellow-100 text-yellow-800",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getAttendancePercentageColor = (percentage) => {
    if (percentage >= 85) return "text-green-600";
    if (percentage >= 75) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">👀</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  View Attendance
                </h1>
              </div>
              <p className="text-gray-600">
                View and analyze attendance records
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Filters</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  View Type
                </label>
                <select
                  value={viewType}
                  onChange={(e) => setViewType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="course">Course-wise</option>
                  <option value="student">Student-wise</option>
                </select>
              </div>

              {viewType === "course" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Course
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Courses</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.code}>
                        {course.code}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {viewType === "student" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Student
                  </label>
                  <select
                    value={selectedStudent}
                    onChange={(e) => setSelectedStudent(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Students</option>
                    {students.map((student) => (
                      <option key={student.id} value={student.studentId}>
                        {student.name} ({student.studentId})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, start: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, end: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {filteredRecords.length}
            </div>
            <div className="text-sm text-gray-600">Total Classes</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {filteredRecords.reduce(
                (sum, record) => sum + record.totalPresent,
                0
              )}
            </div>
            <div className="text-sm text-gray-600">Total Present</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {filteredRecords.reduce(
                (sum, record) => sum + record.totalAbsent,
                0
              )}
            </div>
            <div className="text-sm text-gray-600">Total Absent</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {filteredRecords.reduce(
                (sum, record) => sum + record.totalLate,
                0
              )}
            </div>
            <div className="text-sm text-gray-600">Total Late</div>
          </div>
        </div>

        {/* Course-wise Statistics */}
        {viewType === "course" && (
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Course-wise Attendance Summary
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
                        Total Classes
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Total Students
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Attendance %
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Present/Absent/Late
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {courseStats.map((course) => (
                      <tr key={course.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {course.code}
                            </div>
                            <div className="text-sm text-gray-500">
                              {course.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              Sem {course.semester}, Batch {course.batch}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {course.totalClasses}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {course.totalStudents}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div
                              className={`text-sm font-semibold ${getAttendancePercentageColor(
                                course.attendancePercentage
                              )}`}
                            >
                              {course.attendancePercentage}%
                            </div>
                            <div className="ml-2 w-20 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  course.attendancePercentage >= 85
                                    ? "bg-green-600"
                                    : course.attendancePercentage >= 75
                                    ? "bg-yellow-600"
                                    : "bg-red-600"
                                }`}
                                style={{
                                  width: `${course.attendancePercentage}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex space-x-2">
                            <span className="text-green-600">
                              {course.totalActualAttendance}
                            </span>
                            <span>/</span>
                            <span className="text-red-600">
                              {course.totalPossibleAttendance -
                                course.totalActualAttendance}
                            </span>
                            <span>/</span>
                            <span className="text-yellow-600">0</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              course.attendancePercentage >= 85
                                ? "bg-green-100 text-green-800"
                                : course.attendancePercentage >= 75
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {course.attendancePercentage >= 85
                              ? "Excellent"
                              : course.attendancePercentage >= 75
                              ? "Good"
                              : "Needs Attention"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Student-wise Statistics */}
        {viewType === "student" && (
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Student-wise Attendance Summary
              </h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Course
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Total Classes
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Present
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Absent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Attendance %
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {studentStats.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {student.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {student.studentId}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.course}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.totalClasses}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <span className="text-green-600">
                            {student.presentClasses}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <span className="text-red-600">
                            {student.absentClasses}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div
                              className={`text-sm font-semibold ${getAttendancePercentageColor(
                                student.attendancePercentage
                              )}`}
                            >
                              {student.attendancePercentage}%
                            </div>
                            <div className="ml-2 w-20 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  student.attendancePercentage >= 85
                                    ? "bg-green-600"
                                    : student.attendancePercentage >= 75
                                    ? "bg-yellow-600"
                                    : "bg-red-600"
                                }`}
                                style={{
                                  width: `${student.attendancePercentage}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              student.attendancePercentage >= 85
                                ? "bg-green-100 text-green-800"
                                : student.attendancePercentage >= 75
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {student.attendancePercentage >= 85
                              ? "Excellent"
                              : student.attendancePercentage >= 75
                              ? "Good"
                              : "Needs Attention"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Attendance Records */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Detailed Attendance Records
            </h3>
          </div>
          <div className="p-6">
            {filteredRecords.length > 0 ? (
              <div className="space-y-4">
                {filteredRecords.map((record) => (
                  <div
                    key={record.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {record.courseCode} -{" "}
                          {new Date(record.date).toLocaleDateString()}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Type: {record.type} | Taken by: {record.takenBy}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          Present:{" "}
                          <span className="text-green-600">
                            {record.totalPresent}
                          </span>{" "}
                          | Absent:{" "}
                          <span className="text-red-600">
                            {record.totalAbsent}
                          </span>{" "}
                          | Late:{" "}
                          <span className="text-yellow-600">
                            {record.totalLate}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      {record.students.map((studentRecord, index) => {
                        const student = students.find(
                          (s) => s.studentId === studentRecord.studentId
                        );
                        return (
                          <div
                            key={index}
                            className={`p-2 rounded text-xs ${
                              studentRecord.status === "present"
                                ? "bg-green-100 text-green-800"
                                : studentRecord.status === "absent"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            <div className="font-medium">{student?.name}</div>
                            <div>{studentRecord.studentId}</div>
                            {studentRecord.timestamp && (
                              <div className="text-xs opacity-75">
                                {studentRecord.timestamp}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <span className="text-4xl">📊</span>
                <p className="mt-4">
                  No attendance records found for the selected filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAttendance;
