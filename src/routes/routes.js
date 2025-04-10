const express = require('express'); 
const router = express.Router(); 

const LivrariasController = require('../controllers/livrarias'); 

router.get('/Livrarias', LivrariasController.listarLivrarias); 
router.post('/Livrarias', LivrariasController.cadastrarLivrarias); 
router.patch('/Livrarias', LivrariasController.editarLivrarias); 
router.delete('/Livrarias', LivrariasController.apagarLivrarias); 


module.exports = router;