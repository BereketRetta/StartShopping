import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import Error from "./Error";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <Error error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
