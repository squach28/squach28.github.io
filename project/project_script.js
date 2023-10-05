const project = new URLSearchParams(window.location.search).get('project')

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
        projectLink.href = projectData.projectLink

        const githubLink = document.getElementById('github_link')
        githubLink.href = projectData.githubLink

        const projectBulletsList = document.getElementById('project_bullets_list')
        for(let bullet of projectData.bullets) {
            const bulletListItem = document.createElement('li')
            bulletListItem.textContent = bullet
            projectBulletsList.appendChild(bulletListItem)
        }
    })

