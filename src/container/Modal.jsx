import React, { useState } from "react";
import General from "../components/General";
import Education from "../components/Education";
import Social from "../components/Social";
import Experience from "../components/Experience";

const Modal = ({ isOpen, onClose }) => {
  const [form,setForm] = useState({})
  const handleResume = (e)=>{
    e.preventDefault()

    console.log("first",form)
  }
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-gray-200 p-4">
            <h1 className="text-lg font-semibold">Create Resume</h1>
          </div>
          <form onSubmit={handleResume}>
            <div className="p-4">
              <General setForm={setForm} form={form} />
              <Education setForm={setForm} form={form} />
              <Social setForm={setForm} form={form} />
              <Experience setForm={setForm} form={form} />
            </div>
            <div className="bg-gray-100 p-4 flex justify-end">
              <button
              type='submit'
                className="text-gray-600 hover:text-gray-800 font-semibold"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={openModal}
      >
        Create Resume
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
