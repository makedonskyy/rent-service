import express from 'express';
import bcrypt from 'bcrypt';
import { User, Owner, Appartment } from '../db1/models';

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

export default router;
