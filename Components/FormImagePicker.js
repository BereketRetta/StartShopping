import React from "react";
import { useFormikContext } from "formik";

import Error from "./Error";
import ImageInputList from "./ImageInputList";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <Error error={errors[name]} />
    </>
  );
}

export default FormImagePicker;
