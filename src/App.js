import { useState } from "react";
import "./App.css";
import FormInfo from "./components/form-info";
import ImageResult from "./components/image-result";
import Layout from "./components/layout";
import UploadButton from "./components/upload-button";
import { postData } from "./utils";

function App() {
  const [imageSelect, setImageSelect] = useState(null);
  const [formData, setFormData] = useState(null);
  const [imgResult, setImgResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitImage = async (imgUpload) => {
    setImageSelect(imgUpload);
    const formData = new FormData();
    formData.append("image", imgUpload);
    setIsLoading(true);
    const res = await postData(formData);

    setImgResult({
      name: res?.data?.name_clothing,
      image: res?.data?.image,
    });
    setIsLoading(false);
  };

  const handleSubmitForm = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <Layout imgResult={imgResult?.name} isLoading={isLoading}>
        {!formData && <FormInfo onSubmit={handleSubmitForm} />}
        {(formData && !imageSelect) || isLoading ? (
          <UploadButton onSubmit={handleSubmitImage} />
        ) : (
          ""
        )}
        {imgResult?.name ? (
          <ImageResult
            formData={formData}
            imgResult={imgResult}
            imageSelect={imageSelect}
          />
        ) : (
          ""
        )}
      </Layout>
    </div>
  );
}

export default App;
