const fetchFile = async (filename) => {
    const res = await fetch(filename)
    const data = await res.json()
    return data
}

const renderExperienceSection = async () => {
    const experience_container = document.getElementById("experience_container")
    const experience_header = document.createElement("h2")
    experience_header.textContent = "Experience"
    experience_container.appendChild(experience_header)
    const EXPERIENCE_JSON_PATH = "./assets/experience/experience.json"
    const experiences = await fetchFile(EXPERIENCE_JSON_PATH)

    for(let experience of experiences) {
        const experience_element = renderExperience(experience)
        experience_container.appendChild(experience_element)
    }
}

const renderExperience = (experience) => {
    const section = document.createElement('section')
    section.classList.add("experience_section")

    const time_period_element = document.createElement("p")
    time_period_element.textContent = experience.start_date + " - " + experience.end_date

    const experience_title_element = document.createElement("p")
    experience_title_element.classList.add("experience_title")
    experience_title_element.textContent = experience.title + " - " + experience.company

    const summary_element = document.createElement("p")
    summary_element.textContent = experience.summary

    section.append(time_period_element)
    section.append(experience_title_element)
    section.append(summary_element)

    return section

}

renderExperienceSection()