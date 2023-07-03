import htmlimg from '../../assets/skills/html.svg'
import figmaimg from '../../assets/skills/figma.svg'
import gitimg from '../../assets/skills/git.svg'
import firebaseimg from '../../assets/skills/firebase.svg'
import tailwindimg from '../../assets/skills/tailwind.svg'
import vitejsimg from '../../assets/skills/vitejs.svg'
import reactimg from '../../assets/skills/react.svg'
import mongoDBimg from '../../assets/skills/mongoDB.svg'
import javascriptimg from '../../assets/skills/javascript.svg'
import cssimg from '../../assets/skills/css.svg'
import bootstrapimg from '../../assets/skills/bootstrap.svg'
import canvaimg from '../../assets/skills/canva.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Skills = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div id="skills" className=" h-full">
            <h1 className=" text-center font-bold text-4xl my-20 text-[#42a7eb]">Skills</h1>
            <hr className='bg-[#42a7eb] h-1' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>

                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={htmlimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>Html</p>
                    </div>
                </div>

                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={cssimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>CSS</p>
                    </div>
                </div>

                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={tailwindimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>Tailwind CSS</p>
                    </div>
                </div>

                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={bootstrapimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>Bootstrap</p>
                    </div>
                </div>

                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={javascriptimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>JavaScript</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={reactimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>React</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>Node Js</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src='https://cdn.worldvectorlogo.com/logos/express-5.svg' alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>Express Js</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={gitimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>Git</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={mongoDBimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>MongoDB</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={firebaseimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>Firebase</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={vitejsimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>Vite js</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={figmaimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>Figma</p>
                    </div>
                </div>
                <div data-aos="zoom-out-up" className=' rounded-xl shadow-xl flex justify-center items-center border-2 border-sky-700 shadow-sky-700  p-8'>
                    <div>
                    <img className=' h-40 w-40' src={canvaimg} alt="" />
                    <p className='mt-4 text-center text-lg font-bold'>Canva</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Skills;