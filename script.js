function addGrocery(){
  let groceryName = document.getElementById('grocery-name').value;
  console.log(groceryName);

  document.querySelector('.grocery-container').innerHTML += `
        <div class="grocery-list">
          <h3>${groceryName}</h3>
          <div class="icons">
            <span>✔</span>
            <span><img src="download-1.png" class="delete" alt="" /></span>
          </div>
        </div>
  `;
}

document.getElementById('add').addEventListener('click', addGrocery);