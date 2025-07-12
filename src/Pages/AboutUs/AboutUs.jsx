import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const teamMembers = [
    {
    name: 'Harshi Jain',
    role: 'Frontend Engineer',
    img: 'https://media.licdn.com/dms/image/v2/D4D35AQGrVDAOImGMAg/profile-framedphoto-shrink_400_400/B4DZcG9Sh9IEAc-/0/1748168419979?e=1752908400&v=beta&t=Dvv062LVA0dim186VQn6D79GJstaz5d5jkSAzqXheZI',
    linkedin: 'https://www.linkedin.com/in/harshi-jain-b72903288/',
    github: 'https://github.com/HarshiJain20',
  },
  {
    name: 'Twinkal Ajmera',
    role: 'Frontend Engineer',
    img: 'https://media.licdn.com/dms/image/v2/D4D03AQFJ99d8d6UJJA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721758223487?e=1757548800&v=beta&t=vEjPjwodZ1emJfAMVu5LshmYCSnKTOE1r5L2Sc_Acmo',
    linkedin: 'https://www.linkedin.com/in/twinkal-ajmera-8a2375244/',
    github: 'https://github.com/Twinkall24',
  },
  {
    name: 'Om Parekh',
    role: 'Backend Developer',
    img: 'https://media.licdn.com/dms/image/v2/D5635AQEyLtzvip7hcw/profile-framedphoto-shrink_400_400/B56ZWGIiMzGUAc-/0/1741712139394?e=1752908400&v=beta&t=o6RfPa3_k25rtfyltANyFFL9uSL2JLyx4n58VLPNyoM',
    linkedin: 'https://www.linkedin.com/in/om-parekh-851804324/',
    github: 'https://github.com/OmParekh07',
  },
  {
    name: 'Prakash Dangi',
    role: 'Backend Developer',
    img: 'https://media.licdn.com/dms/image/v2/D4D03AQF7Rxy93yAx1w/profile-displayphoto-scale_400_400/B4DZe1MvPcGsAg-/0/1751091706739?e=1757548800&v=beta&t=DS0Y4HKRYoRG81VDBD0z5Wx38IHYwDJosEgwTsXrcfI',
    linkedin: 'https://www.linkedin.com/in/prakash-dangi-a3a831279/',
    github: 'https://github.com/prakash-dangi',
  },
];

const AboutUs = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-cyan-500 mb-4">Our Team</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        We strive to do everything so that you can comfortably and productively work in our space and create amazing products and services.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg w-60 p-6 text-center transition-transform transform hover:-translate-y-2"
          >
            <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cyan-500">
              <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <div className="mt-3 flex justify-center gap-4 text-cyan-500 text-xl">
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-cyan-700" />
              </a>
              <a href={member.github} target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-cyan-700" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;