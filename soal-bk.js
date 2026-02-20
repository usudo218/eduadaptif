// ==========================================
// DATABASE SOAL INFORMATIKA KELAS 10
// Elemen: Berpikir Komputasional (BK)
// ==========================================

const daftarSoalAsli = [
    { 
        p: "Memecah sebuah masalah yang besar dan kompleks menjadi bagian-bagian kecil yang lebih mudah dikelola dan diselesaikan disebut...", 
        o: ["Pengenalan Pola", "Abstraksi", "Dekomposisi", "Perancangan Algoritma"], 
        k: 2,
        b: "Bayangkan merakit lemari baru; kamu membaginya menjadi merakit laci dulu, lalu pintu, lalu kerangka. Istilah ini berawalan huruf 'D'."
    },
    { 
        p: "Fokus pada informasi yang penting saja dan mengabaikan detail-detail yang tidak relevan dalam menyelesaikan masalah disebut...", 
        o: ["Abstraksi", "Dekomposisi", "Searching", "Sorting"], 
        k: 0,
        b: "Saat melihat peta rute KRL, kamu hanya melihat garis stasiun, bukan gambar pohon atau gedung di sekitarnya."
    },
    { 
        p: "Saat kamu melihat bahwa soal matematika nomor 1, 3, dan 5 memiliki cara penyelesaian yang sama persis, kamu sedang menerapkan fondasi CT yaitu...", 
        o: ["Dekomposisi", "Abstraksi", "Pengenalan Pola (Pattern Recognition)", "Algoritma"], 
        k: 2,
        b: "Kamu menyadari adanya kesamaan atau repetisi (pola) dari masalah-masalah tersebut."
    },
    { 
        p: "Dalam algoritma pencarian (Searching), metode pencarian dengan cara menebak nilai tengah dari sebuah data yang SUDAH TERURUT disebut...", 
        o: ["Sequential Search", "Binary Search", "Bubble Sort", "Linear Search"], 
        k: 1,
        b: "Pencarian ini membelah data menjadi dua bagian (Biner) setiap kali menebak, sangat cepat untuk data yang sudah urut."
    },
    { 
        p: "Jika kamu mencari sebuah buku di perpustakaan dengan cara mengecek buku satu per satu dari rak paling ujung sampai ketemu, metode ini disebut...", 
        o: ["Binary Search", "Sequential / Linear Search", "Selection Sort", "Insertion Sort"], 
        k: 1,
        b: "Pencariannya dilakukan secara berurutan atau satu garis lurus (Linier)."
    },
    { 
        p: "Proses mengatur sekumpulan data agar tersusun dengan aturan tertentu (misalnya dari nilai terkecil ke terbesar) disebut...", 
        o: ["Searching", "Sorting", "Stacking", "Queueing"], 
        k: 1,
        b: "Bahasa Inggris dari kata 'Pengurutan'."
    },
    { 
        p: "Pengurutan data dari abjad Z ke A, atau dari angka 100 ke 1, disebut dengan pengurutan...", 
        o: ["Ascending", "Descending", "Random", "Sequential"], 
        k: 1,
        b: "Artinya 'Menurun' (dari yang paling tinggi/besar ke yang rendah/kecil)."
    },
    { 
        p: "Konsep struktur data di mana elemen yang TERAKHIR kali dimasukkan akan menjadi yang PERTAMA kali dikeluarkan (LIFO) disebut...", 
        o: ["Queue (Antrean)", "Array (Larik)", "Stack (Tumpukan)", "Tree (Pohon)"], 
        k: 2,
        b: "Bayangkan mencuci piring; piring yang paling terakhir ditaruh di atas tumpukan adalah piring pertama yang akan diambil untuk dicuci."
    },
    { 
        p: "Sebaliknya, konsep struktur data di mana elemen yang PERTAMA kali masuk akan menjadi yang PERTAMA kali keluar (FIFO) disebut...", 
        o: ["Stack (Tumpukan)", "Graph", "Queue (Antrean)", "Bubble Sort"], 
        k: 2,
        b: "Sama seperti saat kamu membeli tiket bioskop. Siapa yang datang duluan, dia yang dilayani duluan."
    },
    { 
        p: "Fitur 'Undo' (CTRL+Z) pada aplikasi seperti Microsoft Word yang membatalkan ketikan terakhirmu adalah contoh nyata dari penerapan struktur data...", 
        o: ["Queue", "Sorting", "Stack", "Searching"], 
        k: 2,
        b: "Aksi terakhir yang kamu lakukan adalah aksi pertama yang dihapus (Last In, First Out)."
    },
    { 
        p: "Proses mesin printer yang mencetak dokumen secara berurutan sesuai dengan siapa yang menekan tombol 'Print' lebih dulu adalah contoh penerapan...", 
        o: ["Stack", "Queue", "Binary Search", "Abstraksi"], 
        k: 1,
        b: "Dokumen yang pertama dikirim akan dicetak pertama (First In, First Out)."
    },
    { 
        p: "Algoritma pengurutan yang bekerja dengan cara membandingkan elemen yang berdekatan dan menukarnya jika posisinya salah, seolah-olah elemen terbesar 'mengapung' ke atas, disebut...", 
        o: ["Bubble Sort", "Linear Search", "Binary Search", "Queue"], 
        k: 0,
        b: "Istilahnya diambil dari kata 'Gelembung' yang naik ke permukaan air."
    },
    { 
        p: "Di bawah ini, manakah yang BUKAN merupakan salah satu dari 4 fondasi Berpikir Komputasional?", 
        o: ["Dekomposisi", "Abstraksi", "Koding (Coding) / Menulis Bahasa Pemrograman", "Perancangan Algoritma"], 
        k: 2,
        b: "Berpikir komputasional itu tentang cara berpikir untuk memecahkan masalahnya, BUKAN tentang mengetik sintaks di depan komputer."
    },
    { 
        p: "Langkah-langkah instruksi yang ditulis secara terurut, jelas, dan tidak ambigu untuk menyelesaikan masalah (fondasi ke-4 dari CT) disebut...", 
        o: ["Abstraksi", "Dekomposisi", "Pola", "Algoritma"], 
        k: 3,
        b: "Ini adalah resep atau panduan langkah demi langkah (seperti resep memasak nasi goreng)."
    },
    { 
        p: "Syarat mutlak yang HARUS dipenuhi agar algoritma Binary Search (Pencarian Biner) bisa berfungsi/dijalankan pada sekumpulan data adalah...", 
        o: ["Datanya harus berupa angka genap", "Datanya harus sudah dalam keadaan terurut (Sorted)", "Datanya harus diacak terlebih dahulu", "Jumlah datanya harus kurang dari 10"], 
        k: 1,
        b: "Kamu tidak bisa mencari nilai tengah secara logis jika datanya masih berantakan."
    }
];
