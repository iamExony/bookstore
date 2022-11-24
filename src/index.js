import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Booklist(){
  const header = 'Amazon Best Sellers'
  const title = 'Our most popular products based on sales. Updated hourly.'
  return(
    <section >
      <div className='header'>
      <h1>{header} </h1>
      <h4>{title}</h4>
      </div>
      <div  className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      </div>
    </section>
  )
};

const Book = () =>{
  const image = 'https://images-na.ssl-images-amazon.com/images/I/91MowzF+WZL._AC_UL300_SR300,200_.jpg'
  const title = 'The light we Carry'
  const author = 'Michelle Obama'
  return(
    <article className='book '>
      <img 
    src= {image}
    alt='#1'
    />
    <h1> {title} </h1>
    <h4 > {author} </h4>
    </article>
    
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'));

