const Router = require('koa-router');

const router = new Router();

const Auth = require('./controllers/auth');
const Rodadas = require('./repositories/jogos');
const Jogos = require('./controllers/jogos');
const Classificacao = require('./controllers/classificacao');

const Password = require('./middlewares/encrypt');
const Session = require('./middlewares/session');

router.post('/auth', Auth.autenticar);
router.get('/jogos/:rodada', Session.verify, Rodadas.obterRodada);
router.post('/jogos', Password.encrypt, Jogos.editarPlacar);
router.get('/classificacao', Session.verify, Classificacao.classificacao);

module.exports = router;
