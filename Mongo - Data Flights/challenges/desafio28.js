const NAME = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({ empresa: NAME,
totalVoosDomesticos:
db.voos.count({ "empresa.nome": NAME, natureza: "Doméstica" }) });
db.resumoVoos.find({ empresa: NAME }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
