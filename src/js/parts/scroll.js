document.querySelectorAll('.btn-scroll')?.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-id');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});