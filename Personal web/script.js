// untuk mengatur halaman aktif ketika tautan diklik
const navLinks = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');

        pages.forEach(page => {
            if (page.classList.contains('active')) {
                page.classList.remove('active');
            }
        });

        document.querySelector(`.${targetPage}-page`).classList.add('active');
    });
});

// untuk mengatur galeri gambar yang berubah saat diklik
const galleryImages = document.querySelectorAll('.image-gallery img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const currentImage = image.src;
        alert(`Anda mengklik gambar dengan sumber: ${currentImage}`);
    });
});

// untuk mengatur tema default saat memuat halaman
function setDefaultTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

// untuk mengaktifkan Light Mode
function enableLightMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
}

// untuk mengaktifkan Dark Mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
}

// Event listener untuk tombol Light Mode
document.getElementById('lightMode').addEventListener('click', () => {
    enableLightMode();
});

// Event listener untuk tombol Dark Mode
document.getElementById('darkMode').addEventListener('click', () => {
    enableDarkMode();
});

// Panggil fungsi untuk mengatur tema default saat memuat halaman
setDefaultTheme();
