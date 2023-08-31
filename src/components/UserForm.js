import { useState } from "react";
import { Form, Button } from "antd";
import { withTheme } from "react-jsonschema-form";
import FormUploadWidget from "./FormUploadWidget";

const UserForm = ({ theme }) => {
  const [formData, setFormData] = useState({});
  const { Form: RJSFForm } = withTheme(theme);

  const userFormSchema = {
    type: "object",
    required: ["avatar", "name", "email", "birthdate"],
    properties: {
      avatar: {
        type: "string",
        title: "Avatar",
        format: "data-url",
      },
      name: {
        type: "string",
        title: "Name",
      },
      email: {
        type: "string",
        title: "Email",
      },
      birthdate: {
        type: "string",
        title: "Birthdate",
        format: "date",
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
  };

  return (
    <Form onSubmit={handleSubmit}>
      <RJSFForm
        schema={userFormSchema}
        formData={formData}
        onChange={(e) => setFormData(e.formData)}
        widgets={{
          file: FormUploadWidget,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </RJSFForm>
    </Form>
  );
};

export default UserForm;
