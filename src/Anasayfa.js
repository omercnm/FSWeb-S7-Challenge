import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";
import logo from "../src/pizzad4.jpg";

const Sc_nav = styled.nav`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  a {
    border-radius: 10px;
    border: 0px solid;
    padding: 10px 20px;
    background-color: black;
    &:hover {
      background-color: #f94a29;
    }
    &:hover {
      font-family: "Roboto Mono", monospace;
    }
    text-decoration: none;
    color: #f94a29;

    color: #f94a29;
    &:hover {
      color: black;
    }
  }
`;
const Sc_h2 = styled.h2`
  margin: 0 auto;
  color: #f94a29;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const Sc_main = styled.main`
  margin: 0 300px;
`;

const Sc_form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5px 850px;
  padding: 5px 10px;
`;

export default function Yemekler() {
  const [siparis, setSiparis] = useState([
    {
      cesit: "",
      boyut: "",
      malzeme: [],
      icecek: "",
      soslar: "",
    },
  ]);

  function siparisEkle(eklenenSiparis) {
    const yenisiparis = [...siparis, eklenenSiparis];
    setSiparis(yenisiparis);
  }
  console.log(siparis);
  return (
    <div>
      <Sc_nav id="order-pizza">
        <p>
          <Link to="/">AnaSayfa</Link>
        </p>
        <p>
          <Link to="/SiparisFormu">Sipariş</Link>
        </p>
      </Sc_nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/SiparisFormu">
          <SiparisFormu />
        </Route>
      </Switch>
    </div>
  );

  function Home() {
    return (
      <div>
        <Sc_h2>AnaSayfa</Sc_h2>
        <Sc_main>
          <img src={logo} />
        </Sc_main>
      </div>
    );
  }

  function SiparisFormu() {
    const createUser = (event) => {
      event.preventDefault();
      let formData = {
        name: event.target[0].value,
        email: event.target[1].value,
      };
      console.log(formData);
    };
    return (
      <div>
        <Sc_h2>Sipariş Oluştur</Sc_h2>
        <div>
          <Sc_form data-cy="dIsim" onSubmit={createUser}>
            <input type="text" placeholder="İsim Girin" />
            <input type="text" placeholder="email@email.com" />
            <input type="submit" />
          </Sc_form>
        </div>
        <div>
          <Form handleSubmitCallBack={siparisEkle} />
        </div>
      </div>
    );
  }
}
