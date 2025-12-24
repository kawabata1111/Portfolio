import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block cursor-hover">
              <div className="font-sans font-bold text-2xl tracking-tighter text-white">
                NEXUS<span className="text-accent">.</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              デジタルとクリエイティブの力で<br />
              ビジネスの未来を切り拓く。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-gray-500 mb-6 tracking-widest">NAVIGATION</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors cursor-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors cursor-hover">
                  About
                </Link>
              </li>
              <li>
                <Link to="/works" className="text-gray-400 hover:text-white transition-colors cursor-hover">
                  Works
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors cursor-hover">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors cursor-hover">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs text-gray-500 mb-6 tracking-widest">FOLLOW US</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-hover flex items-center gap-2 group">
                  Twitter / X <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-hover flex items-center gap-2 group">
                  Instagram <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-hover flex items-center gap-2 group">
                  LinkedIn <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-hover flex items-center gap-2 group">
                  Dribbble <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs text-gray-500 mb-6 tracking-widest">CONTACT</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              〒150-0001<br />
              東京都渋谷区神宮前3-1-1<br />
              NEXUS Building 5F
            </p>
            <a
              href="mailto:hello@nexus.jp"
              className="text-white hover:text-accent transition-colors cursor-hover"
            >
              hello@nexus.jp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm">
            &copy; {currentYear} NEXUS Inc. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm cursor-hover">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-sm cursor-hover">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
