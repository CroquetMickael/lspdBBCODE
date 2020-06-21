import React from "react";

const PageLayout = (props: any) => (
  <div className="flex flex-col w-full h-full p-2">
    {props.children}
  </div>
);

export { PageLayout };
