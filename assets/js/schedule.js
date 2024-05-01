const schedule = document.querySelector('#schedule')

const scheduleData = [{
    month: 'May',
    title: '"Untitled"',
    text: 'She is rude, she is shy, and can be very difficult, but with some affection and the right kind of pampering, he may just melt her soul.',
    img: new URL('./../imgs/comingSoon.png', import.meta.url).href,
},{
    month: 'June',
    title: 'N/A',
    text: 'When the ideas come. You will be the first to know. I promise!',
    img: '',
},{
    month: 'July',
    title: 'N/A',
    text: 'When the ideas come. You will be the first to know. I promise!',
    img: '',
},{
    month: 'Aug',
    title: 'N/A',
    text: 'When the ideas come. You will be the first to know. I promise!',
    img: '',
},{
    month: 'Sept',
    title: 'N/A',
    text: 'When the ideas come. You will be the first to know. I promise!',
    img: '',
},{
    month: 'Oct',
    title: 'N/A',
    text: 'When the ideas come. You will be the first to know. I promise!',
    img: '',
},{
    month: 'Nov',
    title: 'N/A',
    text: 'When the ideas come. You will be the first to know. I promise!',
    img: '',
},{
    month: 'Dec',
    title: 'N/A',
    text: 'When the ideas come. You will be the first to know. I promise!',
    img: '',
},{
    month: 'Jan',
    title: 'N/A',
    text: 'When the ideas come. You will be the first to know. I promise!',
    img: '',
},{
    month: 'Feb',
    title: 'N/A',
    text: 'When the ideas come. You will be the first to know. I promise!',
    img: '',
},{
    month: 'Mar',
    title: 'N/A',
    text: 'When the ideas come. You will be the first to know. I promise!',
    img: '',
},]

const short = scheduleData.slice(0, scheduleData.length/2)
const shorter = scheduleData.slice(0, scheduleData.length/3)
const displaySchedule = (list) => {
    schedule.innerHTML = ''
    list.forEach(post => {
        schedule.innerHTML += `
        <div class="tl-item">
        
        <div class="tl-bg" style="background-image: url(${post.img})"></div>
        <div class="tl-year">
          <p class="f2 heading--sanSerif">${post.month}</p>
        </div>
    
        <div class="tl-content">
          <h1 class="f3 text--accent ttu">${post.title}</h1>
          <p>${post.text}</p>
        </div>
    
      </div>
        `
    })
}
const initSchedule = () => {
    if (window.innerWidth <= 667) {
        displaySchedule(shorter)
    } else if (window.innerWidth <= 991){
        displaySchedule(short)
    } else {
        displaySchedule(scheduleData)
    }
}
initSchedule()

window.addEventListener('resize', () => initSchedule())