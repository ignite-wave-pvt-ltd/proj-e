// src/components/attendance/AttendanceReports.jsx
import React, { useState } from "react";
import { attendanceData } from "../../data/attendanceData";

const AttendanceReports = () => {
  const [courses] = useState(attendanceData.courses);
  const [students] = useState(attendanceData.students);
  const [attendanceRecords] = useState(attendanceData.attendanceRecords);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [reportType, setReportType] = useState("overview"); // 'overview', 'course', 'student', 'trends'
  const [dateRange, setDateRange] = useState({
    start: "2024-02-01",
    end: new Date().toISOString().split("T")[0],
  });

  // Calculate overall statistics
  const overallStats = {
    totalClasses: attendanceRecords.length,
    totalStudents: students.length,
    totalPresent: attendanceRecords.reduce(
      (sum, record) => sum + record.totalPresent,
      0
    ),
    totalAbsent: attendanceRecords.reduce(
      (sum, record) => sum + record.totalAbsent,
      0
    ),
    totalLate: attendanceRecords.reduce(
      (sum, record) => sum + record.totalLate,
      0
    ),
    averageAttendance:
      attendanceRecords.length > 0
        ? (
            attendanceRecords.reduce((sum, record) => {
              const totalStudents = record.students.length;
              const presentStudents = record.totalPresent + record.totalLate;
              return sum + (presentStudents / totalStudents) * 100;
            }, 0) / attendanceRecords.length
          ).toFixed(1)
        : 0,
  };

  // Course-wise detailed statistics
  const courseDetailedStats = courses.map((course) => {
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

    // Monthly trends
    const monthlyData = Array.from({ length: 6 }, (_, i) => {
      const month = new Date(2024, 1 + i, 1); // Starting from Feb 2024
      const monthRecords = courseRecords.filter((record) => {
        const recordDate = new Date(record.date);
        return (
          recordDate.getMonth() === month.getMonth() &&
          recordDate.getFullYear() === month.getFullYear()
        );
      });

      const monthPossible = monthRecords.length * course.totalStudents;
      const monthActual = monthRecords.reduce(
        (sum, record) => sum + record.totalPresent + record.totalLate,
        0
      );
      const monthPercentage =
        monthPossible > 0
          ? ((monthActual / monthPossible) * 100).toFixed(1)
          : 0;

      return {
        month: month.toLocaleString("default", { month: "short" }),
        percentage: parseFloat(monthPercentage),
      };
    });

    return {
      ...course,
      totalClasses,
      attendancePercentage: parseFloat(attendancePercentage),
      monthlyData,
      totalActualAttendance,
      totalPossibleAttendance,
    };
  });

  // Student performance analysis
  const studentPerformance = students.map((student) => {
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

    // Recent attendance pattern (last 10 classes)
    const recentPattern = studentRecords
      .slice(-10)
      .map((record) => {
        const studentRecord = record.students.find(
          (s) => s.studentId === student.studentId
        );
        return studentRecord ? studentRecord.status : "absent";
      })
      .reverse();

    return {
      ...student,
      totalClasses,
      presentClasses,
      absentClasses: totalClasses - presentClasses,
      attendancePercentage: parseFloat(attendancePercentage),
      recentPattern,
    };
  });

  // Low attendance students (below 75%)
  const lowAttendanceStudents = studentPerformance.filter(
    (student) => student.attendancePercentage < 75
  );

  const getAttendancePercentageColor = (percentage) => {
    if (percentage >= 85) return "text-green-600";
    if (percentage >= 75) return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusBadge = (percentage) => {
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          percentage >= 85
            ? "bg-green-100 text-green-800"
            : percentage >= 75
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {percentage >= 85
          ? "Excellent"
          : percentage >= 75
          ? "Good"
          : "Needs Attention"}
      </span>
    );
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">
            {overallStats.totalClasses}
          </div>
          <div className="text-sm text-gray-600">Total Classes</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">
            {overallStats.averageAttendance}%
          </div>
          <div className="text-sm text-gray-600">Average Attendance</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">
            {overallStats.totalPresent}
          </div>
          <div className="text-sm text-gray-600">Total Present</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">
            {lowAttendanceStudents.length}
          </div>
          <div className="text-sm text-gray-600">Low Attendance Students</div>
        </div>
      </div>

      {/* Course Performance */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Course Performance
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {courseDetailedStats.map((course) => (
              <div
                key={course.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {course.code} - {course.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Sem {course.semester}, Batch {course.batch} |{" "}
                      {course.totalClasses} classes
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-lg font-bold ${getAttendancePercentageColor(
                        course.attendancePercentage
                      )}`}
                    >
                      {course.attendancePercentage}%
                    </div>
                    {getStatusBadge(course.attendancePercentage)}
                  </div>
                </div>

                {/* Monthly Trend */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    <span>Monthly Trend</span>
                    <span>Attendance %</span>
                  </div>
                  <div className="flex items-end space-x-1 h-16">
                    {course.monthlyData.map((month, index) => (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center"
                      >
                        <div
                          className="w-full bg-blue-500 rounded-t transition-all duration-300"
                          style={{ height: `${month.percentage}%` }}
                        ></div>
                        <div className="text-xs text-gray-500 mt-1">
                          {month.month}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                  <div>
                    <div className="text-sm text-gray-600">Present</div>
                    <div className="text-lg font-semibold text-green-600">
                      {course.totalActualAttendance}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Absent</div>
                    <div className="text-lg font-semibold text-red-600">
                      {course.totalPossibleAttendance -
                        course.totalActualAttendance}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Possible</div>
                    <div className="text-lg font-semibold text-gray-600">
                      {course.totalPossibleAttendance}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudentAnalysis = () => (
    <div className="space-y-6">
      {/* Low Attendance Alert */}
      {lowAttendanceStudents.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-red-900">
                Low Attendance Alert
              </h3>
              <p className="text-red-700">
                {lowAttendanceStudents.length} students have attendance below
                75%
              </p>
            </div>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              {lowAttendanceStudents.length} Students
            </span>
          </div>
        </div>
      )}

      {/* Student Performance Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Student Performance Analysis
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
                    Recent Pattern
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentPerformance.map((student) => (
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
                        <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
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
                      <div className="flex space-x-1">
                        {student.recentPattern.map((status, index) => (
                          <div
                            key={index}
                            className={`w-2 h-4 rounded ${
                              status === "present"
                                ? "bg-green-500"
                                : status === "late"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                            title={`Class ${index + 1}: ${status}`}
                          ></div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(student.attendancePercentage)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTrendAnalysis = () => (
    <div className="space-y-6">
      {/* Monthly Trends */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Monthly Attendance Trends
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseDetailedStats.map((course) => (
              <div
                key={course.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <h4 className="font-medium text-gray-900 mb-4">
                  {course.code}
                </h4>
                <div className="space-y-3">
                  {course.monthlyData.map((month, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-600">
                        {month.month}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              month.percentage >= 85
                                ? "bg-green-600"
                                : month.percentage >= 75
                                ? "bg-yellow-600"
                                : "bg-red-600"
                            }`}
                            style={{ width: `${month.percentage}%` }}
                          ></div>
                        </div>
                        <span
                          className={`text-sm font-medium ${getAttendancePercentageColor(
                            month.percentage
                          )}`}
                        >
                          {month.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Attendance Distribution */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Attendance Distribution
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* By Course */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">By Course</h4>
              <div className="space-y-3">
                {courseDetailedStats.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600">{course.code}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-3">
                        <div
                          className="h-3 rounded-full bg-blue-600"
                          style={{ width: `${course.attendancePercentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-12">
                        {course.attendancePercentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* By Performance Category */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">
                By Performance Category
              </h4>
              <div className="space-y-4">
                {[
                  {
                    range: "85-100%",
                    count: studentPerformance.filter(
                      (s) => s.attendancePercentage >= 85
                    ).length,
                    color: "bg-green-500",
                  },
                  {
                    range: "75-84%",
                    count: studentPerformance.filter(
                      (s) =>
                        s.attendancePercentage >= 75 &&
                        s.attendancePercentage < 85
                    ).length,
                    color: "bg-yellow-500",
                  },
                  {
                    range: "Below 75%",
                    count: lowAttendanceStudents.length,
                    color: "bg-red-500",
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600">
                      {category.range}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${category.color}`}
                      ></div>
                      <span className="text-sm font-medium">
                        {category.count} students
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">📊</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  Attendance Reports
                </h1>
              </div>
              <p className="text-gray-600">
                Comprehensive analytics and insights for attendance management
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* Report Type Selection */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {[
                { id: "overview", name: "Overview", icon: "📈" },
                { id: "student", name: "Student Analysis", icon: "👨‍🎓" },
                { id: "trends", name: "Trend Analysis", icon: "📅" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setReportType(tab.id)}
                  className={`flex items-center py-4 px-6 border-b-2 font-medium text-sm ${
                    reportType === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Date Range Filter */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
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
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Filter
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Courses</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.code}>
                      {course.code}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Report Content */}
          <div className="p-6">
            {reportType === "overview" && renderOverview()}
            {reportType === "student" && renderStudentAnalysis()}
            {reportType === "trends" && renderTrendAnalysis()}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-green-600">
              {
                studentPerformance.filter((s) => s.attendancePercentage >= 85)
                  .length
              }
            </div>
            <div className="text-sm text-gray-600">Excellent Attendance</div>
            <div className="text-xs text-gray-500">(85% and above)</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {
                studentPerformance.filter(
                  (s) =>
                    s.attendancePercentage >= 75 && s.attendancePercentage < 85
                ).length
              }
            </div>
            <div className="text-sm text-gray-600">Good Attendance</div>
            <div className="text-xs text-gray-500">(75-84%)</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-red-600">
              {lowAttendanceStudents.length}
            </div>
            <div className="text-sm text-gray-600">Needs Attention</div>
            <div className="text-xs text-gray-500">(Below 75%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReports;
