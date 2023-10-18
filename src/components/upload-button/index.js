import "./style.css";
import uploadIcon from "../../assets/images/icon-upload.svg";
import questionIcon from "../../assets/images/question.svg";
import arrowRightIcon from "../../assets/images/arrow-right.svg";

import { useEffect, useState } from "react";

const UploadButton = ({ onSubmit }) => {
  const [imgUpload, setimgUpload] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!imgUpload) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(imgUpload);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [imgUpload]);

  const onUpload = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setimgUpload(undefined);
      return;
    }

    setimgUpload(e.target.files[0]);
  };

  const imgPreview = (
    <div className="preview-section">
      <img
        src={preview}
        alt=""
        width={128}
        height={128}
        className="image-preview"
        style={{ fill: "#C66BC6", marginRight: '5%' }}
      />
      <img
        src={arrowRightIcon}
        alt=""
        className="arrow-right"
      />
      <div className="image-preview">
        <img
          src={questionIcon}
          alt=""
          className="question-icon"
          style={{ fill: "#C66BC6", marginLeft: '5%' }}
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="form-title">
        Gương mặt bạn phù hợp với trang phục truyền thống nào của Việt Nam
      </div>
      <input
        type="file"
        id="imgupload"
        style={{ display: "none" }}
        onChange={onUpload}
      />
      <label htmlFor="imgupload">
        <div className="upload-button mt-20">
          
          {preview ? imgPreview : <><img src={uploadIcon} alt="" />
          <div className=" bg-white">Tải lên ảnh chân dung rõ nét của bạn</div></>}
        </div>
      </label>

      <div
        className="btn-update mt-20"
        onClick={() => {
          if (imgUpload) {
            onSubmit({ imgUpload, preview })
          }
        }}
      >
        Thử ngay
      </div>
    </>
  );
};

export default UploadButton;