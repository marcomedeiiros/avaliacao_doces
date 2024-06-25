import DoceModel from "../Model/DoceModel.js";

class DoceController{
    constructor(){
    }

    create(req,res){
        const nome = req.body.nome;
        DoceModel.create(nome).then(
            resposta => {
                console.debug("Inserindo um Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Inserindo um Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    read(req,res){
        DoceModel.read().then(
            resposta => {
                console.debug("Mostrando Doces");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: ao mostrar Doces");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_doce = req.params.id_doce;
        const nome = req.body.nome;
        DoceModel.update(id_doce,nome).then(
            resposta =>{
            console.debug("Atualizando Doces")
            res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                console.debug("Erro atualizado Doces")
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }
    delete(req,res){
        let id_doce = req.params.index;
        DoceModel.delete(id_doce).then(
        resposta => {
            console.debug("Deletando Doce");
            res.status(resposta[0]).json(resposta[1]);
        }
        ).catch(
            resposta =>{
                console.debug("erro deletar")
                res.status(resposta[0]).json(resposta[1])

            }
        )
    }
}

export default new DoceController();