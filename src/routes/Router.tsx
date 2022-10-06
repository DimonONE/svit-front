import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Home} from "../components/home";

export const Router: React.FC = () => {

  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Navigate to={'/'} />} />
  </Routes>
}
