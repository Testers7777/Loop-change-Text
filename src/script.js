const elements = {'text1': 'Hello', 'text2': 'Hallo', 'text3': 'Bonjour', 'speed': 2}

setInterval(() => {
    const a = document.getElementById('test');
    if(a.className == elements['text1']) {
        a.innerHTML = a.className
        a.setAttribute('class', elements['text2'])
    } else if(a.className == elements['text2']) {
        a.innerHTML = a.className
        a.setAttribute('class', elements['text3'])
    } else if(a.className == elements['text3']) {
        a.innerHTML = a.className
        a.setAttribute('class', elements['text1'])
    }}, 1000*elements['speed'])
