import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
      e.preventDefault();
      setStatus('sending');

      // Replace with actual EmailJS credentials
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
            setStatus('success');
            formRef.current.reset();
            setTimeout(() => setStatus(null), 5000);
        }, (error) => {
            console.log(error.text);
            setStatus('error');
            setTimeout(() => setStatus(null), 5000);
        });
    };

    return (
      <section id="contact" className="section-padding bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Get In Touch</h2>
            <div className="title-underline"></div>
            <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-100 transition-all group">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Email Me</h4>
                  <p className="text-slate-600">sameer.arjun@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-100 transition-all group">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Call Me</h4>
                  <p className="text-slate-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-100 transition-all group">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">Your City, State, India</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border-white shadow-2xl relative"
            >
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Your Name</label>
                    <input
                      name="user_name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Your Email</label>
                    <input
                      name="user_email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me more about your project..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100 outline-none transition-all placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-4 rounded-2xl font-bold text-lg text-white shadow-xl flex items-center justify-center gap-3 transition-all ${status === 'sending' ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700 shadow-primary-200 active:scale-[0.98]'}`}
                >
                  {status === 'sending' ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>

              {/* Status Notifications */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-20 left-0 right-0 bg-emerald-500 text-white p-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg"
                  >
                    <CheckCircle size={20} />
                    Message Sent Successfully!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-20 left-0 right-0 bg-rose-500 text-white p-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg"
                  >
                    <AlertCircle size={20} />
                    Oops! Something went wrong.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default Contact;
