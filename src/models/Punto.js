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
        },
        peso_kg:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        medidas:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        fragil:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        }
    });
    
 

export default Punto;