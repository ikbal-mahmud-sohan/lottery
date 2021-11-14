$(document).ready(function(){

    $(".show-btn-sec").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("stic");
        }
        else{
            $("nav").removeClass("stic");


        }
    });

});