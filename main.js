let calc = document.createElement('div')
calc.classList.add('main')
document.body.append(calc)

let res = document.createElement('div')
res.classList.add('result')


let btns = document.createElement('div')
btns.classList.add('buttons')
calc.append(res,btns)

let c = document.createElement('div')
c.classList.add('btn','c')
c.textContent='c'

let fission = document.createElement('div')
fission.classList.add('btn')
fission.textContent='/'

let btn7 = document.createElement('div')
btn7.classList.add('btn')
btn7.textContent=Number(7)
btn7.onclick=function(){
    res.append(btn7.textContent)
}

let btn8 = document.createElement('div')
btn8.classList.add('btn')
btn8.textContent=Number(8)
btn8.onclick=function(){
    res.append(btn8.textContent)
}

let btn9 = document.createElement('div')
btn9.classList.add('btn')
btn9.textContent=Number(9)
btn9.onclick=function(){
    res.append(btn9.textContent)
}

let btnX = document.createElement('div')
btnX.classList.add('btn')
btnX.textContent='*'

let btn4 = document.createElement('div')
btn4.classList.add('btn')
btn4.textContent=Number(4)
btn4.onclick=function(){
    res.append(btn4.textContent)
}

let btn5 = document.createElement('div')
btn5.classList.add('btn')
btn5.textContent=Number(5)
btn5.onclick=function(){
    res.append(btn5.textContent)
}

let btn6 = document.createElement('div')
btn6.classList.add('btn')
btn6.textContent=Number(6)
btn6.onclick=function(){
    res.append(btn6.textContent)
}

let btnM= document.createElement('div')
btnM.classList.add('btn')
btnM.textContent="-"

let btn1 = document.createElement('div')
btn1.classList.add('btn')
btn1.textContent=Number(1)
btn1.onclick=function(){
    res.append(btn1.textContent)
}

let btn2 = document.createElement('div')
btn2.classList.add('btn')

btn2.textContent= Number(2)
btn2.onclick=function(){
    res.append(btn2.textContent)
}

let btn3 = document.createElement('div')
btn3.classList.add('btn')
btn3.textContent=Number(3)
btn3.onclick=function(){
    res.append(btn3.textContent)
}

let btnP = document.createElement('div')
btnP.classList.add('btn')
btnP.textContent= "+"

let btn0 = document.createElement('div')
btn0.classList.add('btn','zero')
btn0.textContent=Number(0)
btn0.onclick=function(){
    if(res.textContent===''){
        res.value=''
    }else{
    res.append(btn0.textContent)
    }
}

btnP.onclick=function(){
    if(res.textContent === ''){
        res.textContent = ''
    }
    let a = Number(res.textContent)
    
    res.textContent=''
    console.log(a)

    btnE.onclick=function(){
        let b = Number(res.textContent)
        res.textContent=(a+b) 
    }

}

btnM.onclick=function(){
    if(res.textContent === ''){
        res.textContent = ''
    }
    let a = Number(res.textContent)
    
    res.textContent=''
    console.log(a)

btnE.onclick=function(){

    if(btnM.click){
        let b = Number(res.textContent)
        res.textContent=(a-b)
    }
}
}

fission.onclick=function(){
    if(res.textContent === ''){
        res.textContent = ''
    }
    let a = Number(res.textContent)
    
    res.textContent=''
    console.log(a)

btnE.onclick=function(){

    if(fission.click){
        let b = Number(res.textContent)
        res.textContent=(a/b).toFixed(2)
    }
}
}

btnX.onclick=function(){
    if(res.textContent === ''){
        res.textContent = ''
    }
    let a = Number(res.textContent)
    
    res.textContent=''
    console.log(a)

btnE.onclick=function(){
    if(btnX.click){
        let b = Number(res.textContent)
        res.textContent=(a*b)
    }
}
}
c.onclick=function(){
    res.textContent=''
    btnE.onclick=function(){
        res.textContent=''
    }
}

let btnE = document.createElement('div')
btnE.classList.add('btn','green')
btnE.textContent='='

btns.append(c,fission,btn7,btn8,btn9,btnX,btn4,btn5,btn6,btnM,btn1,btn2,btn3,btnP,btn0,btnE)