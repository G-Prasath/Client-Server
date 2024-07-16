import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface FormData {
  username: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  service: string;
}

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    service: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};

    if (!formData.username.trim()) {
      newErrors.username = "Name required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email  required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Number required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City Required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Enter your message ";
    }
    if (!formData.service.trim()) {
      newErrors.service = "Please select an option";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setSubmitting(true);
        const response = await fetch(
          "http://localhost:5000/api/query-form",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          setFormData({
            username: "",
            email: "",
            phone: "",
            city: "",
            message: "",
            service: "",
          });
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setSubmitting(false);
      }
    }
  };
  return (
    <div className="flex w-full max-md:flex-col sec-padding bg-light_white">
      <div className="w-full max-md:order-2">
        <h2 className="text-center font-bold text-[30px] uppercase">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 p-5 gap-5 max-md:p-0">
            <div className="mb-5 max-md:mb-1">
              <label className="text-white"></label>
              <input
                id="fName"
                type="text"
                className="w-full rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                placeholder="Name"
                name="username"
                autoComplete="off"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="text-error_clr">{errors.username}</p>
              )}
            </div>

            <div className="mb-5 max-md:mb-1">
              <label className="text-white"></label>
              <input
                id="yEmail"
                type="email"
                className="w-full h-10 rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                placeholder="Email"
                name="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-error_clr">{errors.email}</p>}
            </div>

            <div className="mb-5 max-md:mb-1">
              <label className="text-white"></label>
              <input
                id="phNumber"
                type="text"
                className="w-full h-10 rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                placeholder="Contact Number"
                name="phone"
                autoComplete="off"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-error_clr">{errors.phone}</p>}
            </div>
            <div className="mb-5 max-md:mb-1">
              <label className="text-white"></label>
              <input
                id="cCity"
                type="text"
                className="w-full rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                placeholder="City"
                name="city"
                autoComplete="off"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="text-error_clr">{errors.city}</p>
              )}
            </div>
            <div>
              <label className="text-white"></label>

              <textarea
                id="mMessage"
                name="message"
                placeholder="Message"
                rows={1}
                autoComplete="off"
                className="w-full h-10 rounded-lg p-3 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.username && (
                <p className="text-error_clr">{errors.message}</p>
              )}
            </div>
            {/* select option */}

            <div className="my-2 max-md:mt-5">
              <select
                id="select"
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.50rem",
                  width: "100%",
                  padding: "12px 2.5rem",
                }}
              >
                <option value="">Select Service*</option>
                <option value="2 Post Hydraulic System">
                  2 Post Hydraulic System
                </option>
                <option value="4 Post Hydraulic System">
                  4 Post Hydraulic System
                </option>
                <option value="Puzzle Parking">Puzzle Parking</option>
                <option value="Shuttle Stacker Parking">
                  Shuttle Stacked Parking
                </option>
                <option value="Tower Parking">Tower Parking</option>
                <option value="Multilevel Stacked Rotary Parking">
                  Multilevel Stacked Rotary Parking
                </option>
                <option value="Bike Parking">Bike Parking</option>
                <option value="Automated Storage And Retrieval System">
                  Automated Storage And Retrieval System
                </option>
                <option value="Elevated Car Lift">Car Lift</option>
              </select>
              {errors.phone && (
                <p className="text-error_clr">{errors.service}</p>
              )}
            </div>
          </div>
          <div className="text-center block mt-5">
            <button
              type="submit"
              className="btn bg-primary text-white rounded-full max-md:rounded-lg w-1/4 p-2"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Now"}
            </button>
          </div>
        </form>
      </div>
      <div className="w-full max-md:mb-10">
        <LazyLoadImage
          className="rounded-3xl max-lg:mt-20 w-full h-full"
          src="/home/contact.webp"
          alt="Contact"
          effect="blur"
        />
      </div>
    </div>
  );
};

export default ContactForm;
