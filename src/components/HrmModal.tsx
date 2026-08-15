import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Users,
  CalendarCheck,
  FileText,
  ShieldAlert,
  Layers,
  LayoutDashboard,
  CreditCard,
  UserCheck,
  Lock,
  ArrowRight,
  Database,
  Server,
  Code2,
  CheckCircle2,
  Building,
  Clock,
  Check,
  FileSpreadsheet
} from 'lucide-react';
import { Project } from '../types';

interface HrmModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function HrmModal({ project, isOpen, onClose }: HrmModalProps) {
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'employees' | 'attendance' | 'leaves' | 'documents' | 'profile'>('dashboard');
  const [activeRole, setActiveRole] = useState<'HR' | 'Manager' | 'Employee'>('HR');

  // Dummy data for interactive UI preview (No personal data)
  const dummyEmployees = [
    { id: 'EMP-1001', name: 'Aarav Sharma', role: 'Frontend Engineer', dept: 'Engineering', status: 'Present', checkIn: '09:15 AM' },
    { id: 'EMP-1002', name: 'Priya Verma', role: 'UI/UX Designer', dept: 'Design', status: 'Present', checkIn: '09:30 AM' },
    { id: 'EMP-1003', name: 'Rohan Gupta', role: 'Backend Developer', dept: 'Engineering', status: 'On Leave', checkIn: '-' },
    { id: 'EMP-1004', name: 'Ananya Singh', role: 'HR Executive', dept: 'Human Resources', status: 'Present', checkIn: '09:00 AM' },
  ];

  const dummyLeaves = [
    { id: 'LV-201', emp: 'Rohan Gupta', type: 'Casual Leave', days: '2 Days', dates: '14 Aug - 15 Aug', status: 'Approved' },
    { id: 'LV-202', emp: 'Priya Verma', type: 'Sick Leave', days: '1 Day', dates: '20 Aug', status: 'Pending Approval' },
  ];

  return (
    <AnimatePresence>
      {isOpen && project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl rounded-3xl glass-panel bg-[#0B0F19] dark:bg-[#0B0F19] light:bg-slate-900 text-white border border-white/10 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80 sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400">Featured Full-Stack Web Application • ENIGOAL Internal System</p>
              </div>
            </div>

            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Modal Body Scrollable */}
          <div className="p-6 overflow-y-auto space-y-8 flex-1">
            {/* Project Notice & Quick Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
                <Users className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-emerald-300">Centralized HR Portal</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Manages employee directory, digital ID cards, document repository, and onboardings.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-start gap-3">
                <CalendarCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-teal-300">Attendance & Leave Tracking</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Logs check-in/out timestamps, attendance history, leave request approvals, and quotas.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-amber-300">Role-Based Access (RBAC)</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Customized permissions for HR Admins, Department Managers, and Employees.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Browser Mockup Showcase */}
            <div className="rounded-2xl border border-white/10 bg-slate-950 overflow-hidden shadow-2xl">
              {/* Mockup Toolbar */}
              <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/10 gap-3">
                {/* Screen Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                  <motion.button
                    onClick={() => setActiveScreen('dashboard')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeScreen === 'dashboard'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Dashboard</span>
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveScreen('employees')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeScreen === 'employees'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Employees</span>
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveScreen('attendance')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeScreen === 'attendance'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Attendance</span>
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveScreen('leaves')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeScreen === 'leaves'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Leaves</span>
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveScreen('documents')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeScreen === 'documents'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Documents</span>
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveScreen('profile')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeScreen === 'profile'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>ID Card Profile</span>
                  </motion.button>
                </div>

                {/* Role Switcher */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">Role View:</span>
                  <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-white/10">
                    {(['HR', 'Manager', 'Employee'] as const).map(role => (
                      <motion.button
                        key={role}
                        onClick={() => setActiveRole(role)}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-colors ${
                          activeRole === role
                            ? 'bg-teal-600 text-white shadow'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {role}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mockup Screen Display */}
              <div className="p-6 bg-[#080B12] min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                {activeScreen === 'dashboard' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <div>
                        <h4 className="text-base font-bold text-white">HR Analytics Overview</h4>
                        <p className="text-xs text-slate-400">Showing active stats for role: <span className="text-teal-400 font-bold">{activeRole}</span></p>
                      </div>
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                        Live System Operational
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 bg-slate-900 rounded-xl border border-white/5">
                        <p className="text-[10px] text-slate-400">Total Headcount</p>
                        <p className="text-xl font-bold text-white mt-1">42</p>
                        <p className="text-[10px] text-emerald-400 mt-1">↑ +3 this month</p>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-white/5">
                        <p className="text-[10px] text-slate-400">Today Present</p>
                        <p className="text-xl font-bold text-emerald-400 mt-1">38</p>
                        <p className="text-[10px] text-slate-400 mt-1">90.4% Attendance</p>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-white/5">
                        <p className="text-[10px] text-slate-400">On Leave Today</p>
                        <p className="text-xl font-bold text-teal-400 mt-1">3</p>
                        <p className="text-[10px] text-slate-400 mt-1">2 Pending Approval</p>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-white/5">
                        <p className="text-[10px] text-slate-400">Documents Vault</p>
                        <p className="text-xl font-bold text-emerald-400 mt-1">156</p>
                        <p className="text-[10px] text-slate-400 mt-1">Secure & Encrypted</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen === 'employees' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <h4 className="text-sm font-bold text-white">Employee Directory</h4>
                      <span className="text-xs text-emerald-400 font-mono">Showing {dummyEmployees.length} records</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-white/10 text-slate-400 font-mono">
                            <th className="py-2 px-3">Emp ID</th>
                            <th className="py-2 px-3">Name</th>
                            <th className="py-2 px-3">Role</th>
                            <th className="py-2 px-3">Department</th>
                            <th className="py-2 px-3">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-slate-300">
                          {dummyEmployees.map(emp => (
                            <tr key={emp.id} className="hover:bg-slate-900/50">
                              <td className="py-2 px-3 font-mono text-emerald-400">{emp.id}</td>
                              <td className="py-2 px-3 font-semibold text-white">{emp.name}</td>
                              <td className="py-2 px-3">{emp.role}</td>
                              <td className="py-2 px-3">{emp.dept}</td>
                              <td className="py-2 px-3">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  emp.status === 'Present' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-teal-500/20 text-teal-400'
                                }`}>
                                  {emp.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeScreen === 'attendance' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <h4 className="text-sm font-bold text-white">Attendance Logs & Timestamps</h4>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-xs bg-emerald-600/30 text-emerald-300 px-3 py-1 rounded border border-emerald-500/30"
                      >
                        Export Monthly Report
                      </motion.button>
                    </div>
                    <div className="space-y-2">
                      {dummyEmployees.map(emp => (
                        <div key={emp.id} className="p-3 bg-slate-900 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-400">
                              {emp.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-bold text-white">{emp.name}</p>
                              <p className="text-[10px] text-slate-400">{emp.role} • {emp.id}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-mono text-emerald-400 font-bold">{emp.checkIn}</span>
                            <p className="text-[10px] text-slate-500">Recorded via Web Portal</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeScreen === 'leaves' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <h4 className="text-sm font-bold text-white">Leave Requests & Workflow</h4>
                      <span className="text-xs bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded">Action required: 1</span>
                    </div>
                    <div className="space-y-2">
                      {dummyLeaves.map(lv => (
                        <div key={lv.id} className="p-3 bg-slate-900 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white">{lv.emp}</span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">{lv.type}</span>
                            </div>
                            <p className="text-[10px] text-slate-400 mt-1">Duration: {lv.dates} ({lv.days})</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                              lv.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'
                            }`}>
                              {lv.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeScreen === 'documents' && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white pb-2 border-b border-white/10">Document Vault & Verification</h4>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-900 rounded-xl border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                          <span>Employment Contracts</span>
                        </div>
                        <span className="text-[10px] text-slate-400">PDF • Verified</span>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-emerald-400" />
                          <span>Tax Documents & Form 16</span>
                        </div>
                        <span className="text-[10px] text-slate-400">PDF • Verified</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen === 'profile' && (
                  <div className="flex items-center justify-center p-4">
                    <div className="w-72 rounded-2xl bg-gradient-to-b from-emerald-900/60 to-slate-900 p-5 border border-emerald-500/30 text-center shadow-xl">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center font-bold text-xl text-emerald-300">
                        NF
                      </div>
                      <h5 className="font-bold text-white mt-3">ENIGOAL Employee ID</h5>
                      <p className="text-xs text-emerald-400 font-mono mt-0.5">ID: ENI-2025-DEV</p>
                      <div className="mt-3 text-[11px] text-slate-300 space-y-1">
                        <p>Department: Web Development</p>
                        <p>Location: Noida Office</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 text-[9px] text-slate-500 uppercase font-mono">
                        Official Digital Credential
                      </div>
                    </div>
                  </div>
                )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                System Architecture Flow
              </h4>

              <div className="p-6 rounded-2xl bg-slate-950 border border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center text-center">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <Code2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <p className="text-xs font-bold text-white">Frontend UI</p>
                    <p className="text-[11px] text-slate-400 mt-1">React + TypeScript</p>
                    <p className="text-[10px] text-emerald-400 mt-1">Tailwind CSS</p>
                  </div>

                  <div className="flex items-center justify-center text-slate-500">
                    <ArrowRight className="w-5 h-5 hidden sm:block text-emerald-400 animate-pulse" />
                    <span className="sm:hidden text-xs text-emerald-400">↓ HTTP Requests</span>
                  </div>

                  <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30">
                    <Server className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                    <p className="text-xs font-bold text-white">REST API Server</p>
                    <p className="text-[11px] text-slate-400 mt-1">Node.js + Express</p>
                    <p className="text-[10px] text-teal-400 mt-1">Auth & JWT Middleware</p>
                  </div>

                  <div className="flex items-center justify-center text-slate-500">
                    <ArrowRight className="w-5 h-5 hidden sm:block text-teal-400 animate-pulse" />
                    <span className="sm:hidden text-xs text-teal-400">↓ Mongoose Queries</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white">MongoDB Database & Schema Validation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3">
                Technologies Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 text-emerald-300 border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-900 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Role: Full-Stack Web Developer</span>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors"
            >
              Close Details
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
