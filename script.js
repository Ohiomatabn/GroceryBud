const groceryContianer =   document.querySelector('.grocery-container');

function addGrocery(){
  let groceryName = document.getElementById('grocery-name').value;
  const now = new Date;
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

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
}

  groceryContianer.addEventListener('click', ((e) =>{
    if(e.target.tagName === 'IMG'){
      e.target.parentElement.parentElement.parentElement.remove();
    }
  }));

  document.getElementById('clear').addEventListener('click', () =>{
    groceryContianer.innerHTML = '';
  })

document.getElementById('add').addEventListener('click', addGrocery);