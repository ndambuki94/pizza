function Pizza(style, size) {
    this.style = style;
    this.size = size;
    this.toppings = [];
    this.price = 0;
  }
  
  Pizza.prototype.cost = function() {
    var price = 0;
    if (this.size === "Personal") {
      price += 9;
    } else if (this.size === "Medium") {
      price += 13;
    } else if (this.size === "Large") {
      price += 15;
    } else {
      price+= 20;
    }