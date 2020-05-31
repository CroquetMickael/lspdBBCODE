import React from "react";

const PageLayout = (props: any) => (
  <div className="flex flex-col w-full h-full p-2">
    {props.children}
    <footer className="z-20 w-full p-4 text-center text-white bg-blue-800 border-t border-grey pin-b">
      Made by @Haze for LSPD LRP 2020-2021
    </footer>
  </div>
);

export { PageLayout };
