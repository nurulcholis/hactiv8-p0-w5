// Misal :
// Data Penjualan dan Stok salah satu olipada bulan desember
// adalah sebagai:
// Penjualan
// = 13 buah
// Stok
// = 7 buah
// Sedangkan setting variabel fuzzy pada oli tersebut adalah:
// Stok sedikit
// = 4
// Stok sedang = 12
// Stok banyak = 20
// Penjualan rendah
// Penjualan sedang
// Penjualan tinggi = 5
// = 10
// = 15
// Stok minimum
// Stok Maksimum = 5
// = 25
// Dari data tersebut dapat dihitung nilai μ dari setiap himpunan
// fuzzy:
// μ StokSEDIKIT [7] = (12-7)/(12-4)= 0.625
// μ StokSEDANG [7] = (7-4)/(12-4)= 0.375
// μ StokBANYAK [7] = 0
// μ PenjRENDAH [15] = 0
// μ PenjSEDANG [15] = (15-13)/(15-10) = 0.4
// μ PenjTINGGI [15] = (13-10)/(15-10) = 0.6

var penjualan = [13]
var stok = [7]

var fuzzy_stok = [4,12,20]
var fuzzy_penjualan = [5,10,15]
var batas_stok = [5,25]

if('stok_sedikit'){
    nilai = (fuzzy_stok[1] - stok[0]) / (fuzzy_stok[1] - fuzzy_stok[0]) 
}else if('stok_sedang'){
    nilai = (stok[0] - fuzzy_stok[0]) / (fuzzy_stok[1] - fuzzy_stok[0])
}else if('stok_banyak'){
    nilai = 0
}

if('penjualan_sedikit'){
    nilai = 0
}else if('penjualan_sedang'){
    nilai = (fuzzy_penjualan[2] - penjualan[0]) / (fuzzy_penjualan[2] - fuzzy_penjualan[1])
}else if('penjualan_banyak'){
    nilai = (penjualan[0] - fuzzy_penjualan[1]) / (fuzzy_penjualan[2] - fuzzy_penjualan[1]) 
}