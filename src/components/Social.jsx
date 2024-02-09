import * as React from "react";
import fields from "../config.json";
import Form from "../container/Form";

export default function Social({form,setForm}) {

  const { label, attributes } = fields.fields[2];
  return (
    <>
      <h1 className="text-center">{label}</h1>
      {attributes.map((el) => (
        <Form attributes={el} setForm={setForm} form={form} />
      ))}
    </>
  );
}
