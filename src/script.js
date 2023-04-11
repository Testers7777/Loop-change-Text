const elements = {'text1': 'Hello', 'text2': 'Hallo', 'text3': 'Bonjour', 'speed': 2}

setInterval(() => {
    const a = document.getElementById('test');
    if(a.textContent == elements.text1) {
        a.innerHTML = elements.text2
    } else if(a.textContent == elements.text2) {
        a.innerHTML = elements.text3
    } else if(a.textContent == elements.text3) {
        a.innerHTML = elements.text1
    }}, 1000*elements.speed)
