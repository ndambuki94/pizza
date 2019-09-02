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
        newPizza.cost();
        total += newPizza.price;
    
        $(".cartTotal").text(total);
        $(".cartWell").show();;
        $("#cartHeader").show();
        $("ol#cart").append("<li><span class='cartItem'>" + newPizza.size + " " + newPizza.style + " Pizza" + "</span></li>");
    
        $(".cartItem").last().click(function() {
          $("#show-pizza").show();
          $("#pizzaListName").text(newPizza.size + " " + newPizza.style + " Pizza");
          $(".size").text(newPizza.size);
          $(".style").text(newPizza.style);
          $(".toppings").text(newPizza.toppingsList());
          $(".cost").text(newPizza.price);
        });
        $("#pizzaForm")[0].reset();
      });
    
      $("button#submitCart").click(function() {
        $(".pizzaMaker").hide();
        $("button#submitCart").hide();
        $(".choiceWell"). show();
      });
    
      $("button#pickup").click(function() {
        $(".choiceWell").hide();
        $(".pickupWell").show();
      });
    
      $("button#delivery").click(function() {
        total += 7;
        $(".cartTotal").text(total);
        $(".choiceWell").hide();
        $(".deliveryWell").show();
      });
    
      $("button#submitPickupForm").click(function() {
        var userName = $("input#pickupName").val();
        $(".nameInput").text(userName);
        $("form#pickupForm").hide();
        $("#pickupEnd").show()
      });
    
      $("button#submitDeliveryForm").click(function() {
        var userName = $("input#deliveryName").val();
        var address = $("input#address").val();
        var city = $("input#city").val();
        var state = $("input#state").val();
        $(".nameInput").text(userName);
        $(".addressInput").text(address + ", " + city + " " + state);
        $("form#deliveryForm").hide();
        $("#deliveryEnd").show();
      });
    
      $("button.reset").click(function() {
        location.reload();
      });
    });
    