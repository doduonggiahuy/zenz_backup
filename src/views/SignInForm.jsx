import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Modal, Form } from "antd";
import styled from "styled-components";
import logo from "../assets/images/hacker.png";
import fblg from "../assets/images/facebook.png";
import gglg from "../assets/images/google.png";

const SignInForm = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onFinish = (values) => {
    const { email, password } = values;

    // Kiểm tra xem trường email có được nhập hay không
    if (email) {
      navigate("/main");
    } else {
      showModal();
    }
  };

  const openGmailTab = () => {
    const yourEmail = "giahuydoduong@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${yourEmail}`;
    window.open(gmailUrl, "_blank");
  };

  const openMessengerTab = () => {
    const facebookProfileUrl = "100689157899236";
    const messengerUrl = `https://www.facebook.com/messages/t/${facebookProfileUrl}`;
    window.open(messengerUrl, "_blank");
  };

  const FormStyle = styled.div`
    border: 0.1rem solid white;
    width: 50rem;
    margin: 0 auto;
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
      width: 30rem;
    }

    @media screen and (max-width: 991px) {
      width: 40rem;
    }

    @media screen and (max-width: 576px) {
      width: 20rem;
    }
  `;

  return (
    <FormStyle className="container">
      <img src={logo} alt="logo" className="w-28" />
      <p className="text-white mb-0 mt-1 text-2xl">Login to continue</p>
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
        <div className="flex justify-around">
          <div name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ color: "white", marginRight: "2rem" }}>
              Remember me
            </Checkbox>
          </div>
          <a
            className="login-form-forgot no-underline text-blue-500"
            href="/forgotpassword"
          >
            Forgot password
          </a>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button mt-4 border-1 border-white rounded-md text-lg pt-0"
          style={{ width: "18rem", backgroundColor: "#478eff" }}
        >
          Log in
        </Button>
        <p className="text-white text-center mb-0 mt-2">Or</p>
      </Form>
      <div className="login-third-service w-72">
        <div
          className="button-third flex border-1 border-white rounded-md p-0.5 items-center justify-center my-3 text-white"
          style={{ backgroundColor: "#478eff" }}
        >
          <img src={gglg} alt="" className="w-4 h-auto" />
          <button
            className="ml-2"
            onClick={openGmailTab}
            style={{ backgroundColor: "#478eff" }}
          >
            Contact me via Google
          </button>
        </div>
        <div
          className="button-third flex  border-1 border-white rounded-md p-0.5 items-center justify-center my-3 text-white"
          style={{ backgroundColor: "#478eff" }}
        >
          <img src={fblg} alt="" className="w-4 h-auto" />
          <button className="ml-2" onClick={openMessengerTab}>
            Contact me via Facebook
          </button>
        </div>
      </div>
      <p className="text-white text-center">
        Don't have an account?{" "}
        <a href="/signup" className="no-underline text-blue-500">
          Sign Up
        </a>
      </p>
      <Modal
        title="Error"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: "#478eff", color: "#fff" } }}
      >
        <p>Invalid email or password. Please try again.</p>
      </Modal>
    </FormStyle>
  );
};

export default SignInForm;
