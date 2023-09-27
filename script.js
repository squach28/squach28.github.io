const container = document.getElementById('container')

const playButton = document.getElementById('play_button')

playButton.addEventListener('click' ,() => {
    const iconImg = document.getElementById('play_pause_icon')
    const iconPathIntoArr = iconImg.src.split('/')
    const iconName = iconPathIntoArr[iconPathIntoArr.length - 1]
    if(iconName === 'play-solid.svg') {
        iconImg.src = './assets/icons/pause-solid.svg'
    } else {
        iconImg.src = './assets/icons/play-solid.svg'
    } 
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
})

const closeButton = document.getElementById('close_more_overlay_button')

closeButton.addEventListener('click', () => {
    const moreOverlayContainer = document.getElementById('more_overlay_container')
    container.classList.remove('blur')
    moreOverlayContainer.style.display = 'none'
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

    const date = document.createElement('p')
    date.textContent = `${experienceInfo.startDate} - ${experienceInfo.endDate}`

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
        document.body.removeChild(experienceDiv)
    })

    experienceDiv.classList.add('experience_overlay_container')
    infoContainer.appendChild(companyHeader)
    infoContainer.appendChild(titleHeader)
    infoContainer.appendChild(date)
    infoContainer.appendChild(experienceList)
    experienceDiv.appendChild(infoContainer)
    experienceDiv.appendChild(closeButton)
    experience.addEventListener('click', () => {
        container.classList.add('blur')
        document.body.appendChild(experienceDiv)
    })



}