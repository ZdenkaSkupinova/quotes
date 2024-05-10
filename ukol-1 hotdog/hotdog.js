export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];

  export const renderToppings = () => {
    const toppingsElement = document.querySelector('#toppings');
    toppingsElement.innerHTML = '';
    toppings.forEach((toppings) => {
     let toppingClass = "selected"

       if (toppings.selected === true) {
        toppingClass += "topping--selected";       
          } else {
           toppingClass += "selected"
        }
  // podmínka if selected === true class = topping--selected a false = selected
    toppingsElement.innerHTML += `
        <div class="topping" class="topping--selected">
          <h3>${toppings.name}</h3>
          <p>${toppings.price}</p>
        </div>
      `;
      })
    }
   
/*
 select class topping queryselectorAll a na ně addEventListener "click" bude volat toggleTopping(zmeni hodnotu)
toggleTopping = v objektech toppings prepsat jednotlive vlastnosti selected na opacnou hodnotu. slanina false se po click zmeni na true.
*/

export const toggleTopping = (index) => {
  toppings = document.querySelectorAll(".topping") 
  //querySelector, aby vybral všechny v poli
toppings.forEach((topping) => {
  topping.addEventListener("click", toggleTopping)
    if(topping.selected === true ) {
    topping[index].selected.classList.toggle("topping--selected")
  } else {
    topping[index].selected.classList.toggle("selected")
  }
		})
renderToppings()
  }


 
