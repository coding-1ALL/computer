const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');


btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});

btnCart.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadFood);

function loadFood(){
    loadContent();
}

function loadContent(){
    //Remove Food Items From Cart
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
       btn.addEventListener('click',removeItem);
    });
    
//product Item change Event
let qtyElements=document.querySelectorAll('cart-quantity');
   qtyElements.forEach((input)=>{
       btn.addEventListener('change',changeQty);
    }); 
}

//Remove Items
function removeItem(){
    if(confirm('Are your sure to Remove')){
    this.parentElement.remove();
}
}
//change Quantity
function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
}