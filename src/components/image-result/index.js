import { useEffect, useRef } from "react";
import { FacebookShareButton } from "react-share";
import "./style.css";

const ImageResult = ({ imageData }) => {

  const shareButton = useRef(null);

  const handleDownLoad = (blob) => {
    console.log("blob --- ", blob);
    // Create a temporary anchor element
    // const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blob;

    // Extract the filename from the URL
    const filename = "image";

    // Set the download attribute and filename
    link.setAttribute("download", filename);
    document.body.appendChild(link);

    // Simulate a click on the anchor element to start the download
    link.click();

    // Clean up the temporary anchor element
    link.parentNode.removeChild(link);
  };
  

  return (
    <>
      <div className="form-title">Kết quả</div>
      <div>BẠN LÀ NHÂN VẬT ABC XYZ, THỜI NHÀ XXX .............</div>
      
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="mt20"
      >
        <img
          src={imageData?.preview}
          alt=""
          width={200}
          height={250}
          style={{ borderRadius: 5 }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="btn-update mt-20"
          style={{ width: "40%" }}
          onClick={() => handleDownLoad(imageData?.preview)}
        >
          Tải ảnh
        </div>
        <FacebookShareButton
         className="btn-update mt-20"
         style={{ background: "#C66BC6", width: "40%" }}
      ref={shareButton}
      // Disable calling the dialog if we don't have a url yet.
      openShareDialogOnClick={true}
      url={'https://unsplash.com/photos/tn-UC3YKRzU'}
      onClick={() => {shareButton.current?.click()}}
    >
      <div
         
        >
          Chia sẻ ngay
        </div>
    </FacebookShareButton>

      </div>
    </>
  );
};

export default ImageResult;
