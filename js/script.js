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