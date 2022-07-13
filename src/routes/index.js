import { Router } from "express";
import Contizacion from "../models/Contizacion.js";
import Punto from "../models/Punto.js";
import { getCotizacion } from "../tools.js";
const router = Router();
router.get("/cotizacion/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let cotizacion = await Contizacion.findByPk(id, {
      include: [Punto],
    });
    if (!cotizacion) {
      return res.json({ msg: "id not found" });
    }
    res.json(cotizacion);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong" });
  }
});

router.get("/cotizacion", async (req, res) => {
  try {
    let cotizacion = await Contizacion.findAll({ include: [Punto] });
    res.json(cotizacion);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong" });
  }
});

router.post("/cotizacion", async (req, res) => {
  try {
    let cot = req.body
    console.log('cot',cot);
    let { puntos } = cot;
    let valor = getCotizacion(puntos[0],puntos[1])
    let puntoA = await Punto.create(puntos[0]);
    let puntoB = await Punto.create(puntos[1]);
    let cotizacion = await Contizacion.create({...cot,valor});
    await cotizacion.addPuntos([puntoA, puntoB]);
    cotizacion = await Contizacion.findByPk(cotizacion.id, {
      include: [Punto],
    });
    res.json(cotizacion);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong" });
  }
});

router.put("/cotizacion", async (req, res) => {
  try {
    let cot = req.body
    let { id,  puntos } = cot;
    let valor = getCotizacion(puntos[0], puntos[1]);

    let puntoA = await Punto.findByPk(puntos[0].id);
    let puntoB = await Punto.findByPk(puntos[1].id);
    console.log(puntoA);
    await Contizacion.update(
      cot,
      { where: { id } }
    );
    await puntoA.update(puntos[0]);
    await puntoB.update(puntos[1]);

    let cotizacion = await Contizacion.findByPk(id, { include: [Punto] });

    res.json(cotizacion);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong" });
  }
});

router.delete("/cotizacion/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let cotizacion = await Contizacion.findByPk(id);
    if (!cotizacion) {
      return res.json({ msg: "id not found" });
    }
    await cotizacion.destroy();
    res.json({ msg: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "something went wrong" });
  }
});
export default router;
