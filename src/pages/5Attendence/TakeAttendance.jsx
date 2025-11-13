// src/components/attendance/TakeAttendance.jsx
import React, { useState, useEffect } from "react";
import { attendanceData } from "../../data/attendanceData";

const TakeAttendance = () => {
  const [courses, setCourses] = useState(attendanceData.courses);
  const [students, setStudents] = useState(attendanceData.students);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [attendanceDate, setAttendanceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [attendanceType, setAttendanceType] = useState("Theory");
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [currentAttendance, setCurrentAttendance] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter students by selected course
  const courseStudents = students.filter(
    (student) => selectedCourse && student.course === selectedCourse.code
  );

  // Check if attendance already taken for selected course and date
  const isAttendanceTaken = attendanceRecords.some(
    (record) =>
      record.courseCode === selectedCourse?.code &&
      record.date === attendanceDate &&
      record.type === attendanceType
  );

  // Initialize current attendance when course changes
  useEffect(() => {
    if (selectedCourse && courseStudents.length > 0) {
      const existingRecord = attendanceRecords.find(
        (record) =>
          record.courseCode === selectedCourse.code &&
          record.date === attendanceDate &&
          record.type === attendanceType
      );

      if (existingRecord) {
        setCurrentAttendance(existingRecord.students);
      } else {
        // Initialize with all students as present
        const initialAttendance = courseStudents.map((student) => ({
          studentId: student.studentId,
          status: "present",
          timestamp: new Date().toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));
        setCurrentAttendance(initialAttendance);
      }
    }
  }, [selectedCourse, attendanceDate, attendanceType, courseStudents]);

  const handleStatusChange = (studentId, status) => {
    setCurrentAttendance((prev) =>
      prev.map((record) =>
        record.studentId === studentId
          ? {
              ...record,
              status,
              timestamp:
                status === "absent"
                  ? null
                  : new Date().toLocaleTimeString("en-US", {
                      hour12: false,
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
            }
          : record
      )
    );
  };

  const handleMarkAll = (status) => {
    setCurrentAttendance((prev) =>
      prev.map((record) => ({
        ...record,
        status,
        timestamp:
          status === "absent"
            ? null
            : new Date().toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
              }),
      }))
    );
  };

  const handleSubmitAttendance = async () => {
    if (!selectedCourse) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const totalPresent = currentAttendance.filter(
      (s) => s.status === "present"
    ).length;
    const totalAbsent = currentAttendance.filter(
      (s) => s.status === "absent"
    ).length;
    const totalLate = currentAttendance.filter(
      (s) => s.status === "late"
    ).length;

    const newRecord = {
      id: attendanceRecords.length + 1,
      courseCode: selectedCourse.code,
      date: attendanceDate,
      type: attendanceType,
      students: currentAttendance,
      takenBy: "Current User",
      totalPresent,
      totalAbsent,
      totalLate,
    };

    setAttendanceRecords((prev) => [...prev, newRecord]);
    setIsSubmitting(false);

    alert(`Attendance submitted successfully for ${selectedCourse.code}`);
  };

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

  const calculateStats = () => {
    const total = currentAttendance.length;
    const present = currentAttendance.filter(
      (s) => s.status === "present"
    ).length;
    const absent = currentAttendance.filter(
      (s) => s.status === "absent"
    ).length;
    const late = currentAttendance.filter((s) => s.status === "late").length;
    const percentage =
      total > 0 ? (((present + late) / total) * 100).toFixed(1) : 0;

    return { total, present, absent, late, percentage };
  };

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">✅</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  Take Attendance
                </h1>
              </div>
              <p className="text-gray-600">
                Mark student attendance for classes and labs
              </p>
            </div>
            <div className="text-sm text-gray-600">
              Today: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Course Selection */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Select Course & Date
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Course
                </label>
                <select
                  value={selectedCourse?.id || ""}
                  onChange={(e) => {
                    const courseId = parseInt(e.target.value);
                    const course = courses.find((c) => c.id === courseId);
                    setSelectedCourse(course || null);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.code} - {course.name} (Sem {course.semester},
                      Batch {course.batch})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={attendanceDate}
                  onChange={(e) => setAttendanceDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class Type
                </label>
                <select
                  value={attendanceType}
                  onChange={(e) => setAttendanceType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Theory">Theory</option>
                  <option value="Lab">Lab</option>
                </select>
              </div>
            </div>

            {/* Course Info */}
            {selectedCourse && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Course:</span>
                    <span className="ml-2 font-medium">
                      {selectedCourse.code} - {selectedCourse.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Semester:</span>
                    <span className="ml-2 font-medium">
                      {selectedCourse.semester}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Batch:</span>
                    <span className="ml-2 font-medium">
                      {selectedCourse.batch}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Total Students:</span>
                    <span className="ml-2 font-medium">
                      {selectedCourse.totalStudents}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Attendance Marking Interface */}
        {selectedCourse && courseStudents.length > 0 && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Mark Attendance - {selectedCourse.code}
                </h3>
                <div className="flex items-center space-x-4">
                  {isAttendanceTaken && (
                    <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                      Attendance Already Taken
                    </span>
                  )}
                  <div className="text-sm text-gray-600">
                    {stats.percentage}% Attendance
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleMarkAll("present")}
                    className="px-3 py-2 bg-green-100 text-green-700 text-sm rounded-md hover:bg-green-200"
                  >
                    Mark All Present
                  </button>
                  <button
                    onClick={() => handleMarkAll("absent")}
                    className="px-3 py-2 bg-red-100 text-red-700 text-sm rounded-md hover:bg-red-200"
                  >
                    Mark All Absent
                  </button>
                  <button
                    onClick={() => handleMarkAll("late")}
                    className="px-3 py-2 bg-yellow-100 text-yellow-700 text-sm rounded-md hover:bg-yellow-200"
                  >
                    Mark All Late
                  </button>
                </div>

                {/* Stats Summary */}
                <div className="flex space-x-4 text-sm">
                  <div className="text-center">
                    <div className="text-green-600 font-semibold">
                      {stats.present}
                    </div>
                    <div className="text-gray-600">Present</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-600 font-semibold">
                      {stats.late}
                    </div>
                    <div className="text-gray-600">Late</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-600 font-semibold">
                      {stats.absent}
                    </div>
                    <div className="text-gray-600">Absent</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Students List */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courseStudents.map((student) => {
                  const attendanceRecord = currentAttendance.find(
                    (a) => a.studentId === student.studentId
                  );
                  const status = attendanceRecord?.status || "present";

                  return (
                    <div
                      key={student.id}
                      className={`p-4 border rounded-lg transition-all duration-200 ${
                        status === "present"
                          ? "border-green-200 bg-green-50"
                          : status === "absent"
                          ? "border-red-200 bg-red-50"
                          : "border-yellow-200 bg-yellow-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {student.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {student.studentId}
                          </p>
                        </div>
                        {getStatusBadge(status)}
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() =>
                            handleStatusChange(student.studentId, "present")
                          }
                          className={`flex-1 px-2 py-1 text-xs rounded ${
                            status === "present"
                              ? "bg-green-600 text-white"
                              : "bg-green-100 text-green-700 hover:bg-green-200"
                          }`}
                        >
                          Present
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(student.studentId, "late")
                          }
                          className={`flex-1 px-2 py-1 text-xs rounded ${
                            status === "late"
                              ? "bg-yellow-600 text-white"
                              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                          }`}
                        >
                          Late
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(student.studentId, "absent")
                          }
                          className={`flex-1 px-2 py-1 text-xs rounded ${
                            status === "absent"
                              ? "bg-red-600 text-white"
                              : "bg-red-100 text-red-700 hover:bg-red-200"
                          }`}
                        >
                          Absent
                        </button>
                      </div>

                      {attendanceRecord?.timestamp && (
                        <div className="mt-2 text-xs text-gray-500">
                          Marked at: {attendanceRecord.timestamp}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSubmitAttendance}
                  disabled={isSubmitting || isAttendanceTaken}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : isAttendanceTaken ? (
                    "Attendance Already Submitted"
                  ) : (
                    "Submit Attendance"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Today's Schedule */}
        {!selectedCourse && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Today's Classes
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {attendanceData.todaySchedule.map((schedule, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      const course = courses.find(
                        (c) => c.code === schedule.courseCode
                      );
                      setSelectedCourse(course);
                      setAttendanceType(schedule.type);
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {schedule.courseCode}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {schedule.courseName}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          schedule.attendanceTaken
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {schedule.attendanceTaken ? "Taken" : "Pending"}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>Time: {schedule.time}</div>
                      <div>Room: {schedule.room}</div>
                      <div>Type: {schedule.type}</div>
                      <div>Batch: {schedule.batch}</div>
                    </div>
                    <div className="mt-3 text-center">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Take Attendance →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TakeAttendance;
