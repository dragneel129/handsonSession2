/**
* 
 */

function initRequest() {
       
       req = new XMLHttpRequest();
}

$(function() {
       $("#select").change(function(){
              
              initRequest();
              var state =  $("#select option:selected").val();
              req.open("GET", "http://services.groupkt.com/state/get/IND/"+state, true);
              req.onreadystatechange =function()   {

                     if(req.readyState == 4 && req.status == 200)
                           {
                     var data =req.responseText;
                     var jsonobj = JSON.parse(data);

                     var capital = jsonobj.RestResponse.result.capital;
                     
                     $("#capital").val(capital);

                           }
                        }  

              
              
              
              req.send(null);
              
              
              
       })
       
});
