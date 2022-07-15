// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

document.querySelector('#toggle-menu').addEventListener('click', toggleMenu)
document.querySelector('#toggle-menu-mobile').addEventListener('click', toggleMenu)
 
function toggleMenu(e) { 
        console.log('cli')
        document.querySelector('.menu-mobile').classList.toggle('menu-active');
        // document.querySelector('#content').classList.toggle('menu-active');
}