import React, { useState } from 'react';
import './App.css';
import {
  GraduationCap,
  Users,
  BookOpen,
  FileCheck,
  LayoutDashboard
} from 'lucide-react';
import SkillManager from './components/SkillManager';
import StudentManager from './components/StudentManager';
import RequirementManager from './components/RequirementManager';
import EligibilityChecker from './components/EligibilityChecker';

function App() {
  const [activeTab, setActiveTab] = useState('skills');

  const navItems = [
    { id: 'skills', label: 'Skills', icon: BookOpen },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'requirements', label: 'Requirements', icon: LayoutDashboard },
    { id: 'checker', label: 'Eligibility', icon: FileCheck },
  ];

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo-section">
          <GraduationCap className="logo-icon" />
          <h1 className="logo-text">PickOut</h1>
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              >
                <Icon className="nav-icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {activeTab === 'skills' && <SkillManager />}
        {activeTab === 'students' && <StudentManager />}
        {activeTab === 'requirements' && <RequirementManager />}
        {activeTab === 'checker' && <EligibilityChecker />}
      </main>
    </div>
  );
}

export default App;
