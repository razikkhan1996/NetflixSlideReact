import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Api2List from './Api2List.jsx';

function Api2() {
  const [item, setitem] = useState([]);
  useEffect(() => {
    async function getdata() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=1`
      );
      console.log(res.data);
      setitem(res.data);
    }

    getdata();
  });
  return (
    <>
       <Table responsive="lg">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {item.map((val) => {
            return (
                // <tr>
                //   <td>{val.id}</td>
                //   <td>{val.name}</td>
                //   <td>{val.email}</td>
                // </tr>

                <Api2List text={val}/>
            );
          })}
        </tbody>
      </Table>

    </>
  );
}

export default Api2;
