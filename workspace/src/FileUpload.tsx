import React, { ChangeEvent, useState } from "react";
import ky from "ky";
import { useMutation } from "@tanstack/react-query";

export default function FileUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  // note:
  //  an alternative would be to set the actual
  //  progress object here instead of a prebuilt string,
  //  and build the string while rendering the component
  const [progress, setProgress] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    // note: using a file input field a user could select more than
    //  one file, but for simplicity we assume that the user only
    //  has selected excactly one (or none)
    if (files?.length) {
      setFile(files[0]);
    } else {
      setFile(null);
    }
  };

  const fileUploadMutation = useMutation({
    async mutationFn() {
      if (file === null) {
        // user has no file selected
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      // note this part would differ with axios:
      const response = await ky.post("http://localhost:7100/upload", {
        // note:
        //  use 'body' here instead of 'json'
        //    using 'body' will automatically set the correct
        //    multipart-form-data header
        //
        body: formData,
        onDownloadProgress: progress => {
          // note:
          // in my tests I only receive two evens here:
          //   progress 0% and progress 100%
          // not sure if that is a bug in my implementation here,
          //   in ky or in my backend
          console.log("ON PROGRESS", progress);
          setProgress(
            `Percent: ${progress.percent * 100}%, transfered: ${progress.transferredBytes} bytes of ${progress.totalBytes} bytes`
          );
        }
      });
      return response.json;
    }
  });

  const handleSave = () => {
    fileUploadMutation.mutate();
  };

  return (
    <div>
      <h2>Upload File</h2>
      <div>
        <input type="file" name="file" onChange={handleFileChange} required />
        <button onClick={handleSave}>Upload</button>
      </div>
      <p>{progress}</p>
      {fileUploadMutation.isSuccess && <p>File upload success!</p>}
      {fileUploadMutation.isError && <p>File upload failed!</p>}
    </div>
  );
}
