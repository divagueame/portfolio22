// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

document.querySelector('.action-btn').addEventListener('click', toggleMenu)
document.querySelector('.action-btn-2').addEventListener('click', toggleMenu) 
 
function toggleMenu(e) { 
        document.querySelector('.menu').classList.toggle('active');
        document.querySelector('.content').classList.toggle('inactive');
        document.querySelector('.action-btn').classList.toggle('inactive'); 
}