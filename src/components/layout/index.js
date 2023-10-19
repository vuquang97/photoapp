import "./style.css";
import iconLoading from "../../assets/images/icon_loading.gif";
const Layout = ({ children, imgResult, isLoading }) => {
  return (
    <div className="layout-container">
      <div className="session-left"></div>
      <div className="session-right">
        <div className="session-form">
          <div className="session-form-border">
            <div
              className={`session-form-title ${
                imgResult ? "pt-10p" : "pt-30p"
              } `}
            >
              <p>Chúc Mừng</p>
              <p>Ngày Phụ Nữ Việt Nam 20/10</p>
              <p>Minigame Ngọc Nữ Xuyên Không</p>
            </div>
            {/* {children} */}
            <div className="session-form-content">
              <div>
                {children}
                <div className="form-overlay"></div>
                {isLoading && (
                  <div className="form-overlay icon-loading ">
                    <img src={iconLoading} height={170} alt="" />
                    Đang xuyên không... 99%
                  </div>
                )}
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
