const diretorEscolaRoutes = (app, fs) => {
    const dataPath = './data/diretorescola.json';
  
    app.get('/diretorescola', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = diretorEscolaRoutes;