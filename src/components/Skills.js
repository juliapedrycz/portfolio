import React from 'react'
import "../styles/Skills.css"
import SkillsCard from "./SkillsCard";

function Skills() {

  const list_languages = ["Polish (Native)","English (B2/C1)"]
  const list_programming_languages = ["Java","Python","SQL","C/C++","JavaScript","Kotlin"]
  const list_tech_skills = ["Object oriented programming","Software development", "Algorithms and data structures"]
  const list_frameworks = ["Spring","React"]
  const list_soft_skills = ["Problem solving", "Adaptability", "Teamworking","Critical thinking","Creativity"]
  const list_others = ["Google Cloud", "Android Studio","WordPress"]
  const list_version_control = ["Git"]






  return (
    <div className="skills-container">
      <div className="grid-container">

        <SkillsCard class="programming_languages"
          title = "PROGRAMMING LANGUAGES"
                    list = {list_programming_languages}

        />
        <SkillsCard class="tech_skills"
          title = "TECHNICAL SKILLS"
                    list = {list_tech_skills}

        />
        <SkillsCard class="soft_skills"
                    title = "SOFT SKILLS"
                    list = {list_soft_skills}

        />
        <SkillsCard class="frameworks"
                    title = "FRAMEWORKS"
                    list = {list_frameworks}

        />
        <SkillsCard class="languages"
                    title = "LANGUAGES"
                    list = {list_languages}
        />
        <SkillsCard class="others"
                    title = "SOFTWARES"
                    list = {list_others}

        />
        <SkillsCard class="version_control"
                    title = "VERSION CONTROL SYSTEM"
                    list = {list_version_control}

        />
      </div>
    </div>
  )
}
export default Skills;
