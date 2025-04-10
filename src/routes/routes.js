const express = require('express'); 
const router = express.Router(); 

const LivrariasController = require('../controllers/livrarias'); 
const LivrariaLivrosController = require('../controllers/LivrariaLivros'); 


router.get('/Livrarias', LivrariasController.listarLivrarias); 
router.post('/Livrarias', LivrariasController.cadastrarLivrarias); 
router.patch('/Livrarias', LivrariasController.editarLivrarias); 
router.delete('/Livrarias', LivrariasController.apagarLivrarias); 

router.get('/LivrariaLivros', LivrariaLivrosController.listarLivrariaLivros); 
router.post('/LivrariaLivros', LivrariaLivrosController.cadastrarLivrariaLivros); 
router.patch('/LivrariaLivros', LivrariaLivrosController.editarLivrariaLivros); 
router.delete('/LvrariaLivros', LivrariaLivrosController.apagarLivrariaLivros); 


module.exports = router;