import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function EditCard({ maApart }) {
  const { apartId } = useParams();
  const [form, setForm] = useState({
    cathegory: '' || maApart?.cathegory,
    price: '' || maApart?.price,
    countOfRooms: '' || maApart?.countOfRooms,
    address: '' || maApart?.address,
    description: '' || maApart?.description,
    image: '' || maApart?.image,
  });
  const changeHandler = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`/myapartments/update/${apartId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
  };
  return (

    <div className="container">
      <div className="col-6">
        <h2>Отредактировать описание жилья</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Категория</label>
            <select onChange={changeHandler} name="cathegory" value={form.cathegory} className="form-control" id="exampleFormControlSelect1">
              <option value="2">Дом</option>
              <option value="1">Квартира</option>
              <option value="3">Комната</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlform1">Цена</label>
            <form onChange={changeHandler} name="price" value={form.price} type="text" className="form-control" id="exampleFormControlform1" placeholder="Введите цену" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Количество комнат</label>
            <select onChange={changeHandler} name="countOfRooms" value={form.countOfRooms} className="form-control" id="exampleFormControlSelect1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlform1">Адрес</label>
            <form onChange={changeHandler} name="address" value={form.address} type="text" className="form-control" id="exampleFormControlform1" placeholder="Введите адресс" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Описание</label>
            <textarea onChange={changeHandler} name="description" value={form.description} className="form-control" id="exampleFormControlTextarea1" rows="3" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlform1">Ссылка на фото</label>
            <form onChange={changeHandler} name="image" value={form.image} type="text" className="form-control" id="exampleFormControlform1" placeholder="Вставьте ссылку на фото" />
          </div>
          <button type="submit" value={form.submit} className="btn btn-dark">Отправить</button>
        </form>
        <Link to={`/myapartments/${apartId}`} className="btn btn-danger">Удалить</Link>
      </div>
    </div>
  );
}
