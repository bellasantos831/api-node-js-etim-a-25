const db = require('../dataBase/connection'); 

module.exports = {


    async listarLivrarias(request, response) {

        const sql= ` SELECT liv_id,liv_nome,liv_cidade,liv_estado,liv_endereco,liv_telefone,liv_email,liv_foto,liv_perfil,liv_social FROM livrarias;`;

        const [rows] = await db.query(sql);
    
        const nRegistros = rows.length;

        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Livrarias',
                nRegistros, 
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarLivrarias(request, response) {
        try {

           const {id, nome, cidade, estado, endereco, telefone, email, foto, perfil, social } = request.body;

           const sql = ` 
           INSERT INTO LIVRARIAS (liv_id, liv_nome, liv_cidade, liv_estado, liv_endereco, liv_telefone, liv_email, liv_foto, liv_perfil, liv_social)
            VALUES 
            (?,?,?,?,?,?,?,?,?,?); 
           `;
           const values = [ id, nome, cidade, estado, endereco, telefone, email, foto, perfil, social];

           const [result] = await db.query(sql, values);

           const dados = {
            id: result.insertId,
            id,
            nome,
            cidade, 
            estado, 
            endereco, 
            telefone, 
            email, 
            foto, 
            perfil, 
            social 
           };

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Livraria', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarLivrarias(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de Livraria', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarLivrarias(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de Livraria', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  