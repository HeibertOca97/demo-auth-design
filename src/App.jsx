import React, { useState, useEffect } from 'react';
import img_small from './assets/city_small_640x427.jpg';
import img_large from './assets/city_large_1920x1280.jpg';
import { CardForm } from './components/CardForm';

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    document.querySelector("title").innerText = "Login";
    setImage(img_small);

    window.addEventListener("resize", (ev) => {
      const window_width = ev.target.innerWidth;
      
      if(window_width > 768){
        return setImage(img_large);
      }

      setImage(img_small); 
    });

    
  }, []);

  return (
    <section className="container__auth">
      <article className="box__author">Design by: <strong>Heibert Ocaña</strong></article>
      <div className="box__section box__section--image">
        <img src={image} alt="Couldn't load image" />
      </div>
      <div className="box__section box__section--form">
        <form action="" className="form__style">
          <h1 className="section__title--style">Login to your account</h1>
          <CardForm data={{
            element_type: "input",
            input_type: "text",
            name_id: "user",
            description: "username"
          }}/>
          <CardForm data={{
            element_type: "input",
            input_type: "password",
            name_id: "pass",
            description: "password"
          }}>
          <div className="box__link--style"><a href="#">Forgot Password?</a></div>
          </CardForm>
          <CardForm data={{
            element_type: "button",
            input_type: "button",
            description: "Login"
          }}/>
          <p className="text__info--style">Don't have an account yet?  <a href="#">Sign Up</a></p>
        </form> 
      </div>
    </section>    
  )
}

export default App
