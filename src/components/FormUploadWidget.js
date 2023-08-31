import React from "react";
// import Pintura from "pintura/react";
// import { Button } from "antd";

const FormUploadWidget = (props) => {
  const { id, value, onChange } = props;

  const handleUpload = (dataURL) => {
    onChange(dataURL);
  };

  return (
    <div>
      inserir aqui...
      {/* <Pintura
        id={id}
        image={value}
        onBlobChange={handleUpload}
        // Outras propriedades do componente Pintura
      />
      <Button onClick={() => handleUpload("")}>Clear</Button> */}
    </div>
  );
};

export default FormUploadWidget;
