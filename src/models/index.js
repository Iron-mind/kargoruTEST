import Punto from "./Punto.js";
import Cotizacion from "./Contizacion.js";
Cotizacion.hasMany(Punto, {foreignKey: 'cotizacion_id'});
Punto.belongsTo(Cotizacion)
  