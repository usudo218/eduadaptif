// ==========================================
// DATABASE SOAL INFORMATIKA KELAS 10
// Elemen: Teknologi Informasi & Komunikasi (TIK)
// Materi: Aplikasi Perkantoran & Integrasi
// ==========================================

const daftarSoalAsli = [
    { 
        p: "Fitur pada pengolah kata (Word) yang berfungsi untuk membuat surat massal dengan format yang sama tetapi nama penerima yang berbeda-beda disebut...", 
        o: ["Table of Contents", "Mail Merge (Surat Massal)", "Track Changes", "Page Layout"], 
        k: 1,
        b: "Fitur ini biasanya membutuhkan dua file: satu dokumen surat (Word) dan satu sumber data nama penerima (Excel)."
    },
    { 
        p: "Untuk membuat Daftar Isi secara otomatis di Microsoft Word, hal pertama yang harus kita atur pada judul dan subjudul teks adalah...", 
        o: ["Mewarnai teks dengan warna merah", "Mengubah ukuran font menjadi 24", "Mengaplikasikan fitur Styles (Heading 1, Heading 2)", "Menggunakan fitur Find and Replace"], 
        k: 2,
        b: "Word perlu 'diberi tahu' mana yang merupakan bab utama dan sub-bab dengan menggunakan gaya teks bawaan."
    },
    { 
        p: "Dalam aplikasi pengolah angka (Excel), fungsi yang digunakan untuk mencari nilai rata-rata dari sekumpulan data adalah...", 
        o: ["=SUM()", "=MAX()", "=AVERAGE()", "=COUNT()"], 
        k: 2,
        b: "SUM untuk total jumlah, MAX untuk nilai tertinggi. Rata-rata menggunakan bahasa Inggris dari kata 'rata-rata'."
    },
    { 
        p: "Jika kamu ingin mencari data tertentu secara vertikal dari sebuah tabel referensi di Excel, rumus yang paling tepat digunakan adalah...", 
        o: ["=IF()", "=HLOOKUP()", "=VLOOKUP()", "=AND()"], 
        k: 2,
        b: "Huruf awalan 'V' pada rumus ini singkatan dari Vertical (Tegak lurus)."
    },
    { 
        p: "Pada Microsoft PowerPoint, efek visual yang terjadi saat kamu berpindah dari satu slide ke slide berikutnya disebut...", 
        o: ["Animation (Animasi)", "Transition (Transisi)", "Design (Desain)", "Slide Show"], 
        k: 1,
        b: "Animasi itu untuk teks/gambar di dalam slide. Kalau pergantian antar halamannya punya istilah sendiri yang berawalan huruf 'T'."
    },
    { 
        p: "Saat kita ingin mengintegrasikan grafik dari Excel ke Word, agar grafiknya otomatis berubah di Word saat data di Excel diubah, kita harus menggunakan metode paste...", 
        o: ["Paste -> Keep Text Only", "Paste -> Picture", "Paste Special -> Paste Link", "CTRL + V biasa"], 
        k: 2,
        b: "Kamu harus membuat sebuah 'Tautan' (Link) antara Word dan Excel, bukan sekadar menempelkan gambar mati."
    },
    { 
        p: "Kamu sedang mengetik laporan panjang di Word dan komputer tiba-tiba mati. Untuk mencegah kehilangan data yang parah di masa depan, kamu sebaiknya menekan tombol jalan pintas (shortcut) apa secara berkala?", 
        o: ["CTRL + P", "CTRL + S", "CTRL + C", "CTRL + Z"], 
        k: 1,
        b: "Huruf ini merupakan singkatan dari kata 'Save' (Simpan)."
    },
    { 
        p: "Pada Excel, jika ada rumus =IF(A1>75, 'Lulus', 'Remedial'), dan sel A1 berisi angka 70, maka hasil yang akan muncul adalah...", 
        o: ["Lulus", "Remedial", "75", "Error"], 
        k: 1,
        b: "Apakah 70 lebih besar dari 75? Tidak (False). Maka kondisi yang kedua yang akan dijalankan."
    },
    { 
        p: "Fasilitas integrasi antar aplikasi di sistem operasi Windows yang memungkinkan sebuah objek (seperti grafik/tabel) dari satu aplikasi ditanamkan ke aplikasi lain disebut...", 
        o: ["OLE (Object Linking and Embedding)", "PDF (Portable Document Format)", "GUI (Graphical User Interface)", "FTP (File Transfer Protocol)"], 
        k: 0,
        b: "Singkatan ini memuat kata 'Linking' (Menautkan) dan 'Embedding' (Menanamkan)."
    },
    { 
        p: "Di PowerPoint, fitur yang memungkinkan kita mengatur tata letak dasar, font, dan tema yang akan teraplikasikan ke semua slide secara serentak disebut...", 
        o: ["Slide Sorter", "Slide Master", "Hyperlink", "SmartArt"], 
        k: 1,
        b: "Ini adalah slide 'Induk' atau penguasa utama. Jika kamu mengubah font di sini, semua slide anakannya akan ikut berubah."
    },
    { 
        p: "Tipe ekstensi file standar (default) untuk dokumen Microsoft Excel versi 2007 ke atas adalah...", 
        o: [".docx", ".pptx", ".xlsx", ".txt"], 
        k: 2,
        b: "Akhiran huruf 'x' menandakan format XML. Huruf depannya mewakili nama aplikasinya (E'x'cel, 'd'ocument, 'p'owerpoint)."
    },
    { 
        p: "Fungsi utama dari fitur 'Freeze Panes' di Microsoft Excel adalah...", 
        o: ["Membekukan komputer agar tidak bisa diklik", "Mengunci baris atau kolom tertentu agar tetap terlihat saat digulir (scroll)", "Memberikan warna dingin pada sel", "Melindungi file dengan kata sandi"], 
        k: 1,
        b: "Sangat berguna untuk tabel panjang, agar judul kolom di baris paling atas tetap diam (membeku) saat kamu scroll ke bawah."
    },
    { 
        p: "Jika kamu membuat presentasi untuk sidang tugas akhir, prinsip desain slide yang BAIK adalah...", 
        o: ["Memasukkan seluruh teks dari makalah ke dalam slide", "Menggunakan banyak warna cerah yang bertabrakan", "Menggunakan poin-poin singkat (bullet points) dan gambar yang relevan", "Menggunakan efek transisi yang sangat lambat dan berisik"], 
        k: 2,
        b: "Slide presentasi harusnya mendukung ucapanmu, bukan menjadi buku bacaan baru bagi audiens."
    },
    { 
        p: "Untuk mengintegrasikan data berupa Tabel dari Excel ke PowerPoint agar desain tabelnya mengikuti warna tema PowerPoint, kita menggunakan opsi paste...", 
        o: ["Use Destination Styles", "Keep Source Formatting", "Picture", "Keep Text Only"], 
        k: 0,
        b: "Destination artinya 'Tujuan'. Styles artinya 'Gaya'. Pilih opsi yang menggunakan gaya dari aplikasi tujuan."
    },
    { 
        p: "Selain menyimpan file di flashdisk, kita dapat menggunakan teknologi penyimpanan awan (Cloud Storage) agar file dapat diakses di mana saja. Salah satu layanan cloud dari Google adalah...", 
        o: ["OneDrive", "iCloud", "Dropbox", "Google Drive"], 
        k: 3,
        b: "Cari opsi yang memiliki nama perusahaan mesin pencari terbesar di dunia."
    }
];
