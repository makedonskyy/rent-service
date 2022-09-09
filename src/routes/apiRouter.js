import express from 'express';

import bcrypt from 'bcrypt';
import axios from 'axios';
import {
  User, Appartment, Cathegory, Owner,
} from '../db1/models';

// const fetch = require('node-fetch');

const router = express.Router();

router.post('/coordinates', async (req, res) => {
  try {
    const { address } = req.body;
    const url = 'https://cleaner.dadata.ru/api/v1/clean/address';
    const token = '8abf2516c963dfbfe7e8033ee347b1a9420b60e8';
    const secret = 'b54649db1261aab4bfc4c828656fa8670a524bac';
    const query = address ?? 'москва сухонская 11';

    const options = {
      url: 'https://cleaner.dadata.ru/api/v1/clean/address',
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
        'X-Secret': secret,
      },
      data: JSON.stringify([query]),
    };

    const response = await axios(options);
    res.json({ lat: response.data[0].geo_lat, lon: response.data[0].geo_lon });
  } catch (err) {
    console.log(err);
  }
});

router.post('/signup/user', async (req, res) => {
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
    res.json({ name: currUser.name, description: currUser.description });
    // res.sendStatus(200);
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
  const allHouses = await Appartment.findAll({ where: { cathegoryId: 2 } });
  // const initState = { path: req.originalUrl, allHouses };
  // res.render('Layout', initState);
  res.json(allHouses);
});

router.post('/login/user', async (req, res) => {
  const { email, password } = req.body;
  const currUser = await User.findOne({ where: { email } });
  const compare = await bcrypt.compare(password, currUser.password);
  if (compare) {
    req.session.userId = currUser.id;
    req.session.userEmail = currUser.email;
    res.json({ name: currUser.name, description: currUser.description });
    // res.sendStatus(200);
    // res.json({ name: currUser.login });
  } else {
    res.sendStatus(401);
  }
});

router.post('/signup/owner', async (req, res) => {
  try {
    const {
      name, email, password, phone,
    } = req.body;
    const hashedPass = await bcrypt.hash(password, 9);
    const currUser = await Owner.create({
      name, email, password: hashedPass, phone,
    });
    req.session.userId = currUser.id;
    req.session.userName = currUser.name;
    res.json({ name: currUser.name });
    // res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

router.post('/login/owner', async (req, res) => {
  const { email, password } = req.body;
  const currUser = await Owner.findOne({ where: { email } });
  const compare = await bcrypt.compare(password, currUser.password);
  if (compare) {
    req.session.userId = currUser.id;
    req.session.userEmail = currUser.email;
    res.json({ name: currUser.name });
    // res.sendStatus(200);
    // res.json({ name: currUser.login });
  } else {
    res.sendStatus(401);
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
  const allHouses = await Appartment.findAll({ where: { cathegoryId: 3 } });
  // const initState = { path: req.originalUrl, allHouses };
  // res.render('Layout', initState);
  res.json(allHouses);
});

router.post('/apartform', async (req, res) => {
  try {
    const {
      cathegory, price, countOfRooms, address, description, image,
    } = req.body;
    const newUser = await Appartment.create({
      cathegory,
      price,
      countOfRooms,
      address,
      description,
      image,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
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
