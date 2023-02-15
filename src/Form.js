import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Sc_fieldset = styled.fieldset`
  margin: 0 700px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 20px;
  border-style: solid;
  border-radius: 35px;
  border-color: #f94a29;
  border-width: 8px;
`;
const Sc_label = styled.label`
  margin-bottom: 10px;
  color: black;
  &:hover {
    color: Green;
  }
  font-family: "Roboto Mono", monospace;
  font-weight: bolder;
`;
const Sc_input = styled.input`
  border-color: grey;
  margin-bottom: 10px;
  height: 17px;
  border-radius: 7px;
`;
const Sc_option = styled.option`
  height: 20px;
  border-radius: 7px;
  padding: 10px;
  border-color: grey;
  margin-bottom: 10px;
`;
const Sc_select = styled.select`
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 4px;
  width: 90px;
  border: 3px;
`;

export default function Form(props) {
  const { handleSubmitCallBack } = props;
  const [form, setForm] = useState({
    cesit: "",
    boyut: "",
    malzeme: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    return handleSubmitCallBack(form);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);

    const yeniform = {
      ...form,
      [name]: value,
    };
    setForm(yeniform);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} id="pizza-form">
        <Sc_fieldset>
          <div>
            <Sc_label
              name="cesit"
              value={form.value}
              onChange={handleChange}
              htmlFor="pizzacesit"
            >
              Pizze Çeşidi :{" "}
            </Sc_label>
            <Sc_select name="cesit" id="dropdown" onChange={handleChange}>
              <Sc_option value="">Seçiniz</Sc_option>
              <Sc_option>Eko Sucuklu Pizza</Sc_option>
              <Sc_option>Margarita Pizza</Sc_option>
              <Sc_option>White Pizza</Sc_option>
              <Sc_option>4 Peynirli Pizza</Sc_option>
              <Sc_option>Barbekü Tavuklu Pizza</Sc_option>
              <Sc_option>Pepperoni Pizza</Sc_option>
              <Sc_option>Gennaro Pizza</Sc_option>
              <Sc_option>Ton Balıklı Pizza</Sc_option>
              <Sc_option>Akdeniz Pizza</Sc_option>
              <Sc_option>Mantarlı Pizza</Sc_option>
              <Sc_option>Karışık Sosisli Pizza</Sc_option>
              <Sc_option>Etli Karışık Pizza</Sc_option>
            </Sc_select>
          </div>

          <div>
            <Sc_label
              name="boyut"
              value={form.value}
              onChange={handleChange}
              htmlFor="pizzasize"
            >
              Pizze Boyutu :{" "}
            </Sc_label>
            <Sc_select name="boyut" id="dropdown" onChange={handleChange}>
              <Sc_option value="">Seçiniz</Sc_option>
              <Sc_option>Küçük</Sc_option>
              <Sc_option>Orta</Sc_option>
              <Sc_option>Büyük</Sc_option>
              <Sc_option>Süper</Sc_option>
              <Sc_option>Mega</Sc_option>
            </Sc_select>
          </div>
          <div>
            <Sc_label>Ekstra Malzeme Seçimi :</Sc_label>
            <p>
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="Mantar"
                name="malzeme"
                value="Mantar"
              />
              <Sc_label htmlFor="Mantar">Mantar</Sc_label>
            </p>
            <p>
              {" "}
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="Domates"
                name="malzeme"
                value="Domates"
              />
              <Sc_label htmlFor="Domates"> Domates </Sc_label>
            </p>
            <p>
              {" "}
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="SiyahZeytin"
                name="malzeme"
                value="SiyahZeytin"
              />
              <Sc_label htmlFor="SiyahZeytin"> Siyah Zeytin </Sc_label>
            </p>
            <p>
              {" "}
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="Mısır"
                name="malzeme"
                value="Mısır"
              />
              <Sc_label htmlFor="Mısır"> Mısır </Sc_label>
            </p>
            <p>
              {" "}
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="KapyaBiberi"
                name="malzeme"
                value="KapyaBiberi"
              />
              <Sc_label htmlFor="KapyaBiberi"> Kapya Biberi </Sc_label>
            </p>
            <p>
              {" "}
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="JalapenoBiberi"
                name="malzeme"
                value="JalapenoBiberi"
              />
              <Sc_label htmlFor="JalapenoBiberi"> Jalapeno Biberi </Sc_label>
            </p>
            <p>
              {" "}
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="MozzarellaPeyniri"
                name="malzeme"
                value="MozzarellaPeyniri"
              />
              <Sc_label htmlFor="MozzarellaPeyniri">
                {" "}
                Mozzarella Peyniri{" "}
              </Sc_label>
            </p>
            <p>
              {" "}
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="HellimPeyniri"
                name="malzeme"
                value="HellimPeyniri"
              />
              <Sc_label htmlFor="HellimPeyniri"> Hellim Peyniri </Sc_label>
              <p>
                {" "}
                <Sc_input
                  onChange={handleChange}
                  type="checkbox"
                  id="Sucuk"
                  name="malzeme"
                  value="Sucuk"
                />
                <Sc_label htmlFor="Sucuk"> Sucuk </Sc_label>
              </p>
              <p>
                {" "}
                <Sc_input
                  onChange={handleChange}
                  type="checkbox"
                  id="Salam"
                  name="malzeme"
                  value="Salam"
                />
                <Sc_label htmlFor="Salam"> Salam </Sc_label>
              </p>
              <p>
                {" "}
                <Sc_input
                  onChange={handleChange}
                  type="checkbox"
                  id="Sosis"
                  name="malzeme"
                  value="Sosis"
                />
                <Sc_label htmlFor="Sosis"> Sosis </Sc_label>
              </p>
              <p>
                {" "}
                <Sc_input
                  onChange={handleChange}
                  type="checkbox"
                  id="Pastırma"
                  name="malzeme"
                  value="Pastırma"
                />
                <Sc_label htmlFor="Pastırma"> Pastırma </Sc_label>
              </p>
              <p>
                {" "}
                <Sc_input
                  onChange={handleChange}
                  type="checkbox"
                  id="Tavuk"
                  name="malzeme"
                  value="Tavuk"
                />
                <Sc_label htmlFor="Tavuk"> Tavuk </Sc_label>
              </p>
              <p>
                {" "}
                <Sc_input
                  onChange={handleChange}
                  type="checkbox"
                  id="DanaBonfile"
                  name="malzeme"
                  value="DanaBonfile"
                />
                <Sc_label htmlFor="DanaBonfile"> Dana Bonfile </Sc_label>
              </p>
            </p>
          </div>
          <div>
            <Sc_label
              name="icecek"
              value={form.value}
              onChange={handleChange}
              htmlFor="iceceksecimi"
            >
              İçecek :{" "}
            </Sc_label>
            <Sc_select name="icecek" id="dropdown" onChange={handleChange}>
              <Sc_option value="">Seçiniz</Sc_option>
              <Sc_option>Coca-Cola</Sc_option>
              <Sc_option>Fanta</Sc_option>
              <Sc_option>Sprite</Sc_option>
              <Sc_option>Cappy</Sc_option>
              <Sc_option>Fuse Tea</Sc_option>
              <Sc_option>Ayran</Sc_option>
              <Sc_option>Soda</Sc_option>
              <Sc_option>Su</Sc_option>
            </Sc_select>
          </div>
          <div>
            <Sc_label
              name="soslar"
              value={form.value}
              onChange={handleChange}
              htmlFor="sossecimi"
            >
              Soslar :{" "}
            </Sc_label>
            <Sc_select name="soslar" id="dropdown" onChange={handleChange}>
              <Sc_option value="">Seçiniz</Sc_option>
              <Sc_option>Barbekü Sos</Sc_option>
              <Sc_option>Ranch Sos</Sc_option>
              <Sc_option>Acı Sos</Sc_option>
              <Sc_option>Ketçap</Sc_option>
              <Sc_option>Mayonez</Sc_option>
            </Sc_select>
          </div>
          <div>
            <div>
              <button id="order-button" type="submit">
                Sipariş Ver
              </button>
            </div>
          </div>
        </Sc_fieldset>
      </form>
    </div>
  );
}
