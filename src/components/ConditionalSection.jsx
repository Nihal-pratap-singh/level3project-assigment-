import React from 'react';

const ConditionalSection = ({ title, fields }) => {
  return (
    <div>
      <h2>{title}</h2>
      {fields.map((field, index) => (
        <div key={index}>
          <label>
            {field.label}:
            {field.type === 'select' ? (
              <select value={field.value} onChange={(e) => field.onChange(e.target.value)} required>
                <option value="">Select...</option>
                {field.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input type="text" value={field.value} onChange={(e) => field.onChange(e.target.value)} required />
            )}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default ConditionalSection;
