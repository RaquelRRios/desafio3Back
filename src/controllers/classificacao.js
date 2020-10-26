const response = require('../utils/response');
const Classificacao = require('../repositories/jogos');

const obterClassificacao = async (ctx) => {
	const { classificacao = null } = ctx.params;
	if (classificacao) {
		const result = await Classificacao.obterClassificacao(classificacao);
		if (result) {
			console.log('funcionou');
			return response(ctx, 200, result);
		}
	}
	return response(ctx, 400, { mensagem: 'Error' });
};

module.exports = { obterClassificacao };
