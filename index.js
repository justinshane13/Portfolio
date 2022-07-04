// Default of page is dark mode
let lightMode = false

// Function to toggle between light and dark mode
document.getElementById("mode-button").addEventListener("click", toggleMode)

// Function to handle all css changes between light and dark mode
function toggleMode() {
    if (lightMode === false) {
        lightMode = true
        document.body.style.backgroundColor = "rgb(240, 238, 244)"
        document.body.style.text = "rgb(240, 238, 244)"
        document.getElementById("navbar").style.backgroundColor = "rgb(240, 238, 244)"
        document.getElementById("slider-round").textContent = "Light"
        document.getElementById("slider-round").style.textAlign = "left"
        document.getElementById("slider-round").style.color = "rgb(240, 238, 244)"
        document.getElementById("slider-round").textContent = "Light"
        document.getElementById("home-button").style.color = "rgb(31, 32, 40)"
        document.getElementById("projects-button").style.color = "rgb(31, 32, 40)"
        document.getElementById("about-button").style.color = "rgb(31, 32, 40)"
        document.getElementById("contact-button").style.color = "rgb(31, 32, 40)"
        document.getElementById("title").style.color = "rgb(31, 32, 40)"
        document.getElementById("role").style.color = "rgb(31, 32, 40)"
        document.getElementById("summary").style.color = "rgb(31, 32, 40)"
        document.getElementById("summary2").style.color = "rgb(31, 32, 40)"
        document.getElementById("linkedin-text").style.color = "rgb(31, 32, 40)"
        document.getElementById("github-text").style.color = "rgb(31, 32, 40)"
        document.getElementById("email-text").style.color = "rgb(31, 32, 40)"
        document.getElementById("projects-container").style.color = "rgb(31, 32, 40)" 
        document.getElementById("projects-section-title").style.color = "rgb(31, 32, 40)"
        document.getElementById("home-button").className = "underline-light"
        document.getElementById("projects-button").className = "underline-light"
        document.getElementById("about-container").style.color = "rgb(31, 32, 40)" 
        document.getElementById("about-button").className = "underline-light"
        document.getElementById("linkedin-image").src = "./images/linkedin-dark.png"
        document.getElementById("github-image").src = "./images/GitHub-Mark-32px.png"
        document.getElementById("email-image").src = "./images/mail-dark.svg"
    } else {
        lightMode = false
        document.body.style.backgroundColor = "rgb(31, 32, 40)"
        document.body.style.text = "rgb(31, 32, 40)"
        document.getElementById("navbar").style.backgroundColor = "rgb(31, 32, 40)"
        document.getElementById("slider-round").textContent = "Dark"
        document.getElementById("slider-round").style.textAlign = "right"
        document.getElementById("slider-round").style.color = "rgb(31, 32, 40)"
        document.getElementById("home-button").style.color = "rgb(240, 238, 244)"
        document.getElementById("projects-button").style.color = "rgb(240, 238, 244)"
        document.getElementById("about-button").style.color = "rgb(240, 238, 244)"
        document.getElementById("contact-button").style.color = "rgb(240, 238, 244)"
        document.getElementById("title").style.color = "rgb(240, 238, 244)"
        document.getElementById("role").style.color = "rgb(240, 238, 244)"
        document.getElementById("summary").style.color = "rgb(240, 238, 244)"
        document.getElementById("summary2").style.color = "rgb(240, 238, 244)"
        document.getElementById("linkedin-text").style.color = "rgb(240, 238, 244)"
        document.getElementById("github-text").style.color = "rgb(240, 238, 244)"
        document.getElementById("email-text").style.color = "rgb(240, 238, 244)"
        document.getElementById("projects-container").style.color = "rgb(240, 238, 244)" 
        document.getElementById("projects-section-title").style.color = "rgb(240, 238, 244)"
        document.getElementById("home-button").className = "underline"
        document.getElementById("projects-button").className = "underline"
        document.getElementById("about-container").style.color = "rgb(240, 238, 244)" 
        document.getElementById("about-button").className = "underline"
        document.getElementById("linkedin-image").src = "./images/linkedin-light.png"
        document.getElementById("github-image").src = "./images/GitHub-Mark-Light-120px-plus.png"
        document.getElementById("email-image").src = "./images/mail.svg"
    }
}

// Changes for project box #1
document.getElementById("img-container1").addEventListener("mouseover", showButtons1)
document.getElementById("img-container1").addEventListener("mouseout", hideButtons1)

function showButtons1() {
    document.getElementById(`img-button-a`).style.opacity = "1"
    document.getElementById(`img-button-b`).style.opacity = "1"
    document.getElementById(`project-img1`).style.opacity = "0.15"
    document.getElementById(`made-with1`).style.opacity = "1"
}

function hideButtons1() {
    document.getElementById("img-button-a").style.opacity = "0"
    document.getElementById("img-button-b").style.opacity = "0"
    document.getElementById("project-img1").style.opacity = "1"
    document.getElementById(`made-with1`).style.opacity = "0"
}

// Changes for project box #2
document.getElementById("img-container2").addEventListener("mouseover", showButtons2)
document.getElementById("img-container2").addEventListener("mouseout", hideButtons2)

function showButtons2() {
    document.getElementById(`img-button-d`).style.opacity = "1"
    document.getElementById(`img-button-e`).style.opacity = "1"
    document.getElementById(`project-img2`).style.opacity = "0.15"
    document.getElementById(`made-with2`).style.opacity = "1"
}

function hideButtons2() {
    document.getElementById("img-button-d").style.opacity = "0"
    document.getElementById("img-button-e").style.opacity = "0"
    document.getElementById("project-img2").style.opacity = "1"
    document.getElementById(`made-with2`).style.opacity = "0"
}

// Changes for project box #3
document.getElementById("img-container3").addEventListener("mouseover", showButtons3)
document.getElementById("img-container3").addEventListener("mouseout", hideButtons3)

function showButtons3() {
    document.getElementById(`img-button-g`).style.opacity = "1"
    document.getElementById(`img-button-h`).style.opacity = "1"
    document.getElementById(`project-img3`).style.opacity = "0.15"
    document.getElementById(`made-with3`).style.opacity = "1"
}

function hideButtons3() {
    document.getElementById("img-button-g").style.opacity = "0"
    document.getElementById("img-button-h").style.opacity = "0"
    document.getElementById("project-img3").style.opacity = "1"
    document.getElementById(`made-with3`).style.opacity = "0"

}

// Changes for project box #4
document.getElementById("img-container4").addEventListener("mouseover", showButtons4)
document.getElementById("img-container4").addEventListener("mouseout", hideButtons4)

function showButtons4() {
    document.getElementById(`img-button-j`).style.opacity = "1"
    document.getElementById(`img-button-k`).style.opacity = "1"
    document.getElementById(`project-img4`).style.opacity = "0.15"
    document.getElementById(`made-with4`).style.opacity = "1"
}

function hideButtons4() {
    document.getElementById("img-button-j").style.opacity = "0"
    document.getElementById("img-button-k").style.opacity = "0"
    document.getElementById("project-img4").style.opacity = "1"
    document.getElementById(`made-with4`).style.opacity = "0"
}

// Function to open email form
function sendEmail() {
    window.location = "mailto:justinshane13@gmail.com"
}