import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import styled from "styled-components";
import logo from "../assets/images/hacker.png";
import fblg from "../assets/images/facebook.png";
import gglg from "../assets/images/google.png";

const SignUpForm = () => {
  const navigation = useNavigate();
  const [visible, setVisible] = useState(false);

  const showModalFalse = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    const { email, password } = values;

    if (email && password) {
      alert("Sign In Success");
      navigation("/signIn");
    } else {
      showModalFalse();
    }
  };

  const openGmailTab = () => {
    const yourEmail = "giahuydoduong@gmail.com"; // Thay thế bằng địa chỉ email của bạn
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${yourEmail}`;
    window.open(gmailUrl, "_blank");
  };

  const openMessengerTab = () => {
    const facebookProfileUrl = "100689157899236"; // Thay thế bằng địa chỉ Facebook của người dùng cụ thể
    const messengerUrl = `https://www.facebook.com/messages/t/${facebookProfileUrl}`;
    window.open(messengerUrl, "_blank");
  };

  const FormStyle = styled.div`
    border: 0.1rem solid white;
    width: 30rem;
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
    border-radius: 1rem;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    padding: 0.5rem;
    font-size: 1rem;

    &:hover {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
    @media screen and (max-width: 768px) {
      width: 25rem;
    }

    @media screen and (max-width: 991px) {
      width: 28rem;
    }

    @media screen and (max-width: 576px) {
      width: 20rem;
    }
  `;

  return (
    <FormStyle className="container">
      <img src={logo} alt="logo" className="w-28" />
      <p className="text-white mb-0 mt-1 text-2xl">Register</p>
      <Form
        name="normal_login"
        className="login-form"
        style={{ width: "18rem" }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          className="my-3"
          rules={[
            {
              required: true,
              message: "Please input a valid email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          className="my-3"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          className="my-3 "
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button mt-1 border-1 border-white rounded-md text-lg pt-0"
          style={{ width: "18rem", backgroundColor: "#478eff" }}
        >
          Sign Up
        </Button>
      </Form>
      <p className="text-white text-center mb-0 mt-2">Or</p>

      <div class="login-third-service w-72">
        <div
          class="button-third flex border-1 border-white rounded-md p-0.5 items-center justify-center my-1 text-white"
          style={{ backgroundColor: "#478eff" }}
        >
          <img src={gglg} alt="" className="w-4 h-auto" />
          <button
            class="ml-2"
            onClick={openGmailTab}
            style={{ backgroundColor: "#478eff" }}
          >
            Contact me via Google
          </button>
        </div>
        <div
          class="button-third flex  border-1 border-white rounded-md p-0.5 items-center justify-center my-3 text-white"
          style={{ backgroundColor: "#478eff" }}
        >
          <img src={fblg} alt="" className="w-4 h-auto" />
          <button class="ml-2" onClick={openMessengerTab}>
            Contact me via Facebook
          </button>
        </div>
      </div>

      <p className="text-white text-center">
        Already have an ZENZ account?
        <a href="/" className="no-underline text-blue-500">
          Sign In
        </a>
      </p>
      <Modal
        title="Error"
        visible={visible}
        onOk={handleOk}
        okButtonProps={{ style: { backgroundColor: "#478eff", color: "#fff" } }}
      >
        <p>Sign Up Success!</p>
      </Modal>
    </FormStyle>
  );
};

export default SignUpForm;
