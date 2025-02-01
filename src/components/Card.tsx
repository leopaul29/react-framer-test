// Card.js
import { motion } from "framer-motion";

const Card = () => {
    return (
        <motion.div
            className="w-64 h-96 bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center"
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <h2 className="text-xl font-bold mt-4">Interactive Card</h2>
            <p className="text-gray-600 mt-2 text-center">
                Hover to see the animation!
            </p>
        </motion.div>
    );
};

export default Card;
