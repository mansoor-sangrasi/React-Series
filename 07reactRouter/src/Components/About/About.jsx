import React from 'react'

 function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://miro.medium.com/1*3LG5LJj8_GhgI4HdE4NIYQ.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            A React Developer builds modern and interactive web applications using React.js.
                            They create reusable components and develop user-friendly interfaces for better user experience.
                      
                            
                        </p>
                        <p className="mt-4 text-gray-600">
                            A React Developer works with technologies like JavaScript, HTML, CSS, and APIs.
                            They focus on improving application performance and maintaining clean, scalable code
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About