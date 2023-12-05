/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

const LoginForm = () => {
  const [volume, setVolume] = useState(0);
  const [message, setMessage] = useState('');
  return (
    <div className="flex w-full min-h-[500px] bg-white justify-center items-center flex-col ">
      <form
        action="#"
        id="LoginForm"
        className="bg-slate-400 p-6 flex-col flex justify-center items-start gap-y-4 rounded-lg"
      >
        <h1 className="m-auto">Вход</h1>
        {/* Label & input */}

        <label className=" flex justify-between w-full gap-x-4" htmlFor="name">
          Name:
          <input
            placeholder="name"
            id="name"
            type="text"
            required
            className="bg-slate-500 text-white w-full max-w-[200px]"
          />
          {/* input аттрибуты:
          name - сервер всегда должен быть заполнен, по нему сервер всегда может получить доступ к введенным данным внутри инпута
          id - связывает label с инпутом (htmlFor = id)
          required - если поле пустое, то вся форма не отправится
          
          */}
        </label>
        <label htmlFor="age" className="flex justify-between w-full gap-x-4">
          age:
          <input
            type="number"
            required
            id="age"
            className=" w-full max-w-[200px]"
          />
        </label>

        {/* Radio 
            поле name связывает вместе несколько input, то-есть можно выброть одно из них, если они не связаны они выбираются по раздельности
            в данном примере связаны попарно label и input, чтобы при нажатии на label, нажималось и на input, они связаны.
            value - ну это прост значение, которое ты вытаскиваешь, ну ты знаешь.
        */}
        <label htmlFor="gender">Пол:</label>

        <label htmlFor="man">
          <input type="radio" name="gender" id="man" value="man" /> Мужской
        </label>

        <label htmlFor="woman">
          <input type="radio" name="gender" id="woman" value="woman" />
          Женский
        </label>

        {/* Date */}
        <label htmlFor="birthday">
          Дата рождения:{' '}
          <input
            type="date"
            name="birthday"
            id="birthday"
            min="2023-01.01"
            max="2023-12-28"
            //   value - значение по умолчанию, но оно почему-то не работает
            // (точнее в поле высвечивается placeholder, а текущая или заданная дата не высвечивается)
          />
        </label>

        {/* Mail */}
        <label htmlFor="email">
          Email:{' '}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="myEmail@mail.ru"
          />
        </label>
        {/* Password */}
        <label htmlFor="password">
          <input type="password" id="password" name="password" />
          {/* 
            меняешь type на text, если хочешь видеть вводимый пароль, 
           короче checkbox делаешь и на нем меняешь значение type инпута
           */}
        </label>

        {/* tel */}
        <label htmlFor="phone">
          <input
            type="tel"
            id="phone"
            placeholder="8-111-111-1111"
            //   паттерн - начинается с 8, [0-9] любое число от 0 до 9, {3} в количестве 3,
            //   а еще знак - указан, поэтому он должен присутствовать
            //   но, лучше использовать другой способ, потому что дофига возможностей обойти этот паттерн
            pattern="8-[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </label>

        {/* radio */}
        <h2>Животные</h2>

        <label htmlFor="cow">
          <input type="checkbox" name="animals" id="cow" />
          Корова
        </label>

        <label htmlFor="camel">
          <input type="checkbox" name="animals" id="camel" />
          Верблюд
        </label>

        <label htmlFor="rabbit">
          <input type="checkbox" name="animals" id="rabbit" />
          Кролик
        </label>
        {/* SELECT */}
        <select name="frameworks" id="frameworks">
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
        </select>

        {/* Range */}
        <label htmlFor="volume" className="flex flex-col">
          Громкость:{volume}
          <input
            type="range"
            name="volume"
            id="volume"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </label>

        {/* textArea */}
        <label htmlFor="message" className="flex justify-start gap-x-2">
          Расскажите о себе:
          <textarea
            name="message"
            //   вручную не расширять input поле resize-none, еще есть resize-x, resize-y
            className="resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            cols={12}
            rows={2}
          />
        </label>

        {/* FILE */}
        <label htmlFor="file">Вставить файл:</label>
        <input type="file" name="file" id="file" accept=".png, .jpg, .svg" />
        <button
          className="m-auto border border-slate-600 bg-slate-500 text-slate-800 rounded-md p-2"
          type="submit"
          tabIndex={0}
        >
          Submit
        </button>
        <button type="reset">Сбросить данные</button>

        {/* 
        дополнительное, но мне кажется deprecated...
                <fieldset><legend>Личные данные:</legend></fieldset>
              */}
        {/* ЗАЧЕМ? Исходя из атрибутов мобильные устройства будут изменять клавиатуру, 
              например если input с типом number, то клавиатура будет состоять из цифр 
              если input с типом email, то в клавиатуре добавится знак @
              */}
      </form>
    </div>
  );
};

export default LoginForm;
