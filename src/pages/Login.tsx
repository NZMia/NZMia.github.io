import React from 'react';
import { Form, Input, Button } from 'antd';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name='login' onFinish={onFinish} initialValues={{ remember: true }}>
      <Form.Item
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
