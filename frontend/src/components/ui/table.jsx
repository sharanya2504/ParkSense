// src/components/ui/table.jsx
import React from 'react';

const Table = ({ children, className }) => {
  return <table className={`min-w-full ${className}`}>{children}</table>;
};

const TableHeader = ({ children, className }) => {
  return (
    <thead className={`bg-gray-100 ${className}`}>
      <tr>{children}</tr>
    </thead>
  );
};

const TableBody = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>;
};

const TableRow = ({ children, className }) => {
  return <tr className={`border-t ${className}`}>{children}</tr>;
};

const TableCell = ({ children, className }) => {
  return <td className={`px-4 py-2 ${className}`}>{children}</td>;
};

const TableHead = ({ children, className }) => {
  return <th className={`px-4 py-2 ${className}`}>{children}</th>;
};

export { Table, TableBody, TableCell, TableHead, TableHeader, TableRow };
