import Lottie from "lottie-react";
import contactss from '../../assets/lottie/contact.json'
import { useRef } from "react";
import emailjs from '@emailjs/browser';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Contact = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_agi9bcr', 'template_xm5ckcq', form.current, 'vcZ1rD9H-WWU4K3th')
            .then((result) => {
                console.log(result.text);
                form.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="contact" className=" pb-10">
            <h1 className=" text-center font-bold text-4xl my-20 text-[#42a7eb]">Contact</h1>
            <hr className='bg-[#42a7eb] h-1 ' />
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">

                <div className=" h-[400px] w-[400px]">
                    <Lottie loop={true} animationData={contactss}></Lottie>
                </div>
                <div  data-aos="fade-down-left" className="">
                    <div className="">
                        <form className=" flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input className=" focus:bg-indigo-900 rounded-2xl ps-6 py-3 border-2 border-sky-500 shadow-lg shadow-sky-400 bg-indigo-900 " type="text" name="user_name" />
                            <label>Email</label>
                            <input className=" rounded-2xl ps-6 py-3 border-2 border-sky-500 shadow-lg shadow-sky-400 bg-indigo-900 " type="email" name="user_email" />
                            <label>Message</label>
                            <textarea className=" text-white  rounded-2xl ps-6 py-3 border-2 border-sky-500 shadow-lg shadow-sky-400 bg-indigo-900 " name="message" />
                            <input className="shadow-sky-400 border-2 mt-4 border-sky-500 shadow-lg btn btn-outline bg-[#42a7eb] hover:bg-sky-600" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;