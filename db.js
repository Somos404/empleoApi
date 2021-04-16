const { sequelize } = require("./database/models");
const {
    Categoria,
    Curso,
    InscripcionesCursos,
    Municipios
    
} = sequelize.models

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tabla users sync');
    })

module.exports = {
    Categoria,
    Curso,
    InscripcionesCursos,
    Municipios
}