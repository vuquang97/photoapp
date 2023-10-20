import "./style.css";

const ImageResult = ({ formData = {}, imgResult = {}, imageSelect }) => {
  const image = `data:image/jpeg;base64,${
    imgResult?.image
  }`;

  return (
    <>
      <div className="form-title">Kết quả</div>
      <div className="result-detail">
        Chúc mừng tỉ tỉ {formData.lastName} {formData.firstName} đã xuyên không
        thành công cùng bộ trang phục {imgResult.name}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={image}
          alt=""
          className="img-result"
          style={{ borderRadius: 5 }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a
          href={image}
          download
          className="btn-update mt-20"
          style={{ textDecoration: "none" }}
        >
          Tải ảnh
        </a>
        {/* <FacebookShareButton
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
    </FacebookShareButton> */}
      </div>
    </>
  );
};

export default ImageResult;
