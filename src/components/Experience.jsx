import * as React from "react";
import fields from "../config.json";
import Form from "../container/Form";

export default function General({form,setForm}) {
  const { label, attributes } = fields.fields[3];
  return (
    <>
      <h1 className="text-center">{label}</h1>
      {attributes.map((el) => (
        <Form attributes={el} setForm={setForm} form={form}/>
      ))}
      <div className="flex justify-end m-3">
        <button className="mr-4">Delete</button>
        <button className="bg-gray-200 p-2 rounded-lg">+ Add Field</button>
      </div>
    </>
  );
}
