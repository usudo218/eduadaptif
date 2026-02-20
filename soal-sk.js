// ==========================================
// DATABASE SOAL INFORMATIKA KELAS 10
// Elemen: Sistem Komputer (SK)
// ==========================================

const daftarSoalAsli = [
    { 
        p: "Tiga komponen utama yang harus ada agar sebuah sistem komputer dapat beroperasi dengan baik adalah...", 
        o: ["Hardware, Monitor, dan Keyboard", "Hardware, Software, dan Brainware", "Software, Windows, dan Microsoft Office", "CPU, RAM, dan Harddisk"], 
        k: 1,
        b: "Komputer butuh bentuk fisik, program yang dijalankan, dan manusia yang mengoperasikannya."
    },
    { 
        p: "Perangkat keras yang berfungsi sebagai 'otak' komputer, tempat di mana semua proses dan perhitungan data dilakukan, adalah...", 
        o: ["RAM (Random Access Memory)", "Motherboard", "CPU (Central Processing Unit)", "VGA Card"], 
        k: 2,
        b: "Singkatan ini berarti 'Unit Pemrosesan Pusat'."
    },
    { 
        p: "Manakah di bawah ini yang merupakan kelompok perangkat masukan (Input Device)?", 
        o: ["Monitor, Printer, Speaker", "Keyboard, Mouse, Scanner", "Harddisk, Flashdisk, SSD", "RAM, ROM, CPU"], 
        k: 1,
        b: "Perangkat masukan bertugas 'memasukkan' data atau perintah dari luar ke dalam komputer."
    },
    { 
        p: "Perangkat lunak dasar yang bertugas menjembatani komunikasi antara perangkat keras (hardware) dan aplikasi-aplikasi yang digunakan oleh pengguna adalah...", 
        o: ["Sistem Operasi (Operating System)", "Program Antivirus", "Microsoft Office", "Browser Web"], 
        k: 0,
        b: "Tanpa perangkat lunak ini (seperti Windows, macOS, atau Linux), komputer hanya akan menjadi rongsokan elektronik yang tidak bisa menyala dengan benar."
    },
    { 
        p: "Ketika kamu menambahkan printer baru ke komputer, terkadang printer tersebut belum bisa digunakan sebelum kamu menginstal sebuah program khusus. Program khusus ini disebut...", 
        o: ["Sistem Operasi", "Driver", "Aplikasi", "Utility"], 
        k: 1,
        b: "Istilahnya sama dengan 'Sopir'. Ia bertugas 'mengemudikan' atau mengenalkan perangkat keras baru tersebut ke sistem operasi."
    },
    { 
        p: "Bagian dari komputer yang berfungsi sebagai media penyimpanan data sementara yang isinya akan hilang saat komputer dimatikan adalah...", 
        o: ["ROM (Read Only Memory)", "Harddisk (HDD)", "Solid State Drive (SSD)", "RAM (Random Access Memory)"], 
        k: 3,
        b: "Ini adalah memori kerja. Jika listrik mati, semua data di memori ini (yang belum di-save ke Harddisk) akan hilang (Volatile)."
    },
    { 
        p: "Ilmu yang mempelajari bagaimana manusia berinteraksi dengan komputer, termasuk desain antarmuka pengguna (User Interface), disebut...", 
        o: ["HCI (Human Computer Interaction)", "AI (Artificial Intelligence)", "IoT (Internet of Things)", "OOP (Object Oriented Programming)"], 
        k: 0,
        b: "Singkatannya dari Interaksi (Interaction) antara Manusia (Human) dan Komputer (Computer)."
    },
    { 
        p: "Tampilan antarmuka komputer masa kini yang menggunakan gambar, ikon, jendela, dan penunjuk mouse (seperti pada Windows) disebut...", 
        o: ["CLI (Command Line Interface)", "GUI (Graphical User Interface)", "VUI (Voice User Interface)", "API (Application Programming Interface)"], 
        k: 1,
        b: "Fokus pada kata 'Graphical' yang berarti menggunakan elemen grafis/gambar."
    },
    { 
        p: "Papan sirkuit utama di dalam *casing* komputer tempat semua komponen (CPU, RAM, Harddisk, VGA) saling terhubung disebut...", 
        o: ["Power Supply", "Processor", "Motherboard (Mainboard)", "Casing"], 
        k: 2,
        b: "Namanya berarti 'Papan Induk'."
    },
    { 
        p: "Mengapa kita sangat disarankan untuk melakukan *update* (pembaruan) pada perangkat lunak atau sistem operasi secara berkala?", 
        o: ["Agar komputer menjadi lebih berat dan lambat", "Hanya untuk mengubah tampilan warna background", "Untuk menambal celah keamanan (bug) dan meningkatkan kinerja sistem", "Agar memori harddisk cepat penuh"], 
        k: 2,
        b: "Pembaruan (patch) sering kali berisi perbaikan dari kesalahan sistem sebelumnya yang bisa dimanfaatkan oleh virus."
    },
    { 
        p: "Perangkat keras yang bertugas mengubah data digital dari komputer menjadi tampilan visual di layar adalah...", 
        o: ["Sound Card", "VGA Card (Video Graphic Array)", "Network Interface Card (NIC)", "Power Supply Unit (PSU)"], 
        k: 1,
        b: "Singkatan ini memuat kata 'Video' dan 'Graphic'."
    },
    { 
        p: "Proses awal saat komputer pertama kali dihidupkan, di mana sistem mengecek perangkat keras lalu memuat Sistem Operasi ke RAM disebut...", 
        o: ["Shutting down", "Standby", "Booting", "Restarting"], 
        k: 2,
        b: "Istilahnya berasal dari kata 'Bootstrapping' (menarik tali sepatu)."
    },
    { 
        p: "Di bawah ini, manakah yang BUKAN merupakan contoh dari Sistem Operasi untuk PC/Laptop?", 
        o: ["Microsoft Windows", "Linux", "macOS", "Microsoft Word"], 
        k: 3,
        b: "Cari mana yang merupakan 'Aplikasi Perkantoran', bukan perangkat lunak dasar penggerak komputer."
    },
    { 
        p: "Sistem bilangan yang menjadi dasar bagaimana komputer memproses semua data (terdiri dari angka 0 dan 1) disebut bilangan...", 
        o: ["Desimal", "Heksadesimal", "Oktal", "Biner (Binary)"], 
        k: 3,
        b: "0 berarti arus listrik mati (Off), 1 berarti arus listrik mengalir (On). Namanya bilangan berawalan 'B'."
    },
    { 
        p: "Alat penyimpanan data eksternal masa kini yang lebih cepat dari Harddisk biasa (HDD) karena tidak menggunakan piringan cakram yang berputar, melainkan memori *flash*, adalah...", 
        o: ["CD-ROM", "Disket", "SSD (Solid State Drive)", "Pita Magnetik"], 
        k: 2,
        b: "Penyimpanan generasi baru ini tidak memiliki komponen mekanis/bergerak (Solid State)."
    }
];
