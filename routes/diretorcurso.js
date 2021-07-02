const diretorCursoRoutes = (app, fs) => {
    const dataPath = './data/diretorcurso.json';
  
    app.get('/diretorcurso', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = diretorCursoRoutes;