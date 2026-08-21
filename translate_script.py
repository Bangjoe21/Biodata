import re

with open('c:/Users/Victus/Antigrav/BioWeb/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = {
    '<span class="section-tag"><i class="fa-solid fa-user-check"></i> Profil Informasi</span>': '<span class="section-tag"><i class="fa-solid fa-user-check"></i> <span data-i18n="section.bio.tag">Profil Informasi</span></span>',
    '<h2 class="section-title">Biodata <span class="highlight">Diri Lengkap</span></h2>': '<h2 class="section-title"><span data-i18n="section.bio.title1">Biodata</span> <span class="highlight" data-i18n="section.bio.title2">Diri Lengkap</span></h2>',
    '<p class="section-subtitle">Rincian identitas pribadi, informasi kontak, latar belakang, dan hobi\n                    kegemaran.</p>': '<p class="section-subtitle" data-i18n="section.bio.subtitle">Rincian identitas pribadi, informasi kontak, latar belakang, dan hobi kegemaran.</p>',
    '<h3>Identitas Pribadi</h3>': '<h3 data-i18n="bio.card1.title">Identitas Pribadi</h3>',
    '<span class="bio-label"><i class="fa-solid fa-user"></i> Nama Lengkap</span>': '<span class="bio-label"><i class="fa-solid fa-user"></i> <span data-i18n="bio.label.fullname">Nama Lengkap</span></span>',
    '<span class="bio-label"><i class="fa-solid fa-tag"></i> Nama Panggilan</span>': '<span class="bio-label"><i class="fa-solid fa-tag"></i> <span data-i18n="bio.label.nickname">Nama Panggilan</span></span>',
    '<span class="bio-label"><i class="fa-solid fa-cake-candles"></i> Tempat, Tgl Lahir</span>': '<span class="bio-label"><i class="fa-solid fa-cake-candles"></i> <span data-i18n="bio.label.pobdob">Tempat, Tgl Lahir</span></span>',
    '<span class="bio-label"><i class="fa-solid fa-venus-mars"></i> Jenis Kelamin</span>': '<span class="bio-label"><i class="fa-solid fa-venus-mars"></i> <span data-i18n="bio.label.gender">Jenis Kelamin</span></span>',
    '<span class="bio-label"><i class="fa-solid fa-hands-praying"></i> Agama</span>': '<span class="bio-label"><i class="fa-solid fa-hands-praying"></i> <span data-i18n="bio.label.religion">Agama</span></span>',
    '<span class="bio-label"><i class="fa-solid fa-flag"></i> Kewarganegaraan</span>': '<span class="bio-label"><i class="fa-solid fa-flag"></i> <span data-i18n="bio.label.nationality">Kewarganegaraan</span></span>',
    '<h3>Kontak & Domisili</h3>': '<h3 data-i18n="bio.card2.title">Kontak & Domisili</h3>',
    '<span class="bio-label"><i class="fa-solid fa-envelope"></i> Email Utama</span>': '<span class="bio-label"><i class="fa-solid fa-envelope"></i> <span data-i18n="bio.label.email">Email Utama</span></span>',
    '<span class="bio-label"><i class="fa-solid fa-phone"></i> Nomor Telepon / WA</span>': '<span class="bio-label"><i class="fa-solid fa-phone"></i> <span data-i18n="bio.label.phone">Nomor Telepon / WA</span></span>',
    '<span class="bio-label"><i class="fa-solid fa-house-user"></i> Alamat Lengkap</span>': '<span class="bio-label"><i class="fa-solid fa-house-user"></i> <span data-i18n="bio.label.address">Alamat Lengkap</span></span>',
    '<span class="bio-label"><i class="fa-solid fa-heart"></i> Status Perkawinan</span>': '<span class="bio-label"><i class="fa-solid fa-heart"></i> <span data-i18n="bio.label.marital">Status Perkawinan</span></span>',
    '<span class="bio-label"><i class="fa-solid fa-briefcase"></i> Pekerjaan Saat Ini</span>': '<span class="bio-label"><i class="fa-solid fa-briefcase"></i> <span data-i18n="bio.label.job">Pekerjaan Saat Ini</span></span>',
    '<span class="bio-label"><i class="fa-solid fa-globe"></i> Website Personal</span>': '<span class="bio-label"><i class="fa-solid fa-globe"></i> <span data-i18n="bio.label.website">Website Personal</span></span>',
    '<h3>Minat & Hobi</h3>': '<h3 data-i18n="bio.card3.title">Minat & Hobi</h3>',
    '<h4 class="subcard-title"><i class="fa-solid fa-language"></i> Penguasaan Bahasa</h4>': '<h4 class="subcard-title"><i class="fa-solid fa-language"></i> <span data-i18n="bio.card3.subtitle">Penguasaan Bahasa</span></h4>',
    '<span class="lang-name">Bahasa Indonesia</span>': '<span class="lang-name" data-i18n="lang.id">Bahasa Indonesia</span>',
    '<span class="lang-name">Bahasa Inggris</span>': '<span class="lang-name" data-i18n="lang.en">Bahasa Inggris</span>',
    '<span class="section-tag"><i class="fa-solid fa-microchip"></i> Kemampuan Teknis</span>': '<span class="section-tag"><i class="fa-solid fa-microchip"></i> <span data-i18n="section.skills.tag">Kemampuan Teknis</span></span>',
    '<h2 class="section-title">Keahlian & <span class="highlight">Kompetensi</span></h2>': '<h2 class="section-title"><span data-i18n="section.skills.title1">Keahlian &</span> <span class="highlight" data-i18n="section.skills.title2">Kompetensi</span></h2>',
    '<button class="filter-btn active" data-filter="all">Semua Skill</button>': '<button class="filter-btn active" data-filter="all" data-i18n="filter.all">Semua Skill</button>',
    '<p class="section-subtitle">Teknologi dan keterampilan yang saya kuasai dalam pengembangan perangkat\n                    lunak.</p>': '<p class="section-subtitle" data-i18n="section.skills.subtitle">Teknologi dan keterampilan yang saya kuasai dalam pengembangan perangkat lunak.</p>',
    '<h4>Problem Solving & Adaptabilitas</h4>': '<h4 data-i18n="skill.soft.title">Problem Solving & Adaptabilitas</h4>',
    '<p class="skill-desc">Analisis Masalah, Pemikiran Kritis, Komunikasi Tim, Manajemen Waktu, Fast\n                        Learning.</p>': '<p class="skill-desc" data-i18n="skill.soft.desc">Analisis Masalah, Pemikiran Kritis, Komunikasi Tim, Manajemen Waktu, Fast Learning.</p>',
    '<span class="section-tag"><i class="fa-solid fa-timeline"></i> Rekam Jejak</span>': '<span class="section-tag"><i class="fa-solid fa-timeline"></i> <span data-i18n="section.timeline.tag">Rekam Jejak</span></span>',
    '<h2 class="section-title">Pengalaman & <span class="highlight">Pendidikan</span></h2>': '<h2 class="section-title"><span data-i18n="section.timeline.title1">Pengalaman &</span> <span class="highlight" data-i18n="section.timeline.title2">Pendidikan</span></h2>',
    '<p class="section-subtitle">Perjalanan karier profesional dan latar belakang akademis saya.</p>': '<p class="section-subtitle" data-i18n="section.timeline.subtitle">Perjalanan karier profesional dan latar belakang akademis saya.</p>',
    '<div class="timeline-date"><i class="fa-regular fa-calendar-check"></i> 2024 - Sekarang</div>': '<div class="timeline-date"><i class="fa-regular fa-calendar-check"></i> <span data-i18n="timeline.now">2024 - Sekarang</span></div>',
    '<p class="timeline-desc">Memimpin tim frontend dalam mengembangkan aplikasi manajemen cloud\n                            enterprise skala besar, meningkatkan kecepatan muat sebesar 40%, dan mengimplementasikan\n                            arsitektur micro-frontend.</p>': '<p class="timeline-desc" data-i18n="timeline.desc1">Memimpin tim frontend dalam mengembangkan aplikasi manajemen cloud enterprise skala besar, meningkatkan kecepatan muat sebesar 40%, dan mengimplementasikan arsitektur micro-frontend.</p>',
    '<p class="timeline-desc">Merancang wireframe, prototype interaktif di Figma, dan\n                            mengimplementasikannya menjadi kode HTML/CSS/JS yang responsif serta ramah SEO untuk lebih\n                            dari 20 klien startup.</p>': '<p class="timeline-desc" data-i18n="timeline.desc2">Merancang wireframe, prototype interaktif di Figma, dan mengimplementasikannya menjadi kode HTML/CSS/JS yang responsif serta ramah SEO untuk lebih dari 20 klien startup.</p>',
    '<p class="timeline-desc">Lulus dengan predikat <strong>Cum Laude (IPK 3.85/4.00)</strong>. Aktif\n                            di Organisasi Himpunan Mahasiswa Informatika dan ketua divisi Web & Publication.</p>': '<p class="timeline-desc" data-i18n="timeline.desc3">Lulus dengan predikat <strong>Cum Laude (IPK 3.85/4.00)</strong>. Aktif di Organisasi Himpunan Mahasiswa Informatika dan ketua divisi Web & Publication.</p>',
    '<p class="timeline-desc">Menyelesaikan sertifikasi intensif dalam keahlian arsitektur cloud,\n                            keamanan web OWASP, dan pengujian performa tinggi.</p>': '<p class="timeline-desc" data-i18n="timeline.desc4">Menyelesaikan sertifikasi intensif dalam keahlian arsitektur cloud, keamanan web OWASP, dan pengujian performa tinggi.</p>',
    '<span class="section-tag"><i class="fa-solid fa-box-archive"></i> Galeri Proyek</span>': '<span class="section-tag"><i class="fa-solid fa-box-archive"></i> <span data-i18n="section.portfolio.tag">Galeri Proyek</span></span>',
    '<h2 class="section-title">Portofolio <span class="highlight">Karya Pilihan</span></h2>': '<h2 class="section-title"><span data-i18n="section.portfolio.title1">Portofolio</span> <span class="highlight" data-i18n="section.portfolio.title2">Karya Pilihan</span></h2>',
    '<p class="section-subtitle">Beberapa hasil karya aplikasi web dan sistem yang telah saya kembangkan.</p>': '<p class="section-subtitle" data-i18n="section.portfolio.subtitle">Beberapa hasil karya aplikasi web dan sistem yang telah saya kembangkan.</p>',
    '<h3>Sistem Kasir Cloud (Smart POS)</h3>': '<h3 data-i18n="port.title1">Sistem Kasir Cloud (Smart POS)</h3>',
    '<p>Aplikasi kasir multi-outlet dengan fitur inventaris real-time, laporan penjualan grafik, dan\n                            integrasi pembayaran QRIS.</p>': '<p data-i18n="port.desc1">Aplikasi kasir multi-outlet dengan fitur inventaris real-time, laporan penjualan grafik, dan integrasi pembayaran QRIS.</p>',
    '<p>Dashboard pemantauan performa bisnis secara interaktif dengan sistem notifikasi pintar dan\n                            visualisasi data tinggi.</p>': '<p data-i18n="port.desc2">Dashboard pemantauan performa bisnis secara interaktif dengan sistem notifikasi pintar dan visualisasi data tinggi.</p>',
    '<p>Aplikasi pengelola keuangan pribadi dengan pencatatan otomatis, kalkulator target tabungan,\n                            dan ekspor laporan bulanan.</p>': '<p data-i18n="port.desc3">Aplikasi pengelola keuangan pribadi dengan pencatatan otomatis, kalkulator target tabungan, dan ekspor laporan bulanan.</p>',
    '<span class="section-tag"><i class="fa-solid fa-comments"></i> Terhubung</span>': '<span class="section-tag"><i class="fa-solid fa-comments"></i> <span data-i18n="section.contact.tag">Terhubung</span></span>',
    '<h2 class="section-title">Hubungi <span class="highlight">Saya</span></h2>': '<h2 class="section-title"><span data-i18n="section.contact.title1">Hubungi</span> <span class="highlight" data-i18n="section.contact.title2">Saya</span></h2>',
    '<p class="section-subtitle">Tertarik bekerjasama atau ingin bertanya sesuatu? Silakan kirimkan pesan di\n                    bawah ini.</p>': '<p class="section-subtitle" data-i18n="section.contact.subtitle">Tertarik bekerjasama atau ingin bertanya sesuatu? Silakan kirimkan pesan di bawah ini.</p>',
    '<h3>Informasi Kontak</h3>': '<h3 data-i18n="contact.info.title">Informasi Kontak</h3>',
    '<p>Jangan ragu untuk menghubungi saya melalui kontak berikut atau formulir langsung.</p>': '<p data-i18n="contact.info.desc">Jangan ragu untuk menghubungi saya melalui kontak berikut atau formulir langsung.</p>',
    '<span class="c-label">Email Direct</span>': '<span class="c-label" data-i18n="contact.label.email">Email Direct</span>',
    '<span class="c-label">WhatsApp Chat</span>': '<span class="c-label" data-i18n="contact.label.wa">WhatsApp Chat</span>',
    '<span class="c-label">Lokasi Saat Ini</span>': '<span class="c-label" data-i18n="contact.label.loc">Lokasi Saat Ini</span>',
    'Kirim Pesan via WhatsApp Instant': '<span data-i18n="contact.btn.wa">Kirim Pesan via WhatsApp Instant</span>',
    '<label for="formName"><i class="fa-solid fa-user"></i> Nama Anda</label>': '<label for="formName"><i class="fa-solid fa-user"></i> <span data-i18n="contact.form.name">Nama Anda</span></label>',
    '<label for="formEmail"><i class="fa-solid fa-envelope"></i> Alamat Email</label>': '<label for="formEmail"><i class="fa-solid fa-envelope"></i> <span data-i18n="contact.form.email">Alamat Email</span></label>',
    '<label for="formSubject"><i class="fa-solid fa-heading"></i> Subjek Pesan</label>': '<label for="formSubject"><i class="fa-solid fa-heading"></i> <span data-i18n="contact.form.subject">Subjek Pesan</span></label>',
    '<label for="formMessage"><i class="fa-solid fa-message"></i> Isi Pesan</label>': '<label for="formMessage"><i class="fa-solid fa-message"></i> <span data-i18n="contact.form.message">Isi Pesan</span></label>',
    'Kirim Pesan Sekarang': '<span data-i18n="contact.btn.submit">Kirim Pesan Sekarang</span>',
    '<p class="footer-copy">&copy; 2026 <span id="footerName">Rizky Ramadhan</span>. Hak Cipta Dilindungi. Dibuat\n                dengan Warna Cerah & Animasi Interaktif.</p>': '<p class="footer-copy"><span data-i18n="footer.copy">&copy; 2026 <span id="footerName">Rizky Ramadhan</span>. Hak Cipta Dilindungi. Dibuat dengan Warna Cerah & Animasi Interaktif.</span></p>'
}

for old, new_text in replacements.items():
    if old in html:
        html = html.replace(old, new_text)
    else:
        # Fallback to regex for spacing issues
        pattern = re.escape(old).replace(r'\n', r'\s*').replace(r'\ ', r'\s+')
        html = re.sub(pattern, new_text.replace('\\n', ''), html)

# Add data-i18n for Demo Live and Source buttons which are multiple
html = re.sub(r'Demo\n\s*Live', '<span data-i18n="port.demo">Demo Live</span>', html)
html = re.sub(r'Demo Live', '<span data-i18n="port.demo">Demo Live</span>', html)
html = re.sub(r'Source</a>', '<span data-i18n="port.source">Source</span></a>', html)

with open('c:/Users/Victus/Antigrav/BioWeb/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('Done injecting data-i18n.')
