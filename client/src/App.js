import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { uploadFile } from "./service/api";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const inputFileRef = useRef();

  const getImage = async () => {
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);

      let response = await uploadFile(data);
      setResult(response.path);
    }
  };

  useEffect(() => {
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);
  const onUploadClick = () => {
    inputFileRef.current.click();
  };

  const copyToClipboard = () => {
    copy(result);
    toast.success("copied");
  };

  return (
    <div className=" w-full h-[100vh] text-white overflow-hidden flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="top-0 py-3 bg-cyan-500 w-full text-center font-bold text-4xl shadow-md">
        Hari ॐ
      </div>
      <div className="w-full h-[100%] py-20">
        <div className="flex flex-col items-center justify-center w-[90%] sm:w-[70%] h-fit m-auto border rounded-lg gap-6 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide px-4 text-center">
            Simple File Sharing
          </h1>
          <p className="tracking-wide	text-xl text-center px-4">
            Upload and share the download link.
          </p>
          <button
            onClick={() => onUploadClick()}
            className="border p-2 px-4 rounded-xl text-xl font-semibold"
          >
            Upload
          </button>

          <input
            type="file"
            ref={inputFileRef}
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
          {result && (
            <div className="flex gap-6 mt-10">
              <button
                onClick={() => copyToClipboard()}
                className="border p-2 px-4 rounded-xl text-xl font-semibold"
              >
                Copy
              </button>

              <a
                href={result}
                rel="_blank"
                className="border p-2 px-4 rounded-xl text-xl font-semibold"
                onClick={() => toast.success("Downloading")}
              >
                Download
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
