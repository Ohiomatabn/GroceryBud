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

  //Add this to groceryContainer as innerHTML
  groceryContianer.innerHTML += `
        <div class="grocery-list">
          <h3>${groceryName}</h3>
          <h3>${date}/${ month}/${year}</h3>
          <div class="icons">
            <span>✔</span>
            <span><img src="download-1.png" class="delete" alt="" /></span>
          </div>
        </div>
  `;
    //Call saveToLocalStorage Function
  saveToLocalStorage();
}

//Add event listener to the grocery container
groceryContianer.addEventListener('click', ((e) =>{
  //If the tag name of the click area is groceryContainer execute this code
    if(e.target.tagName === 'IMG'){
      //If the condition is true then remove the grand parent of this element
      e.target.parentElement.parentElement.parentElement.remove();
    //Call saveToLocalStorage Function
      saveToLocalStorage();
    }
  }));

  //Add event listener to the clear class
document.getElementById('clear').addEventListener('click', () =>{
  // Change all the innerHTML of grocery container to an empty string
    groceryContianer.innerHTML = '';
    //Call saveToLocalStorage Function
    saveToLocalStorage();
});

//Declare saveToLocalStorage function
function saveToLocalStorage(){
  //Save the innerHTML of groceryContainer as Grocery List in localStorage
  localStorage.setItem('Grocery List', groceryContianer.innerHTML);
}

//Add event listner to the add button
document.getElementById('add').addEventListener('click', addGrocery);