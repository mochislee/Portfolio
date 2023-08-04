let previeContainer = document.querySelector('.poducts-preview');
let previewBox = previewContainer.querySelector('.preview');

document.querySelectorAll('.project-container .project').forEach(project =>{
    project.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == taget){
                preview.classList.add('active');
            }
        })
    }
})

function togglePopup1(){
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active");
}
