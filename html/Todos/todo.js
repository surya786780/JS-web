const addform = document.querySelector(".add");
const elements = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generatetodo = todo =>{
     const addele = `
     <li style="display:flex; justify-content: space-around">
        <span> ${todo} </span> <button class="delbutton">del</button>
    </li>` ;

    elements.innerHTML += addele;
};

addform.addEventListener('submit', ele => {
    ele.preventDefault();
    const todo = addform.addval.value.trim();
    // console.log(todo);
    if(todo.length){
       generatetodo(todo); 
       addform.reset(); // reset the form
    }
   
})
// delete todos
elements.addEventListener('click', del=>{
    if(del.target.classList.contains('delbutton')){
        del.target.parentElement.remove();
    } 
})

// search bar, 
const filtertodos = (term) => {
    Array.from(elements.children)
    .filter((ele) => !ele.textContent.toLowerCase().includes(term))
    .forEach((ele) => ele.classList.add('filtered'));
        // console.log(ele.textContent);
        // return true;
        // console.log(ele.textContent.includes(term));
         

    Array.from(elements.children)
    .filter((ele) => ele.textContent.toLowerCase().includes(term))
    .forEach((ele) => ele.classList.remove('filtered'));
};


// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase(); 
    // console.log(term);
    filtertodos(term);
})


