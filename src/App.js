import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PieChart from "./Components/PieChart";

function App() {
  const [data, setData] = useState([]);
  const [dep1, setDep1] = useState("");
  const [dep2, setDep2] = useState("");
  const [dep3, setDep3] = useState("");
  const [dep4, setDep4] = useState("");
  const [dep5, setDep5] = useState("");
  const [pie, setPie] = useState(true);
  const [table, setTable] = useState(false);

  useEffect(() => {
    axios
      .get("data.json")
      .then(async (res) => {
        setData(res.data);
        setDep1(res.data[0].Percentage);
        setDep2(res.data[1].Percentage);
        setDep3(res.data[2].Percentage);
        setDep4(res.data[3].Percentage);
        setDep5(res.data[4].Percentage);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="overflow-hidden bg-gray-50 min-h-screen">
        <h1 className="text-2xl mx-2 my-20 text-center tracking-tight font-extrabold text-gray-600 sm:text-5xl md:text-6xl">
          DashBoard
        </h1>
        <div>
          <h2 className="text-2xl mx-2 my-20 text-center font-bold text-gray-900 ">
            Department Wise Sales
          </h2>
          <div className="justify-center bg-gray-50 flex shadow-md">
            <div
              onClick={() => {
                setPie(true);
                setTable(false);
              }}
              className="mx-2 mb-10"
            >
              <span className=" text-gray-700 cursor-pointer rounded-3xl  py-2 px-5 hover:border-b-2 hover:border-blue-500">
                Pie Chart
              </span>
            </div>
            <div
              onClick={() => {
                setPie(false);
                setTable(true);
              }}
              className="mx-2 mb-10"
            >
              <span className=" text-gray-700 cursor-pointer rounded-3xl py-2 px-5 hover:border-b-2 hover:border-blue-500">
                Tabular Form
              </span>
            </div>
          </div>
          <div className={`${pie ? "block" : "hidden"} mt-5`}>
            <PieChart
              dep1={dep1}
              dep2={dep2}
              dep3={dep3}
              dep4={dep4}
              dep5={dep5}
            />
          </div>
          <div className={`${table ? "block" : "hidden"} mt-5`}>
            <table class="rounded-t-lg m-5 w-6/7 mx-auto bg-indigo-700 text-gray-200">
              <tr class="text-left border-b border-gray-300 bg-gray-800 rounded-t-xl">
                <th class="px-4 py-3">Department Name</th>
                <th class="px-4 py-3">Sales</th>
                <th class="px-4 py-3">Percentage %</th>
              </tr>
              {data.map((item) => {
                return (
                  <tr class="text-left border-b border-gray-300">
                    <td class="px-4 py-3">{item.DepartmentName}</td>
                    <td class="px-4 py-3">{item.Sales}</td>
                    <td class="px-4 py-3">{item.Percentage}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <p className="text-center my-10">
            Made with &hearts; by{" "}
            <a
              className="font-bold underline"
              href="http://www.sakshichoudhary.me/"
            >
              Sakshi Choudhary
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
