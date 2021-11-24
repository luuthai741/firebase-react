import React from 'react';
import { signInWithFacebook, signInWithGoogle, auth } from '../../services/firebase';
import { Row, Col, Typography, Button } from 'antd';
const { Title } = Typography;

const Login = () => {
    const handleFbLogin = () => {
        signInWithFacebook();
    }
    const handleGGLogin = () => {
        signInWithGoogle();
    }
    auth.onAuthStateChanged(user => {
        console.log(user);
    })

    return (
        <Row justify='center' style={{ height: 800 }}>
            <Col span={8}>
                <Title style={{ textAlign: 'center' }} level={3}>Firebase real-time chat app</Title>
                <Button onClick={() => handleGGLogin()} style={{ width: '100%', marginBottom: '5px' }}>Sign in with Google</Button>
                <Button onClick={() => handleFbLogin()} style={{ width: '100%' }}> Sign in with Facebook</Button>
            </Col>
        </Row>
    )
}

export default Login;
