import logo from "../../public/logo.jpg";


const Logo = () => {

    return (
        <div className=" w-40 mx-4">
                <img src={logo.src} alt="logo" className=" grow-0" />
            </div>
      );
}
 
export default Logo;