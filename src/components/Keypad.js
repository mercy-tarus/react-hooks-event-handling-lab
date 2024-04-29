/** @format */

// Code Keypad Component Here

function Keypad() {
  return (
    <div>
      <input
        type="password"
        placeholder="entering password"
        name="password"
        onChange={() => console.log("Entering password...")}
      ></input>
    </div>
  );
}

export default Keypad;
