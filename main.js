import './style.css'
/*import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'*/

const title = document.createElement("h1");
title.innerText = "Trouver une adresse";
document.body.appendChild(title);

//----------------------------------------------------
const champs = document.createElement('div')
document.body.appendChild(champs)

const input = document.createElement('input')
input.setAttribute('type','text')
champs.appendChild(input)


const list = document.createElement('div');
//list.classList.add('list')
champs.appendChild(list)


input.addEventListener('input', async (event)=>{
  if(input.value.length >= 3){
    const response = await fetch('https://api-adresse.data.gouv.fr/search/?q='+input.value)
    const data = await response.json()

    list.innerHTML = ''
  
    data.features.map((proposition) => {
      const listElement = document.createElement('div')
      listElement.textContent = proposition.properties.label
      listElement.addEventListener('click', () => {
        input.value = proposition.properties.label
        list.innerHTML = ''
      })
      list.appendChild(listElement)
    })
  }
})



