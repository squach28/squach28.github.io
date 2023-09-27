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
    const container = document.getElementById('container')
    const moreOverlayContainer = document.getElementById('more_overlay_container')
    container.classList.add('blur')
    moreOverlayContainer.style.display = 'flex'
})

const closeButton = document.getElementById('close_button')

closeButton.addEventListener('click', () => {
    const container = document.getElementById('container')
    const moreOverlayContainer = document.getElementById('more_overlay_container')
    container.classList.remove('blur')
    moreOverlayContainer.style.display = 'none'
})