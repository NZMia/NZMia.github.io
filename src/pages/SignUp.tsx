import React from 'react';
import { Form, Input, Button } from 'antd';

const SignUp: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name='signup' onFinish={onFinish}>
      <Form.Item
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please input a valid email address!',
          },
        ]}
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
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
