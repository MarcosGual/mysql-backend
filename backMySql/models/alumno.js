module.exports= (sequelize, DataTypes)=>{
    const Alumno=sequelize.define('Alumno', {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        fechaNacimiento: {
            type: DataTypes.STRING(30),
            allowNull:true
        }
    }, {
        tableName: 'ALUMNOS'
      })

    return Alumno;
}