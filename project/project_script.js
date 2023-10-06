const project = new URLSearchParams(window.location.search).get('project')
const navBar = document.getElementById('nav_bar')
const navBarProjectName = document.getElementById('nav_bar_project_name')

document.title = `Sean Quach's Portfolio - ${project}`

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY
    let docHeight = document.body.offsetHeight
    let winHeight = window.innerHeight 
    let scrollPercent = scrollTop / (docHeight - winHeight)
    let scrollPercentRounded = Math.round(scrollPercent * 100)
    const opacity = scrollPercentRounded / 100
    if(opacity >= 0.75) {
        navBarProjectName.style.display = 'flex'
    } else {
        navBarProjectName.style.display = 'none'
    }
    navBar.style.backgroundColor = `rgba(0, 0, 0, ${opacity}`
})

fetch('../projects.json')
    .then(res => res.json())
    .then(data => {
        const projectData = data.find(proj => proj.name === project)
        
        const projectIcon = document.getElementById('project_icon')
        projectIcon.style.backgroundImage = `url('${projectData.backgroundImageUrl}')`

        const projectNameElements = document.querySelectorAll('.project_name')
        for(let projectNameElement of projectNameElements) {
            projectNameElement.textContent = projectData.name
        }

        const developerName = document.getElementById('developer_name')
        developerName.textContent = projectData.developer

        const dateDetails = document.getElementById('date_details')
        dateDetails.textContent = `${projectData.startDate} - ${projectData.endDate}`

        const projectLink = document.getElementById('project_link')
        if(projectData.projectLink === '') {
            projectLink.style.display = 'none'
        } else {
            projectLink.href = projectData.projectLink
        }

        const githubLink = document.getElementById('github_link')
        githubLink.href = projectData.githubLink

        const projectBulletsList = document.getElementById('project_bullets_list')
        for(let bullet of projectData.bullets) {
            const bulletListItem = document.createElement('li')
            bulletListItem.textContent = bullet
            projectBulletsList.appendChild(bulletListItem)
        }

        fetch('../skills.json')
            .then(res => res.json())
            .then(skills => {
                const skillsList = document.getElementById('tools_list')
                const tools = projectData.tools
                for(let tool of tools) {
                    const skill = skills.find((skill => skill.name === tool))
                    if(skill) {
                        const skillListItem = document.createElement('li')
                        skillListItem.classList.add('tool_list_item') 
                    
                        const skillContainer = document.createElement('div')
                        skillContainer.classList.add('tool_container')
                    
                        const skillIcon = document.createElement('img')
                        skillIcon.classList.add('tool_icon')
                        skillIcon.src = skill.iconUrl
                        skillIcon.alt = skill.iconAlt
                    
                        const skillName = document.createElement('p')
                        skillName.textContent = skill.name
                    
                        skillContainer.appendChild(skillIcon)
                    
                        skillListItem.appendChild(skillContainer)
                        skillListItem.appendChild(skillName)
                    
                        skillsList.appendChild(skillListItem)
                    }
                }
            })
    })

    

