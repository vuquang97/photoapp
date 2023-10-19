import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import FormInfo from "./components/form-info";
import UploadButton from "./components/upload-button";
import ImageResult from "./components/image-result";
import { useEffect, useRef, useState } from "react";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { postData } from "./utils";
import iconLoading from './assets/images/icon_loading.gif'

function App() {
  const [imageSelect, setImageSelect] = useState(null);
  const [formData, setFormData] = useState(null);
  const [imgResult, setImgResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  

  const handleSubmitImage = async (imgUpload) => {
    setImageSelect(imgUpload);
    const formData = new FormData()
    formData.append('image', imgUpload)
    setIsLoading(true)
    const res = await postData(formData)

    setImgResult({
      name: res?.data?.name_clothing,
      image: res?.data?.image
    })
    setIsLoading(false)
  };

  const handleSubmitForm = (data) => {
    setFormData(data);
  };


  return (
    <div className="App">
      <Layout imgResult={imgResult?.name}>
        {!formData && <FormInfo onSubmit={handleSubmitForm} />}
        {formData && !imageSelect ||isLoading ? (
          <UploadButton onSubmit={handleSubmitImage} />
        ) : (
          ""
        )}
        {isLoading&& <div className="icon-loading">
          <img src={iconLoading} alt=""  />
          Đang xuyên không..... 99%
          </div>} 
        {imgResult?.name ? <ImageResult formData={formData} imgResult={imgResult} imageSelect={imageSelect} /> : ""}
      </Layout>
    </div>
  );
}

export default App;
