import sequelize from '../db.js';
import {DataTypes }  from 'sequelize'
import Punto from './Punto.js';

const Cotizacion = sequelize.define(
    "Cotizacion",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_cotizante: {
          type:DataTypes.TEXT,
            allowNull:false
        },
        email_cotizante: {
            type:DataTypes.TEXT,
            allowNull:false
        },
        valor:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    });
   
  

export default  Cotizacion;