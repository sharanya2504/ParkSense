// src/components/ui/tabs.jsx
import React, { useState } from 'react';

const Tabs = ({ children, className }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

const TabsList = ({ children, className }) => {
  return <div className={`flex space-x-4 border-b ${className}`}>{children}</div>;
};

const TabsTrigger = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-gray-600 hover:text-gray-900 ${className}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, className, isActive }) => {
  return isActive ? <div className={`p-4 ${className}`}>{children}</div> : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
