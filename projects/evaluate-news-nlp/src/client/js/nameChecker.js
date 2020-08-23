function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        return "Welcome, Captain!"
    }
    
    if(inputText==="Rayshawn") {
        return "I Love Udacity!"
    }
}

export { checkForName }
