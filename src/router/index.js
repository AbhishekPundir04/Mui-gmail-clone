import { Route, Routes } from "react-router-dom";
import React from "react";
import EmailsDetail from "../app/components/layout/Email/EmailsDetail";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<EmailsDetail />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
