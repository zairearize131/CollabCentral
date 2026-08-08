// Application State & Interaction Manager
document.addEventListener('DOMContentLoaded', () => {
    // Component References
    const pwaInstallBtn = document.getElementById('pwaInstallBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const fabCreate = document.getElementById('fabCreate');
    const likeBtns = document.querySelectorAll('.like-btn');
    const navItems = document.querySelectorAll('.nav-item, .bottom-nav-item');

    let deferredPrompt = null;
    let isPlaying = false;

    // 1. PWA Install Prompt Capture Handler
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        pwaInstallBtn.hidden = false; // Show install button in top navbar
    });

    pwaInstallBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('User installed the PWA');
        }
        deferredPrompt = null;
        pwaInstallBtn.hidden = true;
    });

    // 2. Navigation State Switcher
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetView = item.dataset.target;
            
            // Remove active classes across all navigation elements
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Highlight target item in both desktop & mobile views
            document.querySelectorAll(`[data-target="${targetView}"]`).forEach(el => {
                el.classList.add('active');
            });

            console.log(`Switched view to: ${targetView}`);
        });
    });

    // 3. Media Player Dock Controls
    playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playPauseBtn.textContent = isPlaying ? '⏸️' : '▶️';
        console.log(isPlaying ? "Media playback started." : "Media playback paused.");
    });

    // 4. Create / Upload Floating Action Button Action
    fabCreate.addEventListener('click', () => {
        alert("Create Modal Opened:\n- Create Text/Image Post\n- Upload Audio Track\n- Go Live Stream\n- Launch Gaming Lobby");
    });

    // 5. Interactive Post Reactions (Like Button Toggle)
    likeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const countSpan = btn.querySelector('.like-count');
            let currentLikes = parseInt(countSpan.textContent, 10);
            
            if (btn.classList.contains('liked')) {
                btn.classList.remove('liked');
                btn.style.color = '';
                countSpan.textContent = currentLikes - 1;
            } else {
                btn.classList.add('liked');
                btn.style.color = '#ef4444'; // Highlight red
                countSpan.textContent = currentLikes + 1;
            }
        });
    });

    // 6. Register Service Worker for PWA Capability
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('Service Worker registered successfully:', reg.scope))
                .catch(err => console.error('Service Worker registration failed:', err));
        });
    }
});