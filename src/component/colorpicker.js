import React, { useState } from "react";
import "./colorpicker.css";

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorPicker = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker ">
      <div
        class="shadow-lg p-6 mb-5  position-absolute top-50 start-50 translate-middle "
        style={{
          width: " 47rem",
          height: "25rem",
          backgroundColor: selectedColor,
          borderRadius: "25px",
        }}
      ></div>
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{ width: "50rem" }}
      >
        {isOpen && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color "
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}

        <br></br>
        <button
          type="button"
          className="btn"
          onClick={toggleColorPicker}
          style={{ backgroundColor: "#4caf50", color: "white" }}
        >
          Pick a color
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
