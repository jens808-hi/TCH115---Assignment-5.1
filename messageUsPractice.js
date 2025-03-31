//Processing 
function nameCheck(){
    //User inputs data and data is assigned to variables
    let firstnm = document.getElementById("input_firstnm").value;
    let lastnm = document.getElementById("input_lastnm").value;
   
    //Combining first name and last name 
    let concName =  firstnm + " " + lastnm;
    document.getElementById("conc_names").innerHTML = "Aloha: " + concName.trim();
   
    //Alert to display the length of full name
    let name_length = concName.length -1;
    alert("Your name has a length of: " + name_length + " characters");
    
       //Displays output of state
       let city = document.getElementById("input_city").value;
       alert("Your city is: " + city + "! Awesome!");
       
       //Evaluates if state is equal to 2 characters and displays output
       let state = document.getElementById("input_state").value;
       if(state.length == 2){
           alert("Your state " + state + " is valid!")
       }
       else{
           alert("Your state is NOT valid! Please re-enter a valid state abbreviation of 2 characters.")
       }
        //Evaluates if zipcode is equal to 5 characters and displays output
        let zipCode = document.getElementById("input_zipc").value;
        if(zipCode.length == 5){
            alert("Your zipcode " + zipCode + " is valid!")
        }
        else{
            alert("Your zipcode is NOT valid! Please re-enter a valid Zip code of 5 characters.")
        }
            //Displays output of email
            let email = document.getElementById("input_email").value;
            alert("Your email is: " + email + " Great!");

            //Evaluates if phone number is equal to 10 characters and displays output
            let phone = document.getElementById("input_phone").value;
            if(phone.length == 10){
                    alert("Your phone is: " + phone + " Great!");
            }
            else{
                alert("Your phone is NOT valid! Please re-enter a valid phone number of 10 characters.")
            }
            //Displays output of the message
            let message = document.getElementById("input_message").value;
            alert("You wrote: " + message + " Thanks! We'll get back to you shortly!");

    //Display all collected data in a single alert box
        alert("Your customer information:\nFull Name: " + concName.trim() + "\nCity: " + city + "\nState: " + state + 
        "\nZip Code: " + zipCode + "n\Phone: " + phone + "n\Email: " + email + "\nMessage: " + message);
    }

function submitData(){

}