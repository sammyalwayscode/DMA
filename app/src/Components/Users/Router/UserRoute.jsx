import React from "react";
import { Route, Routes } from "react-router-dom";
import OnboardingOne from "../Onboarding/OnboardingOne";
import OnbordingTwo from "../Onboarding/OnbordingTwo";
import OnboardingThree from "../Onboarding/OnboardingThree";
import OnboardingFour from "../Onboarding/OnboardingFour";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/onboardingone" element={<OnboardingOne />} />
      <Route path="/onboardingtwo" element={<OnbordingTwo />} />
      <Route path="/onboardingthree" element={<OnboardingThree />} />
      <Route path="/onboardingfour" element={<OnboardingFour />} />
    </Routes>
  );
};

export default UserRoute;
