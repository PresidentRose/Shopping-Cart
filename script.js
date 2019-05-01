var images = [];
var names = [];
var prices = [];
var totalPrice;

jQuery('.add').click(function() {
    
    totalPrice=0;
    
    var imgItem=$(".productImg").val();
    
    var nameItem=$(".productName").val();
    
    var priceItem=parseInt($(".productPrice").val());
    
    images.push(imgItem);
   
    names.push(nameItem);
    
    prices.push(priceItem);
    
    $(".stuff").append("<div> <img src= " +imgItem + "> <p>" +nameItem + "</p> <p>$" +priceItem + "</p> </div>");
    
    prices.forEach(function(price){
        totalPrice=totalPrice+parseInt(price);
        });
    $(".span2").text(totalPrice);
    
    
});
jQuery('.purchase').click(function(){
   
   alert ("Are You Sure You Want To Finish?");
   
});
