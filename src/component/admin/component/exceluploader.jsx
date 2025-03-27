import React, { useState } from "react";
import { read, utils } from "xlsx";
import axios from "axios";
import Dashboard from "../dashboard";
export default function ExcelUploader() {
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState([]);
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = read(e.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = utils.sheet_to_json(sheet);
      setData(jsonData);
    };
    reader.readAsBinaryString(file);
  };

  const handleUpload = async () => {
    if (data.length === 0) {
      alert("Please upload a file first.");
      return;
    }
    try {
      const response = await axios.post("https://dummyapi.com/upload", { data });
      if (response.status === 200) {
        alert("File uploaded successfully!");
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="bg-cyan-100">
      <Dashboard/>
    <div className="flex flex-col  items-center justify-between h-[50vh] lg:h-[70vh]  p-8 gap-6">
      <h1 className="font-extrabold text-3xl text-cyan-700">
      Upload Products via Excel Sheet
      </h1>
      <div className="bg-cyan-50 p-6 rounded-lg shadow-lg w-full max-w-md border border-cyan-300 flex flex-col items-center">
        <img src="/excel.png" alt="Excel Logo" className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold mb-4 text-center text-cyan-700">Excel File Upload</h2>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="w-full p-2 border border-cyan-400 rounded mb-4 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {fileName && <p className="text-sm text-cyan-600 mb-2">{fileName}</p>}
        <button
          onClick={handleUpload}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition-all"
        >
          Upload to File
        </button>
      </div>
    </div>
    </div>
  );
}
