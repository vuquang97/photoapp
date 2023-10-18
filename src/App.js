import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import FormInfo from "./components/form-info";
import UploadButton from "./components/upload-button";
import ImageResult from "./components/image-result";
import { useEffect, useRef, useState } from "react";
import { FacebookIcon, FacebookShareButton } from "react-share";

function App() {
  const [imageData, setImageData] = useState(null);
  const [formData, setFormData] = useState(null);
  

  const url = 'https://via.placeholder.com/150'

  // useEffect(() => {
  //   (function(d, s, id) {
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     console.log('xxxxccc111 --- ', d, s, id);

  //     console.log('xxxxccc --- ', js, fjs);
  //     if (
  //     d.getElementById(id)) return;
  //     js = d.createElement(s); js.id = id;
      
  //     js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      
  //     fjs.parentNode.insertBefore(js, fjs);
  //     }(document, 'script', 'facebook-jssdk'));
  // }, [])

  console.log('preview --- ', imageData);


  const handleSubmitImage = ({ imgUpload, preview }) => {
    setImageData({ imgUpload, preview });
  };

  const handleSubmitForm = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <Layout>
        {!formData && <FormInfo onSubmit={handleSubmitForm} />}
        {formData && !imageData ? (
          <UploadButton onSubmit={handleSubmitImage} />
        ) : (
          ""
        )}
        {imageData ? <ImageResult imageData={imageData} /> : ""}
      </Layout>
    </div>
  );
}

export default App;
