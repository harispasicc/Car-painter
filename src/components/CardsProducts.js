import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsProducts() {
  return (
    <div className='cards'>
      <h1>Sa razlogom najbolji u gradu</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/crne-felge.jpg'
              text='Farbanje felgi u crnu boju'
              
            />
            <CardItem
              src='images/oprema.jpg'
              text='Najbolja oprema'
              
            />
            <CardItem
              src='images/kocnica.jpg'
              text='Farbanje kočionih kliješta'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/far.jpg'
              text='Poliranje fara'
              
            />
            <CardItem
              src='images/kawasaki.jpg'
              text='Kawasaki motor ofarban u crnu boju'
              
            />
            <CardItem
              src='images/fiat.jpg'
              text='Fiat ofarban u crvenu boju'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/farbanje-plavo.jpg'
              text='Auto tokom farbanja'
            />
            <CardItem
              src='images/matiranje.jpg'
              text='Matiranje auta'
            />
          
            <CardItem
              src='images/merc.jpg'
              text='Rezultat farbanja'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/karambolka.jpg'
              text='Farbanje i poliranje karambolke'
            />
            <CardItem
              src='images/felge.jpg'
              text='Farbanje felgi u crnu boju'
            />
            <CardItem
              src='images/farbanje.jpg'
              text='Farbanje auta u crnu boju'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProducts;
