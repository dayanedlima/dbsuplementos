var express = require('express');
var router = express.Router();
let db = require('../utils/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/listar', function (req, res) {
  let cmd = 'SELECT IdAutor, NoAutor, NoNacionalidade FROM TbAutor AS a INNER JOIN TbNacionalidade AS n ';
  cmd = cmd + 'ON a.IdNacionalidade = n.IdNacionalidade ORDER BY NoAutor; ',
  db.query(cmd, [], function (erro, listagem) {
    if (erro) {
       res.send(erro);
    }
    res.render('autores-lista', {resultado: listagem});

  });
});

module.exports = router;