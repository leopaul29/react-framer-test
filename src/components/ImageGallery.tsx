import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://placehold.co/300",
    "https://placehold.co/300",
];

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="flex flex-wrap justify-center items-center gap-4">
            {images.map((src, index) => (
                <motion.img
                    key={index}
                    src={src}
                    alt={`Gallery Image ${index}`}
                    className="w-32 h-32 object-cover cursor-pointer rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedImage(src)}
                    layoutId={`image-${index}`}
                />
            ))}

            {/* Overlay and Expanded Image */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)} // Close on click outside
                    >
                        <motion.img
                            src={selectedImage}
                            className="w-auto h-auto max-w-screen-md max-h-screen rounded-lg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            layoutId={`image-${images.indexOf(selectedImage)}`}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageGallery;
