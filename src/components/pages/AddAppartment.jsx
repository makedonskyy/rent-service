import React, { useState } from 'react';

export default function AddAppartment() {
  const [input, setInput] = useState({
    cathegory: '',
    price: '',
    countOfRooms: '',
    address: '',
    description: '',
    image: '',
  });
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/v1/apartform', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    const data = await response.json();
    if (response.ok) {
      setInput({
        cathegory: '',
        price: '',
        countOfRooms: '',
        address: '',
        description: '',
        image: '',
      });
    }
  };
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Категория</label>
          <select onChange={changeHandler} name="cathegory" value={input.cathegory} className="form-control" id="exampleFormControlSelect1">
            <option value="Дом">Дом</option>
            <option value="Квартира">Квартира</option>
            <option value="Комната">Комната</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Цена</label>
          <input onChange={changeHandler} name="price" value={input.price} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Введите цену" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Количество комнат</label>
          <select onChange={changeHandler} name="countOfRooms" value={input.countOfRooms} className="form-control" id="exampleFormControlSelect1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Аддрес</label>
          <input onChange={changeHandler} name="address" value={input.address} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Введите адресс" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Описание</label>
          <textarea onChange={changeHandler} name="description" value={input.description} className="form-control" id="exampleFormControlTextarea1" rows="3" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Ссылка на фото</label>
          <input onChange={changeHandler} name="image" value={input.image} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Вставьте ссылку на фото" />
        </div>
        <button type="submit" value={input.submit} className="btn btn-dark">Отправить</button>
      </form>
    </div>
  );
}
