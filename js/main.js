let collectionsBtn = document.querySelector('#collections-btn');
let collectionsList = document.querySelector('#collections-list');
collectionsBtn.addEventListener('click', () => {
    collectionsBtn.classList.toggle('rotated-icon');
    collectionsList.classList.toggle('blocked-list');
})

/* 
    Trending section 
*/
const trendingItem = document.querySelectorAll('.trending-list li');
const trendingCard = document.querySelectorAll('#card')
trendingItem.forEach((item) =>{
    item.addEventListener('click', () => {
        trendingItem.forEach((itemm)=> {
            if(itemm.classList == 'active'){
                itemm.classList.remove('active');
                itemm.classList.add('default');
            }
        })
        item.classList.add('active');
        item.classList.remove('default');
    })
})

let allBtn = document.querySelector('#all');
allBtn.addEventListener('click', () => {
  trendingCard.forEach((index) => {
    index.classList.remove('noneCard');
  })  
})

let newBtn = document.querySelector('#new');
newBtn.addEventListener('click', () => {
  trendingCard.forEach((index) => {
      console.log(index);
      if(index.classList == 'card sale'){
          index.classList.add('noneCard');
      }else{
          index.classList.remove('noneCard')
      }
  })  
})
let saleBtn = document.querySelector('#sale');
saleBtn.addEventListener('click', () => {
  trendingCard.forEach((index) => {
      console.log(index);
      if(index.classList == 'card new'){
          index.classList.add('noneCard');
      }else{
          index.classList.remove('noneCard')
      }
  })  
})

/* 
Our products
*/
const productsItem = document.querySelectorAll('.sections-list li');
const productsCard = document.querySelectorAll('#card2');
productsItem.forEach((item) =>{
    item.addEventListener('click', () => {
        productsItem.forEach((itemm)=> {
            if(itemm.classList == 'active'){
                itemm.classList.remove('active');
                itemm.classList.add('default');
            }
        })
        item.classList.add('active');
        item.classList.remove('default');
    })
})