const alunosRoutes = require('./alunos');
const diretorEscolaRoutes = require('./diretorescola');
const diretorCursoRoutes = require('./diretorcurso');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  app.post('/', function(req, res, next) {
   });

  alunosRoutes(app, fs);
  diretorCursoRoutes(app, fs);
  diretorEscolaRoutes(app, fs);
};

module.exports = appRouter;