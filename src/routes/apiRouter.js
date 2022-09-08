import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

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

// router.get('/students', async (req, res) => {
// const allStudents = await Student.findAll();
// res.json(allStudents);
// });

export default router;
