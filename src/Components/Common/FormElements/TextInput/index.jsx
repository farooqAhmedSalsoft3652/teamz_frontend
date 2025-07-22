// Input.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const TextInput = ({
  id,
  type,
  value = '',
  className,
  placeholder,
  label,
  labelClassName = 'mb-2',
  disabled,
  readOnly = false,
  required,
  rows,
  name,
  onChange,
  onBlur,
  autoComplete,
  error,
  touched = false,
  inputIcon,
  iconPosition = 'left', // 'left' or 'right'
  inline = false, // inline prop
  ...rest // ✅ support extra props.
}) => {
  const [passwordShow, setPasswordShow] = React.useState(true);

  const handlePasswordToggle = () => {
    setPasswordShow(!passwordShow);
  };

  const inputProps = {
    id,
    name,
    autoComplete,
    onChange: onChange || (() => {}),
    onBlur,
    disabled,
    readOnly,
    placeholder,
    value: value !== undefined ? value : '',
    className: `form-control ${className || ''} ${
      inputIcon ? `has-icon-${iconPosition}` : ''
    } ${touched && error ? 'is-invalid' : ''}`,
    type: type === 'password' ? (passwordShow ? 'password' : 'text') : type,
    'aria-invalid': touched && !!error, // ✅ accessibility
    ...(type === 'textarea' ? { rows } : {}),
    ...rest, // ✅ extra props like maxLength, step, etc.
  };

  const labelText = label && (
    <label
      className={`form-label ${labelClassName || ''}`}
      htmlFor={id || name}
    >
      {label}
      {required && <span className="text-danger">*</span>}
    </label>
  );

  // const input =
  //   type === "textarea" ? (
  //     <textarea {...inputProps} />
  //   ) : (
  //     <input {...inputProps} />
  //   );

  const inputElement =
    type === 'textarea' ? (
      <textarea {...inputProps} />
    ) : (
      <input {...inputProps} />
    );

  const iconElement = inputIcon && (
    <FontAwesomeIcon
      className={`input-icon icon-${iconPosition}`}
      icon={inputIcon}
    />
  );

  const passwordToggleButton = type === 'password' && (
    <button
      type="button"
      className="btn view-btn show-btn-1 position-absolute"
      onClick={handlePasswordToggle}
    >
      <FontAwesomeIcon icon={passwordShow ? faEyeSlash : faEye} />
    </button>
  );

  // const searchIconElement = type === 'search' && searchIcon && (
  //   <FontAwesomeIcon className="left-icon" icon={faSearch} />
  // );

  // const iconElement = inputIcon && (
  //   <FontAwesomeIcon
  //     className={`input-icon icon-${iconPosition}`}
  //     icon={inputIcon}
  //   />
  // );

  const wrapperClass =
    type === 'password' ? 'passField-wrap' : 'inputField-wrap';

  // const wrapperClass = type === 'password'
  //   ? 'passField-wrap'
  //   : type === 'search'
  //   ? 'search-wrap'
  //   : 'inputField-wrap';

  const dateOrTimePlaceholder =
    (type === 'date' || type === 'time') &&
    (!value ? (
      <span className={`${type}-placeholder`}>
        {placeholder || `Select a ${type}`}
      </span>
    ) : (
      <span className="selected-date">{value}</span>
    ));

  const inlineForm = (
    <div className="d-flex align-items-center inline-form">
      {labelText}
      <div className={wrapperClass}>
        {iconPosition === 'left' && iconElement}
        {inputElement}
        {dateOrTimePlaceholder}
        {iconPosition === 'right' && iconElement}
        {passwordToggleButton}
      </div>
    </div>
  );

  return (
    <>
      {inline ? (
        inlineForm
      ) : (
        <>
          {labelText}
          <div className={wrapperClass}>
            {iconPosition === 'left' && iconElement}
            {inputElement}
            {dateOrTimePlaceholder}
            {iconPosition === 'right' && iconElement}
            {passwordToggleButton}

            {/* {searchIconElement}
            {input}
            {passwordButton} */}
          </div>
        </>
      )}
      {touched && error && (
        <div className="error-message text-danger fw-light ps-3 pt-1">
          {error}
        </div>
      )}
    </>
  );
};

export default TextInput;

// Apply Component Example
/*
<Input
  id="full_name"
  label="Full Name"
  name="full_name"
  type="text"
  placeholder="Enter Full Name"
  value={values.full_name}
  onChange={handleChange}
  onBlur={handleBlur}
  labelClassName="ps-3"
  error={touched.full_name && errors.full_name}
  touched={touched.full_name}
  required
  inputIcon={faSearch}
  iconPosition="left" // or "right"
  maxLength={100} // ✅ extra prop
/>
*/
