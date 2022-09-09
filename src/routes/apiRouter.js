import express from 'express';

import bcrypt from 'bcrypt';
import { User, Appartment, Cathegory } from '../db1/models';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const {
      name, email, password, description,
    } = req.body;
    const hashedPass = await bcrypt.hash(password, 9);
    const currUser = await User.create({
      name, email, password: hashedPass, description,
    });
    req.session.userId = currUser.id;
    req.session.userName = currUser.name;
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

router.get('/categories/appartments', async (req, res) => {
  const allAppartments = await Appartment.findAll({ where: { cathegoryId: 1 } });
  // const initState = { path: req.originalUrl, allAppartments };
  // res.render('Layout', initState);
  res.json(allAppartments);
});

router.get('/categories/appartments/:id', async (req, res) => {
  const { id } = req.params;
  const oneAppartment = await Appartment.findByPk(id);
  res.json(oneAppartment);
});

router.get('/categories/houses', async (req, res) => {
  const allHouses = await Appartment.findAll({ where: { cathegoryId: 3 }});
  // const initState = { path: req.originalUrl, allHouses };
  // res.render('Layout', initState);
  res.json(allHouses);
});

router.get('/categories/houses/:id', async (req, res) => {
  const { id } = req.params;
  const oneHouse = await Appartment.findByPk(id);
  res.json(oneHouse);
});

router.get('/categories/rooms', async (req, res) => {
  const allRooms = await Appartment.findAll({ where: { cathegoryId: 2 } });
  // const initState = { path: req.originalUrl, allRooms };
  // res.render('Layout', initState);
  res.json(allRooms);
});

router.get('/categories/rooms/:id', async (req, res) => {
  const { id } = req.params;
  const oneRoom = await Appartment.findByPk(id);
  res.json(oneRoom);
});
export default router;
