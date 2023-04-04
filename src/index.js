import './styles.scss'
import img from './bbb-1.webp'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleComponent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Ebac WEBPACK'
    elemH1.classList.add('title')
    return elemH1
}

function imageComponent(){
    const elemImg = new Image()
    elemImg.src = img
    return elemImg
}

rootStyle()
document.getElementById('root').appendChild(titleComponent())
document.getElementById('root').appendChild(imageComponent())