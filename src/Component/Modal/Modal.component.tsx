import React, { useRef, useState } from "react";

const ModalComponent = (props: any) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [copySuccess, setCopySuccess] = useState("Copier");

  function copyToClipboard(e: any) {
    textAreaRef.current?.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess("Copie effectué :)")
    setTimeout(() => {
      setCopySuccess("Copier")
    },2000)
  }

  return (
    <div
      className={`fixed transition-all duration-100 ${
        props.modalOpen ? "opacity-100 z-20" : "opacity-0 z-0"
      } w-full h-full pin flex items-center`}
    >
      <div
        className={`absolute h-full w-full pin bg-black ease-out transition-all duration-500 ${
          props.modalOpen ? "opacity-75" : "opacity-0 "
        }`}
        onClick={props.toggleModal}
      />
      <div
        className={`relative ease-out transition-all duration-500 ${
          props.modalOpen ? "top-0" : "top-full"
        } mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8`}
      >
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between mb-2">
            <h1 className="text-2xl text-center text-green-dark">
              {props.title}
            </h1>
            <div
              className="text-2xl cursor-pointer hover:text-red-400"
              onClick={props.toggleModal}
            >
              X
            </div>
          </div>
          <hr />
          <textarea
            ref={textAreaRef}
            className="w-full h-64"
            readOnly={true}
            value={props.bbCode}
          ></textarea>
          <hr className="py-2" />
          <div className="flex flex-col w-full">
          {
              /* Logical shortcut for only displaying the 
               button if the copy command exists */
              document.queryCommandSupported("copy") && (
                <div className="w-full text-center">
                  <button
                    onClick={copyToClipboard}
                    className={`w-full px-4 py-2 my-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent`}
                  >
                    {copySuccess}
                  </button>
                </div>
              )
            }
            {props.show && (
              <div className="w-full text-center">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full px-4 py-2 my-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                    Lien vers le forum
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalComponent };
