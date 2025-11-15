// // // // import React, { useState } from "react";
// // // // import { NavLink } from "react-router-dom";

// // // // const Sidebar = () => {
// // // //   const [openDropdown, setOpenDropdown] = useState(null);
// // // //   const toggleDropdown = (dropdownName) =>
// // // //     setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);

// // // //   const navigation = [
// // // //     // 🏠 Master Admin
// // // //     {
// // // //       name: "Master Admin",
// // // //       icon: "🏠",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         {
// // // //           name: "Create College",
// // // //           href: "master-admin/create-college",
// // // //           icon: "📊",
// // // //         },
// // // //         {
// // // //           name: "College Management",
// // // //           href: "master-admin/colleges",
// // // //           icon: "📢",
// // // //         },
// // // //         // {
// // // //         //   name: "Calendar / Upcoming Events",
// // // //         //   href: "master-admin/calendar",
// // // //         //   icon: "📅",
// // // //         // },
// // // //         // {
// // // //         //   name: "Quick Links / Shortcuts",
// // // //         //   href: "master-admin/quick-links",
// // // //         //   icon: "⚡",
// // // //         // },
// // // //       ],
// // // //     },

// // // //     // 🔹 1. SUPER ADMIN / VC / CHAIRMAN
// // // //     {
// // // //       name: "(SUPER ADMIN / VC / CHAIRMAN)",
// // // //       icon: "👑",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/superadmin/dashboard", icon: "📊" },
// // // //         {
// // // //           name: "Department Management",
// // // //           href: "/superadmin/departments",
// // // //           icon: "🏢",
// // // //         },
// // // //         { name: "Staff & Faculty", href: "/superadmin/faculty", icon: "👩‍🏫" },
// // // //         { name: "Student Oversight", href: "/superadmin/students", icon: "🎓" },
// // // //         { name: "Finance", href: "/superadmin/finance", icon: "💰" },
// // // //         { name: "Examinations", href: "/superadmin/exams", icon: "🧾" },
// // // //         { name: "Placements", href: "/superadmin/placements", icon: "💼" },
// // // //         {
// // // //           name: "Analytics & Reports",
// // // //           href: "/superadmin/reports",
// // // //           icon: "📈",
// // // //         },
// // // //         {
// // // //           name: "Announcements",
// // // //           href: "/superadmin/announcements",
// // // //           icon: "📢",
// // // //         },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Policy & Compliance",
// // // //           href: "/superadmin/policy-compliance",
// // // //           icon: "🆕",
// // // //         },
// // // //         {
// // // //           name: "Accreditation / NAAC / NBA",
// // // //           href: "/superadmin/accreditation",
// // // //           icon: "⭐",
// // // //         },
// // // //         {
// // // //           name: "Regulations & Audit Logs",
// // // //           href: "/superadmin/regulations",
// // // //           icon: "📋",
// // // //         },
// // // //         {
// // // //           name: "Institutional Ranking Data",
// // // //           href: "/superadmin/ranking",
// // // //           icon: "🏆",
// // // //         },
// // // //         {
// // // //           name: "System Configuration",
// // // //           href: "/superadmin/system-config",
// // // //           icon: "⚙️",
// // // //         },
// // // //         {
// // // //           name: "Roles & Permissions",
// // // //           href: "/superadmin/roles-permissions",
// // // //           icon: "🔐",
// // // //         },
// // // //         {
// // // //           name: "User Directory",
// // // //           href: "/superadmin/user-directory",
// // // //           icon: "👥",
// // // //         },
// // // //         {
// // // //           name: "Access Logs",
// // // //           href: "/superadmin/access-logs",
// // // //           icon: "📝",
// // // //         },
// // // //         {
// // // //           name: "API Integrations",
// // // //           href: "/superadmin/api-integrations",
// // // //           icon: "🔌",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 2. COLLEGE ADMIN / PRINCIPAL / REGISTRAR
// // // //     {
// // // //       name: "(COLLEGE ADMIN / PRINCIPAL / REGISTRAR)",
// // // //       icon: "🏫",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/college/dashboard", icon: "📊" },
// // // //         {
// // // //           name: "Department Oversight",
// // // //           href: "/college/departments",
// // // //           icon: "🏢",
// // // //         },
// // // //         { name: "Faculty & Staff", href: "/college/faculty", icon: "🧑‍🏫" },
// // // //         { name: "Student Admissions", href: "/college/admissions", icon: "🎓" },
// // // //         { name: "Courses & Curriculum", href: "/college/courses", icon: "📚" },
// // // //         { name: "Examinations", href: "/college/exams", icon: "🧾" },
// // // //         { name: "Finance & Fees", href: "/college/finance", icon: "💳" },
// // // //         { name: "Hostel Management", href: "/college/hostel", icon: "🏠" },
// // // //         { name: "Transport", href: "/college/transport", icon: "🚌" },
// // // //         {
// // // //           name: "Placements & Events",
// // // //           href: "/college/placements",
// // // //           icon: "💼",
// // // //         },
// // // //         { name: "Reports & Analytics", href: "/college/reports", icon: "📈" },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Infrastructure Management",
// // // //           href: "/college/infrastructure",
// // // //           icon: "🏗️",
// // // //         },
// // // //         {
// // // //           name: "Classrooms / Labs Management",
// // // //           href: "/college/classrooms-labs",
// // // //           icon: "🔬",
// // // //         },
// // // //         { name: "Asset Tracking", href: "/college/assets", icon: "📦" },
// // // //         {
// // // //           name: "Maintenance Requests",
// // // //           href: "/college/maintenance",
// // // //           icon: "🛠️",
// // // //         },
// // // //         { name: "Feedback & Surveys", href: "/college/feedback", icon: "📝" },
// // // //         {
// // // //           name: "Student Feedback System",
// // // //           href: "/college/student-feedback",
// // // //           icon: "🎓",
// // // //         },
// // // //         {
// // // //           name: "Faculty Feedback System",
// // // //           href: "/college/faculty-feedback",
// // // //           icon: "👨‍🏫",
// // // //         },
// // // //         {
// // // //           name: "Course Evaluation",
// // // //           href: "/college/course-evaluation",
// // // //           icon: "📊",
// // // //         },
// // // //         {
// // // //           name: "Accreditation & Data Uploads",
// // // //           href: "/college/accreditation",
// // // //           icon: "📤",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 3. DEPARTMENT ADMIN / HOD
// // // //     {
// // // //       name: "(DEPARTMENT ADMIN / HOD)",
// // // //       icon: "🏢",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/department/dashboard", icon: "📊" },
// // // //         {
// // // //           name: "Faculty Assignment",
// // // //           href: "/department/faculty-assign",
// // // //           icon: "🧑‍🏫",
// // // //         },
// // // //         { name: "Course Management", href: "/department/courses", icon: "📘" },
// // // //         { name: "Class Timetable", href: "/department/timetable", icon: "📅" },
// // // //         {
// // // //           name: "Internal Exams & Assessments",
// // // //           href: "/department/internal-marks",
// // // //           icon: "🧾",
// // // //         },
// // // //         { name: "Leave Approvals", href: "/department/leaves", icon: "🌴" },
// // // //         {
// // // //           name: "Departmental Reports",
// // // //           href: "/department/reports",
// // // //           icon: "📈",
// // // //         },
// // // //         {
// // // //           name: "Notifications",
// // // //           href: "/department/notifications",
// // // //           icon: "🔔",
// // // //         },
// // // //         {
// // // //           name: "Research & Publications",
// // // //           href: "/department/research",
// // // //           icon: "📚",
// // // //         },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Mentorship Management",
// // // //           href: "/department/mentorship",
// // // //           icon: "🤝",
// // // //         },
// // // //         {
// // // //           name: "Mentor–Mentee Mapping",
// // // //           href: "/department/mentor-mapping",
// // // //           icon: "🗺️",
// // // //         },
// // // //         {
// // // //           name: "Progress Tracking",
// // // //           href: "/department/progress-tracking",
// // // //           icon: "📈",
// // // //         },
// // // //         {
// // // //           name: "Feedback Logs",
// // // //           href: "/department/feedback-logs",
// // // //           icon: "📋",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 4. FACULTY / TEACHER
// // // //     {
// // // //       name: "(FACULTY / TEACHER)",
// // // //       icon: "👩‍🏫",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/faculty/dashboard", icon: "📊" },
// // // //         {
// // // //           name: "Profile & Personal Info",
// // // //           href: "/faculty/profile",
// // // //           icon: "👤",
// // // //         },
// // // //         {
// // // //           name: "Attendance Management",
// // // //           href: "/faculty/attendance",
// // // //           icon: "🗓️",
// // // //         },
// // // //         { name: "Marks / Assessments", href: "/faculty/marks", icon: "✏️" },
// // // //         {
// // // //           name: "Study Material Upload",
// // // //           href: "/faculty/materials",
// // // //           icon: "📚",
// // // //         },
// // // //         {
// // // //           name: "Assignments & Projects",
// // // //           href: "/faculty/assignments",
// // // //           icon: "📝",
// // // //         },
// // // //         { name: "Exam Duties", href: "/faculty/exam-duty", icon: "📋" },
// // // //         { name: "Leave Management", href: "/faculty/leaves", icon: "🌴" },
// // // //         { name: "Reports", href: "/faculty/reports", icon: "📈" },
// // // //         { name: "Notifications", href: "/faculty/notifications", icon: "🔔" },
// // // //         {
// // // //           name: "Research & Publications",
// // // //           href: "/faculty/research",
// // // //           icon: "📖",
// // // //         },
// // // //         {
// // // //           name: "Student Mentorship",
// // // //           href: "/faculty/mentorship",
// // // //           icon: "🤝",
// // // //         },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Course Outcome Mapping (OBE)",
// // // //           href: "/faculty/outcome-mapping",
// // // //           icon: "🎯",
// // // //         },
// // // //         {
// // // //           name: "AI Teaching Assistant",
// // // //           href: "/faculty/ai-assistant",
// // // //           icon: "🤖",
// // // //         },
// // // //         {
// // // //           name: "Auto-grading System",
// // // //           href: "/faculty/auto-grading",
// // // //           icon: "⚡",
// // // //         },
// // // //         {
// // // //           name: "Question Generator",
// // // //           href: "/faculty/question-generator",
// // // //           icon: "❓",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 5. NON-TEACHING / ADMIN STAFF
// // // //     {
// // // //       name: "(NON-TEACHING / ADMIN STAFF)",
// // // //       icon: "🧑‍💼",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/staff/dashboard", icon: "📊" },
// // // //         {
// // // //           name: "Fee Collection & Management",
// // // //           href: "/staff/fees",
// // // //           icon: "💵",
// // // //         },
// // // //         { name: "Inventory & Assets", href: "/staff/inventory", icon: "📦" },
// // // //         { name: "Library Management", href: "/staff/library", icon: "📚" },
// // // //         { name: "Hostel Tasks", href: "/staff/hostel", icon: "🏠" },
// // // //         { name: "Transport Tasks", href: "/staff/transport", icon: "🚌" },
// // // //         { name: "Task Assignment", href: "/staff/tasks", icon: "🗂️" },
// // // //         {
// // // //           name: "Internal Communication",
// // // //           href: "/staff/communication",
// // // //           icon: "💬",
// // // //         },
// // // //         { name: "Document Management", href: "/staff/documents", icon: "📄" },
// // // //         {
// // // //           name: "Certificate / Bonafide Issuance",
// // // //           href: "/staff/certificates",
// // // //           icon: "🏆",
// // // //         },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Record Digitization",
// // // //           href: "/staff/digitization",
// // // //           icon: "💾",
// // // //         },
// // // //         {
// // // //           name: "Procurement & Vendor Management",
// // // //           href: "/staff/procurement",
// // // //           icon: "🛒",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 6. EXAM & EVALUATION STAFF
// // // //     {
// // // //       name: "Exams & Evaluation",
// // // //       icon: "🧾",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/exam/dashboard", icon: "📊" },
// // // //         { name: "Exam Scheduling", href: "/exam/schedule", icon: "🗓️" },
// // // //         { name: "Hall Allocation", href: "/exam/hall", icon: "🏛️" },
// // // //         {
// // // //           name: "Question Paper Management",
// // // //           href: "/exam/questions",
// // // //           icon: "📄",
// // // //         },
// // // //         { name: "Marks Entry", href: "/exam/marks", icon: "✏️" },
// // // //         { name: "Result Processing", href: "/exam/results", icon: "📜" },
// // // //         {
// // // //           name: "Revaluation Management",
// // // //           href: "/exam/revaluation",
// // // //           icon: "🔄",
// // // //         },
// // // //         {
// // // //           name: "Exam Duty Allocation",
// // // //           href: "/exam/duty-allocation",
// // // //           icon: "👥",
// // // //         },
// // // //         { name: "Reports", href: "/exam/reports", icon: "📈" },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Online Exam Integration",
// // // //           href: "/exam/online-integration",
// // // //           icon: "💻",
// // // //         },
// // // //         {
// // // //           name: "LMS / Proctoring",
// // // //           href: "/exam/proctoring",
// // // //           icon: "👁️",
// // // //         },
// // // //         {
// // // //           name: "Exam Security & Audit Logs",
// // // //           href: "/exam/security-audit",
// // // //           icon: "🔒",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 7. STUDENT PANEL
// // // //     {
// // // //       name: "Student Panel",
// // // //       icon: "🎓",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/student/dashboard", icon: "📊" },
// // // //         {
// // // //           name: "Profile & Academic Info",
// // // //           href: "/student/profile",
// // // //           icon: "👤",
// // // //         },
// // // //         {
// // // //           name: "Attendance & Analytics",
// // // //           href: "/student/attendance",
// // // //           icon: "📋",
// // // //         },
// // // //         { name: "Exams & Marks", href: "/student/results", icon: "🧾" },
// // // //         { name: "Course Enrollment", href: "/student/courses", icon: "📘" },
// // // //         { name: "Timetable", href: "/student/timetable", icon: "📅" },
// // // //         {
// // // //           name: "Assignments & Projects",
// // // //           href: "/student/assignments",
// // // //           icon: "📝",
// // // //         },
// // // //         { name: "Fees & Payments", href: "/student/fees", icon: "💳" },
// // // //         { name: "Library Access", href: "/student/library", icon: "📚" },
// // // //         { name: "Hostel & Transport", href: "/student/hostel", icon: "🏠" },
// // // //         {
// // // //           name: "Placements & Internships",
// // // //           href: "/student/placements",
// // // //           icon: "💼",
// // // //         },
// // // //         {
// // // //           name: "Notifications & Announcements",
// // // //           href: "/student/notifications",
// // // //           icon: "🔔",
// // // //         },
// // // //         { name: "Support / Grievance", href: "/student/support", icon: "🆘" },
// // // //         {
// // // //           name: "Achievements & Certificates",
// // // //           href: "/student/achievements",
// // // //           icon: "🏆",
// // // //         },
// // // //         { name: "Learning Analytics", href: "/student/analytics", icon: "📈" },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Career Guidance / AI Counselor",
// // // //           href: "/student/career-guidance",
// // // //           icon: "🧠",
// // // //         },
// // // //         {
// // // //           name: "Digital ID & Documents",
// // // //           href: "/student/digital-id",
// // // //           icon: "🆔",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 8. PARENT PANEL
// // // //     {
// // // //       name: "Parent Panel",
// // // //       icon: "👨‍👩‍👧",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/parent/dashboard", icon: "📊" },
// // // //         {
// // // //           name: "Child Profile & Academic View",
// // // //           href: "/parent/children",
// // // //           icon: "🧒",
// // // //         },
// // // //         { name: "Attendance Overview", href: "/parent/attendance", icon: "📋" },
// // // //         { name: "Exam Results", href: "/parent/results", icon: "🧾" },
// // // //         { name: "Fee Status / Payments", href: "/parent/fees", icon: "💰" },
// // // //         {
// // // //           name: "Communication with Faculty",
// // // //           href: "/parent/communication",
// // // //           icon: "💬",
// // // //         },
// // // //         { name: "Transport Tracking", href: "/parent/transport", icon: "🚌" },
// // // //         { name: "Hostel Info", href: "/parent/hostel", icon: "🏠" },
// // // //         { name: "Counseling Updates", href: "/parent/counseling", icon: "🧠" },
// // // //         { name: "Performance Reports", href: "/parent/reports", icon: "📈" },
// // // //         { name: "Notifications", href: "/parent/notifications", icon: "🔔" },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Multi-Child Management",
// // // //           href: "/parent/multi-child",
// // // //           icon: "👨‍👩‍👧‍👦",
// // // //         },
// // // //         {
// // // //           name: "Alerts & Notifications",
// // // //           href: "/parent/alerts",
// // // //           icon: "🚨",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 9. TRANSPORT STAFF / DRIVERS
// // // //     {
// // // //       name: "Transport Management",
// // // //       icon: "🚌",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/transport/dashboard", icon: "📊" },
// // // //         {
// // // //           name: "Vehicle & Route Management",
// // // //           href: "/transport/routes",
// // // //           icon: "🗺️",
// // // //         },
// // // //         { name: "Student Lists", href: "/transport/students", icon: "👥" },
// // // //         { name: "GPS Tracking", href: "/transport/tracking", icon: "📍" },
// // // //         { name: "Pickup / Drop Logs", href: "/transport/logs", icon: "🧾" },
// // // //         { name: "Emergency Alerts", href: "/transport/alerts", icon: "🚨" },
// // // //         {
// // // //           name: "Maintenance Logs",
// // // //           href: "/transport/maintenance",
// // // //           icon: "🛠️",
// // // //         },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Driver Attendance / Scheduling",
// // // //           href: "/transport/driver-scheduling",
// // // //           icon: "👨‍💼",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 10. HOSTEL WARDEN / STAFF
// // // //     {
// // // //       name: "Hostel Management",
// // // //       icon: "🏠",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/hostel/dashboard", icon: "📊" },
// // // //         {
// // // //           name: "Room Allocation & Availability",
// // // //           href: "/hostel/rooms",
// // // //           icon: "🛏️",
// // // //         },
// // // //         { name: "Hostel Attendance", href: "/hostel/attendance", icon: "🗒️" },
// // // //         { name: "Mess Menu & Billing", href: "/hostel/mess", icon: "🍽️" },
// // // //         {
// // // //           name: "Complaints / Incidents",
// // // //           href: "/hostel/complaints",
// // // //           icon: "⚠️",
// // // //         },
// // // //         { name: "Visitor Logs", href: "/hostel/visitors", icon: "📖" },
// // // //         { name: "Discipline Reports", href: "/hostel/discipline", icon: "📋" },
// // // //         { name: "Notifications", href: "/hostel/notices", icon: "📢" },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Hostel Fee & Mess Billing",
// // // //           href: "/hostel/billing",
// // // //           icon: "💳",
// // // //         },
// // // //         {
// // // //           name: "Inventory & Supplies",
// // // //           href: "/hostel/inventory",
// // // //           icon: "📦",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 11. PLACEMENT / CAREER TEAM
// // // //     {
// // // //       name: "Placement & Career",
// // // //       icon: "💼",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/placement/dashboard", icon: "📊" },
// // // //         {
// // // //           name: "Company Management",
// // // //           href: "/placement/companies",
// // // //           icon: "🏢",
// // // //         },
// // // //         { name: "Job Postings", href: "/placement/jobs", icon: "📋" },
// // // //         {
// // // //           name: "Resume / Application Management",
// // // //           href: "/placement/applications",
// // // //           icon: "🧾",
// // // //         },
// // // //         {
// // // //           name: "Interview Scheduling",
// // // //           href: "/placement/interviews",
// // // //           icon: "📅",
// // // //         },
// // // //         { name: "Placement Reports", href: "/placement/reports", icon: "📈" },
// // // //         { name: "Alumni Engagement", href: "/placement/alumni", icon: "👨‍🎓" },
// // // //         {
// // // //           name: "Training & Skill Programs",
// // // //           href: "/placement/training",
// // // //           icon: "🎯",
// // // //         },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Career Fair Management",
// // // //           href: "/placement/career-fair",
// // // //           icon: "🎪",
// // // //         },
// // // //         {
// // // //           name: "Placement Analytics",
// // // //           href: "/placement/analytics",
// // // //           icon: "📊",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 12. LIBRARY STAFF
// // // //     {
// // // //       name: "Library Management",
// // // //       icon: "📚",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/library/dashboard", icon: "📊" },
// // // //         { name: "Catalog Management", href: "/library/catalog", icon: "📘" },
// // // //         {
// // // //           name: "Issue / Return / Renewals",
// // // //           href: "/library/issue",
// // // //           icon: "📦",
// // // //         },
// // // //         { name: "Fines & Payments", href: "/library/fines", icon: "💵" },
// // // //         {
// // // //           name: "E-Library / Digital Resources",
// // // //           href: "/library/ebooks",
// // // //           icon: "💾",
// // // //         },
// // // //         {
// // // //           name: "Inventory Management",
// // // //           href: "/library/inventory",
// // // //           icon: "📦",
// // // //         },
// // // //         { name: "Reports", href: "/library/reports", icon: "📈" },
// // // //         {
// // // //           name: "Book Requests / Recommendations",
// // // //           href: "/library/requests",
// // // //           icon: "📖",
// // // //         },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Digital Access Control",
// // // //           href: "/library/access-control",
// // // //           icon: "🔐",
// // // //         },
// // // //         {
// // // //           name: "Reading History Analytics",
// // // //           href: "/library/reading-analytics",
// // // //           icon: "📊",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 13. IT / TECHNICAL SUPPORT
// // // //     {
// // // //       name: "IT & Technical Support",
// // // //       icon: "💻",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/it/dashboard", icon: "📊" },
// // // //         { name: "Backend Maintenance", href: "/it/maintenance", icon: "🔧" },
// // // //         { name: "User Support Tickets", href: "/it/tickets", icon: "🎟️" },
// // // //         { name: "System Logs", href: "/it/logs", icon: "🧾" },
// // // //         { name: "API & Storage Config", href: "/it/api", icon: "🔌" },
// // // //         { name: "Security & Backup", href: "/it/security", icon: "🔒" },
// // // //         {
// // // //           name: "User Account Recovery",
// // // //           href: "/it/account-recovery",
// // // //           icon: "🔄",
// // // //         },
// // // //         { name: "Notifications", href: "/it/notifications", icon: "🔔" },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Server Health Monitoring",
// // // //           href: "/it/server-health",
// // // //           icon: "❤️",
// // // //         },
// // // //         {
// // // //           name: "Network & IoT Device Tracking",
// // // //           href: "/it/network-tracking",
// // // //           icon: "🌐",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🔹 14. COUNSELORS / STUDENT WELFARE
// // // //     {
// // // //       name: "Counseling & Student Welfare",
// // // //       icon: "🧠",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Dashboard", href: "/counseling/dashboard", icon: "📊" },
// // // //         { name: "Student Profiles", href: "/counseling/students", icon: "🎓" },
// // // //         { name: "Behavior Tracking", href: "/counseling/behavior", icon: "📋" },
// // // //         {
// // // //           name: "Counseling Sessions",
// // // //           href: "/counseling/sessions",
// // // //           icon: "🗓️",
// // // //         },
// // // //         {
// // // //           name: "Session Scheduling",
// // // //           href: "/counseling/scheduling",
// // // //           icon: "⏰",
// // // //         },
// // // //         { name: "Reports & Feedback", href: "/counseling/reports", icon: "📈" },
// // // //         { name: "Communication", href: "/counseling/chat", icon: "💬" },
// // // //         {
// // // //           name: "Mental Health Records",
// // // //           href: "/counseling/records",
// // // //           icon: "📁",
// // // //         },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Emergency Intervention Tracker",
// // // //           href: "/counseling/emergency-tracker",
// // // //           icon: "🚨",
// // // //         },
// // // //         {
// // // //           name: "Wellness Analytics",
// // // //           href: "/counseling/wellness-analytics",
// // // //           icon: "📊",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // 🌐 CROSS-FUNCTIONAL UTILITIES
// // // //     {
// // // //       name: "Cross-Functional Utilities",
// // // //       icon: "🌐",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         {
// // // //           name: "Notifications Center",
// // // //           href: "/utils/notifications",
// // // //           icon: "🔔",
// // // //         },
// // // //         { name: "Chat / Messaging", href: "/utils/chat", icon: "💬" },
// // // //         { name: "Events & Calendar", href: "/utils/calendar", icon: "📅" },
// // // //         { name: "Grievance Portal", href: "/utils/grievance", icon: "🆘" },
// // // //         { name: "Feedback & Surveys", href: "/utils/feedback", icon: "📝" },
// // // //         { name: "AI Chat Assistant", href: "/utils/ai-assistant", icon: "🤖" },
// // // //         { name: "Help / Support Desk", href: "/utils/support", icon: "❓" },
// // // //         // 🆕 NEW MODULES
// // // //         {
// // // //           name: "Data Export / Import Tools",
// // // //           href: "/utils/data-tools",
// // // //           icon: "📤",
// // // //         },
// // // //         {
// // // //           name: "Audit Trail Viewer",
// // // //           href: "/utils/audit-trail",
// // // //           icon: "👁️",
// // // //         },
// // // //       ],
// // // //     },

// // // //     // ⚙️ SYSTEM / SETTINGS
// // // //     {
// // // //       name: "System / Settings",
// // // //       icon: "⚙️",
// // // //       type: "dropdown",
// // // //       items: [
// // // //         { name: "Profile Settings", href: "/settings/profile", icon: "👤" },
// // // //         { name: "Theme / Accessibility", href: "/settings/theme", icon: "🎨" },
// // // //         { name: "Account Security", href: "/settings/security", icon: "🔒" },
// // // //         {
// // // //           name: "API Keys / Integration Settings",
// // // //           href: "/settings/api",
// // // //           icon: "🔑",
// // // //         },
// // // //       ],
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="w-84 bg-white shadow-lg">
// // // //       <div className="flex flex-col h-full">
// // // //         <div className="flex items-center justify-center h-16 bg-blue-600 text-white">
// // // //           <h1 className="text-xl font-bold">EduVerse</h1>
// // // //         </div>

// // // //         <nav className="flex-1 px-4 py-6 overflow-y-auto">
// // // //           <ul className="space-y-2">
// // // //             {navigation.map((item) => (
// // // //               <li key={item.name}>
// // // //                 <div>
// // // //                   <button
// // // //                     onClick={() => toggleDropdown(item.name)}
// // // //                     className={`flex items-center justify-between w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
// // // //                       openDropdown === item.name
// // // //                         ? "bg-blue-50 text-blue-600"
// // // //                         : ""
// // // //                     }`}
// // // //                   >
// // // //                     <div className="flex items-center">
// // // //                       <span className="mr-3 text-lg">{item.icon}</span>
// // // //                       <span>{item.name}</span>
// // // //                     </div>
// // // //                     <svg
// // // //                       className={`w-4 h-4 transition-transform duration-200 ${
// // // //                         openDropdown === item.name ? "rotate-180" : ""
// // // //                       }`}
// // // //                       fill="none"
// // // //                       stroke="currentColor"
// // // //                       viewBox="0 0 24 24"
// // // //                     >
// // // //                       <path
// // // //                         strokeLinecap="round"
// // // //                         strokeLinejoin="round"
// // // //                         strokeWidth={2}
// // // //                         d="M19 9l-7 7-7-7"
// // // //                       />
// // // //                     </svg>
// // // //                   </button>

// // // //                   {openDropdown === item.name && (
// // // //                     <ul className="mt-2 ml-4 space-y-1 bg-gray-300 rounded-lg py-1">
// // // //                       {item.items.map((subItem) => (
// // // //                         <li key={subItem.name}>
// // // //                           <NavLink
// // // //                             to={subItem.href}
// // // //                             className={({ isActive }) =>
// // // //                               `flex items-center px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
// // // //                                 isActive
// // // //                                   ? "bg-blue-100 text-blue-600 font-medium"
// // // //                                   : ""
// // // //                               }`
// // // //                             }
// // // //                           >
// // // //                             <span className="mr-3 text-sm">{subItem.icon}</span>
// // // //                             <span>{subItem.name}</span>
// // // //                           </NavLink>
// // // //                         </li>
// // // //                       ))}
// // // //                     </ul>
// // // //                   )}
// // // //                 </div>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </nav>

// // // //         <div className="p-4 border-t border-gray-200">
// // // //           <div className="flex items-center">
// // // //             <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
// // // //               <span className="text-sm font-medium">U</span>
// // // //             </div>
// // // //             <div className="ml-3">
// // // //               <p className="text-sm font-medium text-gray-700">User Name</p>
// // // //               <p className="text-xs text-gray-500">user@example.com</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Sidebar;
// // // import React, { useState } from "react";
// // // import { NavLink } from "react-router-dom";

// // // const Sidebar = () => {
// // //   const [openDropdown, setOpenDropdown] = useState(null);
// // //   const toggleDropdown = (dropdownName) =>
// // //     setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);

// // //   const navigation = [
// // //     // 🏠 Master Admin
// // //     {
// // //       name: "Master Admin",
// // //       icon: "🏠",
// // //       type: "dropdown",
// // //       items: [
// // //         {
// // //           name: "Create College",
// // //           href: "master-admin/create-college",
// // //           icon: "📊",
// // //         },
// // //         {
// // //           name: "College Management",
// // //           href: "master-admin/colleges",
// // //           icon: "📢",
// // //         },
// // //       ],
// // //     },

// // //     // 👑 SUPER ADMIN / VC / CHAIRMAN - UPDATED WITH CRUD SUB-MENUS
// // //     {
// // //       name: "(SUPER ADMIN / VC / CHAIRMAN)",
// // //       icon: "👑",
// // //       type: "dropdown",
// // //       items: [
// // //         // 📊 Dashboard & Overview
// // //         { name: "Dashboard", href: "/superadmin/dashboard", icon: "📊" },
// // //         {
// // //           name: "University Overview",
// // //           href: "/superadmin/overview",
// // //           icon: "🏛️",
// // //         },

// // //         // 🏛️ University & College Management
// // //         {
// // //           name: "🏛️ University & Colleges",
// // //           icon: "🏛️",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "College Management",
// // //               href: "/superadmin/colleges",
// // //               icon: "➕",
// // //             },
// // //             {
// // //               name: "College Hierarchy",
// // //               href: "/superadmin/college-hierarchy",
// // //               icon: "📐",
// // //             },
// // //             {
// // //               name: "University Policies",
// // //               href: "/superadmin/policies",
// // //               icon: "📜",
// // //             },
// // //             {
// // //               name: "Academic Calendar",
// // //               href: "/superadmin/calendar",
// // //               icon: "📅",
// // //             },
// // //             {
// // //               name: "College Statistics",
// // //               href: "/superadmin/college-stats",
// // //               icon: "📈",
// // //             },
// // //             {
// // //               name: "Collaborations",
// // //               href: "/superadmin/collaborations",
// // //               icon: "🤝",
// // //             },
// // //           ],
// // //         },

// // //         // 🏢 Department Management
// // //         {
// // //           name: "🏢 Department Management",
// // //           icon: "🏢",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "All Departments",
// // //               href: "/superadmin/departments",
// // //               icon: "📋",
// // //             },
// // //             {
// // //               name: "Create Department",
// // //               href: "/superadmin/departments/create",
// // //               icon: "➕",
// // //             },
// // //             {
// // //               name: "HOD Assignment",
// // //               href: "/superadmin/hod-assignment",
// // //               icon: "👨‍💼",
// // //             },
// // //             {
// // //               name: "Department Performance",
// // //               href: "/superadmin/department-performance",
// // //               icon: "📊",
// // //             },
// // //             {
// // //               name: "Course Approvals",
// // //               href: "/superadmin/course-approvals",
// // //               icon: "✅",
// // //             },
// // //           ],
// // //         },

// // //         // 👩‍🏫 Staff & Faculty Oversight
// // //         {
// // //           name: "👩‍🏫 Staff & Faculty",
// // //           icon: "👩‍🏫",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "Faculty Management",
// // //               href: "/superadmin/faculty",
// // //               icon: "📋",
// // //             },
// // //             {
// // //               name: "Add Faculty",
// // //               href: "/superadmin/faculty/create",
// // //               icon: "➕",
// // //             },
// // //             {
// // //               name: "Faculty Assignment",
// // //               href: "/superadmin/faculty-assignment",
// // //               icon: "📍",
// // //             },
// // //             {
// // //               name: "Leave Tracking",
// // //               href: "/superadmin/faculty-leaves",
// // //               icon: "🌴",
// // //             },
// // //             {
// // //               name: "Performance Analytics",
// // //               href: "/superadmin/faculty-performance",
// // //               icon: "📈",
// // //             },
// // //             {
// // //               name: "Promotion Approvals",
// // //               href: "/superadmin/promotions",
// // //               icon: "⬆️",
// // //             },
// // //             {
// // //               name: "Timetable Overview",
// // //               href: "/superadmin/timetables",
// // //               icon: "🕒",
// // //             },
// // //           ],
// // //         },

// // //         // 🎓 Student Oversight
// // //         {
// // //           name: "🎓 Student Management",
// // //           icon: "🎓",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "Student Directory",
// // //               href: "/superadmin/students",
// // //               icon: "📋",
// // //             },
// // //             {
// // //               name: "Academic Progress",
// // //               href: "/superadmin/student-progress",
// // //               icon: "📊",
// // //             },
// // //             {
// // //               name: "Attendance Analytics",
// // //               href: "/superadmin/attendance-analytics",
// // //               icon: "📈",
// // //             },
// // //             {
// // //               name: "Fee Management",
// // //               href: "/superadmin/student-fees",
// // //               icon: "💰",
// // //             },
// // //             {
// // //               name: "Scholarship Approvals",
// // //               href: "/superadmin/scholarships",
// // //               icon: "🎫",
// // //             },
// // //             {
// // //               name: "Exception Approvals",
// // //               href: "/superadmin/exceptions",
// // //               icon: "⚠️",
// // //             },
// // //             {
// // //               name: "Performance Reports",
// // //               href: "/superadmin/student-reports",
// // //               icon: "📑",
// // //             },
// // //             { name: "Alumni Tracking", href: "/superadmin/alumni", icon: "👨‍🎓" },
// // //           ],
// // //         },

// // //         // 🎫 Admissions & Enrollment
// // //         {
// // //           name: "🎫 Admissions",
// // //           icon: "🎫",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "Admission Process",
// // //               href: "/superadmin/admissions",
// // //               icon: "📋",
// // //             },
// // //             {
// // //               name: "Seat Allocation",
// // //               href: "/superadmin/seat-allocation",
// // //               icon: "🪑",
// // //             },
// // //             {
// // //               name: "Merit List Management",
// // //               href: "/superadmin/merit-lists",
// // //               icon: "📜",
// // //             },
// // //             {
// // //               name: "Admission Rules",
// // //               href: "/superadmin/admission-rules",
// // //               icon: "📏",
// // //             },
// // //             {
// // //               name: "Statistics & Reports",
// // //               href: "/superadmin/admission-stats",
// // //               icon: "📊",
// // //             },
// // //             {
// // //               name: "Entrance Exam Oversight",
// // //               href: "/superadmin/entrance-exams",
// // //               icon: "✍️",
// // //             },
// // //           ],
// // //         },

// // //         // 🧾 Examinations & Evaluation
// // //         {
// // //           name: "🧾 Examinations",
// // //           icon: "🧾",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "Exam Schedule Approval",
// // //               href: "/superadmin/exam-schedules",
// // //               icon: "✅",
// // //             },
// // //             {
// // //               name: "Duty Assignments",
// // //               href: "/superadmin/exam-duty",
// // //               icon: "👥",
// // //             },
// // //             {
// // //               name: "Result Approvals",
// // //               href: "/superadmin/result-approvals",
// // //               icon: "📜",
// // //             },
// // //             {
// // //               name: "Grading Policies",
// // //               href: "/superadmin/grading-policies",
// // //               icon: "📐",
// // //             },
// // //             {
// // //               name: "Performance Analytics",
// // //               href: "/superadmin/exam-analytics",
// // //               icon: "📊",
// // //             },
// // //             {
// // //               name: "Revaluation Management",
// // //               href: "/superadmin/revaluation",
// // //               icon: "🔄",
// // //             },
// // //             {
// // //               name: "Challenge Requests",
// // //               href: "/superadmin/challenge-requests",
// // //               icon: "⚡",
// // //             },
// // //           ],
// // //         },

// // //         // 💰 Finance & Fees
// // //         {
// // //           name: "💰 Finance",
// // //           icon: "💰",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "Fee Structure",
// // //               href: "/superadmin/fee-structure",
// // //               icon: "🏦",
// // //             },
// // //             {
// // //               name: "Scholarship Management",
// // //               href: "/superadmin/scholarship-mgmt",
// // //               icon: "🎫",
// // //             },
// // //             {
// // //               name: "Fee Collection Reports",
// // //               href: "/superadmin/fee-reports",
// // //               icon: "📊",
// // //             },
// // //             {
// // //               name: "Defaulter Tracking",
// // //               href: "/superadmin/defaulters",
// // //               icon: "⏰",
// // //             },
// // //             {
// // //               name: "Budget Analytics",
// // //               href: "/superadmin/budget-analytics",
// // //               icon: "📈",
// // //             },
// // //             {
// // //               name: "Fund Allocation",
// // //               href: "/superadmin/fund-allocation",
// // //               icon: "💸",
// // //             },
// // //             {
// // //               name: "Refund Approvals",
// // //               href: "/superadmin/refunds",
// // //               icon: "↩️",
// // //             },
// // //           ],
// // //         },

// // //         // 🏠 Hostel & Transport
// // //         {
// // //           name: "🚌 Hostel & Transport",
// // //           icon: "🚌",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "Hostel Overview",
// // //               href: "/superadmin/hostels",
// // //               icon: "🏠",
// // //             },
// // //             {
// // //               name: "Occupancy Tracking",
// // //               href: "/superadmin/hostel-occupancy",
// // //               icon: "📊",
// // //             },
// // //             {
// // //               name: "Hostel Rules & Fees",
// // //               href: "/superadmin/hostel-rules",
// // //               icon: "📜",
// // //             },
// // //             {
// // //               name: "Complaint Monitoring",
// // //               href: "/superadmin/hostel-complaints",
// // //               icon: "⚠️",
// // //             },
// // //             {
// // //               name: "Transport System",
// // //               href: "/superadmin/transport",
// // //               icon: "🚍",
// // //             },
// // //             {
// // //               name: "Route Management",
// // //               href: "/superadmin/routes",
// // //               icon: "🗺️",
// // //             },
// // //             {
// // //               name: "GPS Tracking",
// // //               href: "/superadmin/gps-tracking",
// // //               icon: "📍",
// // //             },
// // //           ],
// // //         },

// // //         // 📚 Library & Resources
// // //         {
// // //           name: "📚 Library & Resources",
// // //           icon: "📚",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "Library Access",
// // //               href: "/superadmin/library-access",
// // //               icon: "🔐",
// // //             },
// // //             {
// // //               name: "Usage Statistics",
// // //               href: "/superadmin/library-stats",
// // //               icon: "📊",
// // //             },
// // //             {
// // //               name: "Purchase Approvals",
// // //               href: "/superadmin/library-purchases",
// // //               icon: "✅",
// // //             },
// // //             {
// // //               name: "Digital Resources",
// // //               href: "/superadmin/digital-resources",
// // //               icon: "💾",
// // //             },
// // //             {
// // //               name: "Borrow Analytics",
// // //               href: "/superadmin/borrow-analytics",
// // //               icon: "📈",
// // //             },
// // //             {
// // //               name: "Lab & Inventory",
// // //               href: "/superadmin/lab-inventory",
// // //               icon: "🔬",
// // //             },
// // //           ],
// // //         },

// // //         // 💼 Placements & Career
// // //         {
// // //           name: "💼 Placements & Career",
// // //           icon: "💼",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "Placement Cell Performance",
// // //               href: "/superadmin/placement-performance",
// // //               icon: "📊",
// // //             },
// // //             {
// // //               name: "Company Collaborations",
// // //               href: "/superadmin/company-collaborations",
// // //               icon: "🤝",
// // //             },
// // //             {
// // //               name: "Campus Drive Analytics",
// // //               href: "/superadmin/campus-drives",
// // //               icon: "📈",
// // //             },
// // //             {
// // //               name: "Alumni Engagement",
// // //               href: "/superadmin/alumni-engagement",
// // //               icon: "👨‍🎓",
// // //             },
// // //             {
// // //               name: "Career Analytics",
// // //               href: "/superadmin/career-analytics",
// // //               icon: "🎯",
// // //             },
// // //           ],
// // //         },

// // //         // 📢 Communication & Notifications
// // //         {
// // //           name: "📢 Communication",
// // //           icon: "📢",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "Announcements",
// // //               href: "/superadmin/announcements",
// // //               icon: "📢",
// // //             },
// // //             {
// // //               name: "Broadcast Messages",
// // //               href: "/superadmin/broadcast",
// // //               icon: "📡",
// // //             },
// // //             {
// // //               name: "Circular Management",
// // //               href: "/superadmin/circulars",
// // //               icon: "📜",
// // //             },
// // //             {
// // //               name: "Emergency Alerts",
// // //               href: "/superadmin/emergency-alerts",
// // //               icon: "🚨",
// // //             },
// // //             {
// // //               name: "Notification Settings",
// // //               href: "/superadmin/notification-settings",
// // //               icon: "⚙️",
// // //             },
// // //             {
// // //               name: "University Calendar",
// // //               href: "/superadmin/university-calendar",
// // //               icon: "📅",
// // //             },
// // //           ],
// // //         },

// // //         // 📈 Reports & Analytics
// // //         {
// // //           name: "📈 Analytics & Reports",
// // //           icon: "📈",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "University Dashboard",
// // //               href: "/superadmin/reports",
// // //               icon: "📊",
// // //             },
// // //             {
// // //               name: "Academic Performance",
// // //               href: "/superadmin/academic-reports",
// // //               icon: "🎓",
// // //             },
// // //             {
// // //               name: "Attendance Analytics",
// // //               href: "/superadmin/attendance-reports",
// // //               icon: "📋",
// // //             },
// // //             {
// // //               name: "Financial Reports",
// // //               href: "/superadmin/financial-reports",
// // //               icon: "💰",
// // //             },
// // //             {
// // //               name: "Placement Analytics",
// // //               href: "/superadmin/placement-reports",
// // //               icon: "💼",
// // //             },
// // //             {
// // //               name: "Infrastructure Reports",
// // //               href: "/superadmin/infrastructure-reports",
// // //               icon: "🏗️",
// // //             },
// // //             {
// // //               name: "Custom Report Builder",
// // //               href: "/superadmin/report-builder",
// // //               icon: "🛠️",
// // //             },
// // //             {
// // //               name: "Export Tools",
// // //               href: "/superadmin/export-tools",
// // //               icon: "📤",
// // //             },
// // //           ],
// // //         },

// // //         // 🔐 User Management & Security
// // //         {
// // //           name: "🔐 User Management",
// // //           icon: "🔐",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "Roles & Permissions",
// // //               href: "/superadmin/roles-permissions",
// // //               icon: "🔐",
// // //             },
// // //             {
// // //               name: "Admin Management",
// // //               href: "/superadmin/admin-management",
// // //               icon: "👨‍💼",
// // //             },
// // //             {
// // //               name: "Access Control",
// // //               href: "/superadmin/access-control",
// // //               icon: "🎛️",
// // //             },
// // //             { name: "Audit Logs", href: "/superadmin/audit-logs", icon: "📝" },
// // //             {
// // //               name: "Security Policies",
// // //               href: "/superadmin/security-policies",
// // //               icon: "🛡️",
// // //             },
// // //             {
// // //               name: "Login Activity",
// // //               href: "/superadmin/login-activity",
// // //               icon: "🔍",
// // //             },
// // //             {
// // //               name: "User Directory",
// // //               href: "/superadmin/user-directory",
// // //               icon: "👥",
// // //             },
// // //           ],
// // //         },

// // //         // ⚙️ System & IT Oversight
// // //         {
// // //           name: "⚙️ System & IT",
// // //           icon: "⚙️",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "System Configuration",
// // //               href: "/superadmin/system-config",
// // //               icon: "⚙️",
// // //             },
// // //             {
// // //               name: "Integration Approvals",
// // //               href: "/superadmin/integrations",
// // //               icon: "🔌",
// // //             },
// // //             {
// // //               name: "Backup & Recovery",
// // //               href: "/superadmin/backup",
// // //               icon: "💾",
// // //             },
// // //             {
// // //               name: "Performance Monitoring",
// // //               href: "/superadmin/performance",
// // //               icon: "📊",
// // //             },
// // //             {
// // //               name: "Version Management",
// // //               href: "/superadmin/versions",
// // //               icon: "🔄",
// // //             },
// // //             {
// // //               name: "API Integrations",
// // //               href: "/superadmin/api-integrations",
// // //               icon: "🔌",
// // //             },
// // //           ],
// // //         },

// // //         // 🤖 Advanced Features
// // //         {
// // //           name: "🤖 Advanced Features",
// // //           icon: "🤖",
// // //           type: "submenu",
// // //           items: [
// // //             {
// // //               name: "AI Analytics",
// // //               href: "/superadmin/ai-analytics",
// // //               icon: "🧠",
// // //             },
// // //             {
// // //               name: "Voice/Chatbot Interface",
// // //               href: "/superadmin/chatbot",
// // //               icon: "💬",
// // //             },
// // //             {
// // //               name: "Geo-analytics",
// // //               href: "/superadmin/geo-analytics",
// // //               icon: "🌍",
// // //             },
// // //             {
// // //               name: "AR/VR Integration",
// // //               href: "/superadmin/ar-vr",
// // //               icon: "👓",
// // //             },
// // //             {
// // //               name: "Gamification",
// // //               href: "/superadmin/gamification",
// // //               icon: "🎮",
// // //             },
// // //             {
// // //               name: "Access Logs",
// // //               href: "/superadmin/access-logs",
// // //               icon: "📝",
// // //             },
// // //           ],
// // //         },

// // //         // 🆕 Additional Modules from Original
// // //         {
// // //           name: "Policy & Compliance",
// // //           href: "/superadmin/policy-compliance",
// // //           icon: "🆕",
// // //         },
// // //         {
// // //           name: "Accreditation / NAAC / NBA",
// // //           href: "/superadmin/accreditation",
// // //           icon: "⭐",
// // //         },
// // //         {
// // //           name: "Regulations & Audit Logs",
// // //           href: "/superadmin/regulations",
// // //           icon: "📋",
// // //         },
// // //         {
// // //           name: "Institutional Ranking Data",
// // //           href: "/superadmin/ranking",
// // //           icon: "🏆",
// // //         },
// // //       ],
// // //     },

// // //     // ... (rest of the navigation items remain the same)
// // //     // 🔹 2. COLLEGE ADMIN / PRINCIPAL / REGISTRAR
// // //     {
// // //       name: "(COLLEGE ADMIN / PRINCIPAL / REGISTRAR)",
// // //       icon: "🏫",
// // //       type: "dropdown",
// // //       items: [
// // //         // ... (existing college admin items)
// // //       ],
// // //     },

// // //     // ... (other navigation sections remain unchanged)
// // //   ];

// // //   // Recursive component to handle nested submenus
// // //   const NavigationItem = ({ item, level = 0 }) => {
// // //     const [isOpen, setIsOpen] = useState(false);

// // //     if (item.type === "submenu") {
// // //       return (
// // //         <li>
// // //           <div>
// // //             <button
// // //               onClick={() => setIsOpen(!isOpen)}
// // //               className={`flex items-center justify-between w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
// // //                 isOpen ? "bg-blue-50 text-blue-600" : ""
// // //               } ${level > 0 ? `ml-${level * 4}` : ""}`}
// // //             >
// // //               <div className="flex items-center">
// // //                 <span className="mr-3 text-lg">{item.icon}</span>
// // //                 <span className={level > 0 ? "text-sm" : ""}>{item.name}</span>
// // //               </div>
// // //               <svg
// // //                 className={`w-4 h-4 transition-transform duration-200 ${
// // //                   isOpen ? "rotate-180" : ""
// // //                 }`}
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth={2}
// // //                   d="M19 9l-7 7-7-7"
// // //                 />
// // //               </svg>
// // //             </button>

// // //             {isOpen && (
// // //               <ul
// // //                 className={`mt-2 ml-${
// // //                   (level + 1) * 4
// // //                 } space-y-1 bg-gray-100 rounded-lg py-1`}
// // //               >
// // //                 {item.items.map((subItem) => (
// // //                   <NavigationItem
// // //                     key={subItem.name}
// // //                     item={subItem}
// // //                     level={level + 1}
// // //                   />
// // //                 ))}
// // //               </ul>
// // //             )}
// // //           </div>
// // //         </li>
// // //       );
// // //     }

// // //     // Regular navigation link
// // //     return (
// // //       <li>
// // //         <NavLink
// // //           to={item.href}
// // //           className={({ isActive }) =>
// // //             `flex items-center px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
// // //               isActive ? "bg-blue-100 text-blue-600 font-medium" : ""
// // //             } ${level > 0 ? `ml-${level * 4}` : ""}`
// // //           }
// // //         >
// // //           <span className="mr-3 text-sm">{item.icon}</span>
// // //           <span className={level > 0 ? "text-sm" : ""}>{item.name}</span>
// // //         </NavLink>
// // //       </li>
// // //     );
// // //   };

// // //   return (
// // //     <div className="w-84 bg-white shadow-lg">
// // //       <div className="flex flex-col h-full">
// // //         <div className="flex items-center justify-center h-16 bg-blue-600 text-white">
// // //           <h1 className="text-xl font-bold">EduVerse</h1>
// // //         </div>

// // //         <nav className="flex-1 px-4 py-6 overflow-y-auto">
// // //           <ul className="space-y-2">
// // //             {navigation.map((item) => (
// // //               <li key={item.name}>
// // //                 <div>
// // //                   <button
// // //                     onClick={() => toggleDropdown(item.name)}
// // //                     className={`flex items-center justify-between w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
// // //                       openDropdown === item.name
// // //                         ? "bg-blue-50 text-blue-600"
// // //                         : ""
// // //                     }`}
// // //                   >
// // //                     <div className="flex items-center">
// // //                       <span className="mr-3 text-lg">{item.icon}</span>
// // //                       <span>{item.name}</span>
// // //                     </div>
// // //                     <svg
// // //                       className={`w-4 h-4 transition-transform duration-200 ${
// // //                         openDropdown === item.name ? "rotate-180" : ""
// // //                       }`}
// // //                       fill="none"
// // //                       stroke="currentColor"
// // //                       viewBox="0 0 24 24"
// // //                     >
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth={2}
// // //                         d="M19 9l-7 7-7-7"
// // //                       />
// // //                     </svg>
// // //                   </button>

// // //                   {openDropdown === item.name && (
// // //                     <ul className="mt-2 ml-4 space-y-1 bg-gray-100 rounded-lg py-1">
// // //                       {item.items.map((subItem) => (
// // //                         <NavigationItem key={subItem.name} item={subItem} />
// // //                       ))}
// // //                     </ul>
// // //                   )}
// // //                 </div>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </nav>

// // //         <div className="p-4 border-t border-gray-200">
// // //           <div className="flex items-center">
// // //             <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
// // //               <span className="text-sm font-medium">U</span>
// // //             </div>
// // //             <div className="ml-3">
// // //               <p className="text-sm font-medium text-gray-700">User Name</p>
// // //               <p className="text-xs text-gray-500">user@example.com</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Sidebar;
// // import React, { useState } from "react";
// // import { NavLink } from "react-router-dom";

// // const Sidebar = () => {
// //   const [openDropdown, setOpenDropdown] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const toggleDropdown = (dropdownName) => {
// //     setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
// //   };

// //   // All 14 roles with complete modules
// //   const navigation = [
// //     {
// //       name: "Master Admin",
// //       icon: "🏠",
// //       type: "dropdown",
// //       items: [
// //         {
// //           name: "Create College",
// //           href: "/master-admin/create-college",
// //           icon: "🏛️",
// //         },
// //         {
// //           name: "College Management",
// //           href: "/master-admin/colleges",
// //           icon: "📊",
// //         },
// //         { name: "System Overview", href: "/master-admin/overview", icon: "👁️" },
// //       ],
// //     },
// //     {
// //       name: "Super Admin / VC",
// //       icon: "👑",
// //       type: "dropdown",
// //       items: [
// //         {
// //           name: "University Dashboard",
// //           href: "/superadmin/dashboard",
// //           icon: "📊",
// //         },
// //         {
// //           name: "College Management",
// //           href: "/superadmin/colleges",
// //           icon: "🏛️",
// //         },
// //         {
// //           name: "Department Oversight",
// //           href: "/superadmin/departments",
// //           icon: "🏢",
// //         },
// //         { name: "Faculty Oversight", href: "/superadmin/faculty", icon: "👩‍🏫" },
// //         { name: "Student Oversight", href: "/superadmin/students", icon: "🎓" },
// //         {
// //           name: "Financial Oversight",
// //           href: "/superadmin/finance",
// //           icon: "💰",
// //         },
// //         { name: "Exam Oversight", href: "/superadmin/exams", icon: "📝" },
// //         {
// //           name: "Placement Oversight",
// //           href: "/superadmin/placements",
// //           icon: "💼",
// //         },
// //         {
// //           name: "Analytics & Reports",
// //           href: "/superadmin/analytics",
// //           icon: "📈",
// //         },
// //         {
// //           name: "System Configuration",
// //           href: "/superadmin/system-config",
// //           icon: "⚙️",
// //         },
// //       ],
// //     },
// //     {
// //       name: "College Admin / Principal",
// //       icon: "🏫",
// //       type: "dropdown",
// //       items: [
// //         { name: "College Dashboard", href: "/college/dashboard", icon: "📊" },
// //         {
// //           name: "Department Management",
// //           href: "/college/departments",
// //           icon: "🏢",
// //         },
// //         { name: "Faculty Management", href: "/college/faculty", icon: "👨‍🏫" },
// //         { name: "Student Management", href: "/college/students", icon: "🎓" },
// //         { name: "Admissions", href: "/college/admissions", icon: "📥" },
// //         { name: "Academic Calendar", href: "/college/calendar", icon: "📅" },
// //         { name: "Finance & Fees", href: "/college/finance", icon: "💳" },
// //         { name: "Infrastructure", href: "/college/infrastructure", icon: "🏗️" },
// //         { name: "College Reports", href: "/college/reports", icon: "📑" },
// //       ],
// //     },
// //     {
// //       name: "Department HOD",
// //       icon: "🏢",
// //       type: "dropdown",
// //       items: [
// //         {
// //           name: "Department Dashboard",
// //           href: "/department/dashboard",
// //           icon: "📊",
// //         },
// //         {
// //           name: "Faculty Assignment",
// //           href: "/department/faculty-assign",
// //           icon: "👨‍🏫",
// //         },
// //         { name: "Course Management", href: "/department/courses", icon: "📚" },
// //         { name: "Student Progress", href: "/department/students", icon: "🎓" },
// //         {
// //           name: "Timetable Management",
// //           href: "/department/timetable",
// //           icon: "🕒",
// //         },
// //         {
// //           name: "Internal Assessments",
// //           href: "/department/assessments",
// //           icon: "📝",
// //         },
// //         { name: "Leave Approvals", href: "/department/leaves", icon: "🌴" },
// //         { name: "Department Reports", href: "/department/reports", icon: "📈" },
// //         {
// //           name: "Research & Projects",
// //           href: "/department/research",
// //           icon: "🔬",
// //         },
// //       ],
// //     },
// //     {
// //       name: "Faculty / Teacher",
// //       icon: "👩‍🏫",
// //       type: "dropdown",
// //       items: [
// //         { name: "Faculty Dashboard", href: "/faculty/dashboard", icon: "📊" },
// //         { name: "My Profile", href: "/faculty/profile", icon: "👤" },
// //         {
// //           name: "Attendance Management",
// //           href: "/faculty/attendance",
// //           icon: "📋",
// //         },
// //         { name: "Marks & Assessments", href: "/faculty/marks", icon: "✏️" },
// //         { name: "Study Materials", href: "/faculty/materials", icon: "📚" },
// //         { name: "Assignments", href: "/faculty/assignments", icon: "📝" },
// //         { name: "Timetable", href: "/faculty/timetable", icon: "🕒" },
// //         { name: "Exam Duties", href: "/faculty/exam-duty", icon: "📋" },
// //         { name: "Leave Management", href: "/faculty/leaves", icon: "🌴" },
// //         { name: "Student Mentorship", href: "/faculty/mentorship", icon: "🤝" },
// //       ],
// //     },
// //     {
// //       name: "Non-Teaching Staff",
// //       icon: "💼",
// //       type: "dropdown",
// //       items: [
// //         { name: "Staff Dashboard", href: "/staff/dashboard", icon: "📊" },
// //         { name: "Fee Collection", href: "/staff/fees", icon: "💰" },
// //         { name: "Student Records", href: "/staff/records", icon: "📁" },
// //         { name: "Document Management", href: "/staff/documents", icon: "📄" },
// //         { name: "Inventory Management", href: "/staff/inventory", icon: "📦" },
// //         {
// //           name: "Certificate Issuance",
// //           href: "/staff/certificates",
// //           icon: "🏆",
// //         },
// //         { name: "Office Operations", href: "/staff/operations", icon: "🏢" },
// //         { name: "Support Tickets", href: "/staff/support", icon: "🎫" },
// //       ],
// //     },
// //     {
// //       name: "Exam & Evaluation",
// //       icon: "📝",
// //       type: "dropdown",
// //       items: [
// //         { name: "Exam Dashboard", href: "/exam/dashboard", icon: "📊" },
// //         { name: "Exam Scheduling", href: "/exam/schedule", icon: "📅" },
// //         { name: "Hall Allocation", href: "/exam/hall-allocation", icon: "🏛️" },
// //         { name: "Question Papers", href: "/exam/questions", icon: "📄" },
// //         { name: "Marks Entry", href: "/exam/marks", icon: "✏️" },
// //         { name: "Result Processing", href: "/exam/results", icon: "📊" },
// //         { name: "Revaluation", href: "/exam/revaluation", icon: "🔄" },
// //         { name: "Duty Allocation", href: "/exam/duty-allocation", icon: "👥" },
// //         { name: "Exam Reports", href: "/exam/reports", icon: "📈" },
// //       ],
// //     },
// //     {
// //       name: "Student Panel",
// //       icon: "🎓",
// //       type: "dropdown",
// //       items: [
// //         { name: "Student Dashboard", href: "/student/dashboard", icon: "📊" },
// //         { name: "My Profile", href: "/student/profile", icon: "👤" },
// //         { name: "Attendance", href: "/student/attendance", icon: "📋" },
// //         { name: "Academic Progress", href: "/student/academics", icon: "📈" },
// //         { name: "Course Enrollment", href: "/student/courses", icon: "📚" },
// //         { name: "Timetable", href: "/student/timetable", icon: "🕒" },
// //         { name: "Assignments", href: "/student/assignments", icon: "📝" },
// //         { name: "Exam Results", href: "/student/results", icon: "📊" },
// //         { name: "Fee Payment", href: "/student/fees", icon: "💳" },
// //         { name: "Library", href: "/student/library", icon: "📖" },
// //         { name: "Placements", href: "/student/placements", icon: "💼" },
// //       ],
// //     },
// //     {
// //       name: "Parent Panel",
// //       icon: "👨‍👩‍👧",
// //       type: "dropdown",
// //       items: [
// //         { name: "Parent Dashboard", href: "/parent/dashboard", icon: "📊" },
// //         { name: "Child Progress", href: "/parent/children", icon: "👶" },
// //         { name: "Attendance Overview", href: "/parent/attendance", icon: "📋" },
// //         { name: "Exam Results", href: "/parent/results", icon: "📊" },
// //         { name: "Fee Status", href: "/parent/fees", icon: "💰" },
// //         { name: "Communication", href: "/parent/communication", icon: "💬" },
// //         { name: "Transport Tracking", href: "/parent/transport", icon: "🚌" },
// //         { name: "Hostel Info", href: "/parent/hostel", icon: "🏠" },
// //         { name: "Performance Reports", href: "/parent/reports", icon: "📈" },
// //       ],
// //     },
// //     {
// //       name: "Transport Management",
// //       icon: "🚌",
// //       type: "dropdown",
// //       items: [
// //         {
// //           name: "Transport Dashboard",
// //           href: "/transport/dashboard",
// //           icon: "📊",
// //         },
// //         { name: "Vehicle Management", href: "/transport/vehicles", icon: "🚗" },
// //         { name: "Route Management", href: "/transport/routes", icon: "🗺️" },
// //         { name: "Student Allocation", href: "/transport/students", icon: "👥" },
// //         { name: "GPS Tracking", href: "/transport/tracking", icon: "📍" },
// //         { name: "Driver Management", href: "/transport/drivers", icon: "👨‍💼" },
// //         { name: "Maintenance", href: "/transport/maintenance", icon: "🔧" },
// //         { name: "Transport Reports", href: "/transport/reports", icon: "📈" },
// //       ],
// //     },
// //     {
// //       name: "Hostel Management",
// //       icon: "🏠",
// //       type: "dropdown",
// //       items: [
// //         { name: "Hostel Dashboard", href: "/hostel/dashboard", icon: "📊" },
// //         { name: "Room Management", href: "/hostel/rooms", icon: "🛏️" },
// //         { name: "Student Allocation", href: "/hostel/students", icon: "👥" },
// //         { name: "Attendance", href: "/hostel/attendance", icon: "📋" },
// //         { name: "Mess Management", href: "/hostel/mess", icon: "🍽️" },
// //         { name: "Complaints", href: "/hostel/complaints", icon: "⚠️" },
// //         { name: "Visitor Management", href: "/hostel/visitors", icon: "👤" },
// //         { name: "Maintenance", href: "/hostel/maintenance", icon: "🔧" },
// //         { name: "Hostel Reports", href: "/hostel/reports", icon: "📈" },
// //       ],
// //     },
// //     {
// //       name: "Placement & Career",
// //       icon: "💼",
// //       type: "dropdown",
// //       items: [
// //         {
// //           name: "Placement Dashboard",
// //           href: "/placement/dashboard",
// //           icon: "📊",
// //         },
// //         {
// //           name: "Company Management",
// //           href: "/placement/companies",
// //           icon: "🏢",
// //         },
// //         { name: "Job Postings", href: "/placement/jobs", icon: "📋" },
// //         {
// //           name: "Student Applications",
// //           href: "/placement/applications",
// //           icon: "📄",
// //         },
// //         {
// //           name: "Interview Scheduling",
// //           href: "/placement/interviews",
// //           icon: "📅",
// //         },
// //         { name: "Placement Reports", href: "/placement/reports", icon: "📈" },
// //         { name: "Training Programs", href: "/placement/training", icon: "🎯" },
// //         { name: "Alumni Engagement", href: "/placement/alumni", icon: "👨‍🎓" },
// //       ],
// //     },
// //     {
// //       name: "Library Management",
// //       icon: "📚",
// //       type: "dropdown",
// //       items: [
// //         { name: "Library Dashboard", href: "/library/dashboard", icon: "📊" },
// //         { name: "Book Catalog", href: "/library/catalog", icon: "📖" },
// //         { name: "Issue/Return", href: "/library/transactions", icon: "🔄" },
// //         { name: "Digital Resources", href: "/library/digital", icon: "💻" },
// //         { name: "Member Management", href: "/library/members", icon: "👥" },
// //         { name: "Fines & Payments", href: "/library/fines", icon: "💰" },
// //         { name: "Inventory", href: "/library/inventory", icon: "📦" },
// //         { name: "Library Reports", href: "/library/reports", icon: "📈" },
// //       ],
// //     },
// //     {
// //       name: "IT & Technical Support",
// //       icon: "💻",
// //       type: "dropdown",
// //       items: [
// //         { name: "IT Dashboard", href: "/it/dashboard", icon: "📊" },
// //         { name: "User Management", href: "/it/users", icon: "👥" },
// //         { name: "System Monitoring", href: "/it/monitoring", icon: "📡" },
// //         { name: "Support Tickets", href: "/it/tickets", icon: "🎫" },
// //         { name: "Backup & Recovery", href: "/it/backup", icon: "💾" },
// //         { name: "System Configuration", href: "/it/config", icon: "⚙️" },
// //         { name: "API Management", href: "/it/api", icon: "🔌" },
// //         { name: "Security & Logs", href: "/it/security", icon: "🔒" },
// //       ],
// //     },
// //     {
// //       name: "Counseling & Welfare",
// //       icon: "❤️",
// //       type: "dropdown",
// //       items: [
// //         {
// //           name: "Counseling Dashboard",
// //           href: "/counseling/dashboard",
// //           icon: "📊",
// //         },
// //         { name: "Student Profiles", href: "/counseling/students", icon: "🎓" },
// //         {
// //           name: "Session Management",
// //           href: "/counseling/sessions",
// //           icon: "📅",
// //         },
// //         { name: "Progress Tracking", href: "/counseling/progress", icon: "📈" },
// //         {
// //           name: "Behavior Monitoring",
// //           href: "/counseling/behavior",
// //           icon: "👀",
// //         },
// //         {
// //           name: "Reports & Analytics",
// //           href: "/counseling/reports",
// //           icon: "📊",
// //         },
// //         { name: "Emergency Cases", href: "/counseling/emergency", icon: "🚨" },
// //         { name: "Wellness Programs", href: "/counseling/wellness", icon: "🌱" },
// //       ],
// //     },
// //   ];

// //   // Filter navigation based on search
// //   const filteredNavigation = navigation.filter(
// //     (item) =>
// //       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       item.items.some((subItem) =>
// //         subItem.name.toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //   );

// //   return (
// //     <div className="w-80 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen flex flex-col shadow-2xl">
// //       {/* Header */}
// //       <div className="p-6 border-b border-gray-700">
// //         <div className="flex items-center space-x-3">
// //           <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
// //             <span className="text-white font-bold text-lg">EV</span>
// //           </div>
// //           <div>
// //             <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// //               EduVerse
// //             </h1>
// //             <p className="text-gray-400 text-xs">
// //               University Management System
// //             </p>
// //           </div>
// //         </div>

// //         {/* Search Bar */}
// //         <div className="mt-4 relative">
// //           <input
// //             type="text"
// //             placeholder="Search modules..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
// //           />
// //           <div className="absolute right-3 top-2.5">
// //             <span className="text-gray-400">🔍</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Navigation */}
// //       <nav className="flex-1 overflow-y-auto px-4 py-4">
// //         <div className="space-y-1">
// //           {filteredNavigation.map((item) => (
// //             <div key={item.name} className="group">
// //               <button
// //                 onClick={() => toggleDropdown(item.name)}
// //                 className={`flex items-center justify-between w-full px-3 py-3 rounded-xl transition-all duration-200 hover:bg-gray-700 hover:shadow-lg ${
// //                   openDropdown === item.name
// //                     ? "bg-blue-500/20 text-blue-400 border-l-4 border-blue-400"
// //                     : "text-gray-300 hover:text-white"
// //                 }`}
// //               >
// //                 <div className="flex items-center space-x-3">
// //                   <span className="text-lg">{item.icon}</span>
// //                   <span className="font-medium text-sm">{item.name}</span>
// //                 </div>
// //                 <svg
// //                   className={`w-4 h-4 transition-transform duration-200 ${
// //                     openDropdown === item.name
// //                       ? "rotate-180 text-blue-400"
// //                       : "text-gray-400"
// //                   }`}
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M19 9l-7 7-7-7"
// //                   />
// //                 </svg>
// //               </button>

// //               {openDropdown === item.name && (
// //                 <div className="mt-1 ml-4 space-y-1 bg-gray-800/50 rounded-lg p-2 border-l border-gray-700">
// //                   {item.items.map((subItem) => (
// //                     <NavLink
// //                       key={subItem.name}
// //                       to={subItem.href}
// //                       className={({ isActive }) =>
// //                         `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
// //                           isActive
// //                             ? "bg-blue-500/20 text-blue-400 shadow-md"
// //                             : "text-gray-400 hover:text-white hover:bg-gray-700/50"
// //                         }`
// //                       }
// //                     >
// //                       <span className="text-sm">{subItem.icon}</span>
// //                       <span>{subItem.name}</span>
// //                     </NavLink>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>

// //         {/* Quick Actions */}
// //         <div className="mt-8 pt-6 border-t border-gray-700">
// //           <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">
// //             Quick Access
// //           </h3>
// //           <div className="space-y-2">
// //             <NavLink
// //               to="/dashboard"
// //               className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
// //             >
// //               <span>📊</span>
// //               <span>Main Dashboard</span>
// //             </NavLink>
// //             <NavLink
// //               to="/notifications"
// //               className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
// //             >
// //               <span>🔔</span>
// //               <span>Notifications</span>
// //             </NavLink>
// //             <NavLink
// //               to="/settings"
// //               className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
// //             >
// //               <span>⚙️</span>
// //               <span>Settings</span>
// //             </NavLink>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* User Profile */}
// //       <div className="p-4 border-t border-gray-700 bg-gray-800/50">
// //         <div className="flex items-center space-x-3">
// //           <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
// //             <span className="text-white font-bold text-sm">AD</span>
// //           </div>
// //           <div className="flex-1 min-w-0">
// //             <p className="text-sm font-medium text-white truncate">
// //               Admin User
// //             </p>
// //             <p className="text-xs text-gray-400 truncate">
// //               admin@eduvarsity.com
// //             </p>
// //           </div>
// //           <button className="text-gray-400 hover:text-white transition-colors duration-200">
// //             <svg
// //               className="w-5 h-5"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openSubmenus, setOpenSubmenus] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");

//   const toggleDropdown = (dropdownName) => {
//     setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
//   };

//   const toggleSubmenu = (submenuName) => {
//     setOpenSubmenus((prev) => ({
//       ...prev,
//       [submenuName]: !prev[submenuName],
//     }));
//   };

//   // All 14 roles with complete CRUD submenus
//   const navigation = [
//     {
//       name: "Master Admin",
//       icon: "🏠",
//       type: "dropdown",
//       items: [
//         {
//           name: "Dashboard",
//           href: "/master-admin/dashboard",
//           icon: "📊",
//           crud: ["read"],
//         },
//         {
//           name: "College Management",
//           icon: "🏛️",
//           type: "submenu",
//           items: [
//             {
//               name: "All Colleges",
//               href: "/master-admin/colleges",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Create College",
//               href: "/master-admin/colleges/create",
//               icon: "➕",
//               crud: ["create"],
//             },
//             {
//               name: "College Hierarchy",
//               href: "/master-admin/colleges/hierarchy",
//               icon: "📐",
//               crud: ["read", "update"],
//             },
//             {
//               name: "College Analytics",
//               href: "/master-admin/colleges/analytics",
//               icon: "📈",
//               crud: ["read"],
//             },
//           ],
//         },
//         {
//           name: "System Configuration",
//           icon: "⚙️",
//           type: "submenu",
//           items: [
//             {
//               name: "Global Settings",
//               href: "/master-admin/settings/global",
//               icon: "🌐",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Academic Calendar",
//               href: "/master-admin/settings/calendar",
//               icon: "📅",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "University Policies",
//               href: "/master-admin/settings/policies",
//               icon: "📜",
//               crud: ["create", "read", "update", "delete"],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Super Admin / VC",
//       icon: "👑",
//       type: "dropdown",
//       items: [
//         {
//           name: "University Dashboard",
//           href: "/superadmin/dashboard",
//           icon: "📊",
//           crud: ["read"],
//         },
//         {
//           name: "College Management",
//           icon: "🏛️",
//           type: "submenu",
//           items: [
//             {
//               name: "All Colleges",
//               href: "/superadmin/colleges",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "College Performance",
//               href: "/superadmin/colleges/performance",
//               icon: "📈",
//               crud: ["read"],
//             },
//             {
//               name: "College Approvals",
//               href: "/superadmin/colleges/approvals",
//               icon: "✅",
//               crud: ["read", "update"],
//             },
//           ],
//         },
//         {
//           name: "Department Management",
//           icon: "🏢",
//           type: "submenu",
//           items: [
//             {
//               name: "All Departments",
//               href: "/superadmin/departments",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Create Department",
//               href: "/superadmin/departments/create",
//               icon: "➕",
//               crud: ["create"],
//             },
//             {
//               name: "HOD Assignment",
//               href: "/superadmin/departments/hod-assignment",
//               icon: "👨‍💼",
//               crud: ["create", "update"],
//             },
//             {
//               name: "Department Performance",
//               href: "/superadmin/departments/performance",
//               icon: "📊",
//               crud: ["read"],
//             },
//           ],
//         },
//         {
//           name: "Faculty Oversight",
//           icon: "👩‍🏫",
//           type: "submenu",
//           items: [
//             {
//               name: "All Faculty",
//               href: "/superadmin/faculty",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Faculty Performance",
//               href: "/superadmin/faculty/performance",
//               icon: "📈",
//               crud: ["read"],
//             },
//             {
//               name: "Leave Approvals",
//               href: "/superadmin/faculty/leaves",
//               icon: "🌴",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Promotion Management",
//               href: "/superadmin/faculty/promotions",
//               icon: "⬆️",
//               crud: ["read", "update"],
//             },
//           ],
//         },
//         {
//           name: "Student Management",
//           icon: "🎓",
//           type: "submenu",
//           items: [
//             {
//               name: "All Students",
//               href: "/superadmin/students",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Academic Progress",
//               href: "/superadmin/students/progress",
//               icon: "📊",
//               crud: ["read"],
//             },
//             {
//               name: "Attendance Analytics",
//               href: "/superadmin/students/attendance",
//               icon: "📈",
//               crud: ["read"],
//             },
//             {
//               name: "Fee Management",
//               href: "/superadmin/students/fees",
//               icon: "💰",
//               crud: ["read"],
//             },
//             {
//               name: "Scholarship Approvals",
//               href: "/superadmin/students/scholarships",
//               icon: "🎫",
//               crud: ["read", "update"],
//             },
//           ],
//         },
//         {
//           name: "Finance & Fees",
//           icon: "💰",
//           type: "submenu",
//           items: [
//             {
//               name: "Fee Structure",
//               href: "/superadmin/finance/fee-structure",
//               icon: "🏦",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Collection Reports",
//               href: "/superadmin/finance/reports",
//               icon: "📊",
//               crud: ["read"],
//             },
//             {
//               name: "Budget Allocation",
//               href: "/superadmin/finance/budget",
//               icon: "💸",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Expense Tracking",
//               href: "/superadmin/finance/expenses",
//               icon: "📝",
//               crud: ["read"],
//             },
//           ],
//         },
//         {
//           name: "Examinations",
//           icon: "📝",
//           type: "submenu",
//           items: [
//             {
//               name: "Exam Schedule",
//               href: "/superadmin/exams/schedule",
//               icon: "📅",
//               crud: ["read"],
//             },
//             {
//               name: "Result Approvals",
//               href: "/superadmin/exams/results",
//               icon: "✅",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Performance Analytics",
//               href: "/superadmin/exams/analytics",
//               icon: "📈",
//               crud: ["read"],
//             },
//             {
//               name: "Revaluation Management",
//               href: "/superadmin/exams/revaluation",
//               icon: "🔄",
//               crud: ["read", "update"],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "College Admin / Principal",
//       icon: "🏫",
//       type: "dropdown",
//       items: [
//         {
//           name: "College Dashboard",
//           href: "/college/dashboard",
//           icon: "📊",
//           crud: ["read"],
//         },
//         {
//           name: "Department Management",
//           icon: "🏢",
//           type: "submenu",
//           items: [
//             {
//               name: "All Departments",
//               href: "/college/departments",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Create Department",
//               href: "/college/departments/create",
//               icon: "➕",
//               crud: ["create"],
//             },
//             {
//               name: "Department Reports",
//               href: "/college/departments/reports",
//               icon: "📊",
//               crud: ["read"],
//             },
//             {
//               name: "HOD Management",
//               href: "/college/departments/hod-management",
//               icon: "👨‍💼",
//               crud: ["create", "read", "update"],
//             },
//           ],
//         },
//         {
//           name: "Faculty Management",
//           icon: "👨‍🏫",
//           type: "submenu",
//           items: [
//             {
//               name: "All Faculty",
//               href: "/college/faculty",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Add Faculty",
//               href: "/college/faculty/create",
//               icon: "➕",
//               crud: ["create"],
//             },
//             {
//               name: "Faculty Assignment",
//               href: "/college/faculty/assignment",
//               icon: "📍",
//               crud: ["create", "update"],
//             },
//             {
//               name: "Leave Management",
//               href: "/college/faculty/leaves",
//               icon: "🌴",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Performance Tracking",
//               href: "/college/faculty/performance",
//               icon: "📈",
//               crud: ["read"],
//             },
//           ],
//         },
//         {
//           name: "Student Management",
//           icon: "🎓",
//           type: "submenu",
//           items: [
//             {
//               name: "All Students",
//               href: "/college/students",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Admission Management",
//               href: "/college/students/admissions",
//               icon: "📥",
//               crud: ["create", "read", "update"],
//             },
//             {
//               name: "Attendance Overview",
//               href: "/college/students/attendance",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Academic Progress",
//               href: "/college/students/progress",
//               icon: "📊",
//               crud: ["read"],
//             },
//             {
//               name: "Fee Management",
//               href: "/college/students/fees",
//               icon: "💳",
//               crud: ["read", "update"],
//             },
//           ],
//         },
//         {
//           name: "Academic Management",
//           icon: "📚",
//           type: "submenu",
//           items: [
//             {
//               name: "Course Management",
//               href: "/college/academic/courses",
//               icon: "📘",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Timetable Management",
//               href: "/college/academic/timetable",
//               icon: "🕒",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Academic Calendar",
//               href: "/college/academic/calendar",
//               icon: "📅",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Curriculum Planning",
//               href: "/college/academic/curriculum",
//               icon: "📐",
//               crud: ["create", "read", "update"],
//             },
//           ],
//         },
//         {
//           name: "Infrastructure",
//           icon: "🏗️",
//           type: "submenu",
//           items: [
//             {
//               name: "Classroom Management",
//               href: "/college/infrastructure/classrooms",
//               icon: "🏫",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Lab Management",
//               href: "/college/infrastructure/labs",
//               icon: "🔬",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Asset Tracking",
//               href: "/college/infrastructure/assets",
//               icon: "📦",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Maintenance Requests",
//               href: "/college/infrastructure/maintenance",
//               icon: "🛠️",
//               crud: ["read", "update"],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Department HOD",
//       icon: "🏢",
//       type: "dropdown",
//       items: [
//         {
//           name: "Department Dashboard",
//           href: "/department/dashboard",
//           icon: "📊",
//           crud: ["read"],
//         },
//         {
//           name: "Faculty Management",
//           icon: "👨‍🏫",
//           type: "submenu",
//           items: [
//             {
//               name: "Faculty List",
//               href: "/department/faculty",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Faculty Assignment",
//               href: "/department/faculty/assignment",
//               icon: "📍",
//               crud: ["create", "update"],
//             },
//             {
//               name: "Workload Management",
//               href: "/department/faculty/workload",
//               icon: "⚖️",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Leave Approvals",
//               href: "/department/faculty/leaves",
//               icon: "🌴",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Performance Reviews",
//               href: "/department/faculty/reviews",
//               icon: "📝",
//               crud: ["create", "read", "update"],
//             },
//           ],
//         },
//         {
//           name: "Student Management",
//           icon: "🎓",
//           type: "submenu",
//           items: [
//             {
//               name: "Student Directory",
//               href: "/department/students",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Attendance Monitoring",
//               href: "/department/students/attendance",
//               icon: "📊",
//               crud: ["read"],
//             },
//             {
//               name: "Academic Progress",
//               href: "/department/students/progress",
//               icon: "📈",
//               crud: ["read"],
//             },
//             {
//               name: "Mentorship Program",
//               href: "/department/students/mentorship",
//               icon: "🤝",
//               crud: ["create", "read", "update"],
//             },
//             {
//               name: "Disciplinary Actions",
//               href: "/department/students/discipline",
//               icon: "⚖️",
//               crud: ["create", "read", "update"],
//             },
//           ],
//         },
//         {
//           name: "Academic Management",
//           icon: "📚",
//           type: "submenu",
//           items: [
//             {
//               name: "Course Management",
//               href: "/department/academic/courses",
//               icon: "📘",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Timetable Management",
//               href: "/department/academic/timetable",
//               icon: "🕒",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Internal Assessments",
//               href: "/department/academic/assessments",
//               icon: "📝",
//               crud: ["create", "read", "update"],
//             },
//             {
//               name: "Study Materials",
//               href: "/department/academic/materials",
//               icon: "📚",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Syllabus Management",
//               href: "/department/academic/syllabus",
//               icon: "📖",
//               crud: ["create", "read", "update"],
//             },
//           ],
//         },
//         {
//           name: "Research & Projects",
//           icon: "🔬",
//           type: "submenu",
//           items: [
//             {
//               name: "Research Projects",
//               href: "/department/research/projects",
//               icon: "📋",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Publication Management",
//               href: "/department/research/publications",
//               icon: "📄",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Grant Management",
//               href: "/department/research/grants",
//               icon: "💰",
//               crud: ["create", "read", "update"],
//             },
//             {
//               name: "Lab Management",
//               href: "/department/research/labs",
//               icon: "🧪",
//               crud: ["read", "update"],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Faculty / Teacher",
//       icon: "👩‍🏫",
//       type: "dropdown",
//       items: [
//         {
//           name: "Faculty Dashboard",
//           href: "/faculty/dashboard",
//           icon: "📊",
//           crud: ["read"],
//         },
//         {
//           name: "Attendance Management",
//           icon: "📋",
//           type: "submenu",
//           items: [
//             {
//               name: "Take Attendance",
//               href: "/faculty/attendance/take",
//               icon: "✅",
//               crud: ["create", "update"],
//             },
//             {
//               name: "View Attendance",
//               href: "/faculty/attendance/view",
//               icon: "👁️",
//               crud: ["read"],
//             },
//             {
//               name: "Attendance Reports",
//               href: "/faculty/attendance/reports",
//               icon: "📊",
//               crud: ["read"],
//             },
//             {
//               name: "Correction Requests",
//               href: "/faculty/attendance/corrections",
//               icon: "🔄",
//               crud: ["read", "update"],
//             },
//           ],
//         },
//         {
//           name: "Academic Management",
//           icon: "📚",
//           type: "submenu",
//           items: [
//             {
//               name: "My Courses",
//               href: "/faculty/academic/courses",
//               icon: "📘",
//               crud: ["read"],
//             },
//             {
//               name: "Study Materials",
//               href: "/faculty/academic/materials",
//               icon: "📖",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Lesson Plans",
//               href: "/faculty/academic/lessons",
//               icon: "📝",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Timetable",
//               href: "/faculty/academic/timetable",
//               icon: "🕒",
//               crud: ["read"],
//             },
//           ],
//         },
//         {
//           name: "Assessment & Evaluation",
//           icon: "✏️",
//           type: "submenu",
//           items: [
//             {
//               name: "Marks Entry",
//               href: "/faculty/assessment/marks",
//               icon: "📝",
//               crud: ["create", "update"],
//             },
//             {
//               name: "Create Assignments",
//               href: "/faculty/assessment/assignments",
//               icon: "📄",
//               crud: ["create", "read", "update", "delete"],
//             },
//             {
//               name: "Grade Assignments",
//               href: "/faculty/assessment/grading",
//               icon: "🎯",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Performance Analytics",
//               href: "/faculty/assessment/analytics",
//               icon: "📈",
//               crud: ["read"],
//             },
//           ],
//         },
//         {
//           name: "Student Interaction",
//           icon: "🎓",
//           type: "submenu",
//           items: [
//             {
//               name: "Student Profiles",
//               href: "/faculty/students/profiles",
//               icon: "👤",
//               crud: ["read"],
//             },
//             {
//               name: "Mentorship",
//               href: "/faculty/students/mentorship",
//               icon: "🤝",
//               crud: ["create", "read", "update"],
//             },
//             {
//               name: "Progress Tracking",
//               href: "/faculty/students/progress",
//               icon: "📊",
//               crud: ["read"],
//             },
//             {
//               name: "Communication",
//               href: "/faculty/students/communication",
//               icon: "💬",
//               crud: ["create", "read"],
//             },
//           ],
//         },
//       ],
//     },
//     // Additional roles would continue in similar pattern...
//     {
//       name: "Student Panel",
//       icon: "🎓",
//       type: "dropdown",
//       items: [
//         {
//           name: "Student Dashboard",
//           href: "/student/dashboard",
//           icon: "📊",
//           crud: ["read"],
//         },
//         {
//           name: "Academic",
//           icon: "📚",
//           type: "submenu",
//           items: [
//             {
//               name: "My Profile",
//               href: "/student/academic/profile",
//               icon: "👤",
//               crud: ["read", "update"],
//             },
//             {
//               name: "Attendance",
//               href: "/student/academic/attendance",
//               icon: "📋",
//               crud: ["read"],
//             },
//             {
//               name: "Timetable",
//               href: "/student/academic/timetable",
//               icon: "🕒",
//               crud: ["read"],
//             },
//             {
//               name: "Course Materials",
//               href: "/student/academic/materials",
//               icon: "📖",
//               crud: ["read"],
//             },
//           ],
//         },
//         {
//           name: "Examinations",
//           icon: "📝",
//           type: "submenu",
//           items: [
//             {
//               name: "Exam Schedule",
//               href: "/student/exams/schedule",
//               icon: "📅",
//               crud: ["read"],
//             },
//             {
//               name: "Hall Tickets",
//               href: "/student/exams/hall-tickets",
//               icon: "🎫",
//               crud: ["read"],
//             },
//             {
//               name: "Results",
//               href: "/student/exams/results",
//               icon: "📊",
//               crud: ["read"],
//             },
//             {
//               name: "Revaluation",
//               href: "/student/exams/revaluation",
//               icon: "🔄",
//               crud: ["create", "read"],
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   // Recursive component for nested menus
//   const NavigationItem = ({ item, level = 0 }) => {
//     const hasSubmenu = item.type === "submenu";
//     const isSubmenuOpen = openSubmenus[item.name];

//     if (hasSubmenu) {
//       return (
//         <li>
//           <button
//             onClick={() => toggleSubmenu(item.name)}
//             className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700 ${
//               isSubmenuOpen ? "bg-gray-700 text-blue-400" : "text-gray-300"
//             } ${level > 0 ? `ml-${level * 4}` : ""}`}
//           >
//             <div className="flex items-center space-x-3">
//               <span className="text-lg">{item.icon}</span>
//               <span className="font-medium">{item.name}</span>
//             </div>
//             <svg
//               className={`w-4 h-4 transition-transform duration-200 ${
//                 isSubmenuOpen ? "rotate-180" : ""
//               }`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </button>

//           {isSubmenuOpen && (
//             <ul className="mt-1 ml-6 space-y-1 border-l border-gray-600 pl-2">
//               {item.items.map((subItem) => (
//                 <NavigationItem
//                   key={subItem.name}
//                   item={subItem}
//                   level={level + 1}
//                 />
//               ))}
//             </ul>
//           )}
//         </li>
//       );
//     }

//     return (
//       <li>
//         <NavLink
//           to={item.href}
//           className={({ isActive }) =>
//             `flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${
//               isActive
//                 ? "bg-blue-500/20 text-blue-400 border-l-4 border-blue-400"
//                 : "text-gray-400 hover:text-white hover:bg-gray-700/50"
//             } ${level > 0 ? `ml-${level * 4}` : ""}`
//           }
//         >
//           <span className="text-sm">{item.icon}</span>
//           <div className="flex-1 flex items-center justify-between">
//             <span className="text-sm">{item.name}</span>
//             {item.crud && (
//               <div className="flex space-x-1">
//                 {item.crud.includes("create") && (
//                   <span className="text-xs text-green-400">C</span>
//                 )}
//                 {item.crud.includes("read") && (
//                   <span className="text-xs text-blue-400">R</span>
//                 )}
//                 {item.crud.includes("update") && (
//                   <span className="text-xs text-yellow-400">U</span>
//                 )}
//                 {item.crud.includes("delete") && (
//                   <span className="text-xs text-red-400">D</span>
//                 )}
//               </div>
//             )}
//           </div>
//         </NavLink>
//       </li>
//     );
//   };

//   const filteredNavigation = navigation.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.items.some(
//         (subItem) =>
//           subItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           (subItem.items &&
//             subItem.items.some((subSubItem) =>
//               subSubItem.name.toLowerCase().includes(searchTerm.toLowerCase())
//             ))
//       )
//   );

//   return (
//     <div className="w-100 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen flex flex-col shadow-2xl">
//       {/* Header */}
//       <div className="p-6 border-b border-gray-700">
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
//             <span className="text-white font-bold text-lg">EV</span>
//           </div>
//           <div>
//             <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               EduVerse
//             </h1>
//             <p className="text-gray-400 text-xs">
//               University Management System
//             </p>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="mt-4 relative">
//           <input
//             type="text"
//             placeholder="Search modules..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//           />
//           <div className="absolute right-3 top-2.5">
//             <span className="text-gray-400">🔍</span>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 overflow-y-auto px-4 py-4">
//         <div className="space-y-1">
//           {filteredNavigation.map((item) => (
//             <div key={item.name} className="group">
//               <button
//                 onClick={() => toggleDropdown(item.name)}
//                 className={`flex items-center justify-between w-full px-3 py-3 rounded-xl transition-all duration-200 hover:bg-gray-700 hover:shadow-lg ${
//                   openDropdown === item.name
//                     ? "bg-blue-500/20 text-blue-400 border-l-4 border-blue-400"
//                     : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 <div className="flex items-center space-x-3">
//                   <span className="text-lg">{item.icon}</span>
//                   <span className="font-medium text-sm">{item.name}</span>
//                 </div>
//                 <svg
//                   className={`w-4 h-4 transition-transform duration-200 ${
//                     openDropdown === item.name
//                       ? "rotate-180 text-blue-400"
//                       : "text-gray-400"
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {openDropdown === item.name && (
//                 <div className="mt-1 ml-4 space-y-1 bg-gray-800/50 rounded-lg p-2 border-l border-gray-700">
//                   {item.items.map((subItem) => (
//                     <NavigationItem key={subItem.name} item={subItem} />
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Quick Actions */}
//         <div className="mt-8 pt-6 border-t border-gray-700">
//           <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">
//             Quick Access
//           </h3>
//           <div className="space-y-2">
//             <NavLink
//               to="/dashboard"
//               className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
//             >
//               <span>📊</span>
//               <span>Main Dashboard</span>
//             </NavLink>
//             <NavLink
//               to="/notifications"
//               className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
//             >
//               <span>🔔</span>
//               <span>Notifications</span>
//             </NavLink>
//             <NavLink
//               to="/settings"
//               className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
//             >
//               <span>⚙️</span>
//               <span>Settings</span>
//             </NavLink>
//           </div>
//         </div>
//       </nav>

//       {/* User Profile */}
//       <div className="p-4 border-t border-gray-700 bg-gray-800/50">
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
//             <span className="text-white font-bold text-sm">AD</span>
//           </div>
//           <div className="flex-1 min-w-0">
//             <p className="text-sm font-medium text-white truncate">
//               Admin User
//             </p>
//             <p className="text-xs text-gray-400 truncate">
//               admin@eduvarsity.com
//             </p>
//           </div>
//           <button className="text-gray-400 hover:text-white transition-colors duration-200">
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const toggleSubmenu = (submenuName) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [submenuName]: !prev[submenuName],
    }));
  };

  // All 14 roles with complete CRUD operations
  const navigation = [
    {
      name: "Master Admin",
      icon: "🏠",
      type: "dropdown",
      items: [
        {
          name: "College Management",
          icon: "🏛️",
          type: "submenu",
          items: [
            {
              name: "All Colleges",
              href: "/master-admin/colleges",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Create College",
              href: "/master-admin/colleges/create",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "College Analytics",
              href: "/master-admin/colleges/analytics",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "College Hierarchy",
              href: "/master-admin/colleges/hierarchy",
              icon: "📐",
              crud: ["read", "update"],
            },
            {
              name: "College Settings",
              href: "/master-admin/colleges/settings",
              icon: "⚙️",
              crud: ["update"],
            },
          ],
        },
        {
          name: "System Configuration",
          icon: "⚙️",
          type: "submenu",
          items: [
            {
              name: "Global Settings",
              href: "/master-admin/settings/global",
              icon: "🌐",
              crud: ["read", "update"],
            },
            {
              name: "Academic Calendar",
              href: "/master-admin/settings/calendar",
              icon: "📅",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "University Policies",
              href: "/master-admin/settings/policies",
              icon: "📜",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "System Backup",
              href: "/master-admin/settings/backup",
              icon: "💾",
              crud: ["create", "read", "delete"],
            },
          ],
        },
        {
          name: "System Overview",
          href: "/master-admin/overview",
          icon: "👁️",
          crud: ["read"],
        },
      ],
    },
    {
      name: "Super Admin / VC",
      icon: "👑",
      type: "dropdown",
      items: [
        {
          name: "University Dashboard",
          href: "/superadmin/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "College Management",
          icon: "🏛️",
          type: "submenu",
          items: [
            {
              name: "All Colleges",
              href: "/superadmin/colleges",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "College Performance",
              href: "/superadmin/colleges/performance",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "College Approvals",
              href: "/superadmin/colleges/approvals",
              icon: "✅",
              crud: ["read", "update"],
            },
            {
              name: "College Reports",
              href: "/superadmin/colleges/reports",
              icon: "📑",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Department Management",
          icon: "🏢",
          type: "submenu",
          items: [
            {
              name: "All Departments",
              href: "/superadmin/departments",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Create Department",
              href: "/superadmin/departments/create",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "HOD Assignment",
              href: "/superadmin/departments/hod-assignment",
              icon: "👨‍💼",
              crud: ["create", "update"],
            },
            {
              name: "Department Performance",
              href: "/superadmin/departments/performance",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Department Reports",
              href: "/superadmin/departments/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Faculty Oversight",
          icon: "👩‍🏫",
          type: "submenu",
          items: [
            {
              name: "All Faculty",
              href: "/superadmin/faculty",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Faculty Performance",
              href: "/superadmin/faculty/performance",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Leave Approvals",
              href: "/superadmin/faculty/leaves",
              icon: "🌴",
              crud: ["read", "update"],
            },
            {
              name: "Promotion Management",
              href: "/superadmin/faculty/promotions",
              icon: "⬆️",
              crud: ["read", "update"],
            },
            {
              name: "Faculty Reports",
              href: "/superadmin/faculty/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Student Management",
          icon: "🎓",
          type: "submenu",
          items: [
            {
              name: "All Students",
              href: "/superadmin/students",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Academic Progress",
              href: "/superadmin/students/progress",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Attendance Analytics",
              href: "/superadmin/students/attendance",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Fee Management",
              href: "/superadmin/students/fees",
              icon: "💰",
              crud: ["read"],
            },
            {
              name: "Scholarship Approvals",
              href: "/superadmin/students/scholarships",
              icon: "🎫",
              crud: ["read", "update"],
            },
            {
              name: "Student Reports",
              href: "/superadmin/students/reports",
              icon: "📑",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Finance & Fees",
          icon: "💰",
          type: "submenu",
          items: [
            {
              name: "Fee Structure",
              href: "/superadmin/finance/fee-structure",
              icon: "🏦",
              crud: ["read", "update"],
            },
            {
              name: "Collection Reports",
              href: "/superadmin/finance/reports",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Budget Allocation",
              href: "/superadmin/finance/budget",
              icon: "💸",
              crud: ["read", "update"],
            },
            {
              name: "Expense Tracking",
              href: "/superadmin/finance/expenses",
              icon: "📝",
              crud: ["read"],
            },
            {
              name: "Financial Analytics",
              href: "/superadmin/finance/analytics",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Examinations",
          icon: "📝",
          type: "submenu",
          items: [
            {
              name: "Exam Schedule",
              href: "/superadmin/exams/schedule",
              icon: "📅",
              crud: ["read"],
            },
            {
              name: "Result Approvals",
              href: "/superadmin/exams/results",
              icon: "✅",
              crud: ["read", "update"],
            },
            {
              name: "Performance Analytics",
              href: "/superadmin/exams/analytics",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Revaluation Management",
              href: "/superadmin/exams/revaluation",
              icon: "🔄",
              crud: ["read", "update"],
            },
            {
              name: "Exam Reports",
              href: "/superadmin/exams/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Placement Oversight",
          icon: "💼",
          type: "submenu",
          items: [
            {
              name: "Placement Statistics",
              href: "/superadmin/placements/stats",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Company Management",
              href: "/superadmin/placements/companies",
              icon: "🏢",
              crud: ["read"],
            },
            {
              name: "Placement Reports",
              href: "/superadmin/placements/reports",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Analytics & Trends",
              href: "/superadmin/placements/analytics",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Analytics & Reports",
          href: "/superadmin/analytics",
          icon: "📈",
          crud: ["read"],
        },
        {
          name: "System Configuration",
          href: "/superadmin/system-config",
          icon: "⚙️",
          crud: ["read", "update"],
        },
      ],
    },
    {
      name: "College Admin / Principal",
      icon: "🏫",
      type: "dropdown",
      items: [
        {
          name: "College Dashboard",
          href: "/college/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Department Management",
          icon: "🏢",
          type: "submenu",
          items: [
            {
              name: "All Departments",
              href: "/college/departments",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Create Department",
              href: "/college/departments/create",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "Department Reports",
              href: "/college/departments/reports",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "HOD Management",
              href: "/college/departments/hod-management",
              icon: "👨‍💼",
              crud: ["create", "read", "update"],
            },
            {
              name: "Department Settings",
              href: "/college/departments/settings",
              icon: "⚙️",
              crud: ["update"],
            },
          ],
        },
        {
          name: "Faculty Management",
          icon: "👨‍🏫",
          type: "submenu",
          items: [
            {
              name: "All Faculty",
              href: "/college/faculty",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Add Faculty",
              href: "/college/faculty/create",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "Faculty Assignment",
              href: "/college/faculty/assignment",
              icon: "📍",
              crud: ["create", "update"],
            },
            {
              name: "Leave Management",
              href: "/college/faculty/leaves",
              icon: "🌴",
              crud: ["read", "update"],
            },
            {
              name: "Performance Tracking",
              href: "/college/faculty/performance",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Faculty Reports",
              href: "/college/faculty/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Student Management",
          icon: "🎓",
          type: "submenu",
          items: [
            {
              name: "All Students",
              href: "/college/students",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Admission Management",
              href: "/college/students/admissions",
              icon: "📥",
              crud: ["create", "read", "update"],
            },
            {
              name: "Attendance Overview",
              href: "/college/students/attendance",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Academic Progress",
              href: "/college/students/progress",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Fee Management",
              href: "/college/students/fees",
              icon: "💳",
              crud: ["read", "update"],
            },
            {
              name: "Student Reports",
              href: "/college/students/reports",
              icon: "📑",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Academic Management",
          icon: "📚",
          type: "submenu",
          items: [
            {
              name: "Course Management",
              href: "/college/academic/courses",
              icon: "📘",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Timetable Management",
              href: "/college/academic/timetable",
              icon: "🕒",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Academic Calendar",
              href: "/college/academic/calendar",
              icon: "📅",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Curriculum Planning",
              href: "/college/academic/curriculum",
              icon: "📐",
              crud: ["create", "read", "update"],
            },
            {
              name: "Academic Reports",
              href: "/college/academic/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Admissions",
          href: "/college/admissions",
          icon: "📥",
          crud: ["create", "read", "update"],
        },
        {
          name: "Finance & Fees",
          icon: "💳",
          type: "submenu",
          items: [
            {
              name: "Fee Structure",
              href: "/college/finance/structure",
              icon: "🏦",
              crud: ["read", "update"],
            },
            {
              name: "Fee Collection",
              href: "/college/finance/collection",
              icon: "💰",
              crud: ["read", "update"],
            },
            {
              name: "Financial Reports",
              href: "/college/finance/reports",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Budget Management",
              href: "/college/finance/budget",
              icon: "💸",
              crud: ["create", "read", "update"],
            },
          ],
        },
        {
          name: "Infrastructure",
          icon: "🏗️",
          type: "submenu",
          items: [
            {
              name: "Classroom Management",
              href: "/college/infrastructure/classrooms",
              icon: "🏫",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Lab Management",
              href: "/college/infrastructure/labs",
              icon: "🔬",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Asset Tracking",
              href: "/college/infrastructure/assets",
              icon: "📦",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Maintenance Requests",
              href: "/college/infrastructure/maintenance",
              icon: "🛠️",
              crud: ["read", "update"],
            },
            {
              name: "Infrastructure Reports",
              href: "/college/infrastructure/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "College Reports",
          href: "/college/reports",
          icon: "📑",
          crud: ["read"],
        },
      ],
    },
    {
      name: "Department HOD",
      icon: "🏢",
      type: "dropdown",
      items: [
        {
          name: "Department Dashboard",
          href: "/department/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Faculty Management",
          icon: "👨‍🏫",
          type: "submenu",
          items: [
            {
              name: "Faculty List",
              href: "/department/faculty",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Faculty Assignment",
              href: "/department/faculty/assignment",
              icon: "📍",
              crud: ["create", "update"],
            },
            {
              name: "Workload Management",
              href: "/department/faculty/workload",
              icon: "⚖️",
              crud: ["read", "update"],
            },
            {
              name: "Leave Approvals",
              href: "/department/faculty/leaves",
              icon: "🌴",
              crud: ["read", "update"],
            },
            {
              name: "Performance Reviews",
              href: "/department/faculty/reviews",
              icon: "📝",
              crud: ["create", "read", "update"],
            },
            {
              name: "Faculty Reports",
              href: "/department/faculty/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Student Management",
          icon: "🎓",
          type: "submenu",
          items: [
            {
              name: "Student Directory",
              href: "/department/students",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Attendance Monitoring",
              href: "/department/students/attendance",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Academic Progress",
              href: "/department/students/progress",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Mentorship Program",
              href: "/department/students/mentorship",
              icon: "🤝",
              crud: ["create", "read", "update"],
            },
            {
              name: "Disciplinary Actions",
              href: "/department/students/discipline",
              icon: "⚖️",
              crud: ["create", "read", "update"],
            },
            {
              name: "Student Reports",
              href: "/department/students/reports",
              icon: "📑",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Academic Management",
          icon: "📚",
          type: "submenu",
          items: [
            {
              name: "Course Management",
              href: "/department/academic/courses",
              icon: "📘",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Timetable Management",
              href: "/department/academic/timetable",
              icon: "🕒",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Internal Assessments",
              href: "/department/academic/assessments",
              icon: "📝",
              crud: ["create", "read", "update"],
            },
            {
              name: "Study Materials",
              href: "/department/academic/materials",
              icon: "📚",
              crud: ["read", "update"],
            },
            {
              name: "Syllabus Management",
              href: "/department/academic/syllabus",
              icon: "📖",
              crud: ["create", "read", "update"],
            },
            {
              name: "Academic Reports",
              href: "/department/academic/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Leave Approvals",
          href: "/department/leaves",
          icon: "🌴",
          crud: ["read", "update"],
        },
        {
          name: "Research & Projects",
          icon: "🔬",
          type: "submenu",
          items: [
            {
              name: "Research Projects",
              href: "/department/research/projects",
              icon: "📋",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Publication Management",
              href: "/department/research/publications",
              icon: "📄",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Grant Management",
              href: "/department/research/grants",
              icon: "💰",
              crud: ["create", "read", "update"],
            },
            {
              name: "Lab Management",
              href: "/department/research/labs",
              icon: "🧪",
              crud: ["read", "update"],
            },
            {
              name: "Research Reports",
              href: "/department/research/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Department Reports",
          href: "/department/reports",
          icon: "📈",
          crud: ["read"],
        },
      ],
    },
    {
      name: "Faculty / Teacher",
      icon: "👩‍🏫",
      type: "dropdown",
      items: [
        {
          name: "Faculty Dashboard",
          href: "/faculty/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "My Profile",
          href: "/faculty/profile",
          icon: "👤",
          crud: ["read", "update"],
        },
        {
          name: "Attendance Management",
          icon: "📋",
          type: "submenu",
          items: [
            {
              name: "Take Attendance",
              href: "/faculty/attendance/take",
              icon: "✅",
              crud: ["create", "update"],
            },
            {
              name: "View Attendance",
              href: "/faculty/attendance/view",
              icon: "👁️",
              crud: ["read"],
            },
            {
              name: "Attendance Reports",
              href: "/faculty/attendance/reports",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Correction Requests",
              href: "/faculty/attendance/corrections",
              icon: "🔄",
              crud: ["read", "update"],
            },
          ],
        },
        {
          name: "Academic Management",
          icon: "📚",
          type: "submenu",
          items: [
            {
              name: "My Courses",
              href: "/faculty/academic/courses",
              icon: "📘",
              crud: ["read"],
            },
            {
              name: "Study Materials",
              href: "/faculty/academic/materials",
              icon: "📖",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Lesson Plans",
              href: "/faculty/academic/lessons",
              icon: "📝",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Timetable",
              href: "/faculty/academic/timetable",
              icon: "🕒",
              crud: ["read"],
            },
            {
              name: "Academic Progress",
              href: "/faculty/academic/progress",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Assessment & Evaluation",
          icon: "✏️",
          type: "submenu",
          items: [
            {
              name: "Marks Entry",
              href: "/faculty/assessment/marks",
              icon: "📝",
              crud: ["create", "update"],
            },
            {
              name: "Create Assignments",
              href: "/faculty/assessment/assignments",
              icon: "📄",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Grade Assignments",
              href: "/faculty/assessment/grading",
              icon: "🎯",
              crud: ["read", "update"],
            },
            {
              name: "Performance Analytics",
              href: "/faculty/assessment/analytics",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Assessment Reports",
              href: "/faculty/assessment/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Student Interaction",
          icon: "🎓",
          type: "submenu",
          items: [
            {
              name: "Student Profiles",
              href: "/faculty/students/profiles",
              icon: "👤",
              crud: ["read"],
            },
            {
              name: "Mentorship",
              href: "/faculty/students/mentorship",
              icon: "🤝",
              crud: ["create", "read", "update"],
            },
            {
              name: "Progress Tracking",
              href: "/faculty/students/progress",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Communication",
              href: "/faculty/students/communication",
              icon: "💬",
              crud: ["create", "read"],
            },
          ],
        },
        {
          name: "Exam Duties",
          href: "/faculty/exam-duty",
          icon: "📋",
          crud: ["read", "update"],
        },
        {
          name: "Leave Management",
          href: "/faculty/leaves",
          icon: "🌴",
          crud: ["create", "read", "update", "delete"],
        },
        {
          name: "Student Mentorship",
          href: "/faculty/mentorship",
          icon: "🤝",
          crud: ["create", "read", "update"],
        },
      ],
    },
    {
      name: "Non-Teaching Staff",
      icon: "💼",
      type: "dropdown",
      items: [
        {
          name: "Staff Dashboard",
          href: "/staff/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Fee Collection",
          icon: "💰",
          type: "submenu",
          items: [
            {
              name: "Collect Fees",
              href: "/staff/fees/collect",
              icon: "💵",
              crud: ["create", "update"],
            },
            {
              name: "Fee Records",
              href: "/staff/fees/records",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Receipt Management",
              href: "/staff/fees/receipts",
              icon: "🧾",
              crud: ["create", "read", "update"],
            },
            {
              name: "Fee Reports",
              href: "/staff/fees/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Student Records",
          icon: "📁",
          type: "submenu",
          items: [
            {
              name: "Student Database",
              href: "/staff/records/students",
              icon: "📋",
              crud: ["read", "update"],
            },
            {
              name: "Document Verification",
              href: "/staff/records/documents",
              icon: "📄",
              crud: ["read", "update"],
            },
            {
              name: "Certificate Management",
              href: "/staff/records/certificates",
              icon: "🏆",
              crud: ["create", "read", "update"],
            },
            {
              name: "Record Reports",
              href: "/staff/records/reports",
              icon: "📑",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Document Management",
          icon: "📄",
          type: "submenu",
          items: [
            {
              name: "Upload Documents",
              href: "/staff/documents/upload",
              icon: "📤",
              crud: ["create"],
            },
            {
              name: "Document Archive",
              href: "/staff/documents/archive",
              icon: "📚",
              crud: ["read"],
            },
            {
              name: "Document Search",
              href: "/staff/documents/search",
              icon: "🔍",
              crud: ["read"],
            },
            {
              name: "Document Reports",
              href: "/staff/documents/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Inventory Management",
          icon: "📦",
          type: "submenu",
          items: [
            {
              name: "Inventory Tracking",
              href: "/staff/inventory/tracking",
              icon: "📋",
              crud: ["create", "read", "update"],
            },
            {
              name: "Stock Management",
              href: "/staff/inventory/stock",
              icon: "📊",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Purchase Orders",
              href: "/staff/inventory/orders",
              icon: "🛒",
              crud: ["create", "read", "update"],
            },
            {
              name: "Inventory Reports",
              href: "/staff/inventory/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Certificate Issuance",
          href: "/staff/certificates",
          icon: "🏆",
          crud: ["create", "read", "update"],
        },
        {
          name: "Office Operations",
          href: "/staff/operations",
          icon: "🏢",
          crud: ["read", "update"],
        },
        {
          name: "Support Tickets",
          href: "/staff/support",
          icon: "🎫",
          crud: ["create", "read", "update"],
        },
      ],
    },
    {
      name: "Exam & Evaluation",
      icon: "📝",
      type: "dropdown",
      items: [
        {
          name: "Exam Dashboard",
          href: "/exam/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Exam Scheduling",
          icon: "📅",
          type: "submenu",
          items: [
            {
              name: "Create Schedule",
              href: "/exam/schedule/create",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "View Schedule",
              href: "/exam/schedule/view",
              icon: "👁️",
              crud: ["read"],
            },
            {
              name: "Update Schedule",
              href: "/exam/schedule/update",
              icon: "✏️",
              crud: ["update"],
            },
            {
              name: "Schedule Reports",
              href: "/exam/schedule/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Hall Management",
          icon: "🏛️",
          type: "submenu",
          items: [
            {
              name: "Hall Allocation",
              href: "/exam/hall-allocation",
              icon: "📍",
              crud: ["create", "read", "update"],
            },
            {
              name: "Seating Arrangement",
              href: "/exam/hall/seating",
              icon: "🪑",
              crud: ["create", "read", "update"],
            },
            {
              name: "Hall Reports",
              href: "/exam/hall/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Question Papers",
          icon: "📄",
          type: "submenu",
          items: [
            {
              name: "Upload Questions",
              href: "/exam/questions/upload",
              icon: "📤",
              crud: ["create"],
            },
            {
              name: "Question Bank",
              href: "/exam/questions/bank",
              icon: "🏦",
              crud: ["read", "update", "delete"],
            },
            {
              name: "Question Approval",
              href: "/exam/questions/approval",
              icon: "✅",
              crud: ["read", "update"],
            },
            {
              name: "Question Reports",
              href: "/exam/questions/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Marks Management",
          icon: "✏️",
          type: "submenu",
          items: [
            {
              name: "Marks Entry",
              href: "/exam/marks/entry",
              icon: "📝",
              crud: ["create", "update"],
            },
            {
              name: "Marks Verification",
              href: "/exam/marks/verification",
              icon: "✅",
              crud: ["read", "update"],
            },
            {
              name: "Marks Correction",
              href: "/exam/marks/correction",
              icon: "🔄",
              crud: ["update"],
            },
            {
              name: "Marks Reports",
              href: "/exam/marks/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Result Processing",
          icon: "📊",
          type: "submenu",
          items: [
            {
              name: "Process Results",
              href: "/exam/results/process",
              icon: "⚙️",
              crud: ["create"],
            },
            {
              name: "View Results",
              href: "/exam/results/view",
              icon: "👁️",
              crud: ["read"],
            },
            {
              name: "Result Analytics",
              href: "/exam/results/analytics",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Result Reports",
              href: "/exam/results/reports",
              icon: "📑",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Revaluation",
          href: "/exam/revaluation",
          icon: "🔄",
          crud: ["read", "update"],
        },
        {
          name: "Duty Allocation",
          href: "/exam/duty-allocation",
          icon: "👥",
          crud: ["create", "read", "update"],
        },
        {
          name: "Exam Reports",
          href: "/exam/reports",
          icon: "📈",
          crud: ["read"],
        },
      ],
    },
    {
      name: "Student Panel",
      icon: "🎓",
      type: "dropdown",
      items: [
        {
          name: "Student Dashboard",
          href: "/student/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "My Profile",
          href: "/student/profile",
          icon: "👤",
          crud: ["read", "update"],
        },
        {
          name: "Academic",
          icon: "📚",
          type: "submenu",
          items: [
            {
              name: "Attendance",
              href: "/student/academic/attendance",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Timetable",
              href: "/student/academic/timetable",
              icon: "🕒",
              crud: ["read"],
            },
            {
              name: "Course Materials",
              href: "/student/academic/materials",
              icon: "📖",
              crud: ["read"],
            },
            {
              name: "Academic Progress",
              href: "/student/academics",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Course Enrollment",
              href: "/student/courses",
              icon: "📚",
              crud: ["read", "update"],
            },
          ],
        },
        {
          name: "Examinations",
          icon: "📝",
          type: "submenu",
          items: [
            {
              name: "Exam Schedule",
              href: "/student/exams/schedule",
              icon: "📅",
              crud: ["read"],
            },
            {
              name: "Hall Tickets",
              href: "/student/exams/hall-tickets",
              icon: "🎫",
              crud: ["read"],
            },
            {
              name: "Results",
              href: "/student/results",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Revaluation",
              href: "/student/exams/revaluation",
              icon: "🔄",
              crud: ["create", "read"],
            },
          ],
        },
        {
          name: "Assignments",
          icon: "📝",
          type: "submenu",
          items: [
            {
              name: "View Assignments",
              href: "/student/assignments/view",
              icon: "👁️",
              crud: ["read"],
            },
            {
              name: "Submit Assignments",
              href: "/student/assignments/submit",
              icon: "📤",
              crud: ["create", "update"],
            },
            {
              name: "Assignment Grades",
              href: "/student/assignments/grades",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Finance",
          icon: "💳",
          type: "submenu",
          items: [
            {
              name: "Fee Payment",
              href: "/student/fees/payment",
              icon: "💰",
              crud: ["create", "read"],
            },
            {
              name: "Fee History",
              href: "/student/fees/history",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Receipts",
              href: "/student/fees/receipts",
              icon: "🧾",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Library",
          icon: "📖",
          type: "submenu",
          items: [
            {
              name: "Search Books",
              href: "/student/library/search",
              icon: "🔍",
              crud: ["read"],
            },
            {
              name: "My Borrowings",
              href: "/student/library/borrowings",
              icon: "📚",
              crud: ["read"],
            },
            {
              name: "Digital Resources",
              href: "/student/library/digital",
              icon: "💻",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Placements",
          icon: "💼",
          type: "submenu",
          items: [
            {
              name: "Job Portal",
              href: "/student/placements/jobs",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "My Applications",
              href: "/student/placements/applications",
              icon: "📄",
              crud: ["create", "read", "update"],
            },
            {
              name: "Interview Schedule",
              href: "/student/placements/interviews",
              icon: "📅",
              crud: ["read"],
            },
          ],
        },
      ],
    },
    {
      name: "Parent Panel",
      icon: "👨‍👩‍👧",
      type: "dropdown",
      items: [
        {
          name: "Parent Dashboard",
          href: "/parent/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Child Management",
          icon: "👶",
          type: "submenu",
          items: [
            {
              name: "Child Progress",
              href: "/parent/children",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Multi-Child View",
              href: "/parent/children/multi",
              icon: "👨‍👩‍👧‍👦",
              crud: ["read"],
            },
            {
              name: "Child Settings",
              href: "/parent/children/settings",
              icon: "⚙️",
              crud: ["read", "update"],
            },
          ],
        },
        {
          name: "Academic Monitoring",
          icon: "📋",
          type: "submenu",
          items: [
            {
              name: "Attendance Overview",
              href: "/parent/attendance",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Exam Results",
              href: "/parent/results",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Performance Reports",
              href: "/parent/reports",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Academic Alerts",
              href: "/parent/academic/alerts",
              icon: "🚨",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Finance",
          icon: "💰",
          type: "submenu",
          items: [
            {
              name: "Fee Status",
              href: "/parent/fees/status",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Payment History",
              href: "/parent/fees/history",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Make Payment",
              href: "/parent/fees/payment",
              icon: "💳",
              crud: ["create"],
            },
          ],
        },
        {
          name: "Communication",
          icon: "💬",
          type: "submenu",
          items: [
            {
              name: "With Faculty",
              href: "/parent/communication/faculty",
              icon: "👨‍🏫",
              crud: ["create", "read"],
            },
            {
              name: "With Administration",
              href: "/parent/communication/admin",
              icon: "🏫",
              crud: ["create", "read"],
            },
            {
              name: "Meeting Requests",
              href: "/parent/communication/meetings",
              icon: "📅",
              crud: ["create", "read", "update"],
            },
          ],
        },
        {
          name: "Services",
          icon: "🚌",
          type: "submenu",
          items: [
            {
              name: "Transport Tracking",
              href: "/parent/transport",
              icon: "📍",
              crud: ["read"],
            },
            {
              name: "Hostel Info",
              href: "/parent/hostel",
              icon: "🏠",
              crud: ["read"],
            },
            {
              name: "Mess Menu",
              href: "/parent/hostel/mess",
              icon: "🍽️",
              crud: ["read"],
            },
          ],
        },
      ],
    },
    {
      name: "Transport Management",
      icon: "🚌",
      type: "dropdown",
      items: [
        {
          name: "Transport Dashboard",
          href: "/transport/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Vehicle Management",
          icon: "🚗",
          type: "submenu",
          items: [
            {
              name: "Vehicle List",
              href: "/transport/vehicles/list",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Add Vehicle",
              href: "/transport/vehicles/add",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "Vehicle Maintenance",
              href: "/transport/vehicles/maintenance",
              icon: "🔧",
              crud: ["create", "read", "update"],
            },
            {
              name: "Vehicle Reports",
              href: "/transport/vehicles/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Route Management",
          icon: "🗺️",
          type: "submenu",
          items: [
            {
              name: "Route List",
              href: "/transport/routes/list",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Create Route",
              href: "/transport/routes/create",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "Route Optimization",
              href: "/transport/routes/optimization",
              icon: "⚡",
              crud: ["read", "update"],
            },
            {
              name: "Route Reports",
              href: "/transport/routes/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Student Management",
          icon: "👥",
          type: "submenu",
          items: [
            {
              name: "Student Allocation",
              href: "/transport/students/allocation",
              icon: "📍",
              crud: ["create", "read", "update"],
            },
            {
              name: "Student List",
              href: "/transport/students/list",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Attendance Tracking",
              href: "/transport/students/attendance",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Student Reports",
              href: "/transport/students/reports",
              icon: "📑",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Tracking & Monitoring",
          icon: "📍",
          type: "submenu",
          items: [
            {
              name: "GPS Tracking",
              href: "/transport/tracking/live",
              icon: "🎯",
              crud: ["read"],
            },
            {
              name: "Route Monitoring",
              href: "/transport/tracking/routes",
              icon: "👁️",
              crud: ["read"],
            },
            {
              name: "Delay Alerts",
              href: "/transport/tracking/alerts",
              icon: "⚠️",
              crud: ["read", "update"],
            },
            {
              name: "Tracking Reports",
              href: "/transport/tracking/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Driver Management",
          icon: "👨‍💼",
          type: "submenu",
          items: [
            {
              name: "Driver List",
              href: "/transport/drivers/list",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Add Driver",
              href: "/transport/drivers/add",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "Driver Schedule",
              href: "/transport/drivers/schedule",
              icon: "📅",
              crud: ["create", "read", "update"],
            },
            {
              name: "Driver Reports",
              href: "/transport/drivers/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Maintenance",
          href: "/transport/maintenance",
          icon: "🔧",
          crud: ["create", "read", "update"],
        },
        {
          name: "Transport Reports",
          href: "/transport/reports",
          icon: "📈",
          crud: ["read"],
        },
      ],
    },
    {
      name: "Hostel Management",
      icon: "🏠",
      type: "dropdown",
      items: [
        {
          name: "Hostel Dashboard",
          href: "/hostel/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Room Management",
          icon: "🛏️",
          type: "submenu",
          items: [
            {
              name: "Room Allocation",
              href: "/hostel/rooms/allocation",
              icon: "📍",
              crud: ["create", "read", "update"],
            },
            {
              name: "Room Inventory",
              href: "/hostel/rooms/inventory",
              icon: "📋",
              crud: ["read", "update"],
            },
            {
              name: "Room Maintenance",
              href: "/hostel/rooms/maintenance",
              icon: "🔧",
              crud: ["create", "read", "update"],
            },
            {
              name: "Room Reports",
              href: "/hostel/rooms/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Student Management",
          icon: "👥",
          type: "submenu",
          items: [
            {
              name: "Student Allocation",
              href: "/hostel/students/allocation",
              icon: "🎓",
              crud: ["create", "read", "update"],
            },
            {
              name: "Student Directory",
              href: "/hostel/students/directory",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Attendance",
              href: "/hostel/attendance",
              icon: "📋",
              crud: ["create", "read", "update"],
            },
            {
              name: "Student Reports",
              href: "/hostel/students/reports",
              icon: "📑",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Mess Management",
          icon: "🍽️",
          type: "submenu",
          items: [
            {
              name: "Mess Menu",
              href: "/hostel/mess/menu",
              icon: "📋",
              crud: ["create", "read", "update"],
            },
            {
              name: "Inventory Management",
              href: "/hostel/mess/inventory",
              icon: "📦",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Billing & Payments",
              href: "/hostel/mess/billing",
              icon: "💰",
              crud: ["create", "read", "update"],
            },
            {
              name: "Mess Reports",
              href: "/hostel/mess/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Visitor Management",
          icon: "👤",
          type: "submenu",
          items: [
            {
              name: "Visitor Log",
              href: "/hostel/visitors/log",
              icon: "📝",
              crud: ["create", "read"],
            },
            {
              name: "Visitor Approval",
              href: "/hostel/visitors/approval",
              icon: "✅",
              crud: ["read", "update"],
            },
            {
              name: "Visitor Reports",
              href: "/hostel/visitors/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Complaint Management",
          icon: "⚠️",
          type: "submenu",
          items: [
            {
              name: "Complaint Register",
              href: "/hostel/complaints/register",
              icon: "📝",
              crud: ["create", "read"],
            },
            {
              name: "Complaint Resolution",
              href: "/hostel/complaints/resolution",
              icon: "✅",
              crud: ["read", "update"],
            },
            {
              name: "Complaint Reports",
              href: "/hostel/complaints/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Maintenance",
          href: "/hostel/maintenance",
          icon: "🔧",
          crud: ["create", "read", "update"],
        },
        {
          name: "Hostel Reports",
          href: "/hostel/reports",
          icon: "📈",
          crud: ["read"],
        },
      ],
    },
    {
      name: "Placement & Career",
      icon: "💼",
      type: "dropdown",
      items: [
        {
          name: "Placement Dashboard",
          href: "/placement/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Company Management",
          icon: "🏢",
          type: "submenu",
          items: [
            {
              name: "Company Directory",
              href: "/placement/companies/directory",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Add Company",
              href: "/placement/companies/add",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "Company Relations",
              href: "/placement/companies/relations",
              icon: "🤝",
              crud: ["create", "read", "update"],
            },
            {
              name: "Company Reports",
              href: "/placement/companies/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Job Management",
          icon: "📋",
          type: "submenu",
          items: [
            {
              name: "Job Postings",
              href: "/placement/jobs/postings",
              icon: "📄",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Job Applications",
              href: "/placement/jobs/applications",
              icon: "📝",
              crud: ["read", "update"],
            },
            {
              name: "Job Analytics",
              href: "/placement/jobs/analytics",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Job Reports",
              href: "/placement/jobs/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Student Applications",
          icon: "📄",
          type: "submenu",
          items: [
            {
              name: "Application Management",
              href: "/placement/applications/manage",
              icon: "📋",
              crud: ["read", "update"],
            },
            {
              name: "Resume Management",
              href: "/placement/applications/resumes",
              icon: "📑",
              crud: ["read", "update"],
            },
            {
              name: "Application Tracking",
              href: "/placement/applications/tracking",
              icon: "👁️",
              crud: ["read"],
            },
            {
              name: "Application Reports",
              href: "/placement/applications/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Interview Management",
          icon: "📅",
          type: "submenu",
          items: [
            {
              name: "Interview Scheduling",
              href: "/placement/interviews/schedule",
              icon: "🕒",
              crud: ["create", "read", "update"],
            },
            {
              name: "Interview Panels",
              href: "/placement/interviews/panels",
              icon: "👥",
              crud: ["create", "read", "update"],
            },
            {
              name: "Interview Results",
              href: "/placement/interviews/results",
              icon: "📊",
              crud: ["create", "read", "update"],
            },
            {
              name: "Interview Reports",
              href: "/placement/interviews/reports",
              icon: "📑",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Placement Reports",
          href: "/placement/reports",
          icon: "📈",
          crud: ["read"],
        },
        {
          name: "Training Programs",
          icon: "🎯",
          type: "submenu",
          items: [
            {
              name: "Program Management",
              href: "/placement/training/programs",
              icon: "📋",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Student Enrollment",
              href: "/placement/training/enrollment",
              icon: "📝",
              crud: ["create", "read", "update"],
            },
            {
              name: "Training Progress",
              href: "/placement/training/progress",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Training Reports",
              href: "/placement/training/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Alumni Engagement",
          icon: "👨‍🎓",
          type: "submenu",
          items: [
            {
              name: "Alumni Directory",
              href: "/placement/alumni/directory",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Alumni Events",
              href: "/placement/alumni/events",
              icon: "🎪",
              crud: ["create", "read", "update"],
            },
            {
              name: "Alumni Network",
              href: "/placement/alumni/network",
              icon: "🌐",
              crud: ["read", "update"],
            },
            {
              name: "Alumni Reports",
              href: "/placement/alumni/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
      ],
    },
    {
      name: "Library Management",
      icon: "📚",
      type: "dropdown",
      items: [
        {
          name: "Library Dashboard",
          href: "/library/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Catalog Management",
          icon: "📖",
          type: "submenu",
          items: [
            {
              name: "Book Catalog",
              href: "/library/catalog/books",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Add Books",
              href: "/library/catalog/add",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "Update Catalog",
              href: "/library/catalog/update",
              icon: "✏️",
              crud: ["update"],
            },
            {
              name: "Catalog Reports",
              href: "/library/catalog/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Transaction Management",
          icon: "🔄",
          type: "submenu",
          items: [
            {
              name: "Issue Books",
              href: "/library/transactions/issue",
              icon: "📤",
              crud: ["create"],
            },
            {
              name: "Return Books",
              href: "/library/transactions/return",
              icon: "📥",
              crud: ["update"],
            },
            {
              name: "Renew Books",
              href: "/library/transactions/renew",
              icon: "🔄",
              crud: ["update"],
            },
            {
              name: "Transaction History",
              href: "/library/transactions/history",
              icon: "📋",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Digital Resources",
          icon: "💻",
          type: "submenu",
          items: [
            {
              name: "E-Books",
              href: "/library/digital/ebooks",
              icon: "📱",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Journals",
              href: "/library/digital/journals",
              icon: "📰",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Research Papers",
              href: "/library/digital/papers",
              icon: "📄",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Digital Reports",
              href: "/library/digital/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Member Management",
          icon: "👥",
          type: "submenu",
          items: [
            {
              name: "Member Directory",
              href: "/library/members/directory",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Member Registration",
              href: "/library/members/registration",
              icon: "📝",
              crud: ["create", "read", "update"],
            },
            {
              name: "Member Activity",
              href: "/library/members/activity",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Member Reports",
              href: "/library/members/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Fines & Payments",
          icon: "💰",
          type: "submenu",
          items: [
            {
              name: "Fine Calculation",
              href: "/library/fines/calculation",
              icon: "🧮",
              crud: ["read", "update"],
            },
            {
              name: "Payment Collection",
              href: "/library/fines/collection",
              icon: "💵",
              crud: ["create", "read", "update"],
            },
            {
              name: "Fine Waivers",
              href: "/library/fines/waivers",
              icon: "🎫",
              crud: ["create", "read", "update"],
            },
            {
              name: "Fine Reports",
              href: "/library/fines/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Inventory Management",
          icon: "📦",
          type: "submenu",
          items: [
            {
              name: "Stock Management",
              href: "/library/inventory/stock",
              icon: "📋",
              crud: ["create", "read", "update"],
            },
            {
              name: "Inventory Tracking",
              href: "/library/inventory/tracking",
              icon: "👁️",
              crud: ["read"],
            },
            {
              name: "Purchase Orders",
              href: "/library/inventory/orders",
              icon: "🛒",
              crud: ["create", "read", "update"],
            },
            {
              name: "Inventory Reports",
              href: "/library/inventory/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Library Reports",
          href: "/library/reports",
          icon: "📈",
          crud: ["read"],
        },
      ],
    },
    {
      name: "IT & Technical Support",
      icon: "💻",
      type: "dropdown",
      items: [
        {
          name: "IT Dashboard",
          href: "/it/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "User Management",
          icon: "👥",
          type: "submenu",
          items: [
            {
              name: "User Directory",
              href: "/it/users/directory",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Create User",
              href: "/it/users/create",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "User Permissions",
              href: "/it/users/permissions",
              icon: "🔐",
              crud: ["read", "update"],
            },
            {
              name: "User Reports",
              href: "/it/users/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "System Monitoring",
          icon: "📡",
          type: "submenu",
          items: [
            {
              name: "Server Health",
              href: "/it/monitoring/servers",
              icon: "❤️",
              crud: ["read"],
            },
            {
              name: "Performance Metrics",
              href: "/it/monitoring/performance",
              icon: "📈",
              crud: ["read"],
            },
            {
              name: "Error Logs",
              href: "/it/monitoring/logs",
              icon: "📝",
              crud: ["read"],
            },
            {
              name: "Monitoring Reports",
              href: "/it/monitoring/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Support Management",
          icon: "🎫",
          type: "submenu",
          items: [
            {
              name: "Support Tickets",
              href: "/it/tickets/list",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Create Ticket",
              href: "/it/tickets/create",
              icon: "➕",
              crud: ["create"],
            },
            {
              name: "Ticket Resolution",
              href: "/it/tickets/resolution",
              icon: "✅",
              crud: ["read", "update"],
            },
            {
              name: "Ticket Reports",
              href: "/it/tickets/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Backup & Recovery",
          icon: "💾",
          type: "submenu",
          items: [
            {
              name: "Backup Management",
              href: "/it/backup/manage",
              icon: "📦",
              crud: ["create", "read", "delete"],
            },
            {
              name: "Recovery Operations",
              href: "/it/backup/recovery",
              icon: "🔄",
              crud: ["create", "read"],
            },
            {
              name: "Backup Reports",
              href: "/it/backup/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "System Configuration",
          icon: "⚙️",
          type: "submenu",
          items: [
            {
              name: "System Settings",
              href: "/it/config/settings",
              icon: "🔧",
              crud: ["read", "update"],
            },
            {
              name: "Module Configuration",
              href: "/it/config/modules",
              icon: "📦",
              crud: ["read", "update"],
            },
            {
              name: "Integration Settings",
              href: "/it/config/integrations",
              icon: "🔗",
              crud: ["read", "update"],
            },
            {
              name: "Config Reports",
              href: "/it/config/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "API Management",
          icon: "🔌",
          type: "submenu",
          items: [
            {
              name: "API Documentation",
              href: "/it/api/docs",
              icon: "📄",
              crud: ["read"],
            },
            {
              name: "API Keys",
              href: "/it/api/keys",
              icon: "🔑",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "API Monitoring",
              href: "/it/api/monitoring",
              icon: "👁️",
              crud: ["read"],
            },
            {
              name: "API Reports",
              href: "/it/api/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Security & Logs",
          icon: "🔒",
          type: "submenu",
          items: [
            {
              name: "Security Settings",
              href: "/it/security/settings",
              icon: "⚙️",
              crud: ["read", "update"],
            },
            {
              name: "Access Logs",
              href: "/it/security/logs",
              icon: "📝",
              crud: ["read"],
            },
            {
              name: "Security Reports",
              href: "/it/security/reports",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Audit Trail",
              href: "/it/security/audit",
              icon: "👁️",
              crud: ["read"],
            },
          ],
        },
      ],
    },
    {
      name: "Counseling & Welfare",
      icon: "❤️",
      type: "dropdown",
      items: [
        {
          name: "Counseling Dashboard",
          href: "/counseling/dashboard",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Student Management",
          icon: "🎓",
          type: "submenu",
          items: [
            {
              name: "Student Profiles",
              href: "/counseling/students/profiles",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Student Assignments",
              href: "/counseling/students/assignments",
              icon: "📍",
              crud: ["create", "read", "update"],
            },
            {
              name: "Student Reports",
              href: "/counseling/students/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Session Management",
          icon: "📅",
          type: "submenu",
          items: [
            {
              name: "Session Scheduling",
              href: "/counseling/sessions/schedule",
              icon: "🕒",
              crud: ["create", "read", "update"],
            },
            {
              name: "Session History",
              href: "/counseling/sessions/history",
              icon: "📋",
              crud: ["read"],
            },
            {
              name: "Session Notes",
              href: "/counseling/sessions/notes",
              icon: "📝",
              crud: ["create", "read", "update"],
            },
            {
              name: "Session Reports",
              href: "/counseling/sessions/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Progress Tracking",
          icon: "📈",
          type: "submenu",
          items: [
            {
              name: "Progress Monitoring",
              href: "/counseling/progress/monitoring",
              icon: "👁️",
              crud: ["read"],
            },
            {
              name: "Progress Analytics",
              href: "/counseling/progress/analytics",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Progress Reports",
              href: "/counseling/progress/reports",
              icon: "📑",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Behavior Monitoring",
          icon: "👀",
          type: "submenu",
          items: [
            {
              name: "Behavior Tracking",
              href: "/counseling/behavior/tracking",
              icon: "📝",
              crud: ["create", "read", "update"],
            },
            {
              name: "Incident Reports",
              href: "/counseling/behavior/incidents",
              icon: "⚠️",
              crud: ["create", "read", "update"],
            },
            {
              name: "Behavior Analytics",
              href: "/counseling/behavior/analytics",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Behavior Reports",
              href: "/counseling/behavior/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Reports & Analytics",
          href: "/counseling/reports",
          icon: "📊",
          crud: ["read"],
        },
        {
          name: "Emergency Management",
          icon: "🚨",
          type: "submenu",
          items: [
            {
              name: "Emergency Cases",
              href: "/counseling/emergency/cases",
              icon: "📋",
              crud: ["create", "read", "update"],
            },
            {
              name: "Emergency Protocols",
              href: "/counseling/emergency/protocols",
              icon: "📜",
              crud: ["read", "update"],
            },
            {
              name: "Emergency Reports",
              href: "/counseling/emergency/reports",
              icon: "📊",
              crud: ["read"],
            },
          ],
        },
        {
          name: "Wellness Programs",
          icon: "🌱",
          type: "submenu",
          items: [
            {
              name: "Program Management",
              href: "/counseling/wellness/programs",
              icon: "📋",
              crud: ["create", "read", "update", "delete"],
            },
            {
              name: "Student Enrollment",
              href: "/counseling/wellness/enrollment",
              icon: "📝",
              crud: ["create", "read", "update"],
            },
            {
              name: "Program Analytics",
              href: "/counseling/wellness/analytics",
              icon: "📊",
              crud: ["read"],
            },
            {
              name: "Wellness Reports",
              href: "/counseling/wellness/reports",
              icon: "📈",
              crud: ["read"],
            },
          ],
        },
      ],
    },
  ];

  // Recursive component for nested menus
  const NavigationItem = ({ item, level = 0 }) => {
    const hasSubmenu = item.type === "submenu";
    const isSubmenuOpen = openSubmenus[item.name];

    if (hasSubmenu) {
      return (
        <li>
          <button
            onClick={() => toggleSubmenu(item.name)}
            className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700 ${
              isSubmenuOpen ? "bg-gray-700 text-blue-400" : "text-gray-300"
            } ${level > 0 ? `ml-${level * 4}` : ""}`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isSubmenuOpen ? "rotate-180" : ""
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

          {isSubmenuOpen && (
            <ul className="mt-1 ml-6 space-y-1 border-l border-gray-600 pl-2">
              {item.items.map((subItem) => (
                <NavigationItem
                  key={subItem.name}
                  item={subItem}
                  level={level + 1}
                />
              ))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li>
        <NavLink
          to={item.href}
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-blue-500/20 text-blue-400 border-l-4 border-blue-400"
                : "text-gray-400 hover:text-white hover:bg-gray-700/50"
            } ${level > 0 ? `ml-${level * 4}` : ""}`
          }
        >
          <span className="text-sm">{item.icon}</span>
          <div className="flex-1 flex items-center justify-between">
            <span className="text-sm">{item.name}</span>
            {item.crud && (
              <div className="flex space-x-1">
                {item.crud.includes("create") && (
                  <span className="text-xs text-green-400">C</span>
                )}
                {item.crud.includes("read") && (
                  <span className="text-xs text-blue-400">R</span>
                )}
                {item.crud.includes("update") && (
                  <span className="text-xs text-yellow-400">U</span>
                )}
                {item.crud.includes("delete") && (
                  <span className="text-xs text-red-400">D</span>
                )}
              </div>
            )}
          </div>
        </NavLink>
      </li>
    );
  };

  const filteredNavigation = navigation.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.items.some(
        (subItem) =>
          subItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (subItem.items &&
            subItem.items.some((subSubItem) =>
              subSubItem.name.toLowerCase().includes(searchTerm.toLowerCase())
            ))
      )
  );

  return (
    <div className="w-100 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen flex flex-col shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">EV</span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              EduVerse
            </h1>
            <p className="text-gray-400 text-xs">
              University Management System
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search modules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
          />
          <div className="absolute right-3 top-2.5">
            <span className="text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-1">
          {filteredNavigation.map((item) => (
            <div key={item.name} className="group">
              <button
                onClick={() => toggleDropdown(item.name)}
                className={`flex items-center justify-between w-full px-3 py-3 rounded-xl transition-all duration-200 hover:bg-gray-700 hover:shadow-lg ${
                  openDropdown === item.name
                    ? "bg-blue-500/20 text-blue-400 border-l-4 border-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === item.name
                      ? "rotate-180 text-blue-400"
                      : "text-gray-400"
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
                <div className="mt-1 ml-4 space-y-1 bg-gray-800/50 rounded-lg p-2 border-l border-gray-700">
                  {item.items.map((subItem) => (
                    <NavigationItem key={subItem.name} item={subItem} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">
            Quick Access
          </h3>
          <div className="space-y-2">
            <NavLink
              to="/dashboard"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
            >
              <span>📊</span>
              <span>Main Dashboard</span>
            </NavLink>
            <NavLink
              to="/notifications"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
            >
              <span>🔔</span>
              <span>Notifications</span>
            </NavLink>
            <NavLink
              to="/settings"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
            >
              <span>⚙️</span>
              <span>Settings</span>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-700 bg-gray-800/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">AD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              Admin User
            </p>
            <p className="text-xs text-gray-400 truncate">
              admin@eduvarsity.com
            </p>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors duration-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
