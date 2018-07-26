function postRequest (){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;

    var data={};
    data.email=email;
    data.name=name;
    //console.log(data)

    var message;
    var http = new XMLHttpRequest();
    var url = 'https://jsonplaceholder.typicode.com/posts';        // Server URL
    //var params = 'orem=ipsum&name=binny';
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');

   // console.log(http.responseText)
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            message="Thank you for subscribing to Sonderblu newsletter, we will keep you in touch!";
            displayPopup(message);
        }
        else if(http.readyState == 4 && http.status == 409) { // conflict
            message="It seems you have been already subscribed to our news!";
            displayPopup(message);

        }
        else if(http.readyState == 4 && http.status !== 500) {
            message="We are experiencing temporary technical difficulties, please try again later";
            displayPopup(message);

        }
    }
    if(data.email && data.name){
    http.send(JSON.stringify(data));
    }
 }



function displayPopup(message){
      //  console.log("here")
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

    modal.style.display = "block";
      //  $(#mod)
      $('#modalPara').text(message);



// When the user clicks on <span> (x), close the modal
i.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}

$(document).ready(function(e){

    $("#emailForm").hide();

    $('#emailButton').click(function(){
        $("#emailForm").show();

    });

});
