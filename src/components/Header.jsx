import { motion } from "framer-motion";
const Header = () => {
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
        </div>

    </header>
  );
};

export default Header;