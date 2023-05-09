import React, { ChangeEvent, FormEvent } from "react";
import { IoFileTrayOutline } from "react-icons/io5";
import classes from "./Upload.module.css";
type UploadProps = {
  className: string;
};

const Upload = ({ className }: UploadProps) => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const uploadClasses = `${classes.upload}${className ? ` ${className}` : ""}`;

  const selectFileHandler = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files ? event.target.files[0] : null;
    // props.handleFile(fileUploaded);
  };

  return (
    <section className={uploadClasses} onClick={selectFileHandler}>
      <div className={classes["upload-content"]}>
        <input type="file" ref={hiddenFileInput} accept=".pdf" />
        <div className={classes["upload-drop-pdf"]}>
          <IoFileTrayOutline className={classes.icon} />
          <h3 className={classes.label}>Drop PDF Here</h3>
        </div>
        <div className={classes["upload-actions"]}>
          <div className={classes["upload-actions__browse"]}>
            Browse my Computer
          </div>
          <div className={classes["upload-actions__options"]}>
            <span>From URL</span>
            <span>Find a PDF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upload;
