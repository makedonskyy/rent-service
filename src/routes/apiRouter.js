import express from 'express';

import bcrypt from 'bcrypt';
import { User, Appartment, Cathegory, Owner } from '../db1/models';


const router = express.Router();

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

router.post('/login/user', async (req, res) => {
  const { email, password } = req.body;
  const currUser = await User.findOne({ where: { email } });
  const compare = await bcrypt.compare(password, currUser.password);
  if (compare) {
    req.session.userId = currUser.id;
    req.session.userEmail = currUser.email;
    res.sendStatus(200);
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
    res.sendStatus(200);
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
    res.sendStatus(200);
    // res.json({ name: currUser.login });
  } else {
    res.sendStatus(401);
  }
});

router.post('/addAppartment', async (req, res) => {
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

  res.sendStatus(200)


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
