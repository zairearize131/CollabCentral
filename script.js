// Translation Dictionary for Language Toggle
const translations = {
  en: {
    siteLogo: "Creative Hub",
    lblLang: "Language:",
    lblTheme: "Theme:",
    headingProfileSetup: "Profile Setup",
    lblName: "Full Name *",
    lblDob: "Date of Birth *",
    lblEmail: "Email (Optional)",
    lblPhone: "Phone Number (Optional)",
    btnSaveProfile: "Create Profile",
    btnEditProfile: "Edit Profile",
    lblLikes: "Likes",
    lblPosts: "Posts",
    lblViews: "Views",
    lblFollowers: "Followers",
    lblFollowing: "Following",
    headingMusic: "Music Creation",
    descMusic: "Compose, mix, and record audio tracks seamlessly.",
    headingGaming: "Gaming",
    descGaming: "Build, test, and host interactive games.",
    headingStreaming: "Streaming",
    descStreaming: "Broadcast live content, host shows, and engage audience."
  },
  es: {
    siteLogo: "Centro Creativo",
    lblLang: "Idioma:",
    lblTheme: "Tema:",
    headingProfileSetup: "Configuración del Perfil",
    lblName: "Nombre Completo *",
    lblDob: "Fecha de Nacimiento *",
    lblEmail: "Correo Electrónico (Opcional)",
    lblPhone: "Teléfono (Opcional)",
    btnSaveProfile: "Crear Perfil",
    btnEditProfile: "Editar Perfil",
    lblLikes: "Me gusta",
    lblPosts: "Publicaciones",
    lblViews: "Vistas",
    lblFollowers: "Seguidores",
    lblFollowing: "Siguiendo",
    headingMusic: "Creación de Música",
    descMusic: "Compón, mezcla y graba pistas de audio sin problemas.",
    headingGaming: "Juegos",
    descGaming: "Construye, prueba y aloja juegos interactivos.",
    headingStreaming: "Transmisión",
    descStreaming: "Transmite en vivo, presenta programas e interactúa."
  },
  fr: {
    siteLogo: "Centre Créatif",
    lblLang: "Langue:",
    lblTheme: "Thème:",
    headingProfileSetup: "Configuration du Profil",
    lblName: "Nom Complet *",
    lblDob: "Date de Naissance *",
    lblEmail: "E-mail (Optionnel)",
    lblPhone: "Téléphone (Optionnel)",
    btnSaveProfile: "Créer un Profil",
    btnEditProfile: "Modifier le Profil",
    lblLikes: "J'aime",
    lblPosts: "Publications",
    lblViews: "Vues",
    lblFollowers: "Abonnés",
    lblFollowing: "Abonnements",
    headingMusic: "Création Musicale",
    descMusic: "Composez, mixez et enregistrez des pistes audio.",
    headingGaming: "Jeux Vidéo",
    descGaming: "Créez, testez et hébergez des jeux interactifs.",
    headingStreaming: "Streaming",
    descStreaming: "Diffusez en direct, animez des émissions et interagissez."
  }
};

// DOM Elements
const profileForm = document.getElementById('profile-form');
const profileDisplay = document.getElementById('profile-display');
const displayName = document.getElementById('display-name');
const btnEditProfile = document.getElementById('btn-edit-profile');
const langSelect = document.getElementById('lang-select');
const themeSelect = document.getElementById('theme-select');

// Sanitize inputs to prevent Cross-Site Scripting (XSS)
function sanitizeInput(input) {
  const temp = document.createElement('div');
  temp.textContent = input;
  return temp.innerHTML;
}

// Profile Creation Handling
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nameVal = sanitizeInput(document.getElementById('name').value);
  if (!nameVal) return;

  displayName.textContent = nameVal;
  profileForm.classList.add('hidden');
  profileDisplay.classList.remove('hidden');
});

// Edit Profile Handling
btnEditProfile.addEventListener('click', () => {
  profileDisplay.classList.add('hidden');
  profileForm.classList.remove('hidden');
});

// Dynamic Language Switching
langSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  const t = translations[lang];

  document.getElementById('site-logo').textContent = t.siteLogo;
  document.getElementById('lbl-lang').textContent = t.lblLang;
  document.getElementById('lbl-theme').textContent = t.lblTheme;
  document.getElementById('heading-profile-setup').textContent = t.headingProfileSetup;
  document.getElementById('lbl-name').textContent = t.lblName;
  document.getElementById('lbl-dob').textContent = t.lblDob;
  document.getElementById('lbl-email').textContent = t.lblEmail;
  document.getElementById('lbl-phone').textContent = t.lblPhone;
  document.getElementById('btn-save-profile').textContent = t.btnSaveProfile;
  document.getElementById('btn-edit-profile').textContent = t.btnEditProfile;
  document.getElementById('lbl-likes').textContent = t.lblLikes;
  document.getElementById('lbl-posts').textContent = t.lblPosts;
  document.getElementById('lbl-views').textContent = t.lblViews;
  document.getElementById('lbl-followers').textContent = t.lblFollowers;
  document.getElementById('lbl-following').textContent = t.lblFollowing;
  document.getElementById('heading-music').textContent = t.headingMusic;
  document.getElementById('desc-music').textContent = t.descMusic;
  document.getElementById('heading-gaming').textContent = t.headingGaming;
  document.getElementById('desc-gaming').textContent = t.descGaming;
  document.getElementById('heading-streaming').textContent = t.headingStreaming;
  document.getElementById('desc-streaming').textContent = t.descStreaming;
});

// Dynamic Theme Switching
themeSelect.addEventListener('change', (e) => {
  const theme = e.target.value;
  document.body.className = ''; // Reset theme classes
  if (theme !== 'default') {
    document.body.classList.add(`theme-${theme}`);
  }
});

// Action button trigger handler
function handleAction(section, action) {
  alert(`${action} triggered for the ${section} section.`);
}