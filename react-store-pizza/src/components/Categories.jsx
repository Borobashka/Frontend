import React from 'react';

export default function Categories({value, onClickCategory}) {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

 
  // в строке  onClick={() => onClickCategory(0)} используется анонимная функиция
  // которая работает только тогда, когда на нее нажмут, после этого вызывается функция
  // on ClickCategory с определенным индексом. Если этого не сделать, то функция будет
  // вызываться бексонечно, без нажатия, что повлечет ошибку
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
