import React, {useState} from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({viewNote, handleClick, patchNote, handleEdit, edit, handleCancel}) {


  const getContent = () => {
    if (edit) {
      return <NoteEditor handleClick={handleClick} viewNote={viewNote} patchNote={patchNote} handleCancel={handleCancel}/>;
    } else if (viewNote) {
      return <NoteViewer note={viewNote} handleEdit={handleEdit} handleCancel={handleCancel}/>;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
