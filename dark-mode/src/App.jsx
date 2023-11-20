import React, { useState } from 'react';
import useLocalStorage from "use-local-storage"
import "./App.css";
import { Toggle } from './components/Toggle';
import useDetectDevice from './hooks/useDetectDevice';

export const App = () => {
  const device = useDetectDevice()
  const [isDark, setIsDark] = useLocalStorage("isDark",false);
  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />  
      <h1 className='title'>Halo Sku!</h1>
      <div className='box'>
        <h2>This is my LOVE</h2>
      </div>
      {device && <h1>{device}</h1>}
    </div>
  )
}
