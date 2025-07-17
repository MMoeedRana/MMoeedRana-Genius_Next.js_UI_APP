import React from 'react';
import { FaBlog, FaCode, FaFile, FaImage, FaMusic, FaVideo } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaFile className="text-purple-600" />,
      title: 'Conversation',
      description: 'Engage in intelligent, meaningful conversations and get insightful answers to your queries.',
    },
    {
      icon: <FaMusic className="text-orange-600" />,
      title: 'Music Generation',
      description: 'Create high-quality music tracks tailored to your needs with advanced AI tools.',
    },
    {
      icon: <FaImage className="text-blue-600" />,
      title: 'Image Generation',
      description: 'Generate breathtaking images and artwork for your personal and professional use.',
    },
    {
      icon: <FaVideo className="text-green-600" />,
      title: 'Video Generation',
      description: 'Produce engaging videos with customizable options for all your creative projects.',
    },
    {
      icon: <FaCode className="text-black" />,
      title: 'Code Generation',
      description: 'Automate your coding tasks with efficient and reliable AI-powered solutions.',
    },
    {
      icon: <FaBlog className="text-pink-600" />,
      title: 'Blog Writing',
      description: 'Write engaging blogs and articles effortlessly with AI-driven assistance.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Premium Services
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl bg-gradient-to-tr from-gray-200 to-gray-100 text-gray-700 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
