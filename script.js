
function verificar1() {
    let guns = document.getElementById('guns1')
    let nirvana = document.getElementById('nirvana1')
    let pinkfloyd = document.getElementById('pinkfloyd1')
    let res1 = document.getElementById('res1')
    let res2 = document.getElementById('res2')
    let res3 = document.getElementById('res3')
    let op1 = document.getElementById('op1')
    let op2 = document.getElementById('op2')
    let op3 = document.getElementById('op3')
    if (guns.checked) {
        res1.style.background = 'chartreuse'
        op1.innerHTML = 'Correto!'
    }
    if (nirvana.checked) {
        res2.style.background = 'red'
        op2.innerHTML = 'Errado!'
    }
    if (pinkfloyd.checked) {
        res3.style.background = 'red'
        op3.innerHTML = 'Errado!'
    }
}

function verificar2() {
    let charlie2 = document.getElementById('charlie2')
    let nirvana2 = document.getElementById('nirvana2')
    let pinkfloyd2 = document.getElementById('pinkfloyd2')
    let res2_1 = document.getElementById('res2-1')
    let res2_2 = document.getElementById('res2-2')
    let res2_3 = document.getElementById('res2-3')
    let op2_1 = document.getElementById('op2-1')
    let op2_2 = document.getElementById('op2-2')
    let op2_3 = document.getElementById('op2-3')
    if (nirvana2.checked) {
        res2_1.style.background = 'red'
        op2_1.innerHTML = 'Errado!'
    }
    if (pinkfloyd2.checked) {
        res2_2.style.background = 'red'
        op2_2.innerHTML = 'Errado!'
    }
    if (charlie2.checked) {
        res2_3.style.background = 'chartreuse'
        op2_3.innerHTML = 'Correto!'
    }
}

function verificar3() {
    let orapa3 = document.getElementById('orapa3')
    let nirvana3 = document.getElementById('nirvana3')
    let pinkfloyd3 = document.getElementById('pinkfloyd3')
    let res3_1 = document.getElementById('res3-1')
    let res3_2 = document.getElementById('res3-2')
    let res3_3 = document.getElementById('res3-3')
    let op3_1 = document.getElementById('op3-1')
    let op3_2 = document.getElementById('op3-2')
    let op3_3 = document.getElementById('op3-3')
    if (nirvana3.checked) {
        res3_1.style.background = 'red'
        op3_1.innerHTML = 'Errado!'
    }
    if (pinkfloyd3.checked) {
        res3_2.style.background = 'red'
        op3_2.innerHTML = 'Errado!'
    }
    
    if (orapa3.checked) {
        res3_3.style.background = 'chartreuse'
        op3_3.innerHTML = 'Correto!'
    }
}