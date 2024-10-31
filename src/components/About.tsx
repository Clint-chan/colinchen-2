import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">关于我</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">领域实践者</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>AIGC思维火花社区核心成员</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>NewestGPT负责人</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>《Way to AGI》作者</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;