import mysql from "mysql2"
import config from "../Config.js";

class DoceModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome){
        let sql = `INSERT INTO Doces (nome) VALUES("${nome}");`;

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([201,"Doce Adicionado"])
            })
        });
    }


    read(nome){
        let sql = `SELECT * FROM Doces;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
        
    }
    update(id_Doce,nome){
        let sql = `UPDATE Doces SET nome="${nome}" WHERE id_Doce="${id_Doce}"`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }else if(retorno.affectedRows>0){
                resolve([200, "Doce Atualizado"])
            }else{
                reject([404,"Doce não encontrado!"])
            }
            })
        });
}
    delete(id_Doce){
        let sql = `DELETE  FROM Doces WHERE id_Doce="${id_Doce}"`;
        return new Promise((resolve,reject) => {
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([404,erro]);
                }
                else{
                    resolve([200,retorno])
                };
            });

        });
    };
}

export default new DoceModel();