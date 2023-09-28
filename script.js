const container = document.getElementById('container')
var isPlaying = true
const playButton = document.getElementById('play_button')
const player = document.getElementById('player')



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
    timer = setTimeout(() => {
        modal.style.opacity = 0
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
        ]
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
        ]
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
        ]
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
        ]
    }
]

const experienceEllipsis = document.querySelectorAll('img.experience_ellipsis')
for(let experience of experienceEllipsis) {
    const experienceInfo = experiences.find((exp) => exp.role === experience.dataset.role)
    const experienceDiv = document.createElement('div')

    const infoContainer = document.createElement('div')

    const companyHeader = document.createElement('h1')
    companyHeader.textContent = experienceInfo.company

    const titleHeader = document.createElement('h2')
    titleHeader.textContent = experienceInfo.title
    titleHeader.classList.add('title_header')

    const timeWorked = document.createElement('p')
    timeWorked.textContent = `${experienceInfo.startDate} - ${experienceInfo.endDate}`
    timeWorked.classList.add('time_worked')

    const experienceList = document.createElement('ul')
    experienceList.classList.add('experience_bullets_container')
    for(let bullet of experienceInfo.bullets) {
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
    experience.addEventListener('click', () => {
        container.classList.add('blur')
        player.style.display = 'none'
        document.body.appendChild(experienceDiv)
    })
}

const projects = [
    {
        name: 'Wordie',
        backgroundImageUrl: './assets/backgrounds/wordie-background.svg'
    },
    {
        name: 'MotivateMe',
        backgroundImageUrl: './assets/backgrounds/motivateme-background.svg'
    }
]
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
playerPlayPauseIcon.addEventListener('click', () => {
    togglePlayPauseButton()
})

player.addEventListener('click', () => {
    console.log('player clicked')
    const detailedPage = document.getElementById('detailed_page')
    document.body.style.position = 'relative'
    container.style.margin = '0'
    document.body.style.overflow = 'hidden'
    detailedPage.style.display = 'block'
    player.style.display = 'none'
    detailedPage.style.visiblity = 'visible'
})

const detailedPage = document.getElementById('detailed_page')
detailedPage.addEventListener('click', () => {
    document.body.style.position = 'static'
    container.style.margin = '1.5em'
    document.body.style.overflow = 'auto'
    player.style.display = 'flex'
    detailedPage.style.display = 'none'
})