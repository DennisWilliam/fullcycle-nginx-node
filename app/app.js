//CONFIGURAÇÃO EXPRESS
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

//CONFIGURAÇÃO POSTGRES
const { Pool } = require('pg');
const pool = new Pool({
  user: 'pg',
  host: 'postgres',
  database: 'database',
  password: '123456',
  port: 5432,
});


//MONTAGEM DO HTML
const peopleTohtml = (people) => `
	<html>
		<head>
			<title> Full Cycle Nginx </title>
		</head>
		<body>
			<h1>Full Cycle Rocks!</h1>
			<ul>
				${people.map((person) => `<li>id:${person.id} - nome: ${person.people_name}</li>`)}
			</ul>
		</body>
	</html>`;

//DEVEOLVER DADOS CADASTRADOS
app.get('/service', async (req, res) => {
	let result = [];
	try{
		result = await pool.query(`SELECT * FROM PEOPLE`);
		res.send(peopleTohtml(result.rows));
	}
	catch (error) {
    	console.error('Erro ao inserir nome:', error);
    	res.status(500).json({ erro: 'Erro interno do servidor' });
  	}

});

//INSERIR DADOS
app.put('/service', async (req, res) => {
	const body = req.body;
	try{
		await pool.query(`INSERT INTO people (people_name) VALUES ($1)`, [body.name]);
		const result = await pool.query(`SELECT * FROM PEOPLE`);
    	res.json(result.rows);
	}
	catch (error) {
    	console.error('Erro ao inserir nome:', error);
    	res.status(500).json({ erro: 'Erro interno do servidor' });
  	}
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});