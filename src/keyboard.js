import React from 'react';
import './keyboard.css';

const Keyboard_app = () => {
    const characters = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789!@#$%^&*()";

    // Handle the key press
    const handleKeyPress = (char) => {
        console.log("Pressed:", char);
    };

    return (
        <div className="keyboard">
            {characters.split('').map((char) => (
                <button key={char} onClick={() => handleKeyPress(char)}>
                    {char}
                </button>
            ))}
        </div>
    );
};

export default Keyboard_app;