import sequelize from '../db.js';
import {DataTypes }  from 'sequelize'


const Punto = sequelize.define(
    "Punto",
    {
        continente:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        pais:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        ciudad:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        direccion:{
            type:DataTypes.TEXT,
            allowNull:false
        }

    });



export default Punto;
