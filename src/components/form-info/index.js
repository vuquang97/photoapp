import { useState } from "react";
import "./style.css";

const FormInfo = ({ onSubmit }) => {
  const [formValue, setFormValue] = useState({
    lastName: "",
    firstName: "",
    department: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormValue((val) => ({ ...val, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="form-title">CẬP NHẬT THÔNG TIN</div>
      <div className="form-content  mt-20">
        <input name="lastName" className="form-input" onChange={handleChange} />
        <input
          name="firstName"
          className="form-input"
          onChange={handleChange}
        />
        <select
          name="department"
          className="form-select mt-20"
          onChange={handleChange}
        >
          <option value="snp">snp</option>
          <option value="ic">ic</option>
        </select>
        <select
          name="role"
          className="form-select mt-20"
          onChange={handleChange}
        >
          <option value="snp1">snp1</option>
          <option value="ic1">ic1</option>
        </select>
        <div className="btn-update mt-20" onClick={() => onSubmit(formValue)}>
          Cập nhật
        </div>
      </div>
    </>
  );
};

export default FormInfo;
