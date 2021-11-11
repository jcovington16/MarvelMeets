import React, {useState} from 'react'
import axios from 'axios';
import Form from '../../../node_modules/react-bootstrap/Form';
import Row from '../../../node_modules/react-bootstrap/Row';
import Col from '../../../node_modules/react-bootstrap/Col';
import Button from '../../../node_modules/react-bootstrap/Button';

const Register = () => {

    const [regform, setRegform] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""

    });

    const handleChange = (e) => {
        setRegform({
            ...regform, [e.target.name]: e.target.value
        }, []);
    }

    const handleSubmit = (e) => {
        e.preventDefualt();
        axios.post('http://localhost:5001/api/users/', regform);
        //window.location='/';
    }



    return (
        <div>
            <Form>
                <Row className="mb-4" >
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" size="sm"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" size="sm"/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" size="sm"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" size="sm"/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control size="sm"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control size="sm"/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox" size="sm">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Register
