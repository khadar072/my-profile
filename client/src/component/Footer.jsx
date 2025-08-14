import React from 'react'
import { asserts } from '../assets/assets'

const Footer = () => {
    const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "Best Services", "Offers & Deals", "Contact Us", "FAQs"],
    },
    {
      title: "Need Help?",
      links: [
        "Appointment Information",
        "Return & Refund Policy",
        "Payment Methods",
        "Track your Appointment",
        "Contact Us",
      ],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"],
    },
  ];
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32  border-t border-blue-200 mt-10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <div data-aos="fade-up"  className="flex gap-1.5">
          <img
          
            className="w-14 h-14 rounded-full"
            src={asserts.profile1}
            alt="dummyLogoColored"
          />
          <div className="relative z-0 text-blue-500">
          <p className="font-semibold pt-1">Best</p>
          <p className=" absolute top-5 font-semibold">Developer</p>
        </div>
          </div>
          <p data-aos="fade-up"  className="max-w-[410px] mt-6">
            Have questions or need assistance? We're here to help! Feel free to
            reach out to us anytime, and we'll get back to you as soon as
            possible.?
          </p>
          <div data-aos="fade-up"  class="flex items-center gap-4 mt-2">
            <input class="py-2 px-3 w-full outline-none focus:border-blue-500/60 transition max-w-64 border border-gray-500/30 rounded-md" type="text" placeholder="Enter you email"/>
            <button class="bg-blue-500 hover:bg-blue-600 transition-all px-6 py-2 rounded text-white font-medium">Subscribe</button>
        </div>
        </div>
        <div data-aos="fade-up"  className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p data-aos="fade-up"  className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © Khadr072 All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
