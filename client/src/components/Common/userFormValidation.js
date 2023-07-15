import { useState } from "react";

const useFormValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validate = () => {
    let validationErrors = {};

    // Validate email
    if (!values.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      validationErrors.email = "Email is invalid";
    }
    // Validate name
    if (!values.name) {
      validationErrors.name = "name is required";
    }
    // Validate last name
    if (!values.lastname) {
      validationErrors.lastname = "lastname is required";
    }
    // Validate username
    if (!values.username) {
      validationErrors.username = "username is required";
    }

    // Validate password
    if (!values.password) {
      validationErrors.password = "Password is required";
    } else if (values.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    } else if (!/[!@#$%^&*]/.test(values.password)) {
      validationErrors.password = "Password must include a special character";
    }

    // Validate retype password
    if (!values.retypePassword) {
      validationErrors.retypePassword = "Retype password is required";
    } else if (values.password !== values.retypePassword) {
      validationErrors.retypePassword = "Passwords do not match";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      // Perform form submission or any other action here
      console.log("Form is valid");
      setValues({});
      setErrors({});
      setIsSubmitting(true);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useFormValidation;
