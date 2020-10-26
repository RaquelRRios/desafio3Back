const database = require('../utils/database');

const obterRodada = async (rodada) => {
	const query = 'SELECT * FROM jogos WHERE id = $1';
	const jogo = await database.query({
		text: query,
		values: [rodada],
	});

	console.log(jogo.rows);
};

const obterJogosRodada = async (rodada) => {
	const query = 'SELECT * FROM jogos WHERE id = $1';
	const jogo = await database.query({
		text: query,
		values: [rodada],
	});

	console.log(jogo.rows);
};

const obterClassificacao = async (rodada) => {
	const query = 'SELECT * FROM jogos WHERE id = $1';
	const jogo = await database.query({
		text: query,
		values: [rodada],
	});

	console.log(jogo.rows);
};

module.exports = { obterJogosRodada, obterClassificacao, obterRodada };

obterJogosRodada({ params: { rodada: 1 } });
obterClassificacao({ params: { rodada: 1 } });
obterRodada({ params: { rodada: 1 } });
