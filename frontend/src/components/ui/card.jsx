// src/components/ui/card.jsx
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => {
  return (
    <div className={`px-4 py-2 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h3 className="text-xl font-semibold">{children}</h3>;
};

export { Card, CardHeader, CardContent, CardTitle };
