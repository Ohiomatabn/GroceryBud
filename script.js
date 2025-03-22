//get the grocery-container and assign it to gorceryConttainer
const groceryContianer =   document.querySelector('.grocery-container');
//Aftter the window is full load set whatever is in local storage as inner html of gorceryContainer, if null set it to and empty string 
window.onload = groceryContianer.innerHTML = localStorage.getItem('Grocery List') || '';


//Declare the addGrocery function
function addGrocery(){
  let groceryName = document.getElementById('grocery-name').value;
  //get the current Date
  const now = new Date;
  //Extract the date, month, and year of the new Date method
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  //Check if the grocery name is not starting with a-z or A-Z 
  if(!groceryName.match(/[/a-z/, /A-Z/]/)){
    const modal = document.getElementById('modal');
    //Set the innerHTML of modal if the condition above is met
    modal.innerHTML = 'Please enter a valid Grocery name';
    //Set the modal margin-top to 0
    modal.style.marginTop = 0;
    //Set the margin-top  to -7rem after 3 seconds
    setTimeout(() =>{
      modal.style.marginTop = '-7rem';
    },3000)
    
  }
  else{
  //Add this to groceryContainer as innerHTML
  groceryContianer.innerHTML += `
  <div class="grocery-list">
    <h3>${groceryName}</h3>
    <h3>${date}/${ month + 1}/${year}</h3>
    <div class="icons">
      <em class="edit">✍</em>
      <span>
        <img false src="download-1.png" class="delete" alt="" />
        <span class="hide">false</span>
      </span>
    </div>
  </div>
`;
  }
    //Call saveToLocalStorage Function
  saveToLocalStorage();
}

function deleteModal(){
  document.getElementById('delete-modal').style.display = 'flex';
}

function closeDeleteModal(){
  document.getElementById('delete-modal').style.display = 'none';
}

function yesDelete(){
  document.querySelectorAll('.hide').forEach((deleteE) =>{
    if(deleteE.innerHTML === 'true'){
    deleteE.parentElement.parentElement.parentElement.remove();
    saveToLocalStorage();
    closeDeleteModal();
    } else{
      return;
    }
  });

}

groceryContianer.addEventListener('click', (e) =>{
  if (e.target.tagName === 'IMG'){
    deleteModal();
    e.target.parentElement.lastElementChild.innerHTML = 'true'
  }
});

groceryContianer.addEventListener('click', (e) =>{
  const input = document.getElementById('grocery-name');
  if (e.target.tagName === 'EM'){
    e.target.parentElement.lastElementChild.lastElementChild.innerHTML = 'true'
    input.value = e.target.parentElement.parentElement.firstElementChild.innerHTML;
    document.getElementById('add').innerHTML = 'Modify'
  }
});

document.getElementById('no-btn').addEventListener('click', ()=> {
  closeDeleteModal();
  document.querySelectorAll('.hide').forEach((hide) =>{
    hide.innerHTML = 'false'
  })
});

document.getElementById('yes-btn').addEventListener('click', () =>{
  yesDelete();
})

  //Add event listener to the clear class
document.getElementById('clear').addEventListener('click', () =>{
  // Change all the innerHTML of grocery container to an empty string
    document.querySelectorAll('.hide').forEach((hide) =>{
      hide.innerHTML = 'true';
    });
    deleteModal();
    //Call saveToLocalStorage Function
    saveToLocalStorage();
});

//Declare saveToLocalStorage function
function saveToLocalStorage(){
  //Save the innerHTML of groceryContainer as Grocery List in localStorage
  localStorage.setItem('Grocery List', groceryContianer.innerHTML);
}

//Add event listner to the add button
document.getElementById('add').addEventListener('click', () =>{
  const input = document.getElementById('grocery-name');
  if(document.getElementById('add').innerText === 'Add'){
    addGrocery();
  } else {
    document.querySelectorAll('.hide').forEach((hide) =>{
      if(hide.innerHTML === 'true'){
          hide.innerHTML = 'false';
          hide.parentElement.parentElement.parentElement.firstElementChild.innerHTML = input.value;
          document.getElementById('add').innerHTML = 'Add'
          input.value = '';
          saveToLocalStorage();
      }
    });
  }
});