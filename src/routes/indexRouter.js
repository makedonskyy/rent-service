import express from 'express';
// import { renderToString } from 'react-dom/server';
// import React from 'react';
// import Layout from '../components/Layout';

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const initState = { path: req.originalUrl};
    res.render('Layout', initState);
  } catch (err) {
    console.error(err);
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

export default route;
