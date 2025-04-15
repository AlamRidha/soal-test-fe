import { useState } from "react";
import "./App.css";
import axios from "axios";
import ModalJoke from "./Component/Modal";
import UserProfileForm from "./Component/UserProfileForm";
import { Button } from "react-bootstrap";

function App() {
  const [text, setText] = useState("");
  const [img, setImg] = useState();
  const [toogle, setToogle] = useState(false);
  const [toggleText, setToggleText] = useState("");

  const getPictRandom = async (text) => {
    try {
      const response = await axios.get(`https://robohash.org/${text}&200x200`);
      console.log("Berhasil", response);

      setImg(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPictRandom(text);
    // console.log(text, "Data masuk");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleToggle = () => {
    setToogle(!toogle);
  };

  return (
    <>
      <div>
        <img src={`https://robohash.org/${text}&200x200`} alt="pict" />
        <form onSubmit={handleSubmit}>
          <label>Input text random </label>{" "}
          <input
            type="text"
            name="textrandom"
            id="textrandom"
            value={text}
            onChange={handleOnChange}
          />
          {/* <button type="submit">Generate</button> */}
        </form>

        {/* Modal */}
        <ModalJoke />

        <h3>{toogle ? "On" : "Off"}</h3>

        <Button onClick={handleToggle} variant="secondary">
          Click Toggle
        </Button>

        <UserProfileForm />
      </div>
    </>
  );
}

export default App;
