import { motion } from "framer-motion";

const DownloadResume = () => {
  const resumeUrl = "/resume/Resume.pdf";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <motion.a
        href={resumeUrl}
        download="AkshMohan_Resume.pdf"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          textDecoration: "none",
          color: "#fff",
          backgroundColor: "#007BFF",
          padding: "12px 20px",
          borderRadius: "5px",
          fontWeight: "bold",
          display: "inline-block",
          fontSize: "16px",
          marginTop: "20px",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Download My Resume
      </motion.a>
    </motion.div>
  );
};

export default DownloadResume;