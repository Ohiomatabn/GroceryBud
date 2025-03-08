const groceryContianer =   document.querySelector('.grocery-container');

function addGrocery(){
  let groceryName = document.getElementById('grocery-name').value;

  document.querySelector('.grocery-container').innerHTML += `
        <div class="grocery-list">
          <h3>${groceryName}</h3>
          <div class="icons">
            <span>✔</span>
            <span><img src="download-1.png" class="delete" alt="" onclick = "deleteGrocery();" /></span>
          </div>
        </div>
  `;
}

function deleteGrocery(){
  groceryContianer.addEventListener('click', ((e) =>{
    if(e.target.tagName === 'IMG'){
      e.target.parentElement.parentElement.parentElement.remove();
    }
  }))
}

document.getElementById('add').addEventListener('click', addGrocery);