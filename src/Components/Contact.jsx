import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => toast.success("✅ Message sent successfully!"),
        () => toast.error("❌ Failed to send message. Please try again.")
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#214559] to-[#286281] text-white py-16 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center"
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#1e293b] rounded-xl p-6 shadow-lg grid gap-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered bg-[#0f172a] text-white w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered bg-[#0f172a] text-white w-full"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered bg-[#0f172a] text-white h-32 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl text-white font-semibold"
          >
            Send Message
          </button>
        </motion.form>

        <div className="mt-10 text-center flex flex-col items-center gap-4">
          <p className="text-gray-400">Or reach me directly:</p>
          <div className="flex gap-6 text-cyan-400 text-xl">
            <a
              href="mailto:dev.rakibhasan1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.facebook.com/md.rakib.hasan.0001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/Rakib-Hasan1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rakib-hasan-227ba1353"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
