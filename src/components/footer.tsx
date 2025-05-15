import React from 'react';

export const Footer: React.FC = () => {
    return (
        <div className="bg-blue-50 dark:bg-slate-900 pt-10">
            <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-4">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-center items-center">
                        <div className="text-center">
                            <div className="flex flex-row md:flex-col gap-4 justify-center items-center">
                                <div className="flex flex-col items-center">
                                    <img 
                                        src="/images/ma5951.png" 
                                        alt="Makers Assemble 5951 logo" 
                                        className="h-40 w-40 mb-2" 
                                    />
                                    <span className="text-sm">Makers Assemble 5951</span>
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-sm">&copy; {new Date().getFullYear()} Robotics Open Source International- ROSI. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};