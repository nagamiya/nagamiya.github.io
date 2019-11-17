function change_hidden(idx) { 
    div = document.getElementsByClassName("development-intro")
    if (div[idx].style.display == "none") {
        div[idx].style.display = "block"
    } else { 
        div[idx].style.display = "none"
    }
}