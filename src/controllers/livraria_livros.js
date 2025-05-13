const db = require('../dataBase/connection'); 

module.exports = {
    async listarLivrariaLivros(request, response) {

        const sql= `SELECT liv_livro_id,liv_id,livro_id,liv_livro_idioma,liv_livro_pag,liv_livro_tipo,liv_livro_preco,liv_livro_obsadicionais,liv_livro_status,liv_livro_dtpublicacao FROM livrarias_livros;`;

        const [rows] = await db.query(sql);
    
        const nRegistros = rows.length;

        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de livros', 
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
    async cadastrarLivrariaLivros(request, response) {
        try {

            try {

                const {id_liv, id_livro, nome, cidade, estado, endereco, telefone, email, foto, perfil, social } = request.body;
     
                const sql = ` 
                INSERT INTO LIVRARIAS_LIVROS (liv_id, livro_id, liv_livro_idioma, liv_livro_pag, liv_livro_tipo, liv_livro_preco, liv_livro_obsadicionais)
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
                mensagem: 'Cadastro de livros', 
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
    async editarLivrariaLivros(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de livros', 
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
    async apagarLivrariaLivros(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de livros', 
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