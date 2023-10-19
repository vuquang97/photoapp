import { useState } from "react";
import "./style.css";

const FormInfo = ({ onSubmit }) => {
  const [formValue, setFormValue] = useState({
    lastName: "",
    firstName: "",
  });

  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormValue((val) => ({ ...val, [e.target.name]: e.target.value }));
    setIsError(false)
  };

  const handleSubmit = () => {
    if (!formValue.lastName || !formValue.firstName) {
      setIsError(true)
      return 
    }
    onSubmit(formValue)
  }

  return (
    <>
      <div className="form-title">TIỂU SỬ</div>
      <div className="form-content  mt-20">
        <input 
        name="lastName" 
        placeholder="Họ"
        value={formValue.lastName}
         className="form-input" onChange={handleChange} 
         required={true}
         />
        <input
          name="firstName"
          className="form-input"
          placeholder="Tên"
        value={formValue.firstName}
          onChange={handleChange}
        />
        {/* <select
          name="department"
          className="form-select mt-20"
          placeholder="Đơn vị"
        value={formValue.department}
          onChange={handleChange}
        >
          <option value="">--- Đơn vị ---</option>
          <option value="snp">snp</option>
          <option value="ic">ic</option>
        </select> */}
        <div style={{color: 'red', marginTop:10}}>
        {isError && "Vui lòng nhập hết thông tin"}
        </div>
        <div className="btn-update mt-20" onClick={() => handleSubmit()}>
          Cập nhật
        </div>
      </div>
    </>
  );
};

export default FormInfo;
