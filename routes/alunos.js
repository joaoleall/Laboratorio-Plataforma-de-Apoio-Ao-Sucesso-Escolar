const alunosRoutes = (app, fs) => {
    const dataPath = './data/alunos.json';

    app.get('/alunos', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = alunosRoutes;