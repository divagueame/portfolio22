// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import './simpleLightbox.js'



console.log('Chec'); 
// window.addEventListener('DOMContentLoaded', (event) => {


        // TeamTask Gallery
        const teamTaskImagesTrigger = document.querySelector('#teamtasktrigger');
        teamTaskImagesTrigger.addEventListener('click', (e) => {
        console.log(SimpleLightbox, 'DOM fully loaded and parsed');
        e.preventDefault()
        // SimpleLightbox.open({
        //         items: ['img/projects/teamtask/1.gif', 'img/projects/teamtask/2.png', 'img/projects/teamtask/3.png']
        // });
        
        })
// });