import * as React from "react";
// import fields from "../config.json";n
import Form from "../container/Form";

export default function Education({form,setForm}) {
  const [education, setEducation] = React.useState([
    ...JSON.parse(localStorage.getItem("fields")).fields[1]["Education"],
  ]);
  const handleAdd = () => {
    setEducation((edu) => edu.push(education[0]));
  };

  return (
    <>
      {education.map((el) => (
        <>
          <h1 className="text-center">{el.label}</h1>
          {el.attributes.map((id) => (
            <Form attributes={id} form={form} setForm={setForm}/>
          ))}
        </>
      ))}
      <div className="flex justify-end m-3">
        <button className="mr-4">Delete</button>
        <button className="bg-gray-200 p-2 rounded-lg" onClick={handleAdd}>
          + Add Field
        </button>
      </div>
    </>
  );
}
