import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  onChange: any;
  border?: boolean;
  onKeyDown?: Function;
  value?: any;
}
const InputComponent = (props: InputProps) => (
  <div
    className={`flex items-center ${
      props.border ? "border-b border-b-2 border-grey-800" : null
    } focus:border-blue-500 py-2`}
  >
    <input
      className="appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      onKeyDown={e => {
        if (e.key === "Enter") {
          if (props.onKeyDown !== undefined) {
            props.onKeyDown();
          }
        }
      }}
    />
  </div>
);

export { InputComponent };