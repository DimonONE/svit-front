import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {HomePage} from "../pages/HopePage";

export const Router: React.FC = () => {

  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<Navigate to={'/'} />} />
  </Routes>
}
