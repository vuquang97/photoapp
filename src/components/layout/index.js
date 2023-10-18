import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="session-left"></div>
      <div className="session-right">
        <div className="session-form">
          <div className="session-form-border">
            <div className="session-form-title">
              <p>Chúc Mừng</p>
              <p>Ngày Phụ Nữ Việt Nam 20/10</p>
              <p>Minigame Ngọc Nữ Xuyên Không</p>
            </div>
            {/* {children} */}
            <div className="session-form-content">
              <div>
                {children}
                <div className="form-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bottom"></div>
    </div>
  );
};
export default Layout;
