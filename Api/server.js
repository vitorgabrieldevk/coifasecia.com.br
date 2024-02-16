const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'coifasecia.com.br'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor da API está rodando em http://localhost:${port}`);
});

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM usuarios';
    db.query(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO usuarios (login, senha) VALUES (?, ?)';
    db.query(query, [name, email], (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            id: result.insertId,
            name: name,
            email: email
        });
    });
});
