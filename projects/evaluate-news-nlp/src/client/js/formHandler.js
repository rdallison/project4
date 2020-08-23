import { Body } from "node-fetch"

function handleSubmit(event) {
    event.preventDefault()

        const text = document.getElementById('name').value;
        // send that information to back end
        fetch(`/response/:${text}`)
        .then(results => results.json())
        .then(response => {
        console.log(response)
         displayResults(response)
        })

    //Client.checkForName(formText)
    //console.log("::: Form Submitted :::")
    //fetch('http://localhost:8081/test')
    //.then(res => res.json())
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.message
    //})
}

function displayResults(data = {}) {
    const form = document.getElementById('results');
    form.innerHTML = data.model;
} 

export { handleSubmit }
