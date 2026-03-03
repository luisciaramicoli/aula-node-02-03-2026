import express, {Request, Response} from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, rest: Response) => {
    rest.send("Olá express!!!");
});

app.get("/saudacao/:nome", (req: Request, res: Response)=> {
    const nome  = req.params.nome;
    res.send("Olá " + nome);
})

app.listen(PORT, () => {
    console.log("Servidor executado em localhost");
})