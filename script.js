const fetchFile = async (filename) => {
    const res = await fetch(filename)
    const data = await res.json()
    return data
}

const renderExperience = (experience) => {
    const section = document.createElement('section')
    section.classList.add("section")

    const time_period_element = document.createElement("p")
    time_period_element.classList.add("time_period")
    time_period_element.textContent = experience.start_date + " - " + experience.end_date

    const experience_title_element = document.createElement("p")
    experience_title_element.classList.add("section_title")
    experience_title_element.textContent = experience.title + " - " + experience.company

    const summary_element = document.createElement("p")
    summary_element.classList.add("section_summary")
    summary_element.textContent = experience.summary

    const tools_list = document.createElement("div")
    tools_list.classList.add("tools_list")
    for(let tool of experience.tools) {
        const tool_list_element = document.createElement("p")
        tool_list_element.classList.add("tool_list_item")
        tool_list_element.textContent = tool
        tools_list.appendChild(tool_list_element)
    }

    section.append(time_period_element)
    section.append(experience_title_element)
    section.append(summary_element)
    section.append(tools_list)

    return section
}

const renderExperienceSection = async () => {
    const EXPERIENCE_JSON_PATH = "./assets/experience/experience.json"
    const experiences = await fetchFile(EXPERIENCE_JSON_PATH)
    const experience_container = document.getElementById("experience_container")
    const experience_header = document.createElement("h2")
    experience_header.textContent = "Experience"
    experience_container.appendChild(experience_header)

    for(let experience of experiences) {
        const experience_element = renderExperience(experience)
        experience_container.appendChild(experience_element)
    }
}

const renderProject = (project) => {
    const section = document.createElement("section")
    section.classList.add("section")

    const time_period_element = document.createElement("p")
    time_period_element.classList.add("time_period")
    time_period_element.textContent = project.start_date + " - " + project.end_date

    const project_name_element = document.createElement("p")
    project_name_element.classList.add("section_title")
    project_name_element.textContent = project.name

    const summary_element = document.createElement("p")
    summary_element.textContent = project.summary

    const tools_list = document.createElement("div")
    tools_list.classList.add("tools_list")
    for(let tool of project.tools) {
        const tool_list_element = document.createElement("p")
        tool_list_element.classList.add("tool_list_item")
        tool_list_element.textContent = tool
        tools_list.appendChild(tool_list_element)
    }

    section.appendChild(time_period_element)
    section.appendChild(project_name_element)
    section.appendChild(summary_element)
    section.append(tools_list)

    return section
}

const renderProjectSection = async () => {
    const PROJECTS_JSON_PATH = "./assets/projects/projects.json"
    const projects = await fetchFile(PROJECTS_JSON_PATH)
    const projects_container = document.getElementById("projects_container")
    const projects_header = document.createElement("h2")
    projects_header.textContent = "Projects"
    projects_container.appendChild(projects_header)
    
    for(let project of projects) {
        const project_element = renderProject(project)
        projects_container.appendChild(project_element)
    }
}


renderExperienceSection()
renderProjectSection()