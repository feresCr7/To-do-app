let input=document.querySelector("#input")
let main= document.querySelector('.main')
let buttonAdd=document.querySelector('#add')
console.log(buttonAdd)
let todo = ''
input.addEventListener('change',function(e){
    todo = e.target.value
})
buttonAdd.addEventListener ('click',function(){

  var container = document.createElement('div')   // creation d'element DIV
  container.classList.add("mystyle") 
  var btncomplete = document.createElement('button') // creation d'element BUTTON
  var btnDelete = document.createElement('button') // creation d'element BUTTON
  var x = document.createElement ('h1') // creation d'element H1
  btncomplete.innerHTML = "Complete" 
  btnDelete.innerHTML = 'Delete'
  x.innerHTML = todo // Save the text inside H1 
  input.value = ''

  container.appendChild (btncomplete)
  container.appendChild(btnDelete)
  container.appendChild (x)
  main.appendChild (container)
  btncomplete.addEventListener('click',function(){
  btncomplete.innerHTML="undo"
  
  
  x.style.textDecoration= "line-through"

  
  
  
})
  
  btnDelete.addEventListener('click',function(){
    btnDelete.parentElement.remove()
  }
  )
  })

