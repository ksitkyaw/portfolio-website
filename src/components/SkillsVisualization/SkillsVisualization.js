import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SkillsVisualization.scss";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90, icon: "⚛️", experience: "3+ years" },
      { name: "JavaScript", level: 95, icon: "🟨", experience: "4+ years" },
      { name: "HTML/CSS", level: 98, icon: "🌐", experience: "5+ years" },
      { name: "Sass/SCSS", level: 85, icon: "💎", experience: "3+ years" },
      { name: "Redux", level: 80, icon: "🔄", experience: "2+ years" },
      { name: "Next.js", level: 75, icon: "▲", experience: "2+ years" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 85, icon: "🐍", experience: "3+ years" },
      { name: "Django", level: 80, icon: "🎸", experience: "2+ years" },
      { name: "Firebase", level: 75, icon: "🔥", experience: "2+ years" },
      { name: "Node.js", level: 70, icon: "🟢", experience: "1+ years" }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 90, icon: "📝", experience: "4+ years" },
      { name: "Figma", level: 75, icon: "🎨", experience: "2+ years" },
      { name: "Webpack", level: 70, icon: "📦", experience: "2+ years" },
      { name: "Testing", level: 65, icon: "🧪", experience: "1+ years" }
    ]
  }
];

const SkillBar = ({ skill, index, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="skill-header">
        <div className="skill-info">
          <span className="skill-icon">{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
          <span className="skill-experience">{skill.experience}</span>
        </div>
        <span className="skill-percentage">{animatedLevel}%</span>
      </div>
      <div className="skill-bar-container">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${animatedLevel}%` : 0 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
        />
        <div className="skill-bar-glow" />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, skills, isActive, onClick }) => {
  return (
    <motion.div
      className={`skill-category ${isActive ? 'active' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3>{category}</h3>
      <div className="category-indicator">
        <span className="skill-count">{skills.length} skills</span>
        <motion.div
          className="expand-icon"
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function SkillsVisualization() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.skills-visualization');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? -1 : index);
  };

  return (
    <div className="skills-visualization">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        Technologies I Use
      </motion.h2>
      
      <div className="skills-container">
        {skillsData.map((categoryData, categoryIndex) => (
          <div key={categoryData.category} className="category-section">
            <SkillCategory
              category={categoryData.category}
              skills={categoryData.skills}
              isActive={activeCategory === categoryIndex}
              onClick={() => handleCategoryClick(categoryIndex)}
            />
            
            <AnimatePresence>
              {activeCategory === categoryIndex && (
                <motion.div
                  className="skills-list"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {categoryData.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                      isVisible={activeCategory === categoryIndex && isVisible}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <motion.div
        className="skills-summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="summary-stats">
          <div className="stat-item">
            <span className="stat-number">
              {skillsData.reduce((total, category) => total + category.skills.length, 0)}
            </span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {Math.round(
                skillsData.reduce((total, category) => 
                  total + category.skills.reduce((sum, skill) => sum + skill.level, 0), 0
                ) / skillsData.reduce((total, category) => total + category.skills.length, 0)
              )}%
            </span>
            <span className="stat-label">Avg Proficiency</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}