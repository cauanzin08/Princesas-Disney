import express from "express";
import princesas from ".disney-princesas/scr/data/princesas.js";

const serverPort = 3000;
const app = express();

app.use(express.json());

app.listen(serverPort, () => 
    console.log(`Servidor Disney iniciado em: http://localhost:${serverPort}`),
    console.log("Bem-vindos(as) ao reino mágico das Princesas Disney! ✨👑"),
)

app.listen(serverPort, () => {
    console.log(`Servidor Inicializado na URL http://localhost:${serverPort}`);
})

app.get("/princesas", (req,res) => {
    res.status(200). json(princesas);
})

    app.get('/princesas/:id', (req, res) => {
  const id = parseInt(req.params,id);
  const princesa = princesas.find(p => p.id === id);
  if(princesa){
    res.status(200).json(princesa);
  }else{
    res.status(404).json({erro: "Nenhuma princesa com este ID"})
  }

});
    
    app.get('/princesas),/princesas/nome/:nome', (req, res) => {
  const nome = req.params.nome.toLowerCase();
  const princesa = princesas.find(p => p.nome.toLowerCase() === nome)

  if(princesa){
    res.status(200).json(princesa);
  }else{
    res.status(404).json({erro:"Nenhuma princesa encontrada com este nome"})
  }
});

    app.get('/princesas/reino/:reino', (req, res) => {
  const reino = req.params.reino.toLowerCase();
  const resultado = princesas.filter(p=> p.reino.toLowerCase() === reino)

  if(resultado.length> 0){
    res.status(200). json(resultado);
  }else{
    res.status(404).json({erro: "Nenhuma princesa encontrada neste reino"})
  }

});

app.get('/princesas/ativas/sim', (req, res) => {
  const resultado = princesas.filter(p => p.ativa === true);
  res.status(200).json(resultado);

})
