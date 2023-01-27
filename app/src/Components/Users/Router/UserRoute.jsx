import React from "react";
import { Route, Routes } from "react-router-dom";
import OnboardingOne from "../Onboarding/OnboardingOne";
import OnbordingTwo from "../Onboarding/OnbordingTwo";
import OnboardingThree from "../Onboarding/OnboardingThree";
import OnboardingFour from "../Onboarding/OnboardingFour";
import Home from "../Home/Home";
import Header from "../Header/Header";

const UserRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/onboardingone" element={<OnboardingOne />} />
        <Route path="/onboardingtwo" element={<OnbordingTwo />} />
        <Route path="/onboardingthree" element={<OnboardingThree />} />
        <Route path="/onboardingfour" element={<OnboardingFour />} />
        <Route path="/home/userID" element={<Home />} />
      </Routes>
    </>
  );
};

export default UserRoute;
