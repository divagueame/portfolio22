// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// Toggle menu
document.getElementById('menu').addEventListener('click', function (e) { 
        if (e.currentTarget === e.target) {
                document.getElementById('menu').classList.remove('show2');
                document.getElementById('menu').classList.add('show1');
                setTimeout(() => {
                        document.getElementById('menu').classList.remove('show1');
                        document.getElementById('content').classList.remove('blur');
                }, 10);
        }
})
document.getElementById('menu-trigger').addEventListener('click', function () { 
        document.getElementById('content').classList.add('blur');
        document.getElementById('menu').classList.add('show1');
        setTimeout(() => {
                document.getElementById('menu').classList.add('show2'); 
        }, 10);
        
});
