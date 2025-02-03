import React from 'react'
import Card from '../components/Card'
import { motion } from "framer-motion";

function Home() {
    return (
        <motion.div className="box" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Card />
            <Card />
            <Card />
            <Card />
        </motion.div>
    )
}

export default Home
