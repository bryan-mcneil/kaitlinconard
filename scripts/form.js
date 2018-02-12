
function emailform(form) {
      
        console.log(form.name.validity);
      
        var errorsDiv = document.getElementById('errors');
      
        if (form.checkValidity()) {
        
            alert("Thank you for your input.");
            return true;
        } else {
        
            if (form.name.validity.valueMissing) {
              
                errorsDiv.innerHTML = "Name is required";
          
                return false;
            }
            if (form.name.validity.patternMismatch) {
           
                errorsDiv.innerHTML = "Name can only contain alphanumeric characters";
         
                return false;
            }
        }
    }