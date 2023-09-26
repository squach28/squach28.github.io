const playButton = document.getElementById('play_button')
console.log(playButton)
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