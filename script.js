//set the constant
const body = document.querySelector('body')
const darks = document.querySelectorAll('.dark')
const darkcontain = document.querySelector('.dark-contain')
const maininput = document.querySelectorAll('.main-input')
const darkmark = document.querySelector('.dark-mark')

//dark mode
darkcontain.addEventListener('click',darkmode)
darkmark.addEventListener('click',darkmode)
function darkmode(){
    maininput.forEach(inp=>{
        inp.classList.toggle('newinput')
    })
    console.log('flzvrv')
    body.classList.toggle('newbody')
    darkcontain.classList.toggle('darkcontainnew')
    darkmark.classList.toggle('darkmarknew')
    darks.forEach(dark=>{
        dark.classList.toggle('newdark')
    })
}

const date = new Date().getHours()
console.log(date)
if(date >= 16){
    
    darkmode()
}
//type writter effect
const txts = ['The best barber in Rabat','lets have a wenderful haircut','Sign up now']
let count = 0
let index = 0
let currenttext=''
let letter=''
function typing() {
    if(count === txts.length){
        count = 0
    }
    currenttext = txts[count]
    letter = currenttext.slice(0,++index)
    if(letter.length === currenttext.length){
        ++count
        index = 0

    }
    document.querySelector('.footer-text').textContent = letter
    setTimeout(typing,280)
}
typing()