import React, { useEffect, useState } from "react";

function Api2List(props) {
  return (
    <>
      <tr>
        <td>{props.text.id}</td>
        <td>{props.text.name}</td>
        <td>{props.text.email}</td>
      </tr>
    </>
  );
}


export default Api2List;