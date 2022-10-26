import React from 'react';
import "./index.css"


const FormSelect = ({ options, defaultValue, handleChange, label, ...otherProps }) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <div className="formRow">
      {label && (
        <label className="formSelect-label">
          {label}
        </label>
      )}
      
<select className="form-Select" value={defaultValue} onChange={handleChange} {...otherProps}>
        {options.map((option, index) => {
          const { value, name } = option;

          return (
            <option key={index} value={value}>{name}</option>
          );
        })}
      </select>
    </div>
  );
}

export default FormSelect;





export const FormRadioSelect = ({ options, handleChange,defaultValue, label, ...otherProps }) => {

  if (!Array.isArray(options) || options.length < 1) return null;
  return (
    
    <div>
      {label && (
        <label className="formSelect-label">
          {label}
        </label>
      )}
      <div className="form-radio-container">
        {options.map((option, index) => {
          const { value, name } = option;
          return (
           
            <>
            
          <div>
            <input type="radio"
            className="form-radio"
             name={name}
             value={value} 
             onChange={handleChange}
        />
          <h3 className="radio-value">{value}</h3>
          </div>
             
          
            </>
            
          );
        })}
        </div>
    </div>
  );
}

