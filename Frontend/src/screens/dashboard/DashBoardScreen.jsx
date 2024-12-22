import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { Link, useOutletContext } from "react-router-dom";
import AnalyticsComponent from "./components/AnalyticsComponent";
import WarrantyExpiringProductsTablesComponent from "../../components/WarrantyExpiringProductsTableComponent";
import ProjectInfo from "../../components/ProjectInfo";

function DashBoardScreen() {
  // const [data] = useOutletContext();
  // // console.log("data ", data)

  return (
    <div className="h-full w-full px-10">
      <br />
      <ProjectInfo />
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Analytics Dashboard</h2>
        <p className="text-gray-600 mb-4">
          Monitor your inventory metrics, track product status, and make data-driven decisions 
          with our comprehensive analytics tools.
        </p>
      </div>
      <AnalyticsComponent />
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Warranty Tracking</h2>
        <p className="text-gray-600 mb-4">
          Keep track of products nearing warranty expiration to ensure timely maintenance 
          and replacement decisions.
        </p>
      </div>
      <WarrantyExpiringProductsTablesComponent />
    </div>
  );
}

export default DashBoardScreen;
