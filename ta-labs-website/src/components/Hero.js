import React from 'react';
import Typical from 'react-typical';

function Hero() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center bg-[#d0e0f0] text-primary py-12">
            <div className="text-start max-w-4xl mx-auto">
                <Typical
                    steps={[
                        'Artificial Intelligence Lab Portal.',
                        1000, // Delay after typing
                    ]}
                    loop={1}
                    wrapper="h1"
                    className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight"
                />
            </div>
        </section>
    );
}

export default Hero;
