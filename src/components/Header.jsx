import { motion } from "framer-motion";
const Header = () => {
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

            </div>
        </div>

    </header>
  );
};

export default Header;