function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        const newId = document.createElement('p');
        newId.textContent = object.id;
        document.body.appendChild(newId);
      })
      .catch(function(error) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
      });
  }
  
