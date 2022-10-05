function saveFileToText() {
    $(document).ready(function () {
        $('.selection').change(function () {
            alert( $('.selection option:selected').text());
        });
    });
    const helpOption = document.getElementById("selectOption1");
    const fullName = document.getElementById("modalFullName1");
    const contactNumber = document.getElementById("modalContactNumber1");
    const emailAddress = document.getElementById("modalEmail1");
    const country = document.getElementById("modalCountry1")
    const message = document.getElementById("modalMessage1")

    const selected = $('.selection option:selected').text()
    
    let data = "\r Help Mode:" + selected + "\r\n" +
    "Full Name:" + fullName.value + "\r\n" +
    "Contact Number:" + contactNumber.value + "\r\n" +
    "Email Address:" + emailAddress.value + "\r\n" +
    "Country of Origin:" + country.value + "\r\n" +
    "Message:" + message.value + "\r\n" +
    "--------------------------------------------------------" 
    const textBlob = new Blob([data],{type: "text/plain"})
    // console.log(textBlob)
    const sfileName = "collection.txt"
    let newLink = document.createElement("a")
    newLink.download = sfileName
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textBlob)
        console.log(newLink)
    } else {
        newLink.href = window.URL.createObjectURL(textBlob)
        newLink.style.display = none
        document.body.appendChild(newLink)
    }
    newLink.click()
}
function saveDetailsToFile () {
    $(document).ready(function () {
        $('.selection').change(function () {
            alert( $('.selection option:selected1').text());
        });
    });
    $(document).ready(function () {
        $('.selection').change(function () {
            alert( $('.selection option:selected2').text());
        });
    });
    const selectProj = document.getElementById("selectOption2")
    const selectBudgetRange = document.getElementById("selectOption3")
    const fullName = document.getElementById("modalFullName2")
    const contactNumber = document.getElementById("modalContactNumber2")
    const emailAddress = document.getElementById("modalEmail2")
    const residentailAddress = document.getElementById("modalResidentialAddress2")
    const country = document.getElementById("modalCountry2")

    const selected = $('.selection option:selected').text()

    let data = "\r Donation Project:" + selected + "\r\n" +
    //"Budget Range:" + selected2 + "\r\n"
    "Full Name:" + fullName.value + "\r\n" +
    "Comtact Number:" + contactNumber.value + "\r\n" +
    "Email Address:" + emailAddress.value + "\r\n" +
    "Residential Address:" + residentailAddress.value + "\r\n" +
    "Country:" + country.value + "\r\n" +
    "-------------------------------------------------------"
    const textBlob = new Blob([data],{type: "text/plain"})
    // console.log(textBlob)
    const sfileName = "collection.txt"
    let newLink = document.createElement("a")
    newLink.download = sfileName
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textBlob)
        console.log(newLink)
    } else {
        newLink.href = window.URL.createObjectURL(textBlob)
        newLink.style.display = none
        document.body.appendChild(newLink)
    }
    newLink.click()
}