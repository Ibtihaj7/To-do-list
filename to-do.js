const con=document.getElementById('container')
const form=document.querySelector("form")
const inputText=document.querySelector('input')

form.addEventListener('submit',(eo) => {
    eo.preventDefault()

    const text=inputText.value
   const newList=`
   <div class='con'>
   <span class='icon-star-full icon'></span>
       <p>${text}</p>
       <div>
           <span class='icon-bin icon'></span>
           <span class='icon-angry2 icon'></span>
       </div>
   </div>
   `
   con.innerHTML+=newList
   inputText.value=''
})

con.addEventListener('click',(eo) => {
   
    if(eo.target.className=='icon-bin icon'){
        eo.target.parentElement.parentElement.remove()
    }else if(eo.target.className=='icon-star-full icon'){
        eo.target.classList.add('color')
        con.prepend(eo.target.parentElement)
    }else if(eo.target.className=='icon-angry2 icon'){
        eo.target.className='icon-heart icon'
       eo.target.parentElement.parentElement.children[1].classList.add('finish');
    }else if(eo.target.className=='icon-heart icon'){
        eo.target.className='icon-angry2 icon'
       eo.target.parentElement.parentElement.children[1].classList.remove('finish');
    }
    else if(eo.target.className=='icon-star-full icon color'){
        eo.target.classList.remove('color')

    } 
})
