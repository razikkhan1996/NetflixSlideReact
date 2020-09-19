import React,{useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function List(props) {
    const [line,newline]=useState(false);

    const deleteitem=()=>
    {
        newline(true);
    }
  return (
    <>
      <li
        style={{
          listStyle: "none",
          textDecoration: line ? "line-through" : null,
        }}
      >
        <span onClick={deleteitem}>
          <DeleteIcon />
        </span>

        {props.text}
      </li>
    </>
  );
}

export default List;
