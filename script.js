var image = [];
var names = [];
var prices = [];

jQuery('.add').click(function() {
    
    var imgItem=$(".productImg").val();
    
    var nameItem=$(".productName").val();
    
    var priceItem=parseInt($(".productPrice").val());
    
    var totalVal=parseInt($(".productPrice").val());
    
   $(".span2").text(totalVal);
   
    names.push(nameItem);
    
    prices.push(priceItem);
    
    $(".stuff").append("<div> <img src= " +imgItem + "> <p>" +nameItem + "</p> <p>$" +priceItem + "</p> </div>");
    
    prices.forEach(function(price){});
   //var solution=totalVal;
});
jQuery('.purchase').click(function(){
    //var solution=totalVal;
   //$("span").text(solution);
});
