// Add your code here
//fetch(destinationURL, configurationObject); 

  //"Content-Type" is used to indicate what format the data being sent is in.

  let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  }); 

    // body: /* Your data goes here */ needs to be a string

    let submitData = {
        userName: "Steve",
        userEmail: "steve@steve.com"
      };

      let userObj = {
        //method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submitData)
      };
      
      fetch("http://localhost:3000/users", userObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object);
      })
      .catch(function(error) {
        alert("Bad things!");
        console.log(error.message);
      }); 

    