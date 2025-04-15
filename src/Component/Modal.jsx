import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalJoke = () => {
  const [show, setShow] = useState(false);
  const [joke, setJoke] = useState();
  const [punchline, setPunchline] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getJokeRandom = async () => {
    try {
      const response = await axios.get(
        // `https://official-joke-api.appspot.com/random_joke`
        `https://official-joke-api.appspot.com/jokes/random`
      );
      console.log("Berhasil", response);
      setJoke(response.data.setup);
      setPunchline(response.data.punchline);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    getJokeRandom();
  };

  useEffect(() => {
    getJokeRandom();
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Joke
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{joke}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{punchline}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClick}>
            Reload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalJoke;
