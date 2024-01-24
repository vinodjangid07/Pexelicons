const visualTogglebutton = document.getElementById('visual-toggle-button');
const checkbox = document.getElementById('visual-toggle');

function visualMode(){
    if(checkbox.checked){
        visualTogglebutton.classList.toggle('lightmode');
        document.body.classList.toggle('lightcolors');
    }
    else{
        visualTogglebutton.classList.toggle('animate')
    }
}


const downloadBtn = document.querySelectorAll('.download-icon');
downloadBtn.forEach((currentBtn) =>{
    currentBtn.addEventListener("click",() =>{
        let fileFetch = currentBtn.previousElementSibling.querySelector('h5');
        var fileName = fileFetch.innerHTML;
        var image = currentBtn.previousElementSibling.querySelector('img');

        var imgPath = image.getAttribute('src');
       console.log(imgPath);
       saveAs(imgPath, fileName);  

    });
})
     