import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    // states decleration
    const [isOpen, setIsOpen] = useState(false);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [contactFormError, setContactFormError] = useState('');

    // function for toggling mobile menu
    const toggleMenu = () => setIsOpen(!isOpen);

    // functions for contact form open
    const openContactForm = () => setIsContactFormOpen(true);

    // function for contact form close
    const closeContactForm = () => setIsContactFormOpen(false);

    // function to close contact form on outside click
    const closeContactFormOnOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            closeContactForm();
        }   
    };

    // function to handle contact form submission
    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., send data to backend or email)
    };

    // Listed nav items in an array
    const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header className=" absolute w-full z-50 transition-all duration-300">
        <div className=" container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
            {/* logo */}
            <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
                type: 'spring', 
                stiffness: 100, 
                damping: 25,
                delay: 0.3,
                duration: 1.2

            }}
            className=" flex items-center">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100
                flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
                    C
                </div>
                <span className=" font-bold text-xl bg-gradient-to-r from-gray-500 to-gray-100 
                bg-clip-text text-transparent">
                    Chandrasekaran
                </span>
            </motion.div>
            {/* nav */}
            <nav className=" lg:flex hidden space-x-8">
                {
                    navItems.map((item, index) => (
                        <motion.a 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 20,
                            delay: 0.7 + index * 0.2,
                        }}
                        key={index}
                        href={`#`}
                        className=" relative text-gray-800 dark:text-gray-200 hover:violet-600 
                        dark:hover:text-violet-400 transition-colors duration-300 font-medium group">
                            {item}
                            <span className=" absolute left-0 bottom-0 w-0 h-0.5 bg-violet-600 
                            dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))
                }
            </nav>

            {/* social icons */}
            <div className=" md:flex hidden items-center space-x-4">
                <motion.a 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 1.3,
                    duration: 0.8
                }}
                className=" text-gray-700 dark:text-gray-300 hover:text-violet-600 
                hover:dark:text-violet-300 transition-colors duration-300" 
                href="https://github.com/chankaran2996" target="_blank">
                    <FiGithub className=" w-5 h-5"/>
                </motion.a>

                <motion.a 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 1.3,
                    duration: 0.8
                }}
                className=" text-gray-700 dark:text-gray-300 hover:text-violet-600 
                hover:dark:text-violet-300 transition-colors duration-300" 
                href="https://www.linkedin.com/in/chandrasekaran-e-a5b58016a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank">
                    <FiLinkedin className=" w-5 h-5"/>
                </motion.a>

                <motion.a 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 1.3,
                    duration: 0.8
                }}
                className=" text-gray-700 dark:text-gray-300 hover:text-violet-600 
                hover:dark:text-violet-300 transition-colors duration-300" 
                href="https://wa.me/918220345388" target="_blank">
                    <FaWhatsapp className=" w-5 h-5"/>
                </motion.a>

                {/* hire me  */}
                <motion.button 
                onClick={openContactForm}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 1.6,
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                }}
                className=" ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 
                text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white
                transition-all duration-500">
                    Hire Me
                </motion.button>
            </div>

            {/* mobile menu button */}
            <div className=" md:hidden flex items-center">
                <motion.button 
                whileTap={ {scale: 0.7}}
                onClick={toggleMenu}
                className=" text-gray-300 hover:text-violet-600"
                >
                    { 
                        isOpen ? <FiX className="h-6 w-6"/> : <FiMenu className="h-6 w-6"/>
                    }
                </motion.button>
            </div>
        </div>

        {/* mobile menu */}
        <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={ {
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
            transition: { duration: 0.5, ease: "easeInOut" }

        }}
        className=" md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5">
            <nav className="flex flex-col space-y-3">
                {
                    navItems.map((item, index) => (
                        <a 
                        onClick={toggleMenu}
                        key={index}
                        className=" text-gray-300 hover:text-violet-600 font-medium"
                        href="#"
                        >
                            {item}
                        </a>
                    ))
                }
            </nav>

            <div className=" pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className=" flex space-x-4">
                    <a href="https://github.com/chankaran2996" target="_blank">
                        <FiGithub className=" w-5 h-5 text-gray-300 hover:text-violet-600"/>
                    </a>
                    <a href="https://www.linkedin.com/in/chandrasekaran-e-a5b58016a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                        <FiLinkedin className=" w-5 h-5 text-gray-300 hover:text-violet-600"/>
                    </a>
                    <a href="https://wa.me/918220345388" target="_blank">
                        <FaWhatsapp className=" w-5 h-5 text-gray-300 hover:text-violet-600"/>
                    </a>
                </div>
                <button 
                onClick={ () => {
                    toggleMenu();
                    openContactForm();
                }}
                className=" mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600
                 to-violet-400 font-bold">
                    Contact Me
                </button>
            </div>
        </motion.div>
        
        {/* Contact form */}
        <AnimatePresence>
            {
                isContactFormOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    onClick={closeContactFormOnOutsideClick}
                    className=" fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    >
                        <motion.div 
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                        transition={{ 
                            type: 'spring', 
                            stiffness: 200, 
                            damping: 35,
                            duration: 0.8
                        }}
                        className=" bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6">
                            <div className=" flex justify-between items-center mb-4">
                                <h1 className=" text-2xl font-bold text-gray-300">
                                    Get in Touch
                                </h1>
                                <button>
                                    <FiX 
                                    onClick={closeContactForm}
                                    className=" w-5 h-5 text-gray-300 hover:text-red-700"/>
                                </button>
                            </div>
                            {/* Form */}
                            <form className="space-y-4" onSubmit={handleContactFormSubmit}>
                                <div>
                                    <label className=" block text-sm font-medium text-gray-300 mb-1">
                                        Name
                                    </label>
                                    <input 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className=" w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                                    focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                                    />
                                </div>
                                <div>
                                    <label className=" block text-sm font-medium text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                    className=" w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                                    focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                                    />
                                </div>
                                <div>
                                    <label className=" block text-sm font-medium text-gray-300 mb-1">
                                        Phone Number
                                    </label>
                                    <input 
                                    type="text" 
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Your Phone Number"
                                    className=" w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                                    focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                                    />
                                </div>
                                <div>
                                    <label className=" block text-sm font-medium text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Kindly leave your message here..."
                                    className=" w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                                    focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                                    />
                                </div>
                                {contactFormError && (
                                    <p className=" text-red-600 text-sm">
                                        {contactFormError}
                                    </p>
                                )}
                                <motion.button 
                                whileHover={{ scale: 1.03}}
                                whileTap={{ scale: 0.9}}
                                type="submit"
                                className=" w-full px-4 py-2 bg-gradient-to-r from-violet-600
                                to-violet-400 hover:from-violet-700 hover:to-violet-700 transition-all
                                duration-300 font-bold rounded-lg shadow-md hover:shadow-lg 
                                hover:shadow-violet-600/50">
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                    </motion.div>
                )
            }
        </AnimatePresence>
    </header>
  );
};

export default Header;