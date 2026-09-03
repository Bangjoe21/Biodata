/**
 * BioVibrant - Interactive Bio Data & Personal Website Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. Default Data & State Management
    // ----------------------------------------------------------------------
    const translations = {
        id: {
            "nav.home": "Beranda",
            "nav.bio": "Biodata",
            "nav.skills": "Keahlian",
            "nav.experience": "Pengalaman",
            "nav.portfolio": "Portofolio",
            "nav.contact": "Kontak",
            "nav.editBio": "Edit Bio",
            "nav.printCv": "Cetak CV",
            "hero.greeting": "Halo, Selamat Datang di Bio Profil Saya",
            "hero.typingPrefix": "Saya seorang ",
            "hero.degree": "Teknik Komputer",
            "hero.ctaContact": "Hubungi Saya",
            "hero.ctaBio": "Lihat Biodata Lengkap",
            "stats.exp": "Tahun Pengalaman",
            "stats.projects": "Proyek Selesai",
            "stats.clients": "Klien Puas",
            "stats.quality": "% Komitmen Kualitas",
            "section.bio.tag": "Profil Informasi",
            "section.bio.title1": "Biodata",
            "section.bio.title2": "Diri Lengkap",
            "section.bio.subtitle": "Rincian identitas pribadi, informasi kontak, latar belakang, dan hobi kegemaran.",
            "bio.card1.title": "Identitas Pribadi",
            "bio.label.fullname": "Nama Lengkap",
            "bio.label.nickname": "Nama Panggilan",
            "bio.label.pobdob": "Tempat, Tgl Lahir",
            "bio.label.gender": "Jenis Kelamin",
            "bio.label.religion": "Agama",
            "bio.label.nationality": "Kewarganegaraan",
            "bio.card2.title": "Kontak & Domisili",
            "bio.label.email": "Email Utama",
            "bio.label.phone": "Nomor Telepon / WA",
            "bio.label.address": "Alamat Lengkap",
            "bio.label.marital": "Status Perkawinan",
            "bio.label.job": "Pekerjaan Saat Ini",
            "bio.label.website": "Website Personal",
            "bio.card3.title": "Minat & Hobi",
            "bio.card3.subtitle": "Penguasaan Bahasa",
            "lang.id": "Bahasa Indonesia",
            "lang.en": "Bahasa Inggris",
            "section.skills.tag": "Kemampuan Teknis",
            "section.skills.title1": "Keahlian &",
            "section.skills.title2": "Kompetensi",
            "filter.all": "Semua Skill",
            "section.skills.subtitle": "Teknologi dan keterampilan yang saya kuasai dalam pengembangan perangkat lunak.",
            "skill.soft.title": "Problem Solving & Adaptabilitas",
            "skill.soft.desc": "Analisis Masalah, Pemikiran Kritis, Komunikasi Tim, Manajemen Waktu, Fast Learning.",
            "section.timeline.tag": "Rekam Jejak",
            "section.timeline.title1": "Pengalaman &",
            "section.timeline.title2": "Pendidikan",
            "section.timeline.subtitle": "Perjalanan karier profesional dan latar belakang akademis saya.",
            "timeline.now": "2024 - Sekarang",
            "timeline.desc1": "Memimpin tim frontend dalam mengembangkan aplikasi manajemen cloud enterprise skala besar, meningkatkan kecepatan muat sebesar 40%, dan mengimplementasikan arsitektur micro-frontend.",
            "timeline.desc2": "Merancang wireframe, prototype interaktif di Figma, dan mengimplementasikannya menjadi kode HTML/CSS/JS yang responsif serta ramah SEO untuk lebih dari 20 klien startup.",
            "timeline.desc3": "Lulus dengan predikat Cum Laude (IPK 3.85/4.00). Aktif di Organisasi Himpunan Mahasiswa Informatika dan ketua divisi Web & Publication.",
            "timeline.desc4": "Menyelesaikan sertifikasi intensif dalam keahlian arsitektur cloud, keamanan web OWASP, dan pengujian performa tinggi.",
            "section.portfolio.tag": "Galeri Proyek",
            "section.portfolio.title1": "Portofolio",
            "section.portfolio.title2": "Karya Pilihan",
            "section.portfolio.subtitle": "Beberapa hasil karya aplikasi web dan sistem yang telah saya kembangkan.",
            "port.title1": "Sistem Kasir Cloud (Smart POS)",
            "port.desc1": "Aplikasi kasir multi-outlet dengan fitur inventaris real-time, laporan penjualan grafik, dan integrasi pembayaran QRIS.",
            "port.desc2": "Dashboard pemantauan performa bisnis secara interaktif dengan sistem notifikasi pintar dan visualisasi data tinggi.",
            "port.desc3": "Aplikasi pengelola keuangan pribadi dengan pencatatan otomatis, kalkulator target tabungan, dan ekspor laporan bulanan.",
            "port.demo": "Demo Live",
            "port.source": "Source",
            "section.contact.tag": "Terhubung",
            "section.contact.title1": "Hubungi",
            "section.contact.title2": "Saya",
            "section.contact.subtitle": "Tertarik bekerjasama atau ingin bertanya sesuatu? Silakan kirimkan pesan di bawah ini.",
            "contact.info.title": "Informasi Kontak",
            "contact.info.desc": "Jangan ragu untuk menghubungi saya melalui kontak berikut atau formulir langsung.",
            "contact.label.email": "Email Direct",
            "contact.label.wa": "WhatsApp Chat",
            "contact.label.loc": "Lokasi Saat Ini",
            "contact.btn.wa": "Kirim Pesan via WhatsApp Instant",
            "contact.form.name": "Nama Anda",
            "contact.form.email": "Alamat Email",
            "contact.form.subject": "Subjek Pesan",
            "contact.form.message": "Isi Pesan",
            "contact.btn.submit": "Kirim Pesan Sekarang",
            "footer.copy": "&copy; 2026 Naufal Syadid Achmad. Hak Cipta Dilindungi. Dibuat dengan Warna Cerah & Animasi Interaktif."
        },
        en: {
            "nav.home": "Home",
            "nav.bio": "Biography",
            "nav.skills": "Skills",
            "nav.experience": "Experience",
            "nav.portfolio": "Portfolio",
            "nav.contact": "Contact",
            "nav.editBio": "Edit Bio",
            "nav.printCv": "Print CV",
            "hero.greeting": "Hello, Welcome to My Bio Profile",
            "hero.typingPrefix": "I am a ",
            "hero.degree": "Informatics Engineering",
            "hero.ctaContact": "Contact Me",
            "hero.ctaBio": "View Full Bio",
            "stats.exp": "Years Experience",
            "stats.projects": "Projects Completed",
            "stats.clients": "Satisfied Clients",
            "stats.quality": "% Quality Commitment",
            "section.bio.tag": "Profile Information",
            "section.bio.title1": "Complete",
            "section.bio.title2": "Biography",
            "section.bio.subtitle": "Personal identity details, contact information, background, and hobbies.",
            "bio.card1.title": "Personal Identity",
            "bio.label.fullname": "Full Name",
            "bio.label.nickname": "Nickname",
            "bio.label.pobdob": "Place, Date of Birth",
            "bio.label.gender": "Gender",
            "bio.label.religion": "Religion",
            "bio.label.nationality": "Nationality",
            "bio.card2.title": "Contact & Domicile",
            "bio.label.email": "Main Email",
            "bio.label.phone": "Phone / WA Number",
            "bio.label.address": "Full Address",
            "bio.label.marital": "Marital Status",
            "bio.label.job": "Current Job",
            "bio.label.website": "Personal Website",
            "bio.card3.title": "Interests & Hobbies",
            "bio.card3.subtitle": "Language Proficiency",
            "lang.id": "Indonesian",
            "lang.en": "English",
            "section.skills.tag": "Technical Skills",
            "section.skills.title1": "Skills &",
            "section.skills.title2": "Competencies",
            "filter.all": "All Skills",
            "section.skills.subtitle": "Technologies and skills I have mastered in software development.",
            "skill.soft.title": "Problem Solving & Adaptability",
            "skill.soft.desc": "Problem Analysis, Critical Thinking, Team Communication, Time Management, Fast Learning.",
            "section.timeline.tag": "Track Record",
            "section.timeline.title1": "Experience &",
            "section.timeline.title2": "Education",
            "section.timeline.subtitle": "My professional career journey and academic background.",
            "timeline.now": "2024 - Present",
            "timeline.desc1": "Led the frontend team in developing a large-scale enterprise cloud management application, improving load speed by 40%, and implementing micro-frontend architecture.",
            "timeline.desc2": "Designed wireframes, interactive prototypes in Figma, and implemented them into responsive, SEO-friendly HTML/CSS/JS code for over 20 startup clients.",
            "timeline.desc3": "Graduated with Cum Laude honors (GPA 3.85/4.00). Active in the Informatics Student Association and head of the Web & Publication division.",
            "timeline.desc4": "Completed intensive certification in cloud architecture, OWASP web security, and high-performance testing.",
            "section.portfolio.tag": "Project Gallery",
            "section.portfolio.title1": "Selected",
            "section.portfolio.title2": "Portfolio",
            "section.portfolio.subtitle": "Some of the web applications and systems I have developed.",
            "port.title1": "Cloud POS System (Smart POS)",
            "port.desc1": "Multi-outlet cashier application with real-time inventory, graphical sales reports, and QRIS payment integration.",
            "port.desc2": "Interactive business performance monitoring dashboard with smart notification system and rich data visualization.",
            "port.desc3": "Personal finance management application with automatic recording, savings target calculator, and monthly report export.",
            "port.demo": "Live Demo",
            "port.source": "Source",
            "section.contact.tag": "Get in Touch",
            "section.contact.title1": "Contact",
            "section.contact.title2": "Me",
            "section.contact.subtitle": "Interested in working together or have a question? Feel free to send a message below.",
            "contact.info.title": "Contact Information",
            "contact.info.desc": "Don't hesitate to reach out to me via the following contacts or the direct form.",
            "contact.label.email": "Direct Email",
            "contact.label.wa": "WhatsApp Chat",
            "contact.label.loc": "Current Location",
            "contact.btn.wa": "Send Message via Instant WhatsApp",
            "contact.form.name": "Your Name",
            "contact.form.email": "Email Address",
            "contact.form.subject": "Message Subject",
            "contact.form.message": "Message Body",
            "contact.btn.submit": "Send Message Now",
            "footer.copy": "&copy; 2026 Rizky Ramadhan. All Rights Reserved. Built with Vibrant Colors & Interactive Animations."
        }
    };

    let currentLang = localStorage.getItem('vibrant_lang') || 'id';

    const defaultData = {
        fullname: "Naufal Syadid Achmad",
        nickname: "Naufal / Nopal",
        jobTitle: "Junior Web Developer",
        pobDob: "Samarinda, 21 April 2007",
        gender: "Laki-Laki",
        religion: "Islam",
        nationality: "Indonesia (WNI)",
        email: "Naufalsyd21@gmail.com",
        phone: "+62 838-1818-9267",
        address: "Jl.Damanhuri 2 GG.Manunggal Samarinda Kota",
        marital: "Belum Menikah",
        website: "NexusJoki.io",
        bio: "Seorang Software Developer & Tech Enthusiast yang berdedikasi membangun solusi digital modern dengan desain interaktif, performa tinggi, dan pengalaman pengguna yang luar biasa.",
        status: "Available for Work",
        location: "Samarinda, Indonesia"
    };

    let currentBioData = { ...defaultData };

    // Load from LocalStorage if available
    const savedData = localStorage.getItem('vibrant_bio_data');
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            if (parsed.fullname && parsed.fullname.includes("Rizky Ramadhan")) {
                delete parsed.fullname;
            }
            currentBioData = { ...defaultData, ...parsed };
        } catch (e) {
            console.error("Failed to parse saved bio data", e);
        }
    }

    // ----------------------------------------------------------------------
    // 2. DOM Elements Binding
    // ----------------------------------------------------------------------
    const DOM = {
        // Hero
        displayName: document.getElementById('displayName'),
        displayBio: document.getElementById('displayBio'),
        displayLocation: document.getElementById('displayLocation'),
        displayStatusText: document.getElementById('displayStatusText'),
        socialEmail: document.getElementById('socialEmail'),
        socialWa: document.getElementById('socialWa'),

        // Biodata Cards
        displayFullname: document.getElementById('displayFullname'),
        displayNickname: document.getElementById('displayNickname'),
        displayPobDob: document.getElementById('displayPobDob'),
        displayGender: document.getElementById('displayGender'),
        displayReligion: document.getElementById('displayReligion'),
        displayNationality: document.getElementById('displayNationality'),
        displayEmail: document.getElementById('displayEmail'),
        displayPhone: document.getElementById('displayPhone'),
        displayAddress: document.getElementById('displayAddress'),
        displayMarital: document.getElementById('displayMarital'),
        displayJob: document.getElementById('displayJob'),
        displayWebsite: document.getElementById('displayWebsite'),
        contactInfoEmail: document.getElementById('contactInfoEmail'),
        contactInfoPhone: document.getElementById('contactInfoPhone'),
        contactInfoLocation: document.getElementById('contactInfoLocation'),
        btnWaDirect: document.getElementById('btnWaDirect'),
        footerName: document.getElementById('footerName'),

        // Controls & Theme
        btnThemeToggle: document.getElementById('btnThemeToggle'),
        btnOpenEdit: document.getElementById('btnOpenEdit'),
        btnPrint: document.getElementById('btnPrint'),
        mobileToggle: document.getElementById('mobileToggle'),
        navMenu: document.getElementById('navMenu'),
        navLinks: document.querySelectorAll('.nav-link'),

        // Modal
        editModalOverlay: document.getElementById('editModalOverlay'),
        btnCloseEdit: document.getElementById('btnCloseEdit'),
        editBioForm: document.getElementById('editBioForm'),
        btnResetDefault: document.getElementById('btnResetDefault'),
        btnLangToggle: document.getElementById('btnLangToggle'),
        langToggleText: document.getElementById('langToggleText'),

        // Modal Form Inputs
        editFullname: document.getElementById('editFullname'),
        editJob: document.getElementById('editJob'),
        editPobDob: document.getElementById('editPobDob'),
        editGender: document.getElementById('editGender'),
        editReligion: document.getElementById('editReligion'),
        editNationality: document.getElementById('editNationality'),
        editEmail: document.getElementById('editEmail'),
        editPhone: document.getElementById('editPhone'),
        editAddress: document.getElementById('editAddress'),
        editBio: document.getElementById('editBio'),
        editStatus: document.getElementById('editStatus'),
        editLocation: document.getElementById('editLocation'),

        // Filters & Form
        filterBtns: document.querySelectorAll('.filter-btn'),
        skillCards: document.querySelectorAll('.skill-card'),
        contactForm: document.getElementById('contactForm'),
        toastContainer: document.getElementById('toastContainer')
    };

    // ----------------------------------------------------------------------
    // 3. Render Data to UI
    // ----------------------------------------------------------------------
    function renderBioUI() {
        if (DOM.displayName) DOM.displayName.textContent = currentBioData.fullname;
        if (DOM.displayBio) DOM.displayBio.textContent = currentBioData.bio;
        if (DOM.displayLocation) DOM.displayLocation.textContent = currentBioData.location;
        if (DOM.displayStatusText) DOM.displayStatusText.textContent = currentBioData.status;

        if (DOM.displayFullname) DOM.displayFullname.textContent = currentBioData.fullname;
        if (DOM.displayNickname) DOM.displayNickname.textContent = currentBioData.nickname;
        if (DOM.displayPobDob) DOM.displayPobDob.textContent = currentBioData.pobDob;
        if (DOM.displayGender) DOM.displayGender.textContent = currentBioData.gender;
        if (DOM.displayReligion) DOM.displayReligion.textContent = currentBioData.religion;
        if (DOM.displayNationality) DOM.displayNationality.textContent = currentBioData.nationality;
        if (DOM.displayEmail) DOM.displayEmail.textContent = currentBioData.email;
        if (DOM.displayPhone) DOM.displayPhone.textContent = currentBioData.phone;
        if (DOM.displayAddress) DOM.displayAddress.textContent = currentBioData.address;
        if (DOM.displayMarital) DOM.displayMarital.textContent = currentBioData.marital;
        if (DOM.displayJob) DOM.displayJob.textContent = currentBioData.jobTitle;
        if (DOM.displayWebsite) DOM.displayWebsite.textContent = currentBioData.website;

        if (DOM.contactInfoEmail) {
            DOM.contactInfoEmail.textContent = currentBioData.email;
            DOM.contactInfoEmail.href = `mailto:${currentBioData.email}`;
        }
        const waUrl = currentBioData.waLink || "https://wa.me/qr/R4FWLCSP6VVAA1";
        if (DOM.contactInfoPhone) {
            DOM.contactInfoPhone.textContent = currentBioData.phone;
            DOM.contactInfoPhone.href = waUrl;
        }
        if (DOM.contactInfoLocation) DOM.contactInfoLocation.textContent = currentBioData.location;

        if (DOM.socialEmail) DOM.socialEmail.href = `mailto:${currentBioData.email}`;
        if (DOM.socialWa) DOM.socialWa.href = waUrl;

        if (DOM.btnWaDirect) {
            DOM.btnWaDirect.href = waUrl;
        }

        if (DOM.footerName) DOM.footerName.textContent = currentBioData.fullname;
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
        if (DOM.langToggleText) {
            DOM.langToggleText.textContent = currentLang.toUpperCase();
        }

        // Handle dynamic default data translations
        const defaultBioEn = "A Software Developer & Tech Enthusiast dedicated to building modern digital solutions with interactive designs, high performance, and exceptional user experience.";
        const defaultMaritalEn = "Single";
        const defaultGenderEn = "Male";
        const defaultReligionEn = "Islam";
        const defaultNationalityEn = "Indonesian (WNI)";

        if (currentLang === 'en') {
            if (currentBioData.bio === defaultData.bio && DOM.displayBio) DOM.displayBio.textContent = defaultBioEn;
            if (currentBioData.marital === defaultData.marital && DOM.displayMarital) DOM.displayMarital.textContent = defaultMaritalEn;
            if (currentBioData.gender === defaultData.gender && DOM.displayGender) DOM.displayGender.textContent = defaultGenderEn;
            if (currentBioData.religion === defaultData.religion && DOM.displayReligion) DOM.displayReligion.textContent = defaultReligionEn;
            if (currentBioData.nationality === defaultData.nationality && DOM.displayNationality) DOM.displayNationality.textContent = defaultNationalityEn;
        } else {
            if (DOM.displayBio) DOM.displayBio.textContent = currentBioData.bio;
            if (DOM.displayMarital) DOM.displayMarital.textContent = currentBioData.marital;
            if (DOM.displayGender) DOM.displayGender.textContent = currentBioData.gender;
            if (DOM.displayReligion) DOM.displayReligion.textContent = currentBioData.religion;
            if (DOM.displayNationality) DOM.displayNationality.textContent = currentBioData.nationality;
        }
    }

    renderBioUI();
applyTranslations();

// ----------------------------------------------------------------------
// 3.5 Hide Navbar on Scroll
// ----------------------------------------------------------------------
let lastScrollY = window.scrollY;
const navbarContainer = document.querySelector('.navbar-container');

window.addEventListener('scroll', () => {
    if (!navbarContainer) return;
    if (window.scrollY > 150) {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            navbarContainer.style.transform = 'translateY(-150%)';
        } else {
            // Scrolling up
            navbarContainer.style.transform = 'translateY(0)';
        }
    } else {
        navbarContainer.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

// ----------------------------------------------------------------------
// 4. Typewriter Animation Effect
// ----------------------------------------------------------------------
const roles = [
    "Fullstack Web Developer",
    "UI/UX Design Specialist",
    "Creative Problem Solver",
    "Tech Enthusiast & Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typingText');

function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at full text
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400; // Pause before typing next
    }

    setTimeout(typeEffect, typeSpeed);
}

typeEffect();

// ----------------------------------------------------------------------
// 5. Theme Switcher (Light Vibrant <-> Glow Dark)
// ----------------------------------------------------------------------
const savedTheme = localStorage.getItem('vibrant_theme') || 'theme-vibrant-light';
document.body.className = savedTheme;

if (DOM.btnThemeToggle) {
    DOM.btnThemeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('theme-vibrant-light')) {
            document.body.className = 'theme-vibrant-dark';
            localStorage.setItem('vibrant_theme', 'theme-vibrant-dark');
            showToast('Tema diubah ke Neon Glow Dark!', 'info');
        } else {
            document.body.className = 'theme-vibrant-light';
            localStorage.setItem('vibrant_theme', 'theme-vibrant-light');
            showToast('Tema diubah ke Cerah Vibrant Light!', 'info');
        }
    });
}

// ----------------------------------------------------------------------
// 6. Number Counter Animation for Stats
// ----------------------------------------------------------------------
const statNumbers = document.querySelectorAll('.stat-number');
let animatedStats = false;

function animateStats() {
    if (animatedStats) return;

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'), 10);
        let count = 0;
        const increment = Math.ceil(target / 40);
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                stat.textContent = target + (target === 100 || target === 5 || target === 42 || target === 28 ? '+' : '');
                if (target === 100) stat.textContent = '100%';
                clearInterval(timer);
            } else {
                stat.textContent = count;
            }
        }, 35);
    });

    animatedStats = true;
}

// Trigger stats counter on scroll
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats-container');
    if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            animateStats();
        }
    }
});
animateStats(); // Initial check

// ----------------------------------------------------------------------
// 7. Skill Filter Tabs
// ----------------------------------------------------------------------
DOM.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        DOM.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        DOM.skillCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'flex';
                card.style.animation = 'toastIn 0.4s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ----------------------------------------------------------------------
// 8. Mobile Navigation & Active Scroll Link
// ----------------------------------------------------------------------
if (DOM.mobileToggle && DOM.navMenu) {
    DOM.mobileToggle.addEventListener('click', () => {
        DOM.navMenu.classList.toggle('active');
    });
}

// Smooth active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            DOM.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Close menu when clicking nav link
DOM.navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (DOM.navMenu) DOM.navMenu.classList.remove('active');
    });
});

// ----------------------------------------------------------------------
// 9. Live Edit Biodata Modal Handlers
// ----------------------------------------------------------------------
if (DOM.btnOpenEdit) {
    DOM.btnOpenEdit.addEventListener('click', () => {
        // Populate form with current values
        DOM.editFullname.value = currentBioData.fullname;
        DOM.editJob.value = currentBioData.jobTitle;
        DOM.editPobDob.value = currentBioData.pobDob;
        DOM.editGender.value = currentBioData.gender;
        DOM.editReligion.value = currentBioData.religion;
        DOM.editNationality.value = currentBioData.nationality;
        DOM.editEmail.value = currentBioData.email;
        DOM.editPhone.value = currentBioData.phone;
        DOM.editAddress.value = currentBioData.address;
        DOM.editBio.value = currentBioData.bio;
        DOM.editStatus.value = currentBioData.status;
        DOM.editLocation.value = currentBioData.location;

        DOM.editModalOverlay.classList.add('active');
    });
}

if (DOM.btnCloseEdit) {
    DOM.btnCloseEdit.addEventListener('click', () => {
        DOM.editModalOverlay.classList.remove('active');
    });
}

// Close modal on overlay click
if (DOM.editModalOverlay) {
    DOM.editModalOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.editModalOverlay) {
            DOM.editModalOverlay.classList.remove('active');
        }
    });
}

// Handle Edit Form Submission
if (DOM.editBioForm) {
    DOM.editBioForm.addEventListener('submit', (e) => {
        e.preventDefault();

        currentBioData = {
            ...currentBioData,
            fullname: DOM.editFullname.value.trim() || defaultData.fullname,
            jobTitle: DOM.editJob.value.trim() || defaultData.jobTitle,
            pobDob: DOM.editPobDob.value.trim() || defaultData.pobDob,
            gender: DOM.editGender.value || defaultData.gender,
            religion: DOM.editReligion.value.trim() || defaultData.religion,
            nationality: DOM.editNationality.value.trim() || defaultData.nationality,
            email: DOM.editEmail.value.trim() || defaultData.email,
            phone: DOM.editPhone.value.trim() || defaultData.phone,
            address: DOM.editAddress.value.trim() || defaultData.address,
            bio: DOM.editBio.value.trim() || defaultData.bio,
            status: DOM.editStatus.value.trim() || defaultData.status,
            location: DOM.editLocation.value.trim() || defaultData.location
        };

        // Save to local storage
        localStorage.setItem('vibrant_bio_data', JSON.stringify(currentBioData));

        // Re-render UI
        renderBioUI();

        // Close Modal & Toast
        DOM.editModalOverlay.classList.remove('active');
        showToast('Biodata berhasil diperbarui secara live!', 'success');
    });
}

// Reset to Default
if (DOM.btnResetDefault) {
    DOM.btnResetDefault.addEventListener('click', () => {
        if (confirm("Apakah Anda yakin ingin mengembalikan biodata ke data awal?")) {
            currentBioData = { ...defaultData };
            localStorage.removeItem('vibrant_bio_data');
            renderBioUI();
            DOM.editModalOverlay.classList.remove('active');
            showToast('Biodata telah di-reset ke data bawaan.', 'info');
        }
    });
}

// ----------------------------------------------------------------------
// 10. Print / Download PDF
// ----------------------------------------------------------------------
if (DOM.btnPrint) {
    DOM.btnPrint.addEventListener('click', () => {
        showToast('Menyiapkan tampilan cetak CV / Biodata...', 'info');
        setTimeout(() => {
            window.print();
        }, 600);
    });
}

// ----------------------------------------------------------------------
// 11. Contact Form Submit Handler
// ----------------------------------------------------------------------
if (DOM.contactForm) {
    DOM.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('formName').value;
        const email = document.getElementById('formEmail').value;
        const subject = document.getElementById('formSubject').value;
        const message = document.getElementById('formMessage').value;

        showToast(`Terima kasih ${name}, pesan Anda berhasil dikirim!`, 'success');

        // Open mailto fallback
        const mailtoUrl = `mailto:${currentBioData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Dari: ${name} (${email})\n\n${message}`)}`;
        window.location.href = mailtoUrl;

        DOM.contactForm.reset();
    });
}

// ----------------------------------------------------------------------
// 11.5 Language Toggle Handler
// ----------------------------------------------------------------------
if (DOM.btnLangToggle) {
    DOM.btnLangToggle.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('vibrant_lang', currentLang);
        applyTranslations();
        showToast(currentLang === 'id' ? 'Bahasa diubah ke Indonesia!' : 'Language switched to English!', 'info');
    });
}

// ----------------------------------------------------------------------
// 12. Toast Notification Utility Function
// ----------------------------------------------------------------------
function showToast(message, type = 'success') {
    if (!DOM.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

});
