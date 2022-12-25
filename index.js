const myControls = [...document.querySelectorAll("input")]
const myImg = document.querySelector("#myImg")
myControls[0].addEventListener('change', e => {
    myImg.style.setProperty('border-width', `${myControls[0].value}px`)
})
myControls[0].addEventListener('mousemove', e => {
    myImg.style.setProperty('border-width', `${myControls[0].value}px`)
})
myControls[1].addEventListener('change', e => {
    myImg.style.setProperty('filter', `blur(${myControls[1].value}px)`)
})
myControls[1].addEventListener('mousemove', e => {
    myImg.style.setProperty('filter', `blur(${myControls[1].value}px)`)
})
myControls[2].addEventListener('change', e => {
    myImg.style.setProperty('border-color', `${myControls[2].value}`)
})
myControls[2].addEventListener('mousemove', e => {
    myImg.style.setProperty('border-color', `${myControls[2].value}`)
})
