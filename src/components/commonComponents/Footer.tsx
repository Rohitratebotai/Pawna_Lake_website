import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Contact Info Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">CONTACT INFO</h3>
                        <div className="space-y-3">
                            <p className="text-gray-400">We are available Mon-Sat 10AM-11PM</p>
                            <div className="border-b border-gray-700 pb-2">
                                <p>info@weekendfeels.com</p>
                            </div>
                            <p>Sales Office: +91-93158 18031</p>
                        </div>
                    </div>

                    {/* About WeekendFeels Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">ABOUT WEEKENDFEELS</h3>
                        <nav className="space-y-3">
                            <a href="#" className="block hover:text-white transition-colors">About Us</a>
                            <a href="#" className="block hover:text-white transition-colors">Terms & Conditions</a>
                            <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="block hover:text-white transition-colors">News</a>
                            <a href="#" className="block hover:text-white transition-colors">Careers</a>
                            <a href="#" className="block text-purple-400 hover:text-purple-300 transition-colors">Influencer Program</a>
                        </nav>
                    </div>

                    {/* Security & Payment Section */}
                    <div>
                        <div className="mb-6">
                            <p className="text-gray-400 mb-4">The payment is encrypted and transmitted securely with an SSL protocol.</p>
                            <div className="flex items-center space-x-2">
                                <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                                    🔒 DMCA
                                </div>
                                <span className="text-xs">PROTECTED</span>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="flex flex-wrap gap-2">
                            <div className="bg-blue-600 text-white px-3 py-2 rounded text-xs font-bold">VISA</div>
                            <div className="bg-gray-700 text-white px-3 py-2 rounded text-xs font-bold">UPI</div>
                            <div className="bg-blue-500 text-white px-3 py-2 rounded text-xs font-bold">maestro</div>
                            <div className="bg-red-600 text-white px-3 py-2 rounded text-xs font-bold">MasterCard</div>
                            <div className="bg-teal-600 text-white px-3 py-2 rounded text-xs font-bold">AMEX</div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.83.405-.09.402-.294 1.379-.334 1.572-.053.225-.172.271-.402.165C3.887 18.165 3.06 16.507 3.06 13.389c0-3.83 2.786-7.351 8.024-7.351 4.212 0 7.482 2.999 7.482 7.006 0 4.181-2.638 7.537-6.306 7.537-1.231 0-2.390-.641-2.785-1.402l-.759 2.888c-.274 1.059-1.009 2.386-1.503 3.197C9.25 23.712 10.578 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.81 1.15-5.11 3.37-.48.33-.92.49-1.32.48-.44-.01-1.27-.25-1.89-.46-.76-.26-1.37-.4-1.32-.85.03-.23.35-.47.96-.72 3.66-1.6 6.11-2.66 7.33-3.18 3.49-1.46 4.21-1.72 4.69-1.73.1 0 .33.02.48.14.12.1.15.23.17.33.01.08.03.27.01.42z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9.197 3c-1.738 0-3.131 1.478-3.131 3.299 0 1.82 1.393 3.299 3.131 3.299s3.131-1.479 3.131-3.299c0-1.821-1.393-3.299-3.131-3.299zm11.738 8.693c-.684-3.678-3.778-6.693-7.653-6.693-4.401 0-7.965 3.564-7.965 7.965s3.564 7.965 7.965 7.965c3.477 0 6.417-2.249 7.431-5.366.224-.689.342-1.418.342-2.174 0-.523-.043-1.037-.12-1.697zM5.171 12.965c0-3.299 2.678-5.977 5.977-5.977s5.977 2.678 5.977 5.977-2.678 5.977-5.977 5.977-5.977-2.678-5.977-5.977z" />
                            </svg>
                        </a>
                    </div>

                    {/* WhatsApp Chat Button */}
                    <div className="flex justify-end border-t border-gray-700">

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;