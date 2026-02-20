// ==========================================
// DATABASE SOAL INFORMATIKA KELAS 10
// Elemen: Praktik Lintas Bidang (PLB)
// ==========================================

const daftarSoalAsli = [
    { 
        p: "Dalam Praktik Lintas Bidang (PLB), siswa dituntut untuk bisa bekerja sama secara 'Inklusif'. Apa arti dari tim yang inklusif?", 
        o: ["Tim yang anggotanya hanya siswa pintar saja", "Tim yang terbuka, saling menghargai perbedaan, dan melibatkan semua anggota tanpa diskriminasi", "Tim yang bekerja secara individu di rumah", "Tim yang anggotanya harus memiliki laptop mahal"], 
        k: 1,
        b: "Inklusif berarti 'memasukkan' atau merangkul semua keberagaman yang ada di dalam kelas."
    },
    { 
        p: "Langkah PERTAMA yang harus dilakukan oleh tim saat memulai sebuah proyek Informatika adalah...", 
        o: ["Menulis kode program", "Membuat desain antarmuka", "Mengidentifikasi dan merumuskan persoalan (masalah)", "Membuat laporan cetak"], 
        k: 2,
        b: "Sebelum mencari solusi, kamu harus tahu dulu apa masalah yang sedang kamu selesaikan."
    },
    { 
        p: "Sesuai dengan studi kasus proyek, jika kita ingin mengetahui tingkat minat wisatawan terhadap suatu daerah wisata, cara pengumpulan data yang paling efektif adalah...", 
        o: ["Menyebarkan kuesioner/survei online kepada pengunjung", "Menebak-nebak jumlah pengunjung", "Hanya bertanya pada satu orang pedagang", "Menyalin data dari daerah lain"], 
        k: 0,
        b: "Gunakan perangkat digital untuk mengumpulkan pendapat dari banyak orang secara langsung."
    },
    { 
        p: "Jika warga sekitar tempat wisata melakukan promosi secara *online* melalui media sosial, dampak ekonomi positif yang paling mungkin terjadi adalah...", 
        o: ["Lingkungan menjadi kotor", "Jangkauan pasar UMKM menjadi lebih luas sehingga pendapatan meningkat", "Penduduk lokal kehilangan pekerjaan", "Harga barang menjadi sangat murah"], 
        k: 1,
        b: "Internet menembus batas jarak. Promosi online membuat orang dari luar kota bahkan luar negeri tahu tentang usaha mereka."
    },
    { 
        p: "Setelah data survei minat wisatawan terkumpul, proses selanjutnya sebelum membuat program komputer adalah...", 
        o: ["Mendisain sebuah algoritma atau alur logika berdasarkan data tersebut", "Langsung mengunggah video ke YouTube", "Menghapus data yang sudah ada", "Membongkar hardware komputer"], 
        k: 0,
        b: "Data mentah harus dipikirkan alur penyelesaiannya (logikanya) terlebih dahulu sebelum ditulis dalam bahasa pemrograman."
    },
    { 
        p: "Mengapa dalam pengembangan sebuah produk TIK (misal: aplikasi promosi wisata), kita perlu melakukan tahap 'Pengujian' (Testing)?", 
        o: ["Agar proyek cepat selesai", "Untuk mencari kesalahan (bug) dan memastikan aplikasi berjalan sesuai rancangan", "Agar memakan lebih banyak biaya", "Untuk menghapus aplikasi tersebut"], 
        k: 1,
        b: "Tidak ada program yang sempurna pada percobaan pertama. Harus dicoba dulu untuk mencari tahu di mana letak kekurangannya."
    },
    { 
        p: "Aplikasi perkantoran manakah yang paling tepat digunakan untuk menyusun laporan akhir cetak proyek PLB beserta grafik datanya?", 
        o: ["Microsoft Paint", "Microsoft Word yang diintegrasikan dengan grafik dari Excel", "Notepad", "Command Prompt"], 
        k: 1,
        b: "Laporan butuh teks panjang yang rapi (Word) dan visualisasi angka yang akurat (Excel)."
    },
    { 
        p: "Selain laporan tertulis, tim juga ditugaskan membuat dokumentasi proyek dalam bentuk video. Platform yang paling umum digunakan untuk mempublikasikan (upload) video tersebut adalah...", 
        o: ["Microsoft Excel", "Google Docs", "YouTube / Channel Sekolah", "Spotify"], 
        k: 2,
        b: "Platform ini memiliki ikon berwarna merah dan merupakan tempat berbagi video terbesar di dunia."
    },
    { 
        p: "Saat membuat video dokumentasi proyek, elemen apa yang sangat penting untuk diperhatikan terkait Hak Kekayaan Intelektual (HKI)?", 
        o: ["Warna baju presenter", "Menggunakan musik latar (backsound) yang bebas hak cipta atau berlisensi resmi", "Durasi video harus lebih dari 3 jam", "Menggunakan kamera paling mahal"], 
        k: 1,
        b: "Jika kamu sembarangan memakai lagu populer, videomu bisa dihapus karena melanggar hak cipta (Copyright Strike)."
    },
    { 
        p: "Manakah sikap yang mencerminkan etika kolaborasi yang BAIK saat mengerjakan proyek kelompok?", 
        o: ["Memaksakan kehendak sendiri kepada anggota lain", "Membagi tugas sesuai keahlian dan saling membantu jika ada yang kesulitan", "Menyerahkan seluruh pekerjaan pada ketua kelompok", "Tidak pernah hadir saat diskusi"], 
        k: 1,
        b: "Kerja tim berarti berbagi beban kerja (gotong royong) secara adil."
    },
    { 
        p: "Siklus pengolahan data untuk proyek wisata secara berurutan yang benar adalah...", 
        o: ["Visualisasi -> Pengumpulan -> Analisis", "Pengumpulan -> Pengolahan -> Analisis -> Visualisasi -> Publikasi", "Publikasi -> Analisis -> Pengolahan", "Analisis -> Visualisasi -> Pengumpulan"], 
        k: 1,
        b: "Kamu harus mengambil data dulu, merapikannya, memahaminya, menggambarnya, baru membagikannya ke orang lain."
    },
    { 
        p: "Media sosial dan Website sangat penting untuk promosi daerah wisata karena memiliki karakteristik...", 
        o: ["Sangat mahal dan sulit digunakan", "Dapat diakses 24 jam secara global oleh siapa saja dari mana saja", "Hanya bisa dilihat oleh orang di satu desa saja", "Membutuhkan banyak kertas untuk mencetak"], 
        k: 1,
        b: "Sifat utama internet adalah 'Borderless' (tanpa batas ruang dan waktu)."
    },
    { 
        p: "Jika ada perdebatan ide tentang desain antarmuka aplikasi di dalam kelompok, cara terbaik menyelesaikannya adalah...", 
        o: ["Keluar dari kelompok", "Memilih ide milik ketua kelompok saja", "Berdiskusi, melihat kelebihan tiap ide, lalu mengambil keputusan bersama yang terbaik untuk pengguna", "Tidak usah membuat desain antarmuka sama sekali"], 
        k: 2,
        b: "Musyawarah untuk mufakat adalah jalan keluar terbaik dalam kerja tim."
    },
    { 
        p: "Dokumentasi kode program dan laporan proses kerja sangat penting dibuat karena...", 
        o: ["Agar kertas tidak terbuang sia-sia", "Memudahkan perbaikan (maintenance) di masa depan atau jika proyek dilanjutkan oleh orang lain", "Hanya sebagai syarat agar dapat nilai dari guru", "Agar ukuran file aplikasi menjadi besar"], 
        k: 1,
        b: "Dokumentasi adalah jejak memori. Programmer lain akan kebingungan membaca aplikasimu jika tidak ada buku panduannya."
    },
    { 
        p: "Kemampuan untuk mempresentasikan hasil karya (aplikasi wisata) secara lisan di depan kelas atau publik disebut dengan keterampilan...", 
        o: ["Public Speaking / Komunikasi", "Coding", "Database Management", "Video Editing"], 
        k: 0,
        b: "Keterampilan berbicara di depan umum sangat penting agar produk yang kamu buat bisa dimengerti oleh masyarakat luas."
    }
];
