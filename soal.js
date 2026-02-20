// ==========================================
// DATABASE SOAL INFORMATIKA KELAS 10
// Materi: Analisis dan Visualisasi Data
// ==========================================

const daftarSoalAsli = [
    { 
        p: "Tujuan utama dari visualisasi data adalah...", 
        o: ["Membuat laporan terlihat lebih berwarna dan tebal", "Memudahkan pemahaman informasi dan pola dari sekumpulan data", "Menyembunyikan data yang tidak penting dari atasan", "Mengubah semua teks angka menjadi gambar murni"], 
        k: 1 
    },
    { 
        p: "Jika kamu ingin menunjukkan perbandingan jumlah panen jagung di 5 kecamatan berbeda di Kabupaten Jember, grafik yang paling tepat adalah...", 
        o: ["Grafik Garis (Line Chart)", "Diagram Pencar (Scatter Plot)", "Diagram Batang (Bar Chart)", "Grafik Lingkaran (Pie Chart)"], 
        k: 2 
    },
    { 
        p: "Grafik yang bentuknya menyerupai 'potongan kue' dan berfungsi menunjukkan proporsi dari total keseluruhan disebut...", 
        o: ["Pie Chart", "Bar Chart", "Line Chart", "Scatter Plot"], 
        k: 0 
    },
    { 
        p: "Untuk menganalisis tren kenaikan suhu rata-rata bumi secara berkelanjutan dari tahun 1990 hingga 2023, sebaiknya kita menggunakan...", 
        o: ["Diagram Batang", "Grafik Lingkaran", "Grafik Garis", "Diagram Venn"], 
        k: 2 
    },
    { 
        p: "Seorang peneliti ingin membuktikan apakah ada hubungan (korelasi) antara 'Jumlah Jam Tidur' dengan 'Tingkat Konsentrasi' siswa di kelas. Ia harus menggunakan...", 
        o: ["Diagram Pencar (Scatter Plot)", "Diagram Batang Bersusun", "Grafik Garis", "Grafik Lingkaran"], 
        k: 0 
    },
    { 
        p: "Manakah di bawah ini yang BUKAN merupakan fungsi utama dari diagram batang?", 
        o: ["Membandingkan kuantitas antar kategori", "Melihat frekuensi data pada suatu kelompok", "Melihat tren waktu yang sangat panjang dan berkelanjutan", "Menunjukkan peringkat (ranking) dari data terbesar ke terkecil"], 
        k: 2 
    },
    { 
        p: "Dalam sebuah Grafik Lingkaran (Pie Chart), jika satu irisan berukuran 25%, artinya irisan tersebut mewakili...", 
        o: ["Seperempat dari total data", "Setengah dari total data", "Seluruh data", "Sepertiga dari total data"], 
        k: 0 
    },
    { 
        p: "Sumbu mendatar (Sumbu X) pada grafik garis (Line Chart) umumnya digunakan untuk merepresentasikan...", 
        o: ["Nilai Data atau Kuantitas", "Kategori Barang", "Waktu (Tahun/Bulan/Hari)", "Persentase Kumulatif"], 
        k: 2 
    },
    { 
        p: "Jika titik-titik data pada Diagram Pencar (Scatter Plot) membentuk pola garis lurus yang naik dari kiri bawah ke kanan atas, artinya...", 
        o: ["Tidak ada hubungan sama sekali", "Korelasi negatif (berbanding terbalik)", "Korelasi positif (berbanding lurus)", "Datanya rusak/error"], 
        k: 2 
    },
    { 
        p: "Sebelum data mentah divisualisasikan, terkadang kita menemukan baris data yang kosong atau formatnya salah. Proses memperbaiki data ini disebut...", 
        o: ["Data Cleaning (Pembersihan Data)", "Data Printing (Pencetakan Data)", "Data Deletion (Penghapusan Data)", "Data Mining (Penambangan Data)"], 
        k: 0 
    },
    { 
        p: "Grafik manakah yang paling TIDAK COCOK untuk menyajikan data yang memiliki sangat banyak kategori (misalnya: 50 nama kota yang berbeda)?", 
        o: ["Grafik Lingkaran (Pie Chart)", "Diagram Batang Horizontal", "Tabel Data", "Diagram Pencar"], 
        k: 0 
    },
    { 
        p: "Apa kelemahan fatal jika kita menggunakan grafik garis untuk membandingkan kategori yang tidak ada urutan waktunya (misal: rasa es krim favorit)?", 
        o: ["Warnanya terbatas", "Memberikan kesan palsu seolah-olah ada tren/kesinambungan antar rasa", "Ukurannya terlalu memakan tempat di kertas", "Tidak bisa menunjukkan angka yang pasti"], 
        k: 1 
    },
    { 
        p: "Untuk mempresentasikan hasil perolehan suara 4 kandidat ketua OSIS kepada seluruh siswa saat upacara, visualisasi paling efektif adalah...", 
        o: ["Diagram Pencar", "Diagram Batang", "Grafik Garis", "Heatmap"], 
        k: 1 
    },
    { 
        p: "Jika kita ingin menunjukkan persentase komposisi gizi (karbohidrat, protein, lemak) di dalam satu bungkus mi instan, paling bagus disajikan menggunakan...", 
        o: ["Grafik Garis", "Diagram Batang Horizontal", "Grafik Lingkaran (Pie Chart)", "Scatter Plot"], 
        k: 2 
    },
    { 
        p: "Manakah pernyataan yang BENAR mengenai sumbu vertikal (Sumbu Y) pada diagram batang tegak (vertical bar chart)?", 
        o: ["Selalu menunjukkan nama kategori", "Selalu menunjukkan keterangan waktu", "Biasanya menunjukkan rentang nilai/kuantitas data", "Sumbu Y tidak wajib ada di diagram batang"], 
        k: 2 
    }
];