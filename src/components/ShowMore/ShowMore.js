import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import anime from 'animejs/lib/anime.es.js';

//React bootstrap modal
function ShowMore(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalId = Math.floor(Math.random() * 1000)

  function runStartAnimation(){
    anime({
        targets: [document.getElementById(modalId)],
        scale: '1.2'
    })
    }
    function runEndAnimation(){
        anime({
            targets: [document.getElementById(modalId)],
            scale: '1.0'
        })
    }

  return (
    <>
      <Button variant="primary" onClick={handleShow} id={modalId} onMouseEnter={() => runStartAnimation()} onMouseLeave={() => runEndAnimation()}>
        Show More!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>{props.message}</div>
        </Modal.Body>
        <Modal.Footer>
            <div>Due: {props.date}</div>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowMore