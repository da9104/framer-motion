import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
     <motion.div 
     className="title"
     initial={{ y: -250 }}
     animate={{ y: -10 }}
     >
        <h1>Framer</h1>
      </motion.div>
    </header>
  );
}

export default Header;