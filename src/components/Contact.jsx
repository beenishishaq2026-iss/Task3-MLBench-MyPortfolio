import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");
  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Something went wrong");
      setLoading(false);
      return;
    }

    setSuccess("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (err) {
    setError("Server error. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" className="relative px-6 md:px-12 py-8 md:py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Get In <span className="text-green-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-sm">
          If you like my work or any queries about my work. Just click on details and press the button!
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-800/50 via-green-950 to-[#0a0f0d] border-[3px] border-green-400 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-5 pb-5 border-b border-green-700/30">
          <div className="flex items-center gap-3">
            <Mail className="text-green-500" size={20} />
            <p className="text-gray-300 text-sm">beenish.ishaq@example.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-green-500" size={20} />
            <p className="text-gray-300 text-sm">+92 300 0000000</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-green-500" size={20} />
            <p className="text-gray-300 text-sm">Lahore, Pakistan</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#0a0f0d] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-1 block">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#0a0f0d] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full bg-[#0a0f0d] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
              required
            ></textarea>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}
{success && <p className="text-green-400 text-sm">{success}</p>}

<button
  type="submit"
  disabled={loading}
  className="bg-green-500 hover:bg-green-600 text-black font-medium py-2.5 rounded-full mt-2 transition-colors flex items-center justify-center gap-2 self-start px-8 disabled:opacity-60"
>
  <Send size={18} />
  {loading ? "Sending..." : "Send Message"}
</button>

        </form>
      </div>
    </section>
  );
}

export default Contact;