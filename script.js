const image = document.querySelector('.image');

const times = document.querySelector('#times');

let clickTimes = 0;
let clickCount = 0;

image.addEventListener('click', (e) =>{
    if(clickTimes === 0){
        clickTimes = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTimes) < 800){
            createHeart(e)
            clickTimes = 0
        }else{
            clickTimes = new Date().getTime()
        }
    }
})

const createHeart = (e) =>{
    const heart = document.createElement('i');
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX;
    const y = e.clientY;

    const leftOffSet = e.target.offsetLeft;
    const topOffSet = e.target.offsetTop;

    const xInside = x - leftOffSet;
    const yInside = y - topOffSet;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    image.appendChild(heart)

    times.innerHTML = ++clickCount

    setTimeout(() => heart.remove(), 1000);
}