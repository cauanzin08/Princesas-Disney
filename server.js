import express from "express";
import princesas from ".disney-princesas/scr/data/princesas.js";

const serverPort = 3000;
const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    console.log("Bem-vindos(as) ao reino mágico das Princesas Disney! ✨👑"),
});

app.get("/princesas", (req,res) => {
    res.status.json(princesas);
});

app.get('/princesas/:id', (req, res) => {
  let id = req.params,id;
    id = parseInt(id);
  const idPrincesa = princesas.find((p) => p.id === id);
    
  if(idPrincesa){
    res.status(200).json(idPrincesa);
  }else{
    res.status(404).json({
        erro: "Nenhuma princesa com este ID"
    });
  }

});
    
app.get('/princesas),/princesas/nome/:nome', (req, res) => {
  let nome = req.params.nome.toLowerCase();
  const nomePrincesas = princesas.filter((p) => p.nome.toLocaleLowerCase().includes(nome));

  if(nomePrincesas.lenght > 0) {
    res.status(200).json(nomePrincesas);
  }else{
    res.status(404).json({
        erro:"Nenhuma princesa encontrada com este nome"
    });
  }
});

    app.get('/princesas/reino/:reino', (req, res) => {
  let reino = req.params.reino.toLowerCase();
  const reinosEncontrados = princesas.filter((p) => p.reino.toLocaleLowerCase().includes(reino));

  if(reinosEncontrados.length> 0){
    res.status(200). json(reinosEncontrados);
  }else{
    res.status(404).json({
        erro: "Nenhuma princesa encontrada neste reino"
    });
  }

});

app.get('/princesas/ativas/nao', (req, res) => {
  const princesasAtivas = princesas.filter((p) => !p.ativa);
    
    if(princesasAtivas.length > 0){
      res.status(200).json(princesasAtivas);
    }else{
        res.status(404).json({
            erro: "Nenhuma princesa inativa encontrada"
});

app.listen(serverPort, () => {
    console.log(`Reino das Princesas ativo em http://localhost:${serverPort}`);
})
