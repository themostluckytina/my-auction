import { useState } from 'react';
import { data } from './data';
import './App.css';


function App() {

  const [picture, setPicture] = useState(0);

  const {id, name, description, image, price} = data[picture];
  

const backStep =()=>{
  setPicture((picture =>{
    picture --;
    if(picture < 0) {
      picture = data.length-1;
    }
    return picture
  }))
}


 const nextStep =()=>{
   setPicture ((picture=>{
     picture++;
     if( picture > data.length-1){
       picture= 0;
     }
     return picture
   }))
 }
  
  

return( <div className='App '>

  <div className='top'>
    <p className='auction'>АУКЦИОННЫЙ ДОМ</p>
    <h1>WorldArt</h1>
  </div>

  <div className='top'>
  <h2>АНОНСИРУЕТ НОВЫЕ ЛОТЫ </h2>
  <h3>Тема: "Женские образы в живописи"</h3>
</div>

<div className='item'>
  <div>
  <h2 className='lot'> Лот № {id} </h2>
  <p className='pic'>{description } </p>
  <p className='pic'>Автор: {name} </p>
  </div>

  <div>
    <p className='price'>Стартовая цена: {price} </p>
  </div>

 
<div>
  <img src={image} width={400} alt='pic' />
</div>

<div>
  <button onClick={backStep}> назад </button>
  <button onClick={nextStep}> вперед </button>
</div>

<br></br>

</div>

<div className='footer'>
  <h3 className='mail'>Получайте все события Аукционного Дома</h3>
</div>
<div>
  <input type='text'  placeholder='Напиши свой E-mail' />
  <button className='send'>Подписаться</button>
</div>

</div>
)

}

export default App;

