  
import React from "react";
import "./ReactDraftCustom.css";
import { Editor } from "react-draft-wysiwyg";
const HtmlEditor = (props: any) => {
  return (
    <div className="mb-4">
    <Editor
      editorState={props.editorState}
      toolbarClassName={`w-full mt-4 ${props.toolbar}`}
      wrapperClassName="shadow max-height-3/4 border border-black" 
      editorClassName=""
      onEditorStateChange={props.setEditorState}
    />
    </div>
  );
};

export { HtmlEditor };