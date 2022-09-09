import express from 'express';
// import { renderToString } from 'react-dom/server';
// import React from 'react';
// import Layout from '../components/Layout';
import { Appartment, Cathegory } from '../db1/models';

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    res.render('Layout', initState);
  } catch (err) {
    console.error('Ошибка в формировании страницы', err);
  }
});

route.get('/signup', (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.error('Ошибка в регистрации,', error);
  }
});

route.get('/signup/user', (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.error('Ошибка в регистрации,', error);
  }
});

route.get('/signup/owner', (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.error('Ошибка в регистрации,', error);
  }
});

route.get('/login', (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.error('Ошибка во входе,', error);
  }
});

route.get('/login/user', (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.error('Ошибка во входе,', error);
  }
});

route.get('/login/owner', (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.error('Ошибка во входе,', error);
  }
});

route.get('/categories', async (req, res) => {
  try {

    const initState = { path: req.originalUrl };
    res.render('Layout', initState);

  } catch (err) {
    console.error(err);
  }
});

route.get('/categories/appartments', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    res.render('Layout', initState);
  } catch (error) {
    console.error(error);
  }
});

route.get('/categories/appartments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneAppartment = await Appartment.findByPk(id);
    const initState = { path: req.originalUrl, oneAppartment };
    res.render('Layout', initState);
  } catch (error) {
    console.error(error);
  }
});

route.get('/categories/houses', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    res.render('Layout', initState);
  } catch (error) {
    console.error(error);
  }
});

route.get('/categories/houses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneHouse = await Appartment.findByPk(id);
    const initState = { path: req.originalUrl, oneHouse };
    res.render('Layout', initState);
  } catch (error) {
    console.error(error);
  }
});

route.get('/categories/rooms', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    res.render('Layout', initState);
  } catch (error) {
    console.error(error);
  }
});

route.get('/categories/rooms/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneRoom = await Appartment.findByPk(id);
    const initState = { path: req.originalUrl, oneRoom };
    res.render('Layout', initState);
  } catch (error) {
    console.error(error);
  }
});

export default route;
