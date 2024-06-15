import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto py-6">
                <div className="flex flex-wrap justify-between">
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Sidheart. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
