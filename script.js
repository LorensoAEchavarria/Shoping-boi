var prices=[];
var lista=[];
var url=[];
$("#Cart").click(function() {
    
    var Items=$(".Name").val();
    
    var price=parseInt($(".Price").val());
    
    var img=$(".Url").val();
    prices.push(price);
    lista.push(Items);
    url.push(img);
    
    
     $("input").val("");
     
    var totalnum=0;
    
    prices.forEach(function(total){
        totalnum= totalnum + parseInt(total);
        console.log(total,totalnum);
        
    });
    console.log(prices);
    
    $("span").html(totalnum);    
    
    lista.push(Items);
    
    // url.push(Url);
  var length = lista
  .length;  
 
 $(".cart").append("<p>"+ Items + "</p>");
 $(".cart").append("<p>"+ price + "</p>");
 $(".cart").append("<img src='" +img+ "'>");
 $(".numb").html(length);
});
  $("#Buy").click(function(){
  alert("Thank you for buying out product user. The price is"+" "+ prices +"."+"thank you for shoping with us");
  });
  