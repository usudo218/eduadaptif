// ==========================================
// DATABASE SOAL INFORMATIKA KELAS 10
// Elemen: Dampak Sosial Informatika (DSI)
// ==========================================

const daftarSoalAsli = [
    { 
        p: "Ilmuwan matematika asal Inggris yang dijuluki sebagai 'Bapak Komputer' karena pertama kali menggagas konsep mesin komputasi yang dapat diprogram (Analytical Engine) adalah...", 
        o: ["Alan Turing", "Charles Babbage", "Albert Einstein", "Bill Gates"], 
        k: 1,
        b: "Beliau hidup di abad ke-19, jauh sebelum ada listrik, tapi sudah merancang mesin hitung mekanis bertenaga uap."
    },
    { 
        p: "Siapakah tokoh yang diakui sebagai Programmer Komputer Pertama di dunia, yang menulis algoritma untuk mesin buatan Charles Babbage?", 
        o: ["Ada Lovelace", "Grace Hopper", "Steve Jobs", "Mark Zuckerberg"], 
        k: 0,
        b: "Tokoh ini adalah seorang wanita brilian, putri dari penyair terkenal Lord Byron."
    },
    { 
        p: "Komputer generasi pertama (seperti ENIAC yang dibuat pada tahun 1946) ukurannya sebesar ruangan rumah karena komponen utamanya masih menggunakan...", 
        o: ["Transistor", "Microprosesor", "Tabung Hampa Udara (Vacuum Tube)", "Integrated Circuit (IC)"], 
        k: 2,
        b: "Komponen ini berukuran seperti lampu pijar, sangat mudah panas, dan membutuhkan daya listrik yang sangat besar."
    },
    { 
        p: "Tokoh yang menemukan World Wide Web (WWW) dan mengubah cara dunia berbagi informasi secara gratis adalah...", 
        o: ["Tim Berners-Lee", "Elon Musk", "Larry Page", "Sergey Brin"], 
        k: 0,
        b: "Penemuannya diawali di lab CERN pada tahun 1989. Namanya berawalan huruf 'T'."
    },
    { 
        p: "Di bawah ini, manakah yang merupakan salah satu dampak NEGATIF dari perkembangan TIK di bidang sosial?", 
        o: ["Meningkatnya lapangan kerja di bidang digital", "E-commerce memudahkan jual beli antar negara", "Cyberbullying dan penyebaran berita palsu (Hoax)", "E-learning memungkinkan siswa belajar dari rumah"], 
        k: 2,
        b: "Fokus pada opsi yang menimbulkan kerugian mental atau kebingungan di masyarakat."
    },
    { 
        p: "Peraturan perundang-undangan di Indonesia yang secara khusus mengatur tentang informasi elektronik dan transaksi elektronik (termasuk sanksi bagi penyebar Hoax dan ujaran kebencian) adalah...", 
        o: ["KUHP", "UU Hak Cipta", "UU Perlindungan Konsumen", "UU ITE"], 
        k: 3,
        b: "Singkatannya adalah Informasi dan Transaksi Elektronik."
    },
    { 
        p: "Kamu menemukan sebuah foto bagus di Google dan menggunakannya untuk logo bisnis jualanmu tanpa meminta izin atau membayar kepada fotografer aslinya. Tindakan ini melanggar...", 
        o: ["Hak Asasi Manusia", "Hak Kekayaan Intelektual (HKI)", "Hak Kebebasan Berekspresi", "Netiquette"], 
        k: 1,
        b: "Karya seni, tulisan, dan perangkat lunak dilindungi oleh hak cipta yang merupakan bagian dari kekayaan pikiran (intelektual)."
    },
    { 
        p: "Perangkat lunak (software) yang source code-nya dibuka untuk publik sehingga siapa saja boleh melihat, memodifikasi, dan mendistribusikan ulang secara gratis disebut...", 
        o: ["Proprietary Software", "Commercial Software", "Open Source Software", "Malware"], 
        k: 2,
        b: "Dalam bahasa Indonesia artinya 'Sumber Terbuka'."
    },
    { 
        p: "Sebaliknya, software yang lisensinya tertutup, berbayar, dan kita tidak boleh mengotak-atik kodenya (seperti Microsoft Windows) disebut...", 
        o: ["Freeware", "Shareware", "Open Source", "Proprietary Software (Perangkat Lunak Berpemilik)"], 
        k: 3,
        b: "Istilah bahasa Inggris ini berarti dimiliki secara eksklusif oleh suatu perusahaan."
    },
    { 
        p: "Tindakan memperbanyak, mendistribusikan, atau menjual software berlisensi komersial tanpa izin resmi dari pembuatnya dikenal dengan istilah...", 
        o: ["Hacking", "Pembajakan (Piracy)", "Carding", "Phishing"], 
        k: 1,
        b: "Istilah ini identik dengan perompak di lautan yang merampas kapal orang lain."
    },
    { 
        p: "Profesi di bidang Informatika yang tugas utamanya adalah merancang dan menulis kode bahasa pemrograman untuk membuat aplikasi adalah...", 
        o: ["System Analyst", "Data Scientist", "Software Engineer / Programmer", "Network Administrator"], 
        k: 2,
        b: "Orang yang membuat program."
    },
    { 
        p: "Profesi yang tugasnya mengumpulkan, mengolah, dan menganalisis kumpulan data dalam jumlah yang sangat besar (Big Data) untuk mencari tren atau informasi berharga bagi perusahaan adalah...", 
        o: ["Database Administrator", "Data Scientist / Data Analyst", "Web Developer", "UI/UX Designer"], 
        k: 1,
        b: "Kata kuncinya adalah 'Ilmuwan/Analis Data'."
    },
    { 
        p: "Sopan santun dan etika saat berkomunikasi di dunia maya (internet) disebut dengan istilah...", 
        o: ["Netiquette (Network Etiquette)", "Cyberlaw", "Digital Footprint", "E-Government"], 
        k: 0,
        b: "Ini adalah gabungan dari kata 'Net' (Internet) dan 'Etiquette' (Etika/Sopan Santun)."
    },
    { 
        p: "Segala jejak data atau aktivitas yang sengaja atau tidak sengaja kamu tinggalkan saat berselancar di internet (seperti postingan lama, komentar, riwayat pencarian) yang bisa dilacak oleh orang lain disebut...", 
        o: ["Digital Footprint (Jejak Digital)", "Cache Memory", "Spam", "Cookies"], 
        k: 0,
        b: "Ibarat jejak kakimu di pasir pantai yang tertinggal setelah kamu lewat."
    },
    { 
        p: "Peran Informatika dalam bidang kesehatan (Medis) sangat besar. Salah satu contoh penerapannya adalah...", 
        o: ["E-Commerce", "E-Learning", "Telemedicine (Konsultasi dokter jarak jauh via aplikasi)", "E-Government"], 
        k: 2,
        b: "Gabungan kata dari Tele (Jarak jauh) dan Medicine (Pengobatan/Obat)."
    }
];
