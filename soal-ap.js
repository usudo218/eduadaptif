// ==========================================
// DATABASE SOAL INFORMATIKA KELAS 10
// Elemen: Algoritma dan Pemrograman (AP)
// ==========================================

const daftarSoalAsli = [
    { 
        p: "Urutan langkah-langkah logis dan sistematis yang disusun untuk menyelesaikan sebuah masalah disebut...", 
        o: ["Program", "Algoritma", "Pseudocode", "Struktur Data"], 
        k: 1,
        b: "Ini adalah fondasi sebelum kamu menulis kode program. Kata ini diambil dari nama ilmuwan Muslim, Al-Khawarizmi."
    },
    { 
        p: "Dalam pembuatan Flowchart (Diagram Alir), bentuk belah ketupat (diamond) melambangkan proses...", 
        o: ["Input / Output", "Mulai / Selesai (Terminator)", "Pengambilan Keputusan (Decision)", "Proses Perhitungan (Process)"], 
        k: 2,
        b: "Bentuk ini memiliki cabang 'Ya' dan 'Tidak'. Fungsinya untuk menyeleksi kondisi."
    },
    { 
        p: "Manakah aturan penamaan Variabel yang BENAR dalam sebagian besar bahasa pemrograman?", 
        o: ["Boleh menggunakan spasi (contoh: nama siswa)", "Boleh diawali dengan angka (contoh: 1nama)", "Tidak boleh menggunakan spasi (contoh: nama_siswa)", "Harus menggunakan huruf kapital semua"], 
        k: 2,
        b: "Spasi akan dianggap sebagai dua perintah yang berbeda oleh komputer. Gunakan tanda garis bawah (underscore) sebagai penggantinya."
    },
    { 
        p: "Perbedaan utama antara Variabel dan Konstanta adalah...", 
        o: ["Variabel menyimpan angka, Konstanta menyimpan teks", "Nilai Variabel bisa diubah saat program berjalan, nilai Konstanta tetap", "Variabel digunakan di awal, Konstanta di akhir program", "Tidak ada perbedaan, keduanya sama"], 
        k: 1,
        b: "Sesuai dengan namanya, yang satu 'bervariasi' (bisa berubah), yang satu lagi 'konstan' (tetap, contoh: nilai Pi = 3.14)."
    },
    { 
        p: "Jika ada operasi matematika: 10 MOD 3 (atau 10 % 3), berapakah hasil yang akan ditampilkan oleh komputer?", 
        o: ["3", "1", "3.33", "0"], 
        k: 1,
        b: "MOD (Modulus) adalah operasi yang mencari SISA hasil bagi. 10 dibagi 3 itu hasilnya 3, sisanya berapa?"
    },
    { 
        p: "Tipe data yang paling tepat digunakan untuk menyimpan kalimat seperti 'Selamat Datang di Jember' adalah...", 
        o: ["Integer", "Float", "Boolean", "String"], 
        k: 3,
        b: "Integer untuk angka bulat, Boolean untuk Benar/Salah. Untuk sekumpulan karakter atau teks, sebutannya ibarat 'untaian benang'."
    },
    { 
        p: "Struktur Kontrol Keputusan (If-Else) berfungsi untuk...", 
        o: ["Mengulang perintah berkali-kali", "Menyimpan banyak data sekaligus", "Mengeksekusi perintah tertentu jika sebuah kondisi terpenuhi", "Mengubah tipe data angka menjadi huruf"], 
        k: 2,
        b: "Jika (If) nilai ujian > 75 maka Lulus, selain itu (Else) maka Remedial."
    },
    { 
        p: "Jika a = 5 dan b = 10. Pada pengecekan kondisi (a > b), maka hasil yang dikembalikan oleh komputer bernilai...", 
        o: ["True (Benar)", "False (Salah)", "15", "Error"], 
        k: 1,
        b: "Apakah 5 lebih besar dari 10? Coba renungkan logikanya."
    },
    { 
        p: "Kapan kita menggunakan struktur kontrol perulangan FOR dibandingkan WHILE?", 
        o: ["Saat jumlah perulangan sudah diketahui secara pasti (misal: ulang 10 kali)", "Saat jumlah perulangan tidak diketahui, tergantung kondisi (misal: ulang sampai baterai habis)", "Hanya digunakan untuk tipe data huruf", "Saat program butuh percabangan"], 
        k: 0,
        b: "FOR digunakan ketika batas awal dan akhirnya jelas. WHILE digunakan ketika kita hanya tahu syarat berhentinya saja."
    },
    { 
        p: "Proses menghentikan sebuah perulangan secara paksa sebelum kondisi aslinya terpenuhi disebut...", 
        o: ["Continue", "Return", "Break", "Stop"], 
        k: 2,
        b: "Istilah bahasa Inggris ini berarti 'mematahkan' atau 'menghancurkan' siklus perulangan."
    },
    { 
        p: "Kumpulan data yang memiliki tipe yang sama dan disimpan dalam satu nama variabel secara berurutan disebut...", 
        o: ["Fungsi", "Prosedur", "Array (Larik)", "Konstanta"], 
        k: 2,
        b: "Ibarat rak sepatu. Raknya satu nama, tapi laci-lacinya (indeksnya) banyak dan berurutan."
    },
    { 
        p: "Secara default dalam pemrograman, indeks dari sebuah Array selalu dimulai dari angka...", 
        o: ["1", "0", "-1", "Tergantung jumlah datanya"], 
        k: 1,
        b: "Komputer mulai menghitung dari ketiadaan, bukan dari satu."
    },
    { 
        p: "Apa perbedaan paling mendasar antara Fungsi (Function) dan Prosedur (Procedure)?", 
        o: ["Fungsi hanya untuk angka, Prosedur untuk teks", "Prosedur harus panjang, Fungsi harus pendek", "Fungsi mengembalikan nilai (return value), Prosedur tidak mengembalikan nilai", "Tidak ada bedanya sama sekali"], 
        k: 2,
        b: "Fungsi itu ibarat mesin pembuat jus: kamu masukkan apel (input), keluar jus apel (output/dikembalikan). Prosedur ibarat menyuruh robot menyapu lantai (melakukan aksi, tapi tidak memberikan barang ke kamu)."
    },
    { 
        p: "Simbol yang umum digunakan untuk operasi perbandingan 'Tidak Sama Dengan' di banyak bahasa pemrograman (seperti C++ / Java / PHP) adalah...", 
        o: ["=", "==", "<>", "!="], 
        k: 3,
        b: "Tanda seru (!) dalam logika pemrograman sering kali berarti 'Not' atau Bukan/Tidak."
    },
    { 
        p: "Untuk menghindari agar program yang dibuat tidak sulit dibaca dan mudah diperbaiki di kemudian hari, pemrogram wajib...", 
        o: ["Menulis kode dalam satu baris panjang", "Menambahkan Komentar (Comment) dan Indentasi yang rapi", "Tidak membagikan kodenya ke siapapun", "Menggunakan nama variabel a, b, c saja"], 
        k: 1,
        b: "Catatan kecil di dalam kode sangat membantu programmer lain (atau dirimu sendiri di masa depan) untuk memahami alurnya."
    }
];
