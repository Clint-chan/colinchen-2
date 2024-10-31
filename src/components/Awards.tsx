import React from 'react';

const Awards = () => {
  const awards = [
    {
      title: '十七届"挑战杯"竞赛国家级、省级特等奖',
      subtitle: '中国大学生学术科技的"奥林匹克"',
      date: '2022.03'
    },
    {
      title: '"互联网+"系列大学生创新创业大赛省级一等奖',
      date: '2023.03'
    },
    {
      title: '数学建模大赛一等奖、大数据统计分析大赛一等奖、省优秀毕业生等20余项奖项',
      date: '2022.03'
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">获奖情况</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{award.title}</h3>
                    {award.subtitle && (
                      <p className="text-gray-600 mt-1">{award.subtitle}</p>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{award.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;