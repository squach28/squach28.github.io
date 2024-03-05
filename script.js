const fetchFile = async (filename) => {
    try {
        const res = await fetch(filename, {
            mode: "no-cors"
        })
        const data = await res.json()
        return data
    } catch(e) {
        console.log(e)
    }

}

const onMobileNavClick = () => {
    const mobile_nav_bar = document.getElementById('mobile_nav_bar')
    mobile_nav_bar.style.animation = 'slide-from-right 0.5s 0s forwards'
}

const onMobileNavItemClick = () => {
    const mobile_nav_bar = document.getElementById('mobile_nav_bar')
    mobile_nav_bar.style.animation = 'slide-to-right 0.5s 0s forwards'
}

const mobile_nav_icon = document.getElementById('mobile_nav')
mobile_nav_icon.addEventListener('click', onMobileNavClick)
const mobile_nav_bar = document.getElementById('mobile_nav_bar')
for(const child of mobile_nav_bar.children) {
    child.addEventListener('click', onMobileNavItemClick)
}

const createExperienceElement = (experience) => {
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
        const experience_element = createExperienceElement(experience)
        experience_container.appendChild(experience_element)
    }
}

const createProjectElement = (project) => {
    const section = document.createElement("section")
    section.classList.add("section")

    const time_period_element = document.createElement("p")
    time_period_element.classList.add("time_period")
    time_period_element.textContent = project.start_date + " - " + project.end_date

    const project_name_element = document.createElement("p")
    project_name_element.classList.add("section_title")
    project_name_element.textContent = project.name

    const summary_element = document.createElement("p")
    summary_element.classList.add("section_summary")
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
        const project_element = createProjectElement(project)
        projects_container.appendChild(project_element)
    }
}

const renderSkillsCards = async () => {
    const SKILLS_JSON_PATH = "./assets/skills/skills.json"
    const skills = await fetchFile(SKILLS_JSON_PATH)
    const skills_list_container = document.getElementById("skills_cards_container")

    for(let skill of skills) {
        const skill_card = document.createElement("div")
        skill_card.classList.add("skill_card")

        const skill_img = document.createElement("img")
        skill_img.width = 35
        skill_img.height = 35
        skill_img.src = skill.img_url
        skill_img.alt = skill.name

        const skill_card_name = document.createElement("p")
        skill_card_name.classList.add("skill_name")
        skill_card_name.textContent = skill.name

        skill_card.appendChild(skill_img)
        skill_card.appendChild(skill_card_name)
        skills_list_container.appendChild(skill_card)
    }
}


renderExperienceSection()
renderProjectSection()
renderSkillsCards()