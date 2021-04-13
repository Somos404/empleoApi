const { sequelize } = require("./database/models");
const {
    Categoria,
    Curso,
    InscripcionesCursos,
    DescripcionLarga,
    Requerimientos,
} = sequelize.models

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tabla users sync');
    })

module.exports = {
    Categoria,
    Curso,
    InscripcionesCursos,
    DescripcionLarga,
    Requerimientos,
}