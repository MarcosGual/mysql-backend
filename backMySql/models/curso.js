module.exports= (sequelize, DataTypes)=>{
    const Curso=sequelize.define('Curso', {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        mes: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        tableName: 'CURSOS'
      })

    return Curso;
}