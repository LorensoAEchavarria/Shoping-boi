var prices=[];
var lista=[];
var url=[];
$("#Cart").click(function() {
    
    var Items=$(".Name").val();
    
    var price=parseInt($(".Price").val());
    
    var img;
    prices.push(price);
    
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
 
 $("body").append("<p>"+ Items + "</p>");
 $("body").append("<p>"+ price + "</p>");
//  $("body").append("<p>" +Url+ "</p>")
 $(".numb").html(length);
});
  
  