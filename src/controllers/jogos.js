const response = require('../utils/response');
const Jogos = require('../repositories/jogos');
const Rodadas = require('../repositories/jogos');

const obterJogosRodada = async (ctx) => {
	const { rodada = null } = ctx.params;
	if (rodada) {
		const result = await Jogos.obterJogosRodada(rodada);
		if (result) {
			console.log('funcionou');
			return response(ctx, 200, result);
		}
	}
	return response(ctx, 400, { mensagem: 'Error' });
};

const obterRodada = async (ctx) => {
	const { rodada = null } = ctx.params;
	if (rodada) {
		const result = await Rodadas.obterRodada(rodada);
		if (result) {
			console.log('funcionou');
			return response(ctx, 200, result);
		}
	}
	return response(ctx, 400, { mensagem: 'Error' });
};

module.exports = { obterJogosRodada, obterRodada };

obterJogosRodada({ params: { rodada: 1 } });
