import express, { Request, Response } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import {AddressInfo} from "net";

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

    }
});


const app = express();
app.use(express.json());
app.use(cors());

enum ITENS{
    TABLET = 1,
    DESKTOP = 2,
    NOTEBOOK = 3,
    CELULAR = 4,
    VIDEOGAME = 5,

}

type criaProdutosInput = {
    id: number,
    nome: string,
    tag_produtos: string,
}


app.post("/produtos", async (req: Request, res: Response)=>{
    let errorCode = 400;
    try {
       
        const input: criaProdutosInput = {
           id: req.body.id,
           nome: req.body.name,
           tag_produtos: req.body.tag, 

        }

    if(!input.id || !input.nome || input.tag_produtos) {
        errorCode = 422;
        throw new Error("Preencha os campos corretamente")

    }
    res.status(201).send({message: "Produto criado com sucesso"})
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
});

    await connection.raw(`
    INSERT INTO PRODUTOS (id, nome, tag_produtos)
    VALUES(
      ${input.id},
      "${input.nome}",
      "${input.tag_produtos}",  
    )
    
    `)
        

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {

        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
}
});



