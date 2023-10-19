import "./style.css";
import uploadIcon from "../../assets/images/icon-upload.svg";
import questionIcon from "../../assets/images/question.svg";
import arrowRightIcon from "../../assets/images/arrow-right.svg";

import { useEffect, useState } from "react";

const MIME_TYPE = [
  "image/apng",
  "image/avif",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp",
];

const UploadButton = ({ onSubmit }) => {
  const [imgUpload, setimgUpload] = useState();
  const [preview, setPreview] = useState();
  const [error, setError] = useState(null);

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

  const onUpload = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setimgUpload(undefined);
      return;
    }

    const image = e.target.files[0];
    if (!MIME_TYPE.includes(image.type)) {
      setError("Tỉ Tỉ chỉ được upload ảnh thuiii T_T");
      return;
    } else {
      setError(null);
    }

    setimgUpload(image);
  };

  const imgPreview = (
    <div className="preview-section">
      <img
        src={preview}
        alt=""
        width={128}
        height={128}
        className="image-preview"
        style={{ fill: "#C66BC6", marginRight: "5%" }}
      />
      <img src={arrowRightIcon} alt="" className="arrow-right" />
      <div className="image-preview">
        <img
          src={questionIcon}
          alt=""
          className="question-icon"
          style={{ fill: "#C66BC6", marginLeft: "5%" }}
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="form-title">
        {preview
          ? "Sẵn sàng xuyên không"
          : "Gương mặt bạn phù hợp với trang phục truyền thống nào của Việt Nam"}
      </div>
      <input
        type="file"
        id="imgupload"
        style={{ display: "none" }}
        accept="image/*"
        onChange={onUpload}
      />
      <label htmlFor="imgupload">
        <div className="upload-button mt-20">
          {preview ? (
            imgPreview
          ) : (
            <>
              <img src={uploadIcon} alt="" />
              <div className=" bg-white">Tải chân dung ngọc nữ</div>
            </>
          )}
        </div>
      </label>
      {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}

      <div
        className="btn-update mt-20"
        onClick={() => {
          if (imgUpload) {
            onSubmit(imgUpload);
          }
        }}
      >
        Hô biến
      </div>
    </>
  );
};

export default UploadButton;
