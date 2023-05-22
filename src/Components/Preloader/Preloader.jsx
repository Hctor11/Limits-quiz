import { useEffect } from "react";
import "../Preloader/Preloader.css";
import { ThreeDots } from "react-loader-spinner";
import { preLoaderAnimation } from "../../Animation";

const Preloader = () => {

  useEffect(()=>{
    preLoaderAnimation();
  },[])

  return (
    <div className="preloader-container">
      <ThreeDots className="preloader"
        height="50"
        width="50"
        radius="9"
        color="#fff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
            display: "flex",
            alignItems: "center", 
            justifyContent: "center",
            position: "relative",
            top: "50%",
        }}
        wrapperClassName="preloader"
        visible={true}
      />
    </div>
  );
};

export default Preloader;
