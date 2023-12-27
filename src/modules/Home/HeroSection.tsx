import React from 'react';

interface SectionProps {
    title: string;
    description: string;
}

const Section: React.FC<SectionProps> = ({ title, description }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    );
};

export default Section;
