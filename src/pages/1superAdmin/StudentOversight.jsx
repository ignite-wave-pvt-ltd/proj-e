import React, { useState } from "react";

const sampleStudents = [
  {
    id: 1,
    studentId: "STU2024001",
    name: "Aarav Sharma",
    email: "aarav.sharma@university.edu",
    phone: "+91-9876543210",
    college: "Engineering College",
    department: "Computer Science & Engineering",
    year: "4th Year",
    cgpa: "9.2",
    attendance: "94%",
    status: "active",
    enrollmentDate: "2021-08-15",
    totalFees: "₹1,25,000",
    feesPaid: "₹1,25,000",
    feesDue: "₹0",
  },
  {
    id: 2,
    studentId: "STU2024002",
    name: "Priya Patel",
    email: "priya.patel@university.edu",
    phone: "+91-9876543212",
    college: "Engineering College",
    department: "Mechanical Engineering",
    year: "3rd Year",
    cgpa: "8.7",
    attendance: "89%",
    status: "active",
    enrollmentDate: "2022-08-20",
    totalFees: "₹1,20,000",
    feesPaid: "₹60,000",
    feesDue: "₹60,000",
  },
  {
    id: 3,
    studentId: "STU2024003",
    name: "Rohan Kumar",
    email: "rohan.kumar@university.edu",
    phone: "+91-9876543214",
    college: "Business School",
    department: "Business Administration",
    year: "2nd Year",
    cgpa: "8.9",
    attendance: "92%",
    status: "on_leave",
    enrollmentDate: "2023-08-10",
    totalFees: "₹95,000",
    feesPaid: "₹95,000",
    feesDue: "₹0",
  },
];

const StudentOversight = () => {
  const [students, setStudents] = useState(sampleStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [collegeFilter, setCollegeFilter] = useState("all");

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || student.status === statusFilter;
    const matchesCollege =
      collegeFilter === "all" || student.college === collegeFilter;
    return matchesSearch && matchesStatus && matchesCollege;
  });

  const getStatusBadge = (status) => {
    const statusStyles = {
      active: "bg-green-100 text-green-800",
      on_leave: "bg-yellow-100 text-yellow-800",
      inactive: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          statusStyles[status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1).replace("_", " ")}
      </span>
    );
  };

  const colleges = [...new Set(students.map((s) => s.college))];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-3">🎓</span>
            <h1 className="text-2xl font-bold text-gray-900">
              Student Oversight
            </h1>
          </div>
          <p className="text-gray-600">
            Monitor and manage all students across the institution
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Students
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {students.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-gray-900">
                  {students.filter((s) => s.status === "active").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-2xl">⏸️</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">On Leave</p>
                <p className="text-2xl font-bold text-gray-900">
                  {students.filter((s) => s.status === "on_leave").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <span className="text-2xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Fees Due</p>
                <p className="text-2xl font-bold text-gray-900">
                  {students.filter((s) => s.feesDue !== "₹0").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search students by name, ID, or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <select
                  value={collegeFilter}
                  onChange={(e) => setCollegeFilter(e.target.value)}
                  className="block w-full md:w-auto pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="all">All Colleges</option>
                  {colleges.map((college) => (
                    <option key={college} value={college}>
                      {college}
                    </option>
                  ))}
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block w-full md:w-auto pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="on_leave">On Leave</option>
                  <option value="inactive">Inactive</option>
                </select>

                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Students Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Academic Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fees Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg">🎓</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {student.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {student.studentId}
                          </div>
                          <div className="text-sm text-gray-500">
                            {student.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {student.college}
                      </div>
                      <div className="text-sm text-gray-500">
                        {student.department}
                      </div>
                      <div className="text-sm text-gray-500">
                        {student.year}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        CGPA: {student.cgpa}
                      </div>
                      <div className="text-sm text-gray-500">
                        Attendance: {student.attendance}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className={`text-sm font-medium ${
                          student.feesDue === "₹0"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {student.feesDue === "₹0"
                          ? "Fees Clear"
                          : `Due: ${student.feesDue}`}
                      </div>
                      <div className="text-sm text-gray-500">
                        Total: {student.totalFees}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(student.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                          View Details
                        </button>
                        <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredStudents.length === 0 && (
              <div className="text-center py-12">
                <span className="text-4xl">🔍</span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No students found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {searchTerm ||
                  statusFilter !== "all" ||
                  collegeFilter !== "all"
                    ? "Try adjusting your search or filter to find what you're looking for."
                    : "No students have been enrolled yet."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentOversight;
