import express from 'express';

import bcrypt from 'bcrypt';
import { User, Appartment } from '../db/models';

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
  const allAppartment = await Appartment.findAll();
  res.json(allAppartment);
});

router.get('/categories/appartments/:id', async (req, res) => {
  const { id } = req.params;
  const oneAppartment = await Appartment.findByPk(id);
  res.json(oneAppartment);
});

export default router;
