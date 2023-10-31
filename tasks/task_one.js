
// // Write something
// function newArr(arr) {
//     let newArr = []
//     arr.push()
//     console.log(arr);
// }

// const username = localStorage.setItem('container', 'John-Doe')
// let saved= localStorage.getItem('container')
// console.log(username);

// const months = ['january', 'february', 'march', 'april', 'may'];
// let capitalizedMonths = [];

// capitalizedMonths should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
// Write your code below
// months.forEach(month=>{
//   capitalizedMonths.push(month.charAt(0).toUpperCase())
// })


// const username= document.querySelector('#name')
// const userage= document.querySelector('#age')
// const submitBtn= document.querySelector('#submit')
// const container= document.querySelector('.display')

// submitBtn.addEventListener('click', ()=> {
//     if(username.value && userage.value){
//         displayItems(username.value, userage.value)
//         updateLocal()
//     }
//     username.value=''
//     userage.value=''
// })


// function updateLocal() {
//     const liElements= container.querySelectorAll('li')
//     const itemsToSave= Array.from(liElements).map(info => {
//         const name= info.querySelector('.name').textContent
//         const age= info.querySelector('.age').textContent
//         return {name, age}
//     })

//     localStorage.setItem('zobs', JSON.stringify(itemsToSave))

// }

// function loadFromLocal() {
//     const savedItems=JSON.parse(localStorage.getItem('zobs')) || []
//     savedItems.forEach(item => {
//         displayItems(item.name, item.age)
//     })

// }

// loadFromLocal()

// function displayItems(name, age) {
//     const li= document.createElement('li')
//     li.innerHTML=`<span class='name'>${name}</span> <span class='age'>${age}</span> <button class="del">Del</button>`
//     container.append(li)
// }

// const delBtn= container.querySelectorAll('.del')

// delBtn.forEach(btn=> {
//     btn.addEventListener('click',(e) => {
//         e.target.parentElement.remove()
//         updateLocal()
//     })
// })



class FoodApp {
    constructor() {
      this.foodList = [];
      this.firstSetup();
    }
    firstSetup() {
      this.loadFromLocalStorage();
      this.firstFoodList();
      this.setupEventListeners();
    }
    setupEventListeners() {
      const addFoodButton = document.getElementById('addFood');
      addFoodButton.addEventListener('click', () => this.addFood());
    }
    addFood() {
      const foodNameInput = document.getElementById('foodName');
      const foodName = foodNameInput.value.trim();
      if (foodName !== '') {
        this.foodList.push(foodName);
        foodNameInput.value = '';
        this.saveToLocalStorage();
        this.firstFoodList();
      }
    }
    firstFoodList() {
      const foodListContainer = document.getElementById('foodList');
      foodListContainer.innerHTML = '';
      this.foodList.forEach(food => {
        const listItem = document.createElement('li');
        listItem.textContent = food;
        foodListContainer.appendChild(listItem);
      });
    }
    saveToLocalStorage() {
      localStorage.setItem('foodList', JSON.stringify(this.foodList));
    }
    loadFromLocalStorage() {
      const savedFoodList = localStorage.getItem('foodList');
      if (savedFoodList) {
        this.foodList = JSON.parse(savedFoodList);
      }
    }
  }
  const app = new FoodApp();