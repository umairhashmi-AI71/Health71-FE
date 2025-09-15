import React from "react";
import MoreMenu from "./MoreMenu";

type TableProps<T> = {
  data: T[];
  style?:string
};

export default function DataTable<T extends Record<string, any>>({
  data,
  style = ''
}: TableProps<T>) {
  if (!data || data.length === 0) {
    return <p className="text-gray-500 text-sm">No data available</p>;
  }

  // Extract headers from keys of first object
  const headers = Object.keys(data[0]);

  return (
    <div className={`overflow-x-auto border rounded-lg border-base ${style}`}>
      <table className="min-w-full  text-sm">
        <thead className=" text-left border-b border-base">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-3 font-medium">
                {header}
              </th>
            ))}
            <th className="px-6 py-3 font-medium"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, i) => (
            <tr key={i} className=" transition">
              {headers.map((header) => (
                <td key={header} className="px-6 py-4 ">
                  {row[header]}
                </td>
              ))}
              <td className="px-6 py-4"> <MoreMenu /></td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}
