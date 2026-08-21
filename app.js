/**
 * BioVibrant - Interactive Bio Data & Personal Website Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. Default Data & State Management
    // ----------------------------------------------------------------------
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
            currentBioData = { ...defaultData, ...JSON.parse(savedData) };
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
        if (DOM.contactInfoPhone) {
            DOM.contactInfoPhone.textContent = currentBioData.phone;
            DOM.contactInfoPhone.href = `https://wa.me/${currentBioData.phone.replace(/[^0-9]/g, '')}`;
        }
        if (DOM.contactInfoLocation) DOM.contactInfoLocation.textContent = currentBioData.location;

        if (DOM.socialEmail) DOM.socialEmail.href = `mailto:${currentBioData.email}`;
        if (DOM.socialWa) DOM.socialWa.href = `https://wa.me/${currentBioData.phone.replace(/[^0-9]/g, '')}`;

        if (DOM.btnWaDirect) {
            const cleanPhone = currentBioData.phone.replace(/[^0-9]/g, '');
            DOM.btnWaDirect.href = `https://wa.me/${cleanPhone}?text=Halo%20${encodeURIComponent(currentBioData.fullname)},%20saya%20tertarik%20bekerjasama.`;
        }

        if (DOM.footerName) DOM.footerName.textContent = currentBioData.fullname;
    }

    renderBioUI();

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
