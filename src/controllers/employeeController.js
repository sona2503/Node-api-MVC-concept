const db = require('../models/db');

// 🔹 Ambil Semua Karyawan
exports.getAllEmployees = (req, res) => {
    db.query('SELECT * FROM karyawan', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};


// 🔹 Tambah Karyawan
exports.addEmployee = (req, res) => {
    const { nama, usia, alamat } = req.body;
    db.query('INSERT INTO karyawan (nama, usia, alamat) VALUES (?, ?, ?)', 
        [nama, usia, alamat], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Karyawan berhasil ditambahkan!', id: result.insertId });
    });
};

// 🔹 Update Karyawan
exports.updateEmployee = (req, res) => {
    const { nama, usia, alamat } = req.body;
    const { id } = req.params;
    db.query('UPDATE karyawan SET nama = ?, usia = ?, alamat = ? WHERE id = ?', 
        [nama, usia, alamat, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Karyawan berhasil diperbarui!' });
    });
};

// 🔹 Hapus Karyawan
exports.deleteEmployee = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM karyawan WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Karyawan berhasil dihapus!' });
    });
};
