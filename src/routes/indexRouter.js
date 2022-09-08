import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';

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
    res.render('Layout');
  } catch (err) {
    console.error(err);
  }
});

export default route;
