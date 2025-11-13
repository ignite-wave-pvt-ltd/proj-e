import React, { useState, useEffect } from "react";

const StaffFacultyManagement = () => {
  const [faculty, setFaculty] = useState([]);
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [designationFilter, setDesignationFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    qualification: "",
    specialization: "",
    experience: "",
    joiningDate: "",
    salary: "",
    address: "",
    emergencyContact: "",
    status: "active",
    type: "teaching",
  });

  const departments = [
    "Computer Science & Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Business Administration",
    "Mathematics",
    "Physics",
    "Chemistry",
    "English",
  ];

  const designations = [
    "Professor",
    "Associate Professor",
    "Assistant Professor",
    "Lecturer",
    "Visiting Faculty",
    "Adjunct Professor",
    "Dean",
    "HOD",
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockFaculty = [
        {
          id: 1,
          name: "Dr. Sarah Johnson",
          employeeId: "FAC001",
          email: "s.johnson@university.edu",
          phone: "+1-234-567-8901",
          department: "Computer Science & Engineering",
          designation: "Professor",
          qualification: "Ph.D. in Computer Science",
          specialization: "Artificial Intelligence",
          experience: "15 years",
          joiningDate: "2018-06-15",
          salary: "₹1,85,000",
          address: "123 University Campus, City",
          emergencyContact: "+1-234-567-8999",
          status: "active",
          type: "teaching",
          courses: ["AI/ML", "Data Structures"],
          researchPapers: 25,
          projects: 8,
        },
        {
          id: 2,
          name: "Prof. Michael Chen",
          employeeId: "FAC002",
          email: "m.chen@university.edu",
          phone: "+1-234-567-8902",
          department: "Mechanical Engineering",
          designation: "Associate Professor",
          qualification: "Ph.D. in Mechanical Engineering",
          specialization: "Thermodynamics",
          experience: "12 years",
          joiningDate: "2019-03-20",
          salary: "₹1,45,000",
          address: "456 Faculty Quarters, City",
          emergencyContact: "+1-234-567-8998",
          status: "active",
          type: "teaching",
          courses: ["Thermodynamics", "Fluid Mechanics"],
          researchPapers: 18,
          projects: 6,
        },
        {
          id: 3,
          name: "Dr. Emily Davis",
          employeeId: "FAC003",
          email: "e.davis@university.edu",
          phone: "+1-234-567-8903",
          department: "Business Administration",
          designation: "Assistant Professor",
          qualification: "Ph.D. in Business Management",
          specialization: "Marketing",
          experience: "8 years",
          joiningDate: "2020-08-10",
          salary: "₹1,15,000",
          address: "789 Staff Colony, City",
          emergencyContact: "+1-234-567-8997",
          status: "on_leave",
          type: "teaching",
          courses: ["Marketing Management", "Consumer Behavior"],
          researchPapers: 12,
          projects: 4,
        },
        {
          id: 4,
          name: "Mr. Robert Wilson",
          employeeId: "STAFF001",
          email: "r.wilson@university.edu",
          phone: "+1-234-567-8904",
          department: "Administration",
          designation: "Administrative Officer",
          qualification: "MBA",
          specialization: "Office Management",
          experience: "10 years",
          joiningDate: "2017-11-05",
          salary: "₹85,000",
          address: "321 Admin Block, City",
          emergencyContact: "+1-234-567-8996",
          status: "active",
          type: "non_teaching",
          courses: [],
          researchPapers: 0,
          projects: 2,
        },
      ];
      setFaculty(mockFaculty);
      setFilteredFaculty(mockFaculty);
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    let filtered = faculty;

    if (searchTerm) {
      filtered = filtered.filter(
        (f) =>
          f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          f.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          f.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (departmentFilter !== "all") {
      filtered = filtered.filter((f) => f.department === departmentFilter);
    }

    if (designationFilter !== "all") {
      filtered = filtered.filter((f) => f.designation === designationFilter);
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((f) => f.status === statusFilter);
    }

    setFilteredFaculty(filtered);
  }, [searchTerm, departmentFilter, designationFilter, statusFilter, faculty]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingFaculty) {
      setFaculty(
        faculty.map((f) =>
          f.id === editingFaculty.id
            ? { ...formData, id: editingFaculty.id }
            : f
        )
      );
    } else {
      const newFaculty = {
        ...formData,
        id: faculty.length + 1,
        courses: [],
        researchPapers: 0,
        projects: 0,
      };
      setFaculty([...faculty, newFaculty]);
    }

    setShowForm(false);
    setEditingFaculty(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      employeeId: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      qualification: "",
      specialization: "",
      experience: "",
      joiningDate: "",
      salary: "",
      address: "",
      emergencyContact: "",
      status: "active",
      type: "teaching",
    });
  };

  const handleEdit = (facultyMember) => {
    setFormData(facultyMember);
    setEditingFaculty(facultyMember);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete this faculty member?")
    ) {
      setFaculty(faculty.filter((f) => f.id !== id));
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { color: "bg-green-100 text-green-800", label: "Active" },
      on_leave: { color: "bg-yellow-100 text-yellow-800", label: "On Leave" },
      inactive: { color: "bg-red-100 text-red-800", label: "Inactive" },
    };

    const config = statusConfig[status] || statusConfig.active;
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        {config.label}
      </span>
    );
  };

  const getTypeBadge = (type) => {
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          type === "teaching"
            ? "bg-blue-100 text-blue-800"
            : "bg-purple-100 text-purple-800"
        }`}
      >
        {type === "teaching" ? "Teaching" : "Non-Teaching"}
      </span>
    );
  };

  const FacultyCard = ({ facultyMember }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {facultyMember.name}
          </h3>
          <p className="text-gray-600">
            {facultyMember.employeeId} • {facultyMember.designation}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {getTypeBadge(facultyMember.type)}
          {getStatusBadge(facultyMember.status)}
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600">
          <span className="font-medium w-24">Department:</span>
          <span>{facultyMember.department}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-medium w-24">Email:</span>
          <span>{facultyMember.email}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-medium w-24">Phone:</span>
          <span>{facultyMember.phone}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-medium w-24">Qualification:</span>
          <span>{facultyMember.qualification}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-medium w-24">Experience:</span>
          <span>{facultyMember.experience}</span>
        </div>
        {facultyMember.specialization && (
          <div className="flex items-center text-gray-600">
            <span className="font-medium w-24">Specialization:</span>
            <span>{facultyMember.specialization}</span>
          </div>
        )}
      </div>

      {facultyMember.type === "teaching" && (
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">
              {facultyMember.courses.length}
            </div>
            <div className="text-xs text-gray-600">Courses</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">
              {facultyMember.researchPapers}
            </div>
            <div className="text-xs text-gray-600">Research Papers</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">
              {facultyMember.projects}
            </div>
            <div className="text-xs text-gray-600">Projects</div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Joined: {new Date(facultyMember.joiningDate).toLocaleDateString()}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => handleEdit(facultyMember)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(facultyMember.id)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl p-8 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Staff & Faculty Management
            </h1>
            <p className="text-green-100">
              Manage teaching and non-teaching staff across the institution
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center"
          >
            <span className="mr-2 text-lg">+</span> Add New Staff
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search by name, employee ID, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <select
            value={designationFilter}
            onChange={(e) => setDesignationFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Designations</option>
            {designations.map((desig) => (
              <option key={desig} value={desig}>
                {desig}
              </option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="on_leave">On Leave</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Faculty Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {editingFaculty ? "Edit Staff/Faculty" : "Add New Staff/Faculty"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employee ID *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.employeeId}
                    onChange={(e) =>
                      setFormData({ ...formData, employeeId: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., FAC001"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="employee@university.edu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91-9876543210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department *
                  </label>
                  <select
                    required
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Designation *
                  </label>
                  <select
                    required
                    value={formData.designation}
                    onChange={(e) =>
                      setFormData({ ...formData, designation: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Designation</option>
                    {designations.map((desig) => (
                      <option key={desig} value={desig}>
                        {desig}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qualification *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.qualification}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        qualification: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Ph.D. in Computer Science"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialization
                  </label>
                  <input
                    type="text"
                    value={formData.specialization}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialization: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Area of expertise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 8 years"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Joining Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.joiningDate}
                    onChange={(e) =>
                      setFormData({ ...formData, joiningDate: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.salary}
                    onChange={(e) =>
                      setFormData({ ...formData, salary: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., ₹1,25,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Staff Type *
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="teaching">Teaching Staff</option>
                    <option value="non_teaching">Non-Teaching Staff</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="on_leave">On Leave</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    rows="2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Current address"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    value={formData.emergencyContact}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        emergencyContact: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Emergency contact number"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingFaculty(null);
                    resetForm();
                  }}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingFaculty ? "Update Staff" : "Add Staff"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFaculty.map((facultyMember) => (
          <FacultyCard key={facultyMember.id} facultyMember={facultyMember} />
        ))}
      </div>

      {filteredFaculty.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
          <div className="text-6xl mb-4">👩‍🏫</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No staff members found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search criteria or add a new staff member.
          </p>
        </div>
      )}

      {/* Summary Stats */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Staff Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {faculty.length}
            </div>
            <div className="text-sm text-gray-600">Total Staff</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {faculty.filter((f) => f.type === "teaching").length}
            </div>
            <div className="text-sm text-gray-600">Teaching Staff</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {faculty.filter((f) => f.type === "non_teaching").length}
            </div>
            <div className="text-sm text-gray-600">Non-Teaching</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">
              {faculty.filter((f) => f.status === "active").length}
            </div>
            <div className="text-sm text-gray-600">Active Staff</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffFacultyManagement;
