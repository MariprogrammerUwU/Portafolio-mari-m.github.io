const circles = document.querySelectorAll('circle');
const percentages = [70, 80, 80, 80];
let animated = false; 

function animateCircle(circle, percentage, duration) {
    let start = null;
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);
        const offset = circumference * (1 - (percentage / 100) * progressPercentage);
        circle.style.strokeDashoffset = offset;

        if (progressPercentage < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && 
        rect.bottom > 0 
    );
}

function handleScroll() {
    const inViewport = Array.from(circles).some(circle => isElementInViewport(circle));
    if (inViewport && !animated) {
        circles.forEach((circle, index) => {
            animateCircle(circle, percentages[index], 3000); // 3 segundos
        });
        animated = true; // Marcar como animado
    } else if (!inViewport) {
        animated = false; // Resetear cuando los círculos salen de la vista
    }
}

// Agregar evento de scroll
window.addEventListener('scroll', handleScroll);













