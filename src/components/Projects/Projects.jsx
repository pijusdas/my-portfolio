import project1 from '../../assets/projects/Screenshot (218).png'
import project2 from '../../assets/projects/Screenshot (219).png'
import project3 from '../../assets/projects/Screenshot (47).png'
const Projects = () => {
    return (
        <div>
            <h1 className=" text-center font-bold text-4xl my-20 text-[#42a7eb]">Projects</h1>
            <hr className='bg-[#42a7eb] h-1 ' />

            <div className=" mt-10">
                <div className="flex min-h-screen items-center justify-center ">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project1} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Nota Corda</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Empowering music enthusiasts with an immersive full-stack experience</p>
                                <div className=' flex justify-between gap-8'>
                                    <button className="rounded-full bg-sky-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-sky-400"><a href="https://nota-corda.web.app/">Live</a></button>


                                    <button className="rounded-full bg-sky-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-sky-400"><a href="https://github.com/pijusdas/Toytronic-client">Code</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project2} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Foody World</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Indulge in a mouthwatering feast of authentic Italian recipes on an immersive
                                    full-stack culinary adventure</p>
                                <div className=' flex justify-between gap-8'>
                                    <button className="rounded-full bg-sky-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-sky-400"><a href="https://foody-world-7515d.web.app/">Live</a></button>


                                    <button className="rounded-full bg-sky-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-sky-400"><a href="https://github.com/pijusdas/foody-world-client">Code</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project3} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Toytronics</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">The electronic toy marketplace website I developed provides a platform for
                                    buyers and sellers to connect, showcasing a wide range of electronic toys.</p>
                                <div className=' flex justify-between gap-8'>
                                    <button className="rounded-full bg-sky-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-sky-400"><a href="https://nota-corda.web.app/">Live</a></button>


                                    <button className="rounded-full bg-sky-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-sky-400"><a href="https://github.com/pijusdas/Toytronic-client">Code</a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;