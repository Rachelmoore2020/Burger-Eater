// When user clicks add-btn
$("#burger-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBurger object
    var newBurger = {
      name: $("#burger-box").val().trim(),
      devoured: false,
  
    };
  
    console.log(newBurger);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBurger)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("burger");
  
        row.append("<p>" + newBurger.name + "</p>");
        row.append("<p>" + newBurger.body + "</p>");
      
  
        $("#burger-area").append(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#burger-box").val("");
  });
  
  // When the page loads, grab all of our burgers
  $.get("/api/all", function(data) {
    console.log(data)
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("burger");
  
        row.append("<p>" + data[i].name + "</p>");
        row.append("<p>" + data[i].body + "</p>");
  
        $("#burger-area").prepend(row);
  
      }
  
    }
  
  });
  