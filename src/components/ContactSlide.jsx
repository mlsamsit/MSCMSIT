import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sendEmail from '../lib/email';

function ContactSlide({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus({ ok: false, msg: 'Please provide your name, email and a message.' });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      await sendEmail({ name, email, message });
      setStatus({ ok: true, msg: 'Message sent. We will get back to you soon.' });
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus({ ok: false, msg: err.message || 'Failed to send message.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0.6 : 0 }}
        transition={{ duration: 0.2 }}
        className={`fixed inset-0 bg-black z-40 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{ display: isOpen ? 'block' : 'none' }}
        onClick={onClose}
      />

      {/* slide panel */}
      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl p-6 overflow-auto"
      >
        {/* header accent */}
        <div className="h-1 w-full rounded-t-md mb-4 bg-gradient-to-r from-transparent via-[#0078D4] to-transparent" />
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">Close</button>
        </div>

        <p className="text-gray-600 mb-4">Send us a message and we'll respond via email.</p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm text-gray-700">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your full name" className="mt-1 w-full border rounded-md p-2" />
          </div>

          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 w-full border rounded-md p-2" />
          </div>

          <div>
            <label className="block text-sm text-gray-700">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="mt-1 w-full border rounded-md p-2" />
          </div>

          <div className="flex items-center space-x-3">
            <button type="submit" className="bg-[#0078D4] hover:bg-blue-700 text-white px-4 py-2 rounded-md disabled:opacity-50" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
            <button type="button" onClick={onClose} className="px-3 py-2 rounded-md border">Cancel</button>
          </div>

          {status && (
            <div className={`p-3 rounded-md ${status.ok ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>{status.msg}</div>
          )}
        </form>
      </motion.aside>
    </>
  );
}

export default ContactSlide;
