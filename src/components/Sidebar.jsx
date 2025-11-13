import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdownName) =>
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);

  const navigation = [
    // 🏠 DASHBOARD
    {
      name: "Master Admin",
      icon: "🏠",
      type: "dropdown",
      items: [
        {
          name: "Create College",
          href: "master-admin/create-college",
          icon: "📊",
        },
        {
          name: "College Management",
          href: "master-admin/colleges",
          icon: "📢",
        },
        // {
        //   name: "Calendar / Upcoming Events",
        //   href: "master-admin/calendar",
        //   icon: "📅",
        // },
        // {
        //   name: "Quick Links / Shortcuts",
        //   href: "master-admin/quick-links",
        //   icon: "⚡",
        // },
      ],
    },

    // 🔹 1. SUPER ADMIN / VC / CHAIRMAN
    {
      name: "(SUPER ADMIN / VC / CHAIRMAN)",
      icon: "👑",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/superadmin/dashboard", icon: "📊" },
        {
          name: "Department Management",
          href: "/superadmin/departments",
          icon: "🏢",
        },
        { name: "Staff & Faculty", href: "/superadmin/faculty", icon: "👩‍🏫" },
        { name: "Student Oversight", href: "/superadmin/students", icon: "🎓" },
        { name: "Finance", href: "/superadmin/finance", icon: "💰" },
        { name: "Examinations", href: "/superadmin/exams", icon: "🧾" },
        { name: "Placements", href: "/superadmin/placements", icon: "💼" },
        {
          name: "Analytics & Reports",
          href: "/superadmin/reports",
          icon: "📈",
        },
        {
          name: "Announcements",
          href: "/superadmin/announcements",
          icon: "📢",
        },
        // 🆕 NEW MODULES
        {
          name: "Policy & Compliance",
          href: "/superadmin/policy-compliance",
          icon: "🆕",
        },
        {
          name: "Accreditation / NAAC / NBA",
          href: "/superadmin/accreditation",
          icon: "⭐",
        },
        {
          name: "Regulations & Audit Logs",
          href: "/superadmin/regulations",
          icon: "📋",
        },
        {
          name: "Institutional Ranking Data",
          href: "/superadmin/ranking",
          icon: "🏆",
        },
        {
          name: "System Configuration",
          href: "/superadmin/system-config",
          icon: "⚙️",
        },
        {
          name: "Roles & Permissions",
          href: "/superadmin/roles-permissions",
          icon: "🔐",
        },
        {
          name: "User Directory",
          href: "/superadmin/user-directory",
          icon: "👥",
        },
        {
          name: "Access Logs",
          href: "/superadmin/access-logs",
          icon: "📝",
        },
        {
          name: "API Integrations",
          href: "/superadmin/api-integrations",
          icon: "🔌",
        },
      ],
    },

    // 🔹 2. COLLEGE ADMIN / PRINCIPAL / REGISTRAR
    {
      name: "(COLLEGE ADMIN / PRINCIPAL / REGISTRAR)",
      icon: "🏫",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/college/dashboard", icon: "📊" },
        {
          name: "Department Oversight",
          href: "/college/departments",
          icon: "🏢",
        },
        { name: "Faculty & Staff", href: "/college/faculty", icon: "🧑‍🏫" },
        { name: "Student Admissions", href: "/college/admissions", icon: "🎓" },
        { name: "Courses & Curriculum", href: "/college/courses", icon: "📚" },
        { name: "Examinations", href: "/college/exams", icon: "🧾" },
        { name: "Finance & Fees", href: "/college/finance", icon: "💳" },
        { name: "Hostel Management", href: "/college/hostel", icon: "🏠" },
        { name: "Transport", href: "/college/transport", icon: "🚌" },
        {
          name: "Placements & Events",
          href: "/college/placements",
          icon: "💼",
        },
        { name: "Reports & Analytics", href: "/college/reports", icon: "📈" },
        // 🆕 NEW MODULES
        {
          name: "Infrastructure Management",
          href: "/college/infrastructure",
          icon: "🏗️",
        },
        {
          name: "Classrooms / Labs Management",
          href: "/college/classrooms-labs",
          icon: "🔬",
        },
        { name: "Asset Tracking", href: "/college/assets", icon: "📦" },
        {
          name: "Maintenance Requests",
          href: "/college/maintenance",
          icon: "🛠️",
        },
        { name: "Feedback & Surveys", href: "/college/feedback", icon: "📝" },
        {
          name: "Student Feedback System",
          href: "/college/student-feedback",
          icon: "🎓",
        },
        {
          name: "Faculty Feedback System",
          href: "/college/faculty-feedback",
          icon: "👨‍🏫",
        },
        {
          name: "Course Evaluation",
          href: "/college/course-evaluation",
          icon: "📊",
        },
        {
          name: "Accreditation & Data Uploads",
          href: "/college/accreditation",
          icon: "📤",
        },
      ],
    },

    // 🔹 3. DEPARTMENT ADMIN / HOD
    {
      name: "(DEPARTMENT ADMIN / HOD)",
      icon: "🏢",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/department/dashboard", icon: "📊" },
        {
          name: "Faculty Assignment",
          href: "/department/faculty-assign",
          icon: "🧑‍🏫",
        },
        { name: "Course Management", href: "/department/courses", icon: "📘" },
        { name: "Class Timetable", href: "/department/timetable", icon: "📅" },
        {
          name: "Internal Exams & Assessments",
          href: "/department/internal-marks",
          icon: "🧾",
        },
        { name: "Leave Approvals", href: "/department/leaves", icon: "🌴" },
        {
          name: "Departmental Reports",
          href: "/department/reports",
          icon: "📈",
        },
        {
          name: "Notifications",
          href: "/department/notifications",
          icon: "🔔",
        },
        {
          name: "Research & Publications",
          href: "/department/research",
          icon: "📚",
        },
        // 🆕 NEW MODULES
        {
          name: "Mentorship Management",
          href: "/department/mentorship",
          icon: "🤝",
        },
        {
          name: "Mentor–Mentee Mapping",
          href: "/department/mentor-mapping",
          icon: "🗺️",
        },
        {
          name: "Progress Tracking",
          href: "/department/progress-tracking",
          icon: "📈",
        },
        {
          name: "Feedback Logs",
          href: "/department/feedback-logs",
          icon: "📋",
        },
      ],
    },

    // 🔹 4. FACULTY / TEACHER
    {
      name: "(FACULTY / TEACHER)",
      icon: "👩‍🏫",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/faculty/dashboard", icon: "📊" },
        {
          name: "Profile & Personal Info",
          href: "/faculty/profile",
          icon: "👤",
        },
        {
          name: "Attendance Management",
          href: "/faculty/attendance",
          icon: "🗓️",
        },
        { name: "Marks / Assessments", href: "/faculty/marks", icon: "✏️" },
        {
          name: "Study Material Upload",
          href: "/faculty/materials",
          icon: "📚",
        },
        {
          name: "Assignments & Projects",
          href: "/faculty/assignments",
          icon: "📝",
        },
        { name: "Exam Duties", href: "/faculty/exam-duty", icon: "📋" },
        { name: "Leave Management", href: "/faculty/leaves", icon: "🌴" },
        { name: "Reports", href: "/faculty/reports", icon: "📈" },
        { name: "Notifications", href: "/faculty/notifications", icon: "🔔" },
        {
          name: "Research & Publications",
          href: "/faculty/research",
          icon: "📖",
        },
        {
          name: "Student Mentorship",
          href: "/faculty/mentorship",
          icon: "🤝",
        },
        // 🆕 NEW MODULES
        {
          name: "Course Outcome Mapping (OBE)",
          href: "/faculty/outcome-mapping",
          icon: "🎯",
        },
        {
          name: "AI Teaching Assistant",
          href: "/faculty/ai-assistant",
          icon: "🤖",
        },
        {
          name: "Auto-grading System",
          href: "/faculty/auto-grading",
          icon: "⚡",
        },
        {
          name: "Question Generator",
          href: "/faculty/question-generator",
          icon: "❓",
        },
      ],
    },

    // 🔹 5. NON-TEACHING / ADMIN STAFF
    {
      name: "(NON-TEACHING / ADMIN STAFF)",
      icon: "🧑‍💼",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/staff/dashboard", icon: "📊" },
        {
          name: "Fee Collection & Management",
          href: "/staff/fees",
          icon: "💵",
        },
        { name: "Inventory & Assets", href: "/staff/inventory", icon: "📦" },
        { name: "Library Management", href: "/staff/library", icon: "📚" },
        { name: "Hostel Tasks", href: "/staff/hostel", icon: "🏠" },
        { name: "Transport Tasks", href: "/staff/transport", icon: "🚌" },
        { name: "Task Assignment", href: "/staff/tasks", icon: "🗂️" },
        {
          name: "Internal Communication",
          href: "/staff/communication",
          icon: "💬",
        },
        { name: "Document Management", href: "/staff/documents", icon: "📄" },
        {
          name: "Certificate / Bonafide Issuance",
          href: "/staff/certificates",
          icon: "🏆",
        },
        // 🆕 NEW MODULES
        {
          name: "Record Digitization",
          href: "/staff/digitization",
          icon: "💾",
        },
        {
          name: "Procurement & Vendor Management",
          href: "/staff/procurement",
          icon: "🛒",
        },
      ],
    },

    // 🔹 6. EXAM & EVALUATION STAFF
    {
      name: "Exams & Evaluation",
      icon: "🧾",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/exam/dashboard", icon: "📊" },
        { name: "Exam Scheduling", href: "/exam/schedule", icon: "🗓️" },
        { name: "Hall Allocation", href: "/exam/hall", icon: "🏛️" },
        {
          name: "Question Paper Management",
          href: "/exam/questions",
          icon: "📄",
        },
        { name: "Marks Entry", href: "/exam/marks", icon: "✏️" },
        { name: "Result Processing", href: "/exam/results", icon: "📜" },
        {
          name: "Revaluation Management",
          href: "/exam/revaluation",
          icon: "🔄",
        },
        {
          name: "Exam Duty Allocation",
          href: "/exam/duty-allocation",
          icon: "👥",
        },
        { name: "Reports", href: "/exam/reports", icon: "📈" },
        // 🆕 NEW MODULES
        {
          name: "Online Exam Integration",
          href: "/exam/online-integration",
          icon: "💻",
        },
        {
          name: "LMS / Proctoring",
          href: "/exam/proctoring",
          icon: "👁️",
        },
        {
          name: "Exam Security & Audit Logs",
          href: "/exam/security-audit",
          icon: "🔒",
        },
      ],
    },

    // 🔹 7. STUDENT PANEL
    {
      name: "Student Panel",
      icon: "🎓",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/student/dashboard", icon: "📊" },
        {
          name: "Profile & Academic Info",
          href: "/student/profile",
          icon: "👤",
        },
        {
          name: "Attendance & Analytics",
          href: "/student/attendance",
          icon: "📋",
        },
        { name: "Exams & Marks", href: "/student/results", icon: "🧾" },
        { name: "Course Enrollment", href: "/student/courses", icon: "📘" },
        { name: "Timetable", href: "/student/timetable", icon: "📅" },
        {
          name: "Assignments & Projects",
          href: "/student/assignments",
          icon: "📝",
        },
        { name: "Fees & Payments", href: "/student/fees", icon: "💳" },
        { name: "Library Access", href: "/student/library", icon: "📚" },
        { name: "Hostel & Transport", href: "/student/hostel", icon: "🏠" },
        {
          name: "Placements & Internships",
          href: "/student/placements",
          icon: "💼",
        },
        {
          name: "Notifications & Announcements",
          href: "/student/notifications",
          icon: "🔔",
        },
        { name: "Support / Grievance", href: "/student/support", icon: "🆘" },
        {
          name: "Achievements & Certificates",
          href: "/student/achievements",
          icon: "🏆",
        },
        { name: "Learning Analytics", href: "/student/analytics", icon: "📈" },
        // 🆕 NEW MODULES
        {
          name: "Career Guidance / AI Counselor",
          href: "/student/career-guidance",
          icon: "🧠",
        },
        {
          name: "Digital ID & Documents",
          href: "/student/digital-id",
          icon: "🆔",
        },
      ],
    },

    // 🔹 8. PARENT PANEL
    {
      name: "Parent Panel",
      icon: "👨‍👩‍👧",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/parent/dashboard", icon: "📊" },
        {
          name: "Child Profile & Academic View",
          href: "/parent/children",
          icon: "🧒",
        },
        { name: "Attendance Overview", href: "/parent/attendance", icon: "📋" },
        { name: "Exam Results", href: "/parent/results", icon: "🧾" },
        { name: "Fee Status / Payments", href: "/parent/fees", icon: "💰" },
        {
          name: "Communication with Faculty",
          href: "/parent/communication",
          icon: "💬",
        },
        { name: "Transport Tracking", href: "/parent/transport", icon: "🚌" },
        { name: "Hostel Info", href: "/parent/hostel", icon: "🏠" },
        { name: "Counseling Updates", href: "/parent/counseling", icon: "🧠" },
        { name: "Performance Reports", href: "/parent/reports", icon: "📈" },
        { name: "Notifications", href: "/parent/notifications", icon: "🔔" },
        // 🆕 NEW MODULES
        {
          name: "Multi-Child Management",
          href: "/parent/multi-child",
          icon: "👨‍👩‍👧‍👦",
        },
        {
          name: "Alerts & Notifications",
          href: "/parent/alerts",
          icon: "🚨",
        },
      ],
    },

    // 🔹 9. TRANSPORT STAFF / DRIVERS
    {
      name: "Transport Management",
      icon: "🚌",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/transport/dashboard", icon: "📊" },
        {
          name: "Vehicle & Route Management",
          href: "/transport/routes",
          icon: "🗺️",
        },
        { name: "Student Lists", href: "/transport/students", icon: "👥" },
        { name: "GPS Tracking", href: "/transport/tracking", icon: "📍" },
        { name: "Pickup / Drop Logs", href: "/transport/logs", icon: "🧾" },
        { name: "Emergency Alerts", href: "/transport/alerts", icon: "🚨" },
        {
          name: "Maintenance Logs",
          href: "/transport/maintenance",
          icon: "🛠️",
        },
        // 🆕 NEW MODULES
        {
          name: "Driver Attendance / Scheduling",
          href: "/transport/driver-scheduling",
          icon: "👨‍💼",
        },
      ],
    },

    // 🔹 10. HOSTEL WARDEN / STAFF
    {
      name: "Hostel Management",
      icon: "🏠",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/hostel/dashboard", icon: "📊" },
        {
          name: "Room Allocation & Availability",
          href: "/hostel/rooms",
          icon: "🛏️",
        },
        { name: "Hostel Attendance", href: "/hostel/attendance", icon: "🗒️" },
        { name: "Mess Menu & Billing", href: "/hostel/mess", icon: "🍽️" },
        {
          name: "Complaints / Incidents",
          href: "/hostel/complaints",
          icon: "⚠️",
        },
        { name: "Visitor Logs", href: "/hostel/visitors", icon: "📖" },
        { name: "Discipline Reports", href: "/hostel/discipline", icon: "📋" },
        { name: "Notifications", href: "/hostel/notices", icon: "📢" },
        // 🆕 NEW MODULES
        {
          name: "Hostel Fee & Mess Billing",
          href: "/hostel/billing",
          icon: "💳",
        },
        {
          name: "Inventory & Supplies",
          href: "/hostel/inventory",
          icon: "📦",
        },
      ],
    },

    // 🔹 11. PLACEMENT / CAREER TEAM
    {
      name: "Placement & Career",
      icon: "💼",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/placement/dashboard", icon: "📊" },
        {
          name: "Company Management",
          href: "/placement/companies",
          icon: "🏢",
        },
        { name: "Job Postings", href: "/placement/jobs", icon: "📋" },
        {
          name: "Resume / Application Management",
          href: "/placement/applications",
          icon: "🧾",
        },
        {
          name: "Interview Scheduling",
          href: "/placement/interviews",
          icon: "📅",
        },
        { name: "Placement Reports", href: "/placement/reports", icon: "📈" },
        { name: "Alumni Engagement", href: "/placement/alumni", icon: "👨‍🎓" },
        {
          name: "Training & Skill Programs",
          href: "/placement/training",
          icon: "🎯",
        },
        // 🆕 NEW MODULES
        {
          name: "Career Fair Management",
          href: "/placement/career-fair",
          icon: "🎪",
        },
        {
          name: "Placement Analytics",
          href: "/placement/analytics",
          icon: "📊",
        },
      ],
    },

    // 🔹 12. LIBRARY STAFF
    {
      name: "Library Management",
      icon: "📚",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/library/dashboard", icon: "📊" },
        { name: "Catalog Management", href: "/library/catalog", icon: "📘" },
        {
          name: "Issue / Return / Renewals",
          href: "/library/issue",
          icon: "📦",
        },
        { name: "Fines & Payments", href: "/library/fines", icon: "💵" },
        {
          name: "E-Library / Digital Resources",
          href: "/library/ebooks",
          icon: "💾",
        },
        {
          name: "Inventory Management",
          href: "/library/inventory",
          icon: "📦",
        },
        { name: "Reports", href: "/library/reports", icon: "📈" },
        {
          name: "Book Requests / Recommendations",
          href: "/library/requests",
          icon: "📖",
        },
        // 🆕 NEW MODULES
        {
          name: "Digital Access Control",
          href: "/library/access-control",
          icon: "🔐",
        },
        {
          name: "Reading History Analytics",
          href: "/library/reading-analytics",
          icon: "📊",
        },
      ],
    },

    // 🔹 13. IT / TECHNICAL SUPPORT
    {
      name: "IT & Technical Support",
      icon: "💻",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/it/dashboard", icon: "📊" },
        { name: "Backend Maintenance", href: "/it/maintenance", icon: "🔧" },
        { name: "User Support Tickets", href: "/it/tickets", icon: "🎟️" },
        { name: "System Logs", href: "/it/logs", icon: "🧾" },
        { name: "API & Storage Config", href: "/it/api", icon: "🔌" },
        { name: "Security & Backup", href: "/it/security", icon: "🔒" },
        {
          name: "User Account Recovery",
          href: "/it/account-recovery",
          icon: "🔄",
        },
        { name: "Notifications", href: "/it/notifications", icon: "🔔" },
        // 🆕 NEW MODULES
        {
          name: "Server Health Monitoring",
          href: "/it/server-health",
          icon: "❤️",
        },
        {
          name: "Network & IoT Device Tracking",
          href: "/it/network-tracking",
          icon: "🌐",
        },
      ],
    },

    // 🔹 14. COUNSELORS / STUDENT WELFARE
    {
      name: "Counseling & Student Welfare",
      icon: "🧠",
      type: "dropdown",
      items: [
        { name: "Dashboard", href: "/counseling/dashboard", icon: "📊" },
        { name: "Student Profiles", href: "/counseling/students", icon: "🎓" },
        { name: "Behavior Tracking", href: "/counseling/behavior", icon: "📋" },
        {
          name: "Counseling Sessions",
          href: "/counseling/sessions",
          icon: "🗓️",
        },
        {
          name: "Session Scheduling",
          href: "/counseling/scheduling",
          icon: "⏰",
        },
        { name: "Reports & Feedback", href: "/counseling/reports", icon: "📈" },
        { name: "Communication", href: "/counseling/chat", icon: "💬" },
        {
          name: "Mental Health Records",
          href: "/counseling/records",
          icon: "📁",
        },
        // 🆕 NEW MODULES
        {
          name: "Emergency Intervention Tracker",
          href: "/counseling/emergency-tracker",
          icon: "🚨",
        },
        {
          name: "Wellness Analytics",
          href: "/counseling/wellness-analytics",
          icon: "📊",
        },
      ],
    },

    // 🌐 CROSS-FUNCTIONAL UTILITIES
    {
      name: "Cross-Functional Utilities",
      icon: "🌐",
      type: "dropdown",
      items: [
        {
          name: "Notifications Center",
          href: "/utils/notifications",
          icon: "🔔",
        },
        { name: "Chat / Messaging", href: "/utils/chat", icon: "💬" },
        { name: "Events & Calendar", href: "/utils/calendar", icon: "📅" },
        { name: "Grievance Portal", href: "/utils/grievance", icon: "🆘" },
        { name: "Feedback & Surveys", href: "/utils/feedback", icon: "📝" },
        { name: "AI Chat Assistant", href: "/utils/ai-assistant", icon: "🤖" },
        { name: "Help / Support Desk", href: "/utils/support", icon: "❓" },
        // 🆕 NEW MODULES
        {
          name: "Data Export / Import Tools",
          href: "/utils/data-tools",
          icon: "📤",
        },
        {
          name: "Audit Trail Viewer",
          href: "/utils/audit-trail",
          icon: "👁️",
        },
      ],
    },

    // ⚙️ SYSTEM / SETTINGS
    {
      name: "System / Settings",
      icon: "⚙️",
      type: "dropdown",
      items: [
        { name: "Profile Settings", href: "/settings/profile", icon: "👤" },
        { name: "Theme / Accessibility", href: "/settings/theme", icon: "🎨" },
        { name: "Account Security", href: "/settings/security", icon: "🔒" },
        {
          name: "API Keys / Integration Settings",
          href: "/settings/api",
          icon: "🔑",
        },
      ],
    },
  ];

  return (
    <div className="w-84 bg-white shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 bg-blue-600 text-white">
          <h1 className="text-xl font-bold">EduVerse</h1>
        </div>

        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
                      openDropdown === item.name
                        ? "bg-blue-50 text-blue-600"
                        : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {openDropdown === item.name && (
                    <ul className="mt-2 ml-4 space-y-1 bg-gray-300 rounded-lg py-1">
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          <NavLink
                            to={subItem.href}
                            className={({ isActive }) =>
                              `flex items-center px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
                                isActive
                                  ? "bg-blue-100 text-blue-600 font-medium"
                                  : ""
                              }`
                            }
                          >
                            <span className="mr-3 text-sm">{subItem.icon}</span>
                            <span>{subItem.name}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">U</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">User Name</p>
              <p className="text-xs text-gray-500">user@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
