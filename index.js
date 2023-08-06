class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 }
  static SIZE_LARGE = { price: 100, calories: 40 }
  static STUFFING_CHEESE = { price: 10, calories: 20 }
  static STUFFING_SALAD = { price: 20, calories: 5 }
  static STUFFING_POTATO = { price: 15, calories: 10 }
  static TOPPING_SPICE = { price: 15, calories: 0 }
  static TOPPING_MAYO = { price: 20, calories: 5 }

  constructor(size, stuffing) {
    this.size = size
    this.stuffing = stuffing
    this.toppings = []
  }

  addTopping(topping) {
    this.toppings.push(topping)
  }

  calculatePrice() {
    const basePrice = this.size.price + this.stuffing.price
    const toppingsPrice = this.toppings.reduce(
      (xxx, topping) => xxx + topping.price,
      0
    )
    return basePrice + toppingsPrice
  }

  calculateCalories() {
    const baseCalories = this.size.calories + this.stuffing.calories
    const toppingsCalories = this.toppings.reduce(
      (xxx, topping) => xxx + topping.calories,
      0
    )
    return baseCalories + toppingsCalories
  }
}
//=================================================================================
var hamburger1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
hamburger1.addTopping(Hamburger.TOPPING_MAYO)

console.log('Price: ' + hamburger1.calculatePrice())
console.log('Calories: ' + hamburger1.calculateCalories())

hamburger1.addTopping(Hamburger.TOPPING_SPICE)
console.log('Price with sauce: ' + hamburger1.calculatePrice())
//===================================================================================
var hamburger2 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO)
hamburger2.addTopping(Hamburger.TOPPING_MAYO)

console.log('Price: ' + hamburger2.calculatePrice())
console.log('Calories: ' + hamburger2.calculateCalories())

hamburger2.addTopping(Hamburger.TOPPING_MAYO)
console.log('Price with sauce: ' + hamburger2.calculatePrice())
