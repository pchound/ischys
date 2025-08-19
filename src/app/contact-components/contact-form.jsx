"use client";
import { sendEmail } from "./actions";
import { useState } from "react";

// Format to "(123) 456-7890" as the user types
const formatPhoneUS = (raw) => {
  const digits = (raw || "").replace(/\D/g, "").slice(0, 10);
  const p1 = digits.slice(0, 3);
  const p2 = digits.slice(3, 6);
  const p3 = digits.slice(6, 10);
  if (digits.length > 6) return `(${p1}) ${p2}-${p3}`;
  if (digits.length > 3) return `(${p1}) ${p2}`;
  if (digits.length > 0) return `(${p1}`;
  return "";
};

export default function FormSection() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ success: "", message: "" });
  const [isLoading, setIsloading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    // Special handling for phone to apply live formatting
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: formatPhoneUS(value) }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    setStatus({});

    // Normalize phone to digits-only before sending
    const normalized = {
      ...formData,
      phone: (formData.phone || "").replace(/\D/g, ""),
    };

    try {
      const result = await sendEmail(normalized);
      if (result?.success) {
        setStatus({ success: true, message: "Email sent successfully!" });
        setFormData({ fname: "", lname: "", phone: "", email: "", message: "" });
      } else {
        setStatus({ success: false, message: result?.message || "Failed to send message" });
      }
    } catch (error) {
      setStatus({ success: false, message: "An unexpected error occurred" });
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="md:max-w-8xl mx-auto items-center">
      <h1
        className="text-[#27201a] text-center text-3xl pb-5"
        style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 300 }}
      >
        General Inquiries
      </h1>

      <form
        method="POST"
        onSubmit={handleSubmit}
        className="text-amber-950 w-full max-w-xl mx-auto px-4"
        noValidate
      >
        {/* First and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">First Name</label>
            <input
              type="text"
              name="fname"
              onChange={handleInput}
              required
              value={formData.fname}
              className="bg-[#fff2df] rounded-2xl p-2 w-full border border-transparent focus:border-[#59433b] focus:ring-2 focus:ring-[#59433b] outline-none"
            />
          </div>
          <div>
            <label className="block mb-1">Last Name</label>
            <input
              type="text"
              name="lname"
              onChange={handleInput}
              required
              value={formData.lname}
              className="bg-[#fff2df] rounded-2xl p-2 w-full border border-transparent focus:border-[#59433b] focus:ring-2 focus:ring-[#59433b] outline-none"
            />
          </div>
        </div>

        {/* Phone (live formatted) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full max-w-md">
              <label>Phone<br /></label>
              <input
                type="tel"
                name="phone"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleInput}
                required
                inputMode="numeric"
                autoComplete="tel"
                maxLength={14} // "(123) 456-7890"
                pattern="\(\d{3}\) \d{3}-\d{4}" // optional HTML validation for mask
                className="bg-[#fff2df] rounded-2xl p-2 w-full border border-transparent focus:border-[#59433b] focus:ring-2 focus:ring-[#59433b] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full md:max-w-md">
              <label>Email<br /></label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                required
                value={formData.email}
                className="bg-[#fff2df] rounded-2xl p-2 w-full border border-transparent focus:border-[#59433b] focus:ring-2 focus:ring-[#59433b] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full max-w-xl">
              <label>Message<br /></label>
              <textarea
                name="message"
                onChange={handleInput}
                required
                value={formData.message}
                className="bg-[#fff2df] rounded-2xl p-2 w-full h-40 border border-transparent focus:border-[#59433b] focus:ring-2 focus:ring-[#59433b] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#bda28c] rounded-2xl px-6 py-3 cursor-pointer hover:bg-[#8b6d55] text-white w-full max-w-l mt-4"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>

        {status.message && (
          <div
            className={`mt-4 p-3 rounded-md ${
              status.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}
