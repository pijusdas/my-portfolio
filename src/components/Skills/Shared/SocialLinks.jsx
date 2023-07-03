import { FaFacebook,FaGithub,FaTwitter } from "react-icons/fa";
const SocialLinks = () => {
    return (
        <div className=" mt-12 flex gap-5 text-center">
          
          <a className="text-4xl text-sky-600"  href="https://web.facebook.com/pijus.das.9887117/" target="blank"><FaFacebook/></a>
          <a className="text-4xl text-sky-600" href="https://web.facebook.com/pijus.das.9887117/" target="blank"> <FaGithub/></a>
          <a className="text-4xl text-sky-600" href="https://web.facebook.com/pijus.das.9887117/" target="blank"><FaTwitter/></a>
        </div>
    );
};

export default SocialLinks;