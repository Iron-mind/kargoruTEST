import Punto from "./Punto.js";
import Cotizacion from "./Contizacion.js";
Cotizacion.hasMany(Punto);
Punto.belongsTo(Cotizacion)
