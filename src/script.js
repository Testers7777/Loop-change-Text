var text1 = 'Hello'
var text2 = 'Hallo'
var text3 = 'Bonjour'
var speed = '10'

setInterval(() => {
    const a = document.getElementById('test');
    if(a.className == text1) {
        a.innerHTML = a.className
        a.setAttribute('class', text2)
    } else if(a.className == text2) {
        a.innerHTML = a.className
        a.setAttribute('class', text3)
    } else if(a.className == text3) {
        a.innerHTML = a.className
        a.setAttribute('class', text1)
    }}, 1000*speed)
