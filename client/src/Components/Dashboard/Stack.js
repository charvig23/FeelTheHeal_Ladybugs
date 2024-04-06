import React from 'react';
import { Stack as BootstrapStack, Dropdown, Button } from 'react-bootstrap';

function Stack({ id, description, buttonText, dropdownOptions }) {
  return (
    <BootstrapStack direction="horizontal" gap={3} className="stack-item">
      {/* Render the description */}
      <div className="stack-description">{description}</div>
      {/* Render the button, with right margin */}
      <Button variant="primary" className="stack-button ms-auto">{buttonText}</Button>
      {/* Render the dropdown, with right margin */}
      <Dropdown className="stack-dropdown ms-auto">
        <Dropdown.Toggle variant="success" id={`dropdown-basic-${id}`}>
          Status
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* Map over the dropdown options */}
          {dropdownOptions.map((option, index) => (
            <Dropdown.Item key={index}>{option}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </BootstrapStack>
  );
}

export default Stack;
