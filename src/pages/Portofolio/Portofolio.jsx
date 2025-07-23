import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './Portofolio.module.css'

// ASSETS
import img1 from '../../assets/img1.png'

export default function Portofolio() {
  let initailCards=[{id:1, name:'Alaa',age:25},{id:2, name:'esraa',age:25}]

    const [show, setShow] = useState(false);
     const[cards,setCards]=useState(initailCards)
     const [name, setName] = useState('');
     const [age, setAge] = useState('');
     const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState('');
     const [editAge, setEditAge] = useState('');


  const handleClose = () => setShow(false);
 const handleShow = (card) => {
  setEditId(card.id);
  setEditName(card.name);
  setEditAge(card.age);
  setShow(true);
};


 
// add
  function handleAdd(){
  const newcard={
    id:Math.random() ,
    name:name,
    age:age,
  }
  setCards(card=>[...card,newcard])
  setAge('')
  setName('')
  console.log(newcard.id)
  }
//delet
  function handleDelete(id){

  let res=cards.filter(card=>card.id!==id)
   return setCards(res)
  } 
  //update
function handleUpdate() {
  const updatedCards = cards.map(card =>
    card.id === editId ? { ...card, name: editName, age: editAge } : card
  );
  setCards(updatedCards);
  setShow(false);
  setEditId(null);
}

  return (
    <>
 <div  className='container d-flex  flex-wrap flex-md-nowrap '>
  <div className={`d-flex col-md-9 flex-wrap gap-3`}>
{cards.map(card =>(

  <div key={card.id} className={`d-flex flex-column align-items-center p-3 justify-content-center col-md-3  col-10 flex-wrap ${styles.wrapper} `}>

       <img src={img1} alt="Random" />

       <p>name:<span>{card.name}</span></p>
       <p>age:<span>{card.age}</span></p>
    <Button className={styles.popup} onClick={() => handleShow(card)} variant="primary">edit</Button>
     <Button  onClick={() => handleDelete(card.id)} className={styles.popup} variant="danger" >Delete</Button>

      <Modal className={styles.modal} show={show} onHide={handleClose}>
        
        <Modal.Body className='w-70'>    
          <div className='d-flex flex-column col-12'>
    <input value={editName} onChange={(e)=>setEditName(e.target.value)}  placeholder="Name" />

     <input value={editAge} onChange={(e)=>setEditAge(e.target.value)}  placeholder="Age" />
     <Button onClick={handleUpdate} >save</Button> 
     </div></Modal.Body>
       
      </Modal> 
      </div>

    ))}
    </div>
    <div className='d-flex flex-column col-md-2 col-10 gap-2 align-items-center justify-content-center m-md-5 mb-5'>
      <h3>Add new Card</h3>
    <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
     <input value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" />
     <Button onClick={handleAdd} >Add</Button> 
     </div>
 </div>
        
          
          </>
  );
  
}
