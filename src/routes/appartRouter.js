// import express from 'express';
// import { Appartment, Cathegory } from '../db1/models';

// const router = express.Router();

// router.route('/appartments')
//   .get(async (req, res) => {
//     const allAppartment = await Appartment.findAll({ include: Cathegory });
//     console.log(allAppartment);
//     const initState = { path: req.originalUrl, allAppartment };
//     res.render('Layout', initState);
//   })
//   .post((req, res) => {
//     res.sendStatus(200);
//   });

// router.route('/appartments/:id')
//   .get(async (req, res) => {
//     const { id } = req.params;
//     const oneAppartment = await Appartment.findByPk(id);
//     // const initState = { path: req.originalUrl, oneAppartment };
//     // res.render('Layout', initState);
//     res.json(oneAppartment);
//   })
//   .post((req, res) => {
//     res.sendStatus(200);
//   });

// export default router;
