import React from 'react';

const ProjectInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Inventory Management System
      </h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Project Purpose</h2>
        <p className="text-gray-600">
          A comprehensive microservices-based application developed as part of the Containerization 
          and Virtualization course. This system demonstrates the implementation of Docker 
          containerization and orchestration in a modern web application.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Team TD48 - ESIEA</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>DAOUDI Amir Salah Eddine</li>
          <li>HELOUI Youssef</li>
          <li>ZEJLI Mohammed Nadir</li>
          <li>MOURTADA Heddy</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectInfo;
