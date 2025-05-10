import React from "react";

function App() {
  const [weight, setWeight] = React.useState(40);
  const [height, setHeight] = React.useState(140);

  function handleWeightChange(event) {
    const newWeight = event.target.value;
    setWeight(newWeight);
  }

  function handleHeightChange(event) {
    const newHeight = event.target.value;
    setHeight(newHeight);
  }

  const bmi = React.useMemo(() => {
    // Convert height from cm to m and calculate BMI
    const heightInMeters = height / 100;
    const newBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    return isNaN(newBMI) ? "0.0" : newBMI;
  }, [weight, height]);

  return (
    <>
      <h1 className="text-center text-4xl mt-8 mb-16 font-bold">
        Project 7: BMI Calculator
      </h1>
      <div className="bg-white flex flex-col items-center max-w-xl mx-auto shadow-lg shadow-black pt-9 pb-5">
        <label
          htmlFor="weight"
          className="mb-4 text-xl font-bold"
        >
          Weight: {weight} kg
        </label>
        <input
          type="range"
          id="weight"
          name="weight"
          min="40"
          max="220"
          value={weight}
          className="mb-5 w-4/5"
          onChange={handleWeightChange}
        />

        <label
          htmlFor="height"
          className="mb-4 text-xl font-bold"
        >
          Height: {height} cm
        </label>
        <input
          type="range"
          id="height"
          name="height"
          min="140"
          max="220"
          value={height}
          className="mb-5 w-4/5"
          onChange={handleHeightChange}
        />

        <div className="output-section">
          <p className="p-3 text-lg">Your BMI is</p>
          <p className="bg-blue-700 text-center text-white py-3 rounded-3xl shadow-lg shadow-black mb-4">
            {bmi}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
