const form = document.createElement('form')
const input = document.createElement('input')
input.setAttribute('type', 'text')

const list = document.createElement('div')
list.classList.add('list')

input.addEventListener('input', async (event) => {
  if(input.value.length > 3){
    const response = await fetch('https://api-adresse.data.gouv.fr/search/?q='+event.target.value)
    const data = await response.json()

    list.innerHTML = ''
    if(data.features.length >0 && !(data.features.length ===1 && data.features[0].properties.label !== event.target.value)){
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
  }
})

const textEnDessous = document.createElement('p')
textEnDessous.textContent = 'Ceci est un texte en dessous'

form.appendChild(input)
form.appendChild(list)
document.body.appendChild(form)
document.body.appendChild(textEnDessous)