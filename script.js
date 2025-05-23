document.addEventListener('DOMContentLoaded', () => {
    // Manejo de la navegación entre secciones
    const sections = document.querySelectorAll('.section');
    const hotspots = document.querySelectorAll('.hotspot');
    const backButtons = document.querySelectorAll('.back-button');

    // Función para mostrar una sección específica
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });
    }

    // Manejar clicks en los hotspots
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = hotspot.getAttribute('href').substring(1);
            showSection(targetId);
            
            // Efecto de hover
            hotspot.style.animation = 'pulse 1s infinite';
            setTimeout(() => {
                hotspot.style.animation = 'none';
            }, 1000);
        });
    });

    // Manejar clicks en los botones de volver
    backButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('main');
        });
    });

    // Efecto de movimiento del mouse para los hotspots
    document.addEventListener('mousemove', (e) => {
        if (document.querySelector('#main').classList.contains('active')) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            hotspots.forEach(hotspot => {
                const rect = hotspot.getBoundingClientRect();
                const hotspotX = (rect.left + rect.width / 2) / window.innerWidth;
                const hotspotY = (rect.top + rect.height / 2) / window.innerHeight;

                const deltaX = (x - hotspotX) * 20;
                const deltaY = (y - hotspotY) * 20;

                hotspot.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            });
        }
    });

    // Manejar la navegación con el historial del navegador
    window.addEventListener('popstate', (e) => {
        const hash = window.location.hash || '#main';
        showSection(hash.substring(1));
    });

    // Inicializar la sección activa basada en el hash de la URL
    const initialHash = window.location.hash || '#main';
    showSection(initialHash.substring(1));
});

// Add some detective-style effects
document.addEventListener('mousemove', (e) => {
    const hotspots = document.querySelectorAll('.hotspot');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    hotspots.forEach(hotspot => {
        const rect = hotspot.getBoundingClientRect();
        const hotspotX = (rect.left + rect.width / 2) / window.innerWidth;
        const hotspotY = (rect.top + rect.height / 2) / window.innerHeight;

        const deltaX = (x - hotspotX) * 20;
        const deltaY = (y - hotspotY) * 20;

        hotspot.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
}); 