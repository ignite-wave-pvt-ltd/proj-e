// src/components/department/ClassScheduling.jsx
import React, { useState } from "react";
import { departmentData } from "../../data/departmentData";

const ClassScheduling = () => {
  const [schedules, setSchedules] = useState(departmentData.classSchedules);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dayFilter, setDayFilter] = useState("all");
  const [semesterFilter, setSemesterFilter] = useState("all");

  const [scheduleForm, setScheduleForm] = useState({
    courseCode: "",
    faculty: "",
    day: "Monday",
    time: "",
    room: "",
    type: "Theory",
    semester: 1,
    batch: "A",
  });

  const facultyMembers = departmentData.facultyMembers;
  const courses = departmentData.courses;

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const timeSlots = [
    "08:00 - 09:30",
    "09:00 - 10:30",
    "10:00 - 11:30",
    "11:00 - 12:30",
    "14:00 - 15:30",
    "15:00 - 16:30",
    "16:00 - 17:30",
  ];
  const rooms = [
    "CS-101",
    "CS-102",
    "CS-201",
    "CS-202",
    "CS-Lab-1",
    "CS-Lab-2",
    "Auditorium",
  ];

  const filteredSchedules = schedules
    .filter(
      (schedule) =>
        schedule.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.courseCode.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (schedule) =>
        (dayFilter === "all" || schedule.day === dayFilter) &&
        (semesterFilter === "all" ||
          schedule.semester.toString() === semesterFilter)
    );

  const getDaySchedules = (day) => {
    return filteredSchedules.filter((schedule) => schedule.day === day);
  };

  const handleAddSchedule = (e) => {
    e.preventDefault();
    const course = courses.find((c) => c.code === scheduleForm.courseCode);
    const newSchedule = {
      id: schedules.length + 1,
      courseCode: scheduleForm.courseCode,
      courseName: course?.name || "Unknown Course",
      faculty: scheduleForm.faculty,
      day: scheduleForm.day,
      time: scheduleForm.time,
      room: scheduleForm.room,
      type: scheduleForm.type,
      semester: scheduleForm.semester,
      batch: scheduleForm.batch,
    };
    setSchedules((prev) => [...prev, newSchedule]);
    setShowScheduleModal(false);
    setScheduleForm({
      courseCode: "",
      faculty: "",
      day: "Monday",
      time: "",
      room: "",
      type: "Theory",
      semester: 1,
      batch: "A",
    });
  };

  const handleDeleteSchedule = (scheduleId) => {
    setSchedules((prev) =>
      prev.filter((schedule) => schedule.id !== scheduleId)
    );
  };

  const getTypeBadge = (type) => {
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

  const checkTimeConflict = (day, time, room, faculty) => {
    return schedules.some(
      (schedule) =>
        schedule.day === day &&
        schedule.time === time &&
        (schedule.room === room || schedule.faculty === faculty)
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
                <span className="text-2xl mr-3">📅</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  Class Scheduling
                </h1>
              </div>
              <p className="text-gray-600">
                Create and manage class schedules and timetables
              </p>
            </div>
            <button
              onClick={() => setShowScheduleModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Add Schedule
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {schedules.length}
            </div>
            <div className="text-sm text-gray-600">Total Schedules</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {new Set(schedules.map((s) => s.courseCode)).size}
            </div>
            <div className="text-sm text-gray-600">Scheduled Courses</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {new Set(schedules.map((s) => s.faculty)).size}
            </div>
            <div className="text-sm text-gray-600">Faculty Involved</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {new Set(schedules.map((s) => s.room)).size}
            </div>
            <div className="text-sm text-gray-600">Rooms Used</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search schedules..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={dayFilter}
                onChange={(e) => setDayFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Days</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
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

          {/* Weekly Timetable View */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Weekly Timetable
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Time
                    </th>
                    {days.map((day) => (
                      <th
                        key={day}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {timeSlots.map((timeSlot) => (
                    <tr key={timeSlot}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {timeSlot}
                      </td>
                      {days.map((day) => {
                        const daySchedules = getDaySchedules(day).filter(
                          (s) => s.time === timeSlot
                        );
                        return (
                          <td key={day} className="px-6 py-4">
                            {daySchedules.map((schedule) => (
                              <div
                                key={schedule.id}
                                className="mb-2 p-2 border-l-4 border-blue-500 bg-blue-50 rounded-r cursor-pointer hover:bg-blue-100"
                                onClick={() => setSelectedSchedule(schedule)}
                              >
                                <div className="text-sm font-medium text-gray-900">
                                  {schedule.courseCode}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {schedule.faculty}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {schedule.room} •{" "}
                                  {getTypeBadge(schedule.type)}
                                </div>
                              </div>
                            ))}
                            {daySchedules.length === 0 && (
                              <div className="text-xs text-gray-400 text-center">
                                -
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* All Schedules List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              All Scheduled Classes
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
                      Faculty
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Schedule
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Room & Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Semester
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSchedules.map((schedule) => (
                    <tr key={schedule.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {schedule.courseCode}
                          </div>
                          <div className="text-sm text-gray-500">
                            {schedule.courseName}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {schedule.faculty}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {schedule.day}
                          </div>
                          <div className="text-sm text-gray-500">
                            {schedule.time}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-900">
                            {schedule.room}
                          </span>
                          {getTypeBadge(schedule.type)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          Sem {schedule.semester}
                        </div>
                        <div className="text-sm text-gray-500">
                          Batch {schedule.batch}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleDeleteSchedule(schedule.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredSchedules.length === 0 && (
                <div className="text-center py-12">
                  <span className="text-4xl">📅</span>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    No schedules found
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {searchTerm ||
                    dayFilter !== "all" ||
                    semesterFilter !== "all"
                      ? "Try adjusting your search or filters to find what you're looking for."
                      : "No class schedules have been created yet."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Add Schedule Modal */}
        {showScheduleModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Add Class Schedule
                  </h3>
                  <button
                    onClick={() => {
                      setShowScheduleModal(false);
                      setScheduleForm({
                        courseCode: "",
                        faculty: "",
                        day: "Monday",
                        time: "",
                        room: "",
                        type: "Theory",
                        semester: 1,
                        batch: "A",
                      });
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleAddSchedule} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Course
                    </label>
                    <select
                      required
                      value={scheduleForm.courseCode}
                      onChange={(e) =>
                        setScheduleForm((prev) => ({
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
                      Faculty
                    </label>
                    <select
                      required
                      value={scheduleForm.faculty}
                      onChange={(e) =>
                        setScheduleForm((prev) => ({
                          ...prev,
                          faculty: e.target.value,
                        }))
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="">Select Faculty</option>
                      {facultyMembers.map((faculty) => (
                        <option key={faculty.id} value={faculty.name}>
                          {faculty.name} ({faculty.designation})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Day
                      </label>
                      <select
                        required
                        value={scheduleForm.day}
                        onChange={(e) =>
                          setScheduleForm((prev) => ({
                            ...prev,
                            day: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      >
                        {days.map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Time
                      </label>
                      <select
                        required
                        value={scheduleForm.time}
                        onChange={(e) =>
                          setScheduleForm((prev) => ({
                            ...prev,
                            time: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Room
                      </label>
                      <select
                        required
                        value={scheduleForm.room}
                        onChange={(e) =>
                          setScheduleForm((prev) => ({
                            ...prev,
                            room: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      >
                        <option value="">Select Room</option>
                        {rooms.map((room) => (
                          <option key={room} value={room}>
                            {room}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Type
                      </label>
                      <select
                        required
                        value={scheduleForm.type}
                        onChange={(e) =>
                          setScheduleForm((prev) => ({
                            ...prev,
                            type: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      >
                        <option value="Theory">Theory</option>
                        <option value="Lab">Lab</option>
                        <option value="Theory + Lab">Theory + Lab</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Semester
                      </label>
                      <select
                        required
                        value={scheduleForm.semester}
                        onChange={(e) =>
                          setScheduleForm((prev) => ({
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Batch
                      </label>
                      <input
                        type="text"
                        required
                        value={scheduleForm.batch}
                        onChange={(e) =>
                          setScheduleForm((prev) => ({
                            ...prev,
                            batch: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="e.g., A, B, A1"
                      />
                    </div>
                  </div>

                  {/* Conflict Check */}
                  {scheduleForm.day &&
                    scheduleForm.time &&
                    scheduleForm.room &&
                    scheduleForm.faculty && (
                      <div className="p-3 rounded-md bg-yellow-50 border border-yellow-200">
                        <div className="text-sm text-yellow-800">
                          {checkTimeConflict(
                            scheduleForm.day,
                            scheduleForm.time,
                            scheduleForm.room,
                            scheduleForm.faculty
                          )
                            ? "⚠️ Time slot conflict detected!"
                            : "✅ Time slot available"}
                        </div>
                      </div>
                    )}

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowScheduleModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={checkTimeConflict(
                        scheduleForm.day,
                        scheduleForm.time,
                        scheduleForm.room,
                        scheduleForm.faculty
                      )}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Add Schedule
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Schedule Details Modal */}
        {selectedSchedule && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Schedule Details
                  </h3>
                  <button
                    onClick={() => setSelectedSchedule(null)}
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
                        {selectedSchedule.courseCode}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Course Name
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedSchedule.courseName}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Faculty
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedSchedule.faculty}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Day
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedSchedule.day}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Time
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedSchedule.time}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Room
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedSchedule.room}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Type
                      </label>
                      <p className="mt-1">
                        {getTypeBadge(selectedSchedule.type)}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Semester
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        Sem {selectedSchedule.semester}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Batch
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedSchedule.batch}
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

export default ClassScheduling;
