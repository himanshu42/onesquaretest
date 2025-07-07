import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';


const data = [
    {
        title: 'CONNECTIVITY',
        items: [
            { place: 'Mumbai-Pune Expressway', time: '05 Mins.' },
            { place: 'Hinjawadi connectivity', time: '20 Mins.' },
            { place: 'Balewadi High Street', time: '30 Mins.' },
        ],
    },
    { title: 'LEISURE' },
    { title: 'SHOPPING/ MALLS' },
    { title: 'EDUCATIONAL INSTITUTES' },
    { title: 'HEALTHCARE' },
];

const Distances = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };


    return (
        <div>
            <div style={{ marginTop: 100 }}>
                <h1 className='yttitle'>Key Distances</h1>
            </div>
            <div className="accordion-container">
      {data.map((section, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => toggle(index)}>
            <span>{section.title}</span>
            <span>{openIndex === index ? <ChevronUp size={20} /> :  <ChevronDown size={20} />}</span>
          </div>

          {openIndex === index && section.items && (
            <div className="accordion-content">
              {section.items.map((item, idx) => (
                <div className="accordion-row" key={idx}>
                  <span>{item.place}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
        </div>
    )
}

export default Distances