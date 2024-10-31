import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">教育经历</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">湖南工商大学</h3>
                <p className="text-gray-600">数据科学与大数据技术 学士</p>
              </div>
              <span className="text-gray-500 mt-2 md:mt-0">2019.09 - 2023.06</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;