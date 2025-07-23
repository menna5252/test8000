import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Contact.module.css'
export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <h1 className='text-center mb-3'>conatct section</h1> 
  <Form className='d-flex flex-column justify-content-center align-items-start m-5 w-50'>
      <Form.Group className="mb-5 w-50" controlId="formBasicEmail">
    
        <Form.Control type="name" placeholder="User name" />

      </Form.Group>
      <Form.Group className="mb-5 w-50" controlId="formBasicEmail">
    
        <Form.Control type="name" placeholder="User Age" />

      </Form.Group>
       <Form.Group className="mb-5 w-50" controlId="formBasicEmail">
    
        <Form.Control type="email" placeholder="User Email" />

      </Form.Group>
       <Form.Group className="mb-5 w-50" controlId="formBasicEmail">
    
        <Form.Control type="password" placeholder="User password" />

      </Form.Group>

      <Button className={styles.btn_submit} type="submit">
        Send message
      </Button>
    </Form>
    </div>
  )
}
