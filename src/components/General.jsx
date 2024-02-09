import * as React from "react";
import fields from "../config.json";
import Form from "../container/Form";

export default function General({setForm,form}) {
  const { label, attributes } = JSON.parse(localStorage.getItem("fields")).fields[0];
  return (
    <>
      <h1 className="text-center">{label}</h1>
      {attributes.map((el) => (
        <Form attributes={el} setForm={setForm} form={form} />
      ))}
    </>
  );
}
