import { Spin } from "antd";
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const SignInUi = lazy(() => import("./screens/SignInUi"));
const SignUpUi = lazy(() => import("./screens/SignUpUi"));
const ForgotPassword = lazy(() => import("./screens/ForgotPassword"));
const MainUi = lazy(() => import("./screens/MainUi"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="text-black text-center text-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
            <Spin className="pr-2" />
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignInUi />} />
          <Route path="/signup" element={<SignUpUi />} />
          <Route path="/main" element={<MainUi />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
