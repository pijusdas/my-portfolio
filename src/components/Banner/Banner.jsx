import pdf from '../../../public/Web Developer Resume of Pijus Das (8).pdf'
import SocialLinks from '../Skills/Shared/SocialLinks';
const Banner = () => {
    return (
        <div className="  text-white lg:flex  justify-center items-center h-screen gap-4">
            <div>
                <h2 className=" text-2xl font-bold mb-4">Hello, I am <span className=' text-[#1D9BF0]'>Pijus Das</span></h2>
                <h1 className=" text-5xl font-bold">Front-End Web Developer</h1>
                <p className=" text-xl my-4 font-bold">Building beautiful websites with skillful front-end development.

                </p>
                <button className=' btn btn-outline rounded-full bg-sky-400 text-indigo-600 font-bold '><a href={pdf} download>Donload Resume</a></button>
            </div>
            <div >
               <div className='shadow-2xl shadow-sky-700'>
               <img className=' rounded-sm h-64  border-2 border-sky-500 ' src='https://i.ibb.co/vd2gVrZ/pijus.jpg' alt="" />
               </div>
                <SocialLinks/>
            </div>

        </div>
    );
};

export default Banner;