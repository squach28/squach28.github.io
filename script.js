const container = document.getElementById('container')
var isPlaying = true
const playButton = document.getElementById('play_button')
const player = document.getElementById('player')
const playerHeader = document.getElementById('player_header')
const playerSubheader = document.getElementById('player_subheader')
var selectedTopic = `Sean Quach's Portfolio`
var selectedSubTopic = ''



const togglePlayPauseButton = () => {
    const iconImg = document.getElementById('play_pause_icon')
    const playerPlayPauseIcon = document.getElementById('player_play_pause_icon')
    isPlaying = !isPlaying
    if(isPlaying) {
        iconImg.src = './assets/icons/pause-solid.svg'
        playerPlayPauseIcon.src = './assets/icons/pause-solid-white.svg'
    } else {
        iconImg.src = './assets/icons/play-solid.svg'
        playerPlayPauseIcon.src = './assets/icons/play-solid-white.svg'
    } 

}

playButton.addEventListener('click' ,() => {
    togglePlayPauseButton()
})

const shareIcon = document.getElementById('share_icon')
let timer;
shareIcon.addEventListener('click', () => {
    if(timer) {
        clearTimeout(timer)
    }
    navigator.clipboard.writeText(document.URL)
    const modal = document.getElementById('modal')
    modal.classList.add('modal_transition')
    modal.style.opacity = 1
    modal.style.zIndex = 100;
    timer = setTimeout(() => {
        modal.style.opacity = 0
        modal.style.zIndex = 3
    }, 2500)

})

const ellipsisIcon = document.getElementById('ellipsis_icon')

ellipsisIcon.addEventListener('click', () => {
    const moreOverlayContainer = document.getElementById('more_overlay_container')
    container.classList.add('blur')
    moreOverlayContainer.style.display = 'flex'
    player.style.display = 'none'

})

const closeButton = document.getElementById('close_more_overlay_button')

closeButton.addEventListener('click', () => {
    const moreOverlayContainer = document.getElementById('more_overlay_container')
    container.classList.remove('blur')
    moreOverlayContainer.style.display = 'none'
    player.style.display = 'flex'
})

const experiences = [
    {
        role: 'tataAutomation',
        company: 'Tata Consulancy Services',
        title: 'Test Automation Lead',   
        startDate: 'Jan 2023',
        endDate: 'Present',
        bullets: [
            'Work as an Test Automation Lead for Kaiser Permanente Membership Connect, which manages systems of records and ensures that data is accurate (NodeJS & WebDriverIO)',
            'Develop automation scripts and increase the percentage of test cases automated from 12% to 43%',
            'Analyze manual test cases and determine automation feasibility based on constraints  ',
            'Run regression tests to improve efficiency and reduce resources required for manual testing'
        ],
        iconUrl: './assets/icons/screwdriver-wrench-solid.svg',
        iconAlt: 'screwdriver icon'
    },
    {
        role: 'tataSoftwareEngineer',
        company: 'Tata Consultancy Services',
        title: 'Software Engineer',
        startDate: 'June 2021',
        endDate: 'Jan 2023',
        bullets: [
            'Improved the UI of the Kaiser Permanente Member Services Chatbot, designed to guide KP members to the proper resources (React & Bot Framework Web Chat)',
            'Collaborated with UX team to discuss and implemented features, such as file attachment, live chat with an agent, and error handling to enhance user experience',
            'Accelerated development through CI/CD with the Jenkins pipeline to deploy changes into the development environment for testing'
        ],
        iconUrl: './assets/icons/code-solid.svg',
        iconAlt: 'web html icon'
    },
    {
        role: 'infiniteOptionsMobileDev',
        company: 'Infinite Options LLC',
        title: 'Software Development Intern',
        startDate: 'May 2020',
        endDate: 'Aug 2020',
        bullets: [
            'Developed a cross platform mobile app for Prep to Your Door, a food delivery service (C# & Xamarin Forms)',
            'Implemented checkout process with Stripe and social login with Facebook and Google',
            'Went through the process of publishing an alpha release onto the Google Play Console for testing'
        ],
        iconUrl: './assets/icons/mobile-solid.svg',
        iconAlt: 'mobile phone icon'
    },
    {
        role: 'advantestTechnicalSpecialist',
        company: 'Advantest America Inc.',
        title: 'Technical Specialist',
        startDate: 'June 2019',
        endDate: 'Sept 2019',
        bullets: [
            'Rotated across various positions within the R&D team, gaining skills in scripting and quality assurance',
            'Performed diagnostics on Advantest SSD testers, such as the MTP3000HVM/2 and MPT3000HES/2',
            'Automated formatted diagnostic log results utilizing MySQL, Silk Test Workbench, and Visual Basic .NET'
        ],
        iconUrl: './assets/icons/microchip-solid.svg',
        iconAlt: 'microchip icon'
    }
]

const experienceList = document.getElementById('experience_list')
for(let experience of experiences) {
    const expListItem = document.createElement('li')

    const expCard = document.createElement('div')
    expCard.classList.add('experience_card')

    const expInfo = document.createElement('div')
    expInfo.classList.add('experience_info')
    expCard.appendChild(expInfo)

    const expIcon = document.createElement('img')
    expIcon.classList.add('icon', 'experience_icon')
    expIcon.src = experience.iconUrl
    expIcon.alt = experience.iconAlt

    const expDetails = document.createElement('div')
    const expHeader = document.createElement('p')
    expHeader.classList.add('experience_card_header')
    expHeader.textContent = experience.company 
    const expSubHeader = document.createElement('p')
    expSubHeader.classList.add('experience_card_subheader')
    expSubHeader.textContent = experience.title 

    expDetails.appendChild(expHeader)
    expDetails.appendChild(expSubHeader)

    expInfo.appendChild(expIcon)
    expInfo.appendChild(expDetails)

    const ellipsisIcon = document.createElement('img')
    ellipsisIcon.classList.add('icon', 'experience_ellipsis')
    ellipsisIcon.src = './assets/icons/ellipsis-vertical-solid.svg'
    ellipsisIcon.alt = 'ellipsis icon'

    expCard.appendChild(ellipsisIcon)
    expListItem.appendChild(expCard)

    ellipsisIcon.addEventListener('click', (e) => {
        e.stopPropagation()
        const experienceDiv = document.createElement('div')

        const infoContainer = document.createElement('div')
    
        const companyHeader = document.createElement('h1')
        companyHeader.textContent = experience.company
    
        const titleHeader = document.createElement('h2')
        titleHeader.textContent = experience.title
        titleHeader.classList.add('title_header')
    
        const timeWorked = document.createElement('p')
        timeWorked.textContent = `${experience.startDate} - ${experience.endDate}`
        timeWorked.classList.add('time_worked')
    
        const experienceList = document.createElement('ul')
        experienceList.classList.add('experience_bullets_container')
        for(let bullet of experience.bullets) {
            const expBullet = document.createElement('li')
            expBullet.textContent = bullet
            experienceList.appendChild(expBullet)
        }
    
        const closeButton = document.createElement('button')
        closeButton.textContent = 'Close'
        closeButton.classList.add('close_button')
        closeButton.addEventListener('click', () => {
            container.classList.remove('blur')
            player.style.display = 'flex'
            document.body.removeChild(experienceDiv)
        })
    
        experienceDiv.classList.add('experience_overlay_container')
        infoContainer.appendChild(companyHeader)
        infoContainer.appendChild(titleHeader)
        infoContainer.appendChild(timeWorked)
        infoContainer.appendChild(experienceList)
        experienceDiv.appendChild(infoContainer)
        experienceDiv.appendChild(closeButton)
        container.classList.add('blur')
        player.style.display = 'none'
        document.body.appendChild(experienceDiv)

    })

    expCard.addEventListener('click', () => {
        selectedTopic = experience.company 
        selectedSubTopic = experience.title 
        playerHeader.textContent = selectedTopic 
        playerSubheader.textContent = selectedSubTopic
        const divElements = document.querySelectorAll('div')
        for(let element of divElements) {
            element.classList.remove('selected_text')
        }
        expCard.classList.add('selected_text')

        const currentlyPlayingIcon = document.getElementById('currently_playing_icon')
        currentlyPlayingIcon.src = experience.iconUrl
    })

    experienceList.appendChild(expListItem)
}

fetch('./projects.json')
    .then(res => res.json())
    .then(projects => {
        const projectsList = document.getElementById('projects_list')
        for(let project of projects) {
            const projectListItem = document.createElement('li')
            const projectBox = document.createElement('div')
            projectBox.classList.add('project_box')
            projectBox.style.backgroundImage = `url(${project.backgroundImageUrl})`
        
            const projectDescription = document.createElement('div')
            projectDescription.classList.add('project_description')
        
            const projectName = document.createElement('p')
            projectName.textContent = project.name
        
            projectDescription.appendChild(projectName)
            projectBox.appendChild(projectDescription)
        
            projectListItem.appendChild(projectBox)
        
            projectsList.appendChild(projectListItem)
        }
    })


fetch('./skills.json')
    .then(res => res.json())
    .then(skills => {
        const skillsList = document.getElementById('skills_list')

        for(let skill of skills){
            const skillListItem = document.createElement('li')
            skillListItem.classList.add('skill_list_item') 
        
            const skillContainer = document.createElement('div')
            skillContainer.classList.add('skill_container')
        
            const skillIcon = document.createElement('img')
            skillIcon.classList.add('skill_icon')
            skillIcon.src = skill.iconUrl
            skillIcon.alt = skill.iconAlt
        
            const skillName = document.createElement('p')
            skillName.textContent = skill.name
        
            skillContainer.appendChild(skillIcon)
        
            skillListItem.appendChild(skillContainer)
            skillListItem.appendChild(skillName)
        
            skillsList.appendChild(skillListItem)
        }
    })





const progressBar = document.getElementById('progress_bar')
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY
    let docHeight = document.body.offsetHeight
    let winHeight = window.innerHeight 
    let scrollPercent = scrollTop / (docHeight - winHeight)
    let scrollPercentRounded = Math.round(scrollPercent * 100)
    progressBar.style.width = `${scrollPercentRounded}%`
})

const playerPlayPauseIcon = document.getElementById('player_play_pause_icon')
playerPlayPauseIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    togglePlayPauseButton()
})

const playerHeartIcon = document.getElementById('player_heart_icon')
playerHeartIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    playerHeartIcon.classList.add('player_heart_icon')
    setTimeout(() => {
        playerHeartIcon.classList.remove('player_heart_icon')
    }, 1000)
})

player.addEventListener('click', () => {
    const detailedPage = document.getElementById('detailed_page')
    detailedPage.style.visibility = 'visible'
    detailedPage.classList.remove('detailed_page_clicked')
    detailedPage.classList.add('player_clicked')
    player.style.opacity = 0
})

const detailedPage = document.getElementById('detailed_page')
detailedPage.addEventListener('click', () => {
    detailedPage.classList.remove('player_clicked')
    detailedPage.classList.add('detailed_page_clicked')
    detailedPage.visiblity = 'hidden'
    player.style.opacity = 1
})