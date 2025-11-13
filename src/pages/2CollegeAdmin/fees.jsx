// src/components/college/Fees.jsx
import React, { useState } from "react";
import { collegeData } from "../../data/collegeData";

const Fees = () => {
  const [feeStructures, setFeeStructures] = useState(collegeData.feeStructures);
  const [showForm, setShowForm] = useState(false);
  const [editingFee, setEditingFee] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [academicYearFilter, setAcademicYearFilter] = useState("all");

  const [formData, setFormData] = useState({
    course: "",
    department: "",
    academicYear: "",
    semester: "",
    tuitionFee: "",
    labFee: "",
    libraryFee: "",
    sportsFee: "",
    hostelFee: "",
    dueDate: "",
  });

  const academicYears = [...new Set(feeStructures.map((f) => f.academicYear))];
  const courses = [...new Set(feeStructures.map((f) => f.course))];

  const filteredFees = feeStructures.filter(
    (f) =>
      (f.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.department.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (academicYearFilter === "all" || f.academicYear === academicYearFilter)
  );

  const calculateTotal = (data) => {
    const tuition = Number(data.tuitionFee) || 0;
    const lab = Number(data.labFee) || 0;
    const library = Number(data.libraryFee) || 0;
    const sports = Number(data.sportsFee) || 0;
    const hostel = Number(data.hostelFee) || 0;
    return tuition + lab + library + sports + hostel;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalFee = calculateTotal(formData);

    if (editingFee) {
      setFeeStructures((prev) =>
        prev.map((f) =>
          f.id === editingFee.id ? { ...f, ...formData, totalFee } : f
        )
      );
    } else {
      const newFee = {
        id: feeStructures.length + 1,
        ...formData,
        totalFee,
        status: "active",
      };
      setFeeStructures((prev) => [...prev, newFee]);
    }
    setShowForm(false);
    setEditingFee(null);
    setFormData({
      course: "",
      department: "",
      academicYear: "",
      semester: "",
      tuitionFee: "",
      labFee: "",
      libraryFee: "",
      sportsFee: "",
      hostelFee: "",
      dueDate: "",
    });
  };

  const handleEdit = (fee) => {
    setEditingFee(fee);
    setFormData({
      course: fee.course,
      department: fee.department,
      academicYear: fee.academicYear,
      semester: fee.semester,
      tuitionFee: fee.tuitionFee,
      labFee: fee.labFee,
      libraryFee: fee.libraryFee,
      sportsFee: fee.sportsFee,
      hostelFee: fee.hostelFee,
      dueDate: fee.dueDate,
    });
    setShowForm(true);
  };

  const handleStatusChange = (id, status) => {
    setFeeStructures((prev) =>
      prev.map((fee) => (fee.id === id ? { ...fee, status } : fee))
    );
  };

  const getStatusBadge = (status) => {
    const styles = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
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
                <span className="text-2xl mr-3">💰</span>
                <h1 className="text-2xl font-bold text-gray-900">Fees Setup</h1>
              </div>
              <p className="text-gray-600">
                Manage fee structures for different courses and programs
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Add Fee Structure
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {feeStructures.length}
            </div>
            <div className="text-sm text-gray-600">Fee Structures</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {academicYears.length}
            </div>
            <div className="text-sm text-gray-600">Academic Years</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {courses.length}
            </div>
            <div className="text-sm text-gray-600">Courses</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              $
              {feeStructures
                .reduce((sum, fee) => sum + fee.totalFee, 0)
                .toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Revenue</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search fee structures..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={academicYearFilter}
                onChange={(e) => setAcademicYearFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Academic Years</option>
                {academicYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Fee Structures Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Course & Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Academic Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Fee Breakdown
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredFees.map((fee) => (
                  <tr key={fee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {fee.course}
                        </div>
                        <div className="text-sm text-gray-500">
                          {fee.department}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {fee.academicYear}
                      </div>
                      <div className="text-sm text-gray-500">
                        Semester: {fee.semester}
                      </div>
                      <div className="text-sm text-gray-500">
                        Due: {new Date(fee.dueDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Tuition:</span>
                          <span>${fee.tuitionFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Lab:</span>
                          <span>${fee.labFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Library:</span>
                          <span>${fee.libraryFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Sports:</span>
                          <span>${fee.sportsFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Hostel:</span>
                          <span>${fee.hostelFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold border-t pt-1">
                          <span>Total:</span>
                          <span>${fee.totalFee.toLocaleString()}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(fee.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleEdit(fee)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(
                              fee.id,
                              fee.status === "active" ? "inactive" : "active"
                            )
                          }
                          className="text-orange-600 hover:text-orange-900"
                        >
                          {fee.status === "active" ? "Deactivate" : "Activate"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Fee Structure Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {editingFee
                      ? "Edit Fee Structure"
                      : "Add New Fee Structure"}
                  </h3>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setEditingFee(null);
                      setFormData({
                        course: "",
                        department: "",
                        academicYear: "",
                        semester: "",
                        tuitionFee: "",
                        labFee: "",
                        libraryFee: "",
                        sportsFee: "",
                        hostelFee: "",
                        dueDate: "",
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
                        Course
                      </label>
                      <select
                        required
                        value={formData.course}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            course: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      >
                        <option value="">Select Course</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Department
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.department}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            department: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Academic Year
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.academicYear}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            academicYear: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Semester
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.semester}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            semester: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Tuition Fee ($)
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.tuitionFee}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            tuitionFee: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Lab Fee ($)
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.labFee}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            labFee: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Library Fee ($)
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.libraryFee}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            libraryFee: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Sports Fee ($)
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.sportsFee}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            sportsFee: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Hostel Fee ($)
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.hostelFee}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            hostelFee: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Due Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dueDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            dueDate: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                  </div>

                  {/* Total Calculation */}
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total Fee:</span>
                      <span className="text-2xl font-bold text-green-600">
                        ${calculateTotal(formData).toLocaleString()}
                      </span>
                    </div>
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
                      {editingFee
                        ? "Update Fee Structure"
                        : "Add Fee Structure"}
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

export default Fees;
