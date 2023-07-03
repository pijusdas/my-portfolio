import aboutmelottie from '../../assets/lottie/coding.json'
import Lottie from "lottie-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const AbotMe = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div id='aboutme' className='mt-24'>
            <h1 className=" text-center font-bold text-4xl my-20 text-[#42a7eb]">Who Am I</h1>
            <hr className='bg-[#42a7eb] h-1 ' />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <p className=' text-lg'>
                        My name is PIJUS DAS. Im a web designer and developer based in Dhaka, Bangladesh.

                        I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. Love almost all the stacks of Software Engineering. My current stack includes Nodejs, Nestjs, React, NextJs, Redux, Bootstrap, Ant Design, Material UI, MongoDB, Mysql, PostgreSQL, Firebase, Cloudinary, etc.
                    </p>
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className='h-96 w-96'>
                    <Lottie loop={true} animationData={aboutmelottie}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default AbotMe;