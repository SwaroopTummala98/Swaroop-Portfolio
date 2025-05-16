import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'
import React,{useState} from "react";


export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const serviceID = 'service_nykrnfh'
    const templateID = 'template_grk7gbk'
    const publicKey = 'Z7iJXxIjJlq6ZwaVh'
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(serviceID, templateID, e.target, publicKey).then((result)=>{
            alert('Message sent successfully');
            setFormData({name: "", email: "", message: ""})
        }).catch(()=>alert('Message not sent, please try again later'))
    }




    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 ">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get In Touch
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name} 
                        className="w-full bg-white/5 border border-whilte/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
                        placeholder="Name..."
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        
                    </div>
                    <div className="relative">
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        className="w-full bg-white/5 border border-whilte/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
                        placeholder="Email..."
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        
                    </div>
                    <div className="relative">
                        <textarea 
                        id="message" 
                        name="message" 
                        required
                        value={formData.message} 
                        rows={5}
                        className="w-full bg-white/5 border border-whilte/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
                        placeholder="Your Message..."
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        
                    </div>
                    <button type="submit" 
                    className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative  ">Send Message</button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
};