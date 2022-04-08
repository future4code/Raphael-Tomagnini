import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

type user = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60,
  },
];

app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name: string = req.query.name as string;

    const user: user | undefined = users.find((user) => user.name === name);

    if (!user) {
      errorCode = 404; // not found
      throw new Error("User not Found");
    }

    res.status(200).send({ user });
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users/:id", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id: number = Number(req.params.id);

    if (isNaN(id)) {
      errorCode = 422; // unprocessable entity
      throw new Error("ID must be a number");
    }

    const user: user | undefined = users.find((user) => user.id === id);

    if (!user) {
      errorCode = 404; // not found
      throw new Error("User not Found");
    }

    res.status(200).send({ user });
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id, name, type, email, age }: user = req.body;

    if (!id || !name || !type || !email || !age) {
      errorCode = 422;
      throw new Error("One or more fields are empty");
    }

    const newUser: user = {
      id,
      name,
      type,
      email,
      age,
    };

    users.push(newUser);

    res.status(200).send("User criado");
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.patch("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id, name, type, email, age }: user = req.body;

    if (!id || !name || !type || !email || !age) {
      errorCode = 422;
      throw new Error("One or more fields are empty");
    }

    const newUser: user = {
      id,
      name,
      type,
      email,
      age,
    };

    users.push(newUser);

    res.status(200).send("User alterado");
   
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// Exercicio 1

app.get("/users", (req: Request, res: Response)=>{
  let errorCode = 400
  try{
    const name: string = req.query.name as string

    const user : user | undefined = users.find((user)=> user.name === name)

    if(!user){
      errorCode = 404 
      throw new Error("Usuário não encontrado")
    }

    res.status(200).send({user})
  }catch(error: any){
    res.status(errorCode).send(error.message)
  }

   })

app.get("/users/:id", (req: Request, res: Response)=>{
  let errorCode = 400
  try{
    const id : number = Number(req.params.id)

    const user: user | undefined = users.find((user)=> user.id === id)

    if(!user){
      errorCode = 404 
      throw new Error("Usuário não encontrado")
      
    }
    res.status(200).send({user})
  }catch(error: any){
    res.status(errorCode).send(error.message)
  }
  }
)





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
