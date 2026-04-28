// API Endpoint - https://restcountries.com/v3.1/name/{countryName}
const apiEndpoint = "https://restcountries.com/v3.1/name/"

const searchCountry = () =>  {
    // Get user's input
    const userInput = document.getElementById('countryInput').value

    // Input validation
    if (userInput.trim() === '') {
        errorMsgElement = document.getElementById('errorMsg')
        errorMsg.style.display = 'block'
        errorMsg.innerText = 'Please enter a valid input!'
    }
}