Berikut adalah file README.md untuk ekstensi tersebut:

```markdown
# UGM EZProxy Redirect Extension

**Author**: Didik Kurniawan  
**Versi**: 2.0  
**Kompatibel dengan**: Google Chrome & Microsoft Edge (Chromium-based)

## Deskripsi Plugin
Ekstensi ini memungkinkan akses ke sumber akademik melalui proxy UGM EZProxy dengan mudah. Saat ini mendukung platform:

1. IEEE Xplore  
   `ieeexplore.ieee.org` → `ieeexplore-ieee-org.ezproxy.ugm.ac.id`

2. ScienceDirect  
   `www.sciencedirect.com` → `www-sciencedirect-com.ezproxy.ugm.ac.id`

Fitur:
- Redirect melalui menu klik kanan
- Mempertahankan path URL asli
- Multi-domain support
- Kompatibel dengan Manifest V3

## Instalasi

### Untuk Google Chrome:
1. Download/Duplikat folder plugin
2. Buka Chrome, ketik di address bar:
   ```
   chrome://extensions
   ```
3. Aktifkan **Developer Mode** (toggle di pojok kanan atas)
4. Klik **Load unpacked**
5. Pilih folder plugin yang berisi:
   ```
   manifest.json
   background.js
   icon*.png
   ```
6. Ekstensi siap digunakan

### Untuk Microsoft Edge:
1. Download/Duplikat folder plugin
2. Buka Edge, ketik di address bar:
   ```
   edge://extensions
   ```
3. Aktifkan **Developer Mode** (toggle di pojok kanan bawah)
4. Klik **Load unpacked**
5. Pilih folder plugin
6. Ekstensi siap digunakan

## Cara Penggunaan
1. Buka artikel di:
   - IEEE Xplore (`ieeexplore.ieee.org`)
   - ScienceDirect (`www.sciencedirect.com`)

2. **Klik kanan** di mana saja pada halaman

3. Pilih **"UGM Proxy Access"** dari menu konteks

4. Akan otomatis redirect ke versi EZProxy UGM

## Catatan Penting
1. Pastikan:
   - Terkoneksi dengan jaringan UGM **ATAU**
   - Sudah login melalui proxy UGM sebelumnya

2. Untuk menambah domain lain:
   - Edit file `background.js`
   - Tambahkan mapping domain di objek `proxyMap`

## Troubleshooting
**Menu tidak muncul?**
- Pastikan berada di domain yang didukung
- Refresh halaman setelah instalasi ekstensi
- Cek kembali host permissions di manifest.json

**Redirect tidak bekerja?**
- Verifikasi koneksi internet
- Pastikan autentikasi proxy UGM aktif
- Cek konsol developer (F12) untuk error

## Disclaimer
Ekstensi ini tidak berafiliasi dengan resmi UGM. Pengguna bertanggung jawab penuh atas akses yang dilakukan melalui proxy universitas.

---

**🔄 Untuk update**: Ulangi proses instalasi dengan folder plugin versi terbaru  
**🗑️ Uninstall**: Hapus melalui halaman ekstensions browser
```
