  
import React from "react";
import "./ReactDraftCustom.css";
import { Editor } from "react-draft-wysiwyg";
const HtmlEditor = (props: any) => {
  return (
    <div className="mb-4">
    <Editor
      editorState={props.editorState}
      toolbarClassName="w-full mt-4"
      wrapperClassName="shadow"
      editorClassName=""
      onEditorStateChange={props.setEditorState}
    />
    </div>
  );
};

export { HtmlEditor };