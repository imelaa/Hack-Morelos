import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <form id="msform" className="w-full max-w-lg mx-auto mt-12 text-center relative">
      <ul id="progressbar" className="mb-8 overflow-hidden counter-reset flex justify-between">
        <li className={`text-white uppercase text-xs w-1/3 relative ${step >= 1 ? 'active' : ''}`}>
          Account Setup
        </li>
        <li className={`text-white uppercase text-xs w-1/3 relative ${step >= 2 ? 'active' : ''}`}>
          Social Profiles
        </li>
        <li className={`text-white uppercase text-xs w-1/3 relative ${step >= 3 ? 'active' : ''}`}>
          Personal Details
        </li>
      </ul>

      {step === 1 && (
        <fieldset className="bg-white rounded-lg shadow-lg p-6 box-border w-4/5 mx-auto relative">
          <h2 className="fs-title text-base text-gray-800 mb-2">Ingresa a tu cuenta</h2>
          <h3 className="fs-subtitle text-sm text-gray-600 mb-4">Cada palabra es importante</h3>
          <input type="text" name="email" placeholder="Correo electronico" className="p-3 border border-gray-300 rounded mb-2 w-full box-border text-gray-700 text-sm" />
          <input type="password" name="pass" placeholder="Contraseña" className="p-3 border border-gray-300 rounded mb-2 w-full box-border text-gray-700 text-sm" />
          <input type="button" name="next" className="action-button bg-green-600 text-white font-bold p-2 rounded mt-2 mx-1" value="Ingresar" onClick={nextStep} />
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="bg-white rounded-lg shadow-lg p-6 box-border w-4/5 mx-auto relative">
          <h2 className="fs-title text-base text-gray-800 mb-2">Social Profiles</h2>
          <h3 className="fs-subtitle text-sm text-gray-600 mb-4">Your presence on the social network</h3>
          <input type="text" name="twitter" placeholder="Twitter" className="p-3 border border-gray-300 rounded mb-2 w-full box-border text-gray-700 text-sm" />
          <input type="text" name="facebook" placeholder="Facebook" className="p-3 border border-gray-300 rounded mb-2 w-full box-border text-gray-700 text-sm" />
          <input type="text" name="gplus" placeholder="Google Plus" className="p-3 border border-gray-300 rounded mb-2 w-full box-border text-gray-700 text-sm" />
          <input type="button" name="previous" className="action-button bg-green-600 text-white font-bold p-2 rounded mt-2 mx-1" value="Previous" onClick={prevStep} />
          <input type="button" name="next" className="action-button bg-green-600 text-white font-bold p-2 rounded mt-2 mx-1" value="Next" onClick={nextStep} />
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="bg-white rounded-lg shadow-lg p-6 box-border w-4/5 mx-auto relative">
          <h2 className="fs-title text-base text-gray-800 mb-2">Personal Details</h2>
          <h3 className="fs-subtitle text-sm text-gray-600 mb-4">We will never sell it</h3>
          <input type="text" name="fname" placeholder="First Name" className="p-3 border border-gray-300 rounded mb-2 w-full box-border text-gray-700 text-sm" />
          <input type="text" name="lname" placeholder="Last Name" className="p-3 border border-gray-300 rounded mb-2 w-full box-border text-gray-700 text-sm" />
          <input type="text" name="phone" placeholder="Phone" className="p-3 border border-gray-300 rounded mb-2 w-full box-border text-gray-700 text-sm" />
          <textarea name="address" placeholder="Address" className="p-3 border border-gray-300 rounded mb-2 w-full box-border text-gray-700 text-sm"></textarea>
          <input type="button" name="previous" className="action-button bg-green-600 text-white font-bold p-2 rounded mt-2 mx-1" value="Previous" onClick={prevStep} />
          <a href="https://twitter.com/GoktepeAtakan" className="action-button bg-green-600 text-white font-bold p-2 rounded mt-2 mx-1 no-underline" target="_top">Submit</a>
        </fieldset>
      )}
    </form>
  );
};

export default MultiStepForm;
