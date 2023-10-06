const container = document.getElementById('container')
var scrollingAllowed = true
var isPlaying = true
const playButton = document.getElementById('play_button')
const player = document.getElementById('player')
const playerHeader = document.getElementById('player_header')
const playerSubheader = document.getElementById('player_subheader')
const detailedPage = document.getElementById('detailed_page')

var selectedTopic = `Sean Quach's Portfolio`
var selectedSubTopic = 'Macbook Air'
var selectedTopicImgUrl = '/assets/icons/player/music-solid.svg'
const topicHeaders = document.querySelectorAll('.topic_header')
const topicSubHeaders = document.querySelectorAll('.topic_sub_header')
const topicImgs = document.querySelectorAll('.topic_img')

for(let topicHeader of topicHeaders) {
    topicHeader.textContent = selectedTopic
}
for(let topicSubHeader of topicSubHeaders) {
    topicSubHeader.textContent = selectedSubTopic
}

for(let topicImg of topicImgs) {
    topicImg.src = selectedTopicImgUrl
}

const togglePlayPauseButton = () => {
    const iconImg = document.getElementById('play_pause_icon')
    const playerPlayPauseIcon = document.getElementById('player_play_pause_icon')
    isPlaying = !isPlaying
    if(isPlaying) {
        iconImg.src = '/assets/icons/player/pause-solid.svg'
        playerPlayPauseIcon.src = '/assets/icons/player/pause-solid-white.svg'
    } else {
        iconImg.src = '/assets/icons/player/play-solid.svg'
        playerPlayPauseIcon.src = '/assets/icons/player/play-solid-white.svg'
    } 

}

const toggleScrolling = () => {
    scrollingAllowed = !scrollingAllowed
    console.log('scrolling allowed', scrollingAllowed)

    if(scrollingAllowed) {
        document.body.style.overflow = 'scroll'
    } else {
        document.body.style.overflow = 'hidden'
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
    modal.style.zIndex = 5;
    timer = setTimeout(() => {
        modal.style.opacity = 0
        modal.style.zIndex = 0
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

fetch('./experiences.json')
    .then(res => res.json())
    .then(experiences => {
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
                selectedTopicImgUrl = experience.iconUrl
                for(let topicHeader of topicHeaders) {
                    topicHeader.textContent = selectedTopic
                }
                for(let topicSubHeader of topicSubHeaders) {
                    topicSubHeader.textContent = selectedSubTopic
                }
        
                for(let topicImg of topicImgs) {
                    topicImg.src = selectedTopicImgUrl
                }        
        
                const divElements = document.querySelectorAll('div')
                for(let element of divElements) {
                    element.classList.remove('selected_text')
                }
                expCard.classList.add('selected_text')
            })
        
            experienceList.appendChild(expListItem)
        }
    })



fetch('./projects.json')
    .then(res => res.json())
    .then(projects => {
        const projectsList = document.getElementById('projects_list')
        for(let project of projects) {
            const projectListItem = document.createElement('li')
            
            const projectLink = document.createElement('a')
            projectLink.href = `./project/project.html?project=${project.name}`

            const projectBox = document.createElement('div')
            projectBox.classList.add('project_box')
            projectBox.style.backgroundImage = `url(${project.backgroundImageUrl})`
        
            const projectDescription = document.createElement('div')
            projectDescription.classList.add('project_description')
        
            const projectName = document.createElement('p')
            projectName.textContent = project.name
        
            projectDescription.appendChild(projectName)
            projectBox.appendChild(projectDescription)
        
            projectLink.appendChild(projectBox)
            projectListItem.appendChild(projectLink)
        
            projectsList.appendChild(projectListItem)
        }
    })


fetch('./skills.json')
    .then(res => res.json())
    .then(skills => {
        const skillsList = document.getElementById('skills_list')
        const currentSkills = [ 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'React', 'Java', 'SQL/MySQL', 'Github'] 
        for(let currentSkill of currentSkills) {
            const skill = skills.find((skill => skill.name === currentSkill))
            if(skill) {
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
        }
    })


const progressBar = document.getElementById('progress_bar')
const detailedPageProgressBar = document.getElementById('detailed_page_progress_bar')
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY
    let docHeight = document.body.offsetHeight
    let winHeight = window.innerHeight 
    let scrollPercent = scrollTop / (docHeight - winHeight)
    let scrollPercentRounded = Math.round(scrollPercent * 100)
    progressBar.style.width = `${scrollPercentRounded}%`
    detailedPageProgressBar.style.width = scrollPercentRounded > 100 ? '100%' : `${scrollPercentRounded}%`
    
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
    toggleScrolling()
    detailedPage.style.visibility = 'visible'
    detailedPage.classList.remove('detailed_page_clicked')
    detailedPage.classList.add('player_clicked')
    player.style.opacity = 0
})

const hideDetailedPageIcon = document.getElementById('hide_detailed_page_icon')
hideDetailedPageIcon.addEventListener('click', () => {
    detailedPage.classList.remove('player_clicked')
    detailedPage.classList.add('detailed_page_clicked')
    detailedPage.visiblity = 'hidden'
    setTimeout(() => {
        player.style.opacity = 1
    }, 300)
    toggleScrolling()
})



