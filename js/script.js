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
    for (var i = 0; i < this.toppings.length; i++) {
        price += 1;
      }
    
      this.price = price;
    }
    
    Pizza.prototype.toppingsList = function() {
      if (this.toppings.length > 0) {
          return this.toppings.join(", ");
      } else {
        return "None";
      }
    }
    
    $(document).ready(function() {
      var total = 0;
      $(".cartTotal").text(total);
    
      $("#pizzaForm").submit(function(event) {
        event.preventDefault();
        var style = $("#style").val();
        var size = $("#size").val();
        var newPizza = new Pizza(style, size);
    
        $("input:checkbox[name=topping]:checked").each(function() {
          var toppingChoice = $(this).val();
          newPizza.toppings.push(toppingChoice);
        });