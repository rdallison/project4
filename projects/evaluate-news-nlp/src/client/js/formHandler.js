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
}

function displayResults(data = {}) {
    const form = document.getElementById('results');
    form.innerHTML = 
    `agreement: ${data.agreement}
     irony: ${data.irony}
     model: ${data.model}
     subjectivity: ${data.subjectivity}
     confidence #:${data.confidence}
    `
} 

export { handleSubmit }
