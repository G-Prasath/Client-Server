import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FormData {
  username: string;
  email: string;
  phone: string;
  service: string;
}

const Form = () => {
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone: "",
    service: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      newErrors.username = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select an option";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setSubmitting(true);
        const response = await fetch(
          "https://email-server-aoiw.onrender.com/send-email",
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
    <>
      <div className="content sec-padding">
        <h6 className="uppercase text-center font-[700] text-3xl mb-5">
          Get in to Touch
        </h6>

        <p className="text-center mb-5">
          Talk to us about your needs and how we can provide the best solutions.
        </p>

        <div className="contact_form bg-light_white w-full flex items-center justify-center max-lg:flex-col p-5 max-md:py-10 rounded-t-lg">
          <div className="w-3/6 max-lg:w-full">
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <img
                src="/contact_form_img.jpg"
                alt="footer-photo"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="w-3/6 max-lg:w-full">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 p-5 max-md:p-0">
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
                  {errors.email && (
                    <p className="text-error_clr">{errors.email}</p>
                  )}
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
                  {errors.phone && (
                    <p className="text-error_clr">{errors.phone}</p>
                  )}
                </div>
                {/* select option */}

                <div className="my-5 max-md:mt-5">
                  <select
                    id="select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: "0.50rem",
                      width: "100%",
                      padding: "9px 2.5rem",
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
                </div>
                {errors.phone && (
                  <p className="text-error_clr">{errors.service}</p>
                )}

                <div className="text-center block">
                  <button
                    type="submit"
                    className="btn bg-primary text-white rounded-full max-md:rounded-lg w-1/4 p-2"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Send Now"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-light_white p-5 mt-5 flex max-lg:flex-col max-lg:py-10 rounded-b-lg">
          <div className="w-1/5 max-lg:w-full max-lg:mb-5">
            <div className="imgs w-[300px] max-lg:w-full rounded-lg">
              <Link to="#">
                <img
                  src="/location.jpg"
                  alt="laction - img"
                  className="w-full rounded-lg "
                />
              </Link>
            </div>
          </div>

          <div className="w-4/5 max-lg:w-full flex justify-center flex-col gap-5">
            <h6 className="font-[700] text-3xl uppercase text-center">
              Our Location
            </h6>
            <div className="flex items-center gap-10 justify-center">
              <img
                src="/map-icon.png"
                alt="icon"
                className="w-[50px] max-sm:hidden"
              />
              <div>
                <p className="mb-3">
                  Periya Koladi Rd, Konrajakuppam, Ayappakkam, Chennai-600 095
                  Tamil Nadu, India.
                </p>
                <Link
                  to="#"
                  className="text-[blue] underline underline-offset-1"
                >
                  Periya Koladi Rd, Konrajakuppam, Ayappakkam, Chennai-600 095
                  Tamil Nadu, India.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
