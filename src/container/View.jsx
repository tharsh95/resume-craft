import React from "react";
import Modal from "./Modal";
class FourColumnTable extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
      <div className="m-4">
        <Modal />
      </div>
        <table className="w-[99.9vw] border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">View</th>
              <th className="border border-gray-400 px-4 py-2">Edit</th>
              <th className="border border-gray-400 px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-400 px-4 py-2">Data 1</td>
              <td className="border border-gray-400 px-4 py-2">Data 2</td>
              <td className="border border-gray-400 px-4 py-2">Data 3</td>
              <td className="border border-gray-400 px-4 py-2">Data 4</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 px-4 py-2">Data 5</td>
              <td className="border border-gray-400 px-4 py-2">Data 6</td>
              <td className="border border-gray-400 px-4 py-2">Data 7</td>
              <td className="border border-gray-400 px-4 py-2">Data 8</td>
            </tr>
            {/* You can add more rows here */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FourColumnTable;
