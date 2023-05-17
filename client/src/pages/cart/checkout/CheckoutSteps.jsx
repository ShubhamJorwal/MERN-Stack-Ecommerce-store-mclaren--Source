import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import './CheckoutSteps.scss'
import {
  MdAccountBalanceWallet,
  MdLibraryAddCheck,
  MdLocalShipping,
} from "react-icons/md";
import { Typography } from "@mui/material";

const CheckoutSteps = ({activeStep,stepStyles}) => {
  const steps = [
    {
      label: <Typography style={{color:"#c2c2c2" , fontSize:"0.7vmax" , letterSpacing:"0.1rem"}}>Shipping Details</Typography>,
      icon: <MdLocalShipping size={"1vmax"}/>,
    },
    {
      label: <Typography style={{color:"#c2c2c2" , fontSize:"0.7vmax" , letterSpacing:"0.1rem"}}>Confirm Order</Typography>,
      icon: <MdLibraryAddCheck size={"1vmax"}/>,
    },
    {
      label: <Typography style={{color:"#c2c2c2" , fontSize:"0.7vmax" , letterSpacing:"0.1rem"}}>Payment</Typography>,
      icon: <MdAccountBalanceWallet size={"1vmax"}/>,
    },
  ];

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "#03a9f4" : "#c2c2c2",
              }}
              icon={item.icon}
            >
                
              {item.label}
            </StepLabel >
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CheckoutSteps;
