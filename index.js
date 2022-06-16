let lightMode = false

document.getElementById("light-dark-button").addEventListener("click", toggleMode)

function toggleMode() {
    if (lightMode === false) {
        lightMode = true
        document.body.style.backgroundColor = "rgb(240, 238, 244)"
        document.getElementById("home-button").style.color = "rgb(31, 32, 40)"
        document.getElementById("title").style.color = "rgb(31, 32, 40)"
        document.getElementById("projects-button").style.color = "rgb(31, 32, 40)"
        document.getElementById("about-button").style.color = "rgb(31, 32, 40)"
        document.getElementById("summary").style.color = "rgb(31, 32, 40)"
        document.getElementById("summary2").style.color = "rgb(31, 32, 40)"
        document.getElementById("linkedin-text").style.color = "rgb(31, 32, 40)"
        document.getElementById("github-text").style.color = "rgb(31, 32, 40)"
        document.getElementById("home-button").className = "underline-light"
        document.getElementById("projects-button").className = "underline-light"
        document.getElementById("about-button").className = "underline-light"
    } else {
        lightMode = false
        document.body.style.backgroundColor = "rgb(31, 32, 40)"
        document.getElementById("home-button").style.color = "rgb(240, 238, 244)"
        document.getElementById("title").style.color = "rgb(240, 238, 244)"
        document.getElementById("projects-button").style.color = "rgb(240, 238, 244)"
        document.getElementById("about-button").style.color = "rgb(240, 238, 244)"
        document.getElementById("summary").style.color = "rgb(240, 238, 244)"
        document.getElementById("summary2").style.color = "rgb(240, 238, 244)"
        document.getElementById("linkedin-text").style.color = "rgb(240, 238, 244)"
        document.getElementById("github-text").style.color = "rgb(240, 238, 244)"
        document.getElementById("home-button").className = "underline"
        document.getElementById("projects-button").className = "underline"
        document.getElementById("about-button").className = "underline"
    }
    console.log(lightMode)
}

// Changes for project box #1
document.getElementById("img-container1").addEventListener("mouseover", showButtons1)
document.getElementById("img-container1").addEventListener("mouseout", hideButtons1)

function showButtons1() {
    document.getElementById(`img-button-a`).style.opacity = "1"
    document.getElementById(`img-button-a`).style.border = "3px solid white"
    document.getElementById(`img-button-b`).style.opacity = "1"
    document.getElementById(`img-button-b`).style.border = "3px solid white"
    document.getElementById(`img-button-c`).style.opacity = "1"
    document.getElementById(`img-button-c`).style.border = "3px solid white"
    document.getElementById(`project-img1`).style.opacity = "0.15"
    document.getElementById(`made-with1`).style.opacity = "1"
}

function hideButtons1() {
    document.getElementById("img-button-a").style.opacity = "0"
    document.getElementById("img-button-b").style.opacity = "0"
    document.getElementById("img-button-c").style.opacity = "0"
    document.getElementById("project-img1").style.opacity = "1"
    document.getElementById(`made-with1`).style.opacity = "0"
}

// Changes for project box #2
document.getElementById("img-container2").addEventListener("mouseover", showButtons2)
document.getElementById("img-container2").addEventListener("mouseout", hideButtons2)

function showButtons2() {
    document.getElementById(`img-button-d`).style.opacity = "1"
    document.getElementById(`img-button-d`).style.border = "3px solid white"
    document.getElementById(`img-button-e`).style.opacity = "1"
    document.getElementById(`img-button-e`).style.border = "3px solid white"
    document.getElementById(`img-button-f`).style.opacity = "1"
    document.getElementById(`img-button-f`).style.border = "3px solid white"
    document.getElementById(`project-img2`).style.opacity = "0.15"
    document.getElementById(`made-with2`).style.opacity = "1"
}

function hideButtons2() {
    document.getElementById("img-button-d").style.opacity = "0"
    document.getElementById("img-button-e").style.opacity = "0"
    document.getElementById("img-button-f").style.opacity = "0"
    document.getElementById("project-img2").style.opacity = "1"
    document.getElementById(`made-with2`).style.opacity = "0"
}

// Changes for project box #3
document.getElementById("img-container3").addEventListener("mouseover", showButtons3)
document.getElementById("img-container3").addEventListener("mouseout", hideButtons3)

function showButtons3() {
    document.getElementById(`img-button-g`).style.opacity = "1"
    document.getElementById(`img-button-g`).style.border = "3px solid white"
    document.getElementById(`img-button-h`).style.opacity = "1"
    document.getElementById(`img-button-h`).style.border = "3px solid white"
    document.getElementById(`img-button-i`).style.opacity = "1"
    document.getElementById(`img-button-i`).style.border = "3px solid white"
    document.getElementById(`project-img3`).style.opacity = "0.15"
    document.getElementById(`made-with3`).style.opacity = "1"
}

function hideButtons3() {
    document.getElementById("img-button-g").style.opacity = "0"
    document.getElementById("img-button-h").style.opacity = "0"
    document.getElementById("img-button-i").style.opacity = "0"
    document.getElementById("project-img3").style.opacity = "1"
    document.getElementById(`made-with3`).style.opacity = "0"

}

// Changes for project box #4
document.getElementById("img-container4").addEventListener("mouseover", showButtons4)
document.getElementById("img-container4").addEventListener("mouseout", hideButtons4)

function showButtons4() {
    document.getElementById(`img-button-j`).style.opacity = "1"
    document.getElementById(`img-button-j`).style.border = "3px solid white"
    document.getElementById(`img-button-k`).style.opacity = "1"
    document.getElementById(`img-button-k`).style.border = "3px solid white"
    document.getElementById(`img-button-l`).style.opacity = "1"
    document.getElementById(`img-button-l`).style.border = "3px solid white"
    document.getElementById(`project-img4`).style.opacity = "0.15"
    document.getElementById(`made-with4`).style.opacity = "1"
}

function hideButtons4() {
    document.getElementById("img-button-j").style.opacity = "0"
    document.getElementById("img-button-k").style.opacity = "0"
    document.getElementById("img-button-l").style.opacity = "0"
    document.getElementById("project-img4").style.opacity = "1"
    document.getElementById(`made-with4`).style.opacity = "0"
}