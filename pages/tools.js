import React, { useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const units = [
  'Millimeter',
  'Centimeter',
  'Meter',
  'Kilometer',
  'Inch',
  'Foot',
  'Yard',
  'Mile',
];

const conversionRatesToMeter = {
  Millimeter: 0.001,
  Centimeter: 0.01,
  Meter: 1,
  Kilometer: 1000,
  Inch: 0.0254,
  Foot: 0.3048,
  Yard: 0.9144,
  Mile: 1609.344,
};

export default function Tools() {
  const [inputValue, setInputValue] = useState(1);
  const [fromUnit, setFromUnit] = useState('Meter');
  const [toUnit, setToUnit] = useState('Kilometer');

  const convertValue = (value) => {
    const inMeters = parseFloat(value) * conversionRatesToMeter[fromUnit];
    const result = inMeters / conversionRatesToMeter[toUnit];
    return result.toFixed(6);
  };

  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <>
      <Head>
        <title>Tools</title>
      </Head>
      <div className="flex flex-col min-h-screen min-w-full items-center justify-center p-4">
        <div id="profile-box" className="w-full max-w-md border border-[#3C8D79] rounded-2xl p-4">
          <h1 className="text-center text-xl md:text-2xl font-bold mb-4 text-white">
            Converter Meter Tools
          </h1>

          <div className="flex flex-col gap-4">
            {/* From Section */}
            <div>
              <label className="block mb-1 text-white">From</label>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-2 rounded-md bg-white/10 text-white placeholder-gray-300"
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full mt-2 p-2 rounded-md bg-[#014034] text-white focus:outline-none focus:ring-2 focus:ring-[#3C8D79]"
              >
                {units.map((unit) => (
                  <option key={unit} value={unit} className="bg-[#014034] text-white">
                    {unit}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwapUnits}
              className="self-center p-2 bg-[#3C8D79] text-white rounded-full hover:bg-[#2e6f5e] transition"
              aria-label="Swap units"
            >
              <FontAwesomeIcon icon={faArrowsRotate} />
            </button>

            {/* To Section */}
            <div>
              <label className="block mb-1 text-white">To</label>
              <input
                type="text"
                value={convertValue(inputValue)}
                disabled
                className="w-full p-2 rounded-md bg-white/10 text-white"
              />
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full mt-2 p-2 rounded-md bg-[#014034] text-white focus:outline-none focus:ring-2 focus:ring-[#3C8D79]"
              >
                {units.map((unit) => (
                  <option key={unit} value={unit} className="bg-[#014034] text-white">
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}