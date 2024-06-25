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
        const id_Doce = req.params.id_Doce;
        const nome = req.body.nome;
        DoceModel.update(id_Doce,nome).then(
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
        let id_Doce = req.params.index;
        DoceModel.delete(id_Doce).then(
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