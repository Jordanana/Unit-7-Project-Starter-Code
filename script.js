$("button").click(function(){
    let name = $(".Name").val();
    let avg = $(".Average").val();
    let month = $(".A-Month").val();
    let total = avg * month  * 12 * 18;
    $(".fortune-display").append(name + ", you will spend " + total + "$ at nike by the year 2040"
    );  
    
});