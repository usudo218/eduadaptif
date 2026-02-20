// ==========================================
// DATABASE SOAL INFORMATIKA KELAS 10
// Elemen: Jaringan Komputer dan Internet (JKI)
// ==========================================

const daftarSoalAsli = [
    { 
        p: "Jaringan komputer yang mencakup area ruang yang kecil, seperti di dalam satu ruangan lab komputer atau satu gedung sekolah, disebut...", 
        o: ["WAN (Wide Area Network)", "LAN (Local Area Network)", "MAN (Metropolitan Area Network)", "PAN (Personal Area Network)"], 
        k: 1,
        b: "Sesuai dengan namanya, jaringan ini hanya berskala 'Lokal'."
    },
    { 
        p: "Jaringan global yang menghubungkan jutaan komputer di seluruh dunia sehingga pengguna bisa saling bertukar informasi disebut...", 
        o: ["Intranet", "Internet", "Ethernet", "Bluetooth"], 
        k: 1,
        b: "Ini adalah singkatan dari Interconnected Network."
    },
    { 
        p: "Kabel jaringan yang terbuat dari serat kaca atau plastik sangat halus dan mentransmisikan data menggunakan cahaya sehingga sangat cepat adalah...", 
        o: ["Kabel Coaxial", "Kabel UTP (Twisted Pair)", "Kabel Fiber Optik", "Kabel HDMI"], 
        k: 2,
        b: "Cari opsi yang memiliki kata 'Fiber' (serat) dan 'Optik' (cahaya)."
    },
    { 
        p: "Teknologi jaringan nirkabel (tanpa kabel) jarak dekat yang biasa digunakan untuk menghubungkan *headset* tanpa kabel ke *smartphone* adalah...", 
        o: ["Wi-Fi", "Inframerah (Infrared)", "Bluetooth", "NFC"], 
        k: 2,
        b: "Namanya diambil dari nama seorang raja Skandinavia, terjemahan harfiahnya 'Gigi Biru'."
    },
    { 
        p: "Saat kamu membagikan koneksi internet dari *smartphone* kamu ke laptop agar laptop bisa ikut internetan, fitur yang sedang kamu gunakan disebut...", 
        o: ["Tethering / Personal Hotspot", "Bluetooth Pairing", "Airplane Mode", "Roaming"], 
        k: 0,
        b: "Fitur ini mengubah HP kamu menjadi titik pemancar gelombang internet."
    },
    { 
        p: "Perusahaan yang menyediakan jasa layanan koneksi internet kepada pelanggannya (seperti Indihome, Telkomsel, Biznet) disebut dengan istilah...", 
        o: ["WWW (World Wide Web)", "ISP (Internet Service Provider)", "LAN Server", "Web Browser"], 
        k: 1,
        b: "Fokus pada kata Provider yang berarti 'Penyedia'."
    },
    { 
        p: "Alamat unik berupa deretan angka yang diberikan kepada setiap perangkat yang terhubung ke dalam suatu jaringan (seperti identitas KTP komputer) disebut...", 
        o: ["MAC Address", "Alamat URL", "IP Address (Internet Protocol)", "Subnet Mask"], 
        k: 2,
        b: "Alamat ini menggunakan singkatan dari Protokol Internet."
    },
    { 
        p: "Suatu proses mengacak data atau pesan sehingga tidak dapat dibaca oleh orang yang tidak berhak (hacker), dan hanya bisa dibaca oleh penerima yang memiliki kuncinya disebut...", 
        o: ["Deskripsi", "Enkripsi (Encryption)", "Dekompilasi", "Hacking"], 
        k: 1,
        b: "Ini adalah ilmu kriptografi dasar untuk memproteksi keamanan data di internet."
    },
    { 
        p: "Saat kita memasukkan *password* atau data pribadi di sebuah situs web, pastikan di pojok *address bar browser* terdapat ikon gembok terkunci, yang berarti situs tersebut menggunakan protokol aman, yaitu...", 
        o: ["HTTP", "HTML", "FTP", "HTTPS"], 
        k: 3,
        b: "Huruf 'S' di bagian belakangnya adalah singkatan dari kata 'Secure' (Aman)."
    },
    { 
        p: "Salah satu bahaya utama jika kita login ke akun bank menggunakan koneksi Wi-Fi publik (di kafe/bandara) yang tidak dikunci (tanpa password) adalah...", 
        o: ["Baterai HP akan lebih cepat habis", "Kecepatan internetnya terlalu kencang", "Data yang kita kirim bisa dengan mudah disadap (dicuri) oleh hacker di jaringan yang sama", "Layar HP akan tiba-tiba menjadi gelap"], 
        k: 2,
        b: "Jaringan terbuka tanpa password (Open Wi-Fi) berarti transmisinya tidak dienkripsi dengan baik."
    },
    { 
        p: "Kecepatan maksimal transfer data pada sebuah jaringan komputer dalam satuan waktu tertentu sering disebut dengan istilah...", 
        o: ["Ping", "Latency", "Bandwidth", "Gateway"], 
        k: 2,
        b: "Istilah ini bermakna 'Lebar Pita'. Semakin lebar pitanya, semakin banyak data yang bisa lewat bersamaan."
    },
    { 
        p: "Bentuk kejahatan siber (cybercrime) di mana pelaku mengirim email palsu seolah-olah dari pihak resmi (misal: bank) untuk memancing korban memberikan password disebut...", 
        o: ["Phishing", "Spamming", "Carding", "DDoS"], 
        k: 0,
        b: "Pelaku sedang 'memancing' mangsanya. Istilah ini plesetan dari kata bahasa Inggris untuk memancing."
    },
    { 
        p: "Perangkat keras jaringan yang berfungsi meneruskan paket data dari satu jaringan lokal ke jaringan lainnya (misalnya menghubungkan LAN sekolah ke Internet) adalah...", 
        o: ["Switch", "Hub", "Router", "Kabel UTP"], 
        k: 2,
        b: "Perangkat ini mencari rute (route) terbaik agar paket data sampai ke tujuan."
    },
    { 
        p: "Manakah kriteria pembuatan *password* (kata sandi) yang PALING KUAT untuk memproteksi akun internet kamu?", 
        o: ["Menggunakan nama panggilan dan tanggal lahir", "Kombinasi huruf besar, kecil, angka, dan simbol unik (minimal 8 karakter)", "Menggunakan angka 12345678", "Kata yang mudah diingat seperti 'qwerty'"], 
        k: 1,
        b: "Semakin bervariasi jenis karakternya, password semakin sulit ditebak oleh program komputer."
    },
    { 
        p: "Teknologi jaringan nirkabel yang sangat bergantung pada menara *Base Transceiver Station* (BTS) penyedia layanan operator seluler adalah...", 
        o: ["Wi-Fi", "Bluetooth", "Jaringan Seluler (4G/5G)", "LAN"], 
        k: 2,
        b: "Sinyalnya bisa kamu dapatkan hampir di mana saja selama ada tower provider, tidak terbatas pada satu ruangan."
    }
];
