const express = require('express'); 
const router = express.Router(); 

const LivrariasController = require('../controllers/livrarias'); 
const LivrariaLivrosController = require('../controllers/livraria_livros'); 


router.get('/livrarias', LivrariasController.listarLivrarias); 
router.post('/livrarias', LivrariasController.cadastrarLivrarias); 
router.patch('/livrarias', LivrariasController.editarLivrarias); 
router.delete('/livrarias', LivrariasController.apagarLivrarias); 

router.get('/livrariaLivros', LivrariaLivrosController.listarLivrariaLivros); 
router.post('/livrariaLivros', LivrariaLivrosController.cadastrarLivrariaLivros); 
router.patch('/livrariaLivros', LivrariaLivrosController.editarLivrariaLivros); 
router.delete('/livrariaLivros', LivrariaLivrosController.apagarLivrariaLivros); 


module.exports = router;