import React from 'react';
import ColorPicker from './component/colorpicker.js';
import './App.css';
import './component/bootstrap.min.css';

function App() {
  const colors = ['#fe0000', '#00ff01', '#0000fe','#ffff00', '#ff00fe', '#00ffff', '#fea500','#81007f','#ffc0cb','#008001','#fe6347','#01ced1','#8b4512','#ff8b00','#4682b4','#fed700'];

  return (
    <div className="App">
      <h1 className='mt-4 md-4'><b>Color Picker</b></h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;