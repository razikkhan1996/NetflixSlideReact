import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Api = () => {
  const [item, upitem] = useState([]);

  useEffect(() => {
    async function getdata() {
      const res = await axios.get(`https://api.covid19api.com/countries`);
      upitem(res.data);
    }
    getdata();
  });


  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Country Code</th>
          </tr>
        </thead>
        <tbody>
          {item.map((val) => {
            return(<tr>
              <td>{val.Country}</td>
              <td>{val.ISO2}</td>
            </tr>);
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Api;
