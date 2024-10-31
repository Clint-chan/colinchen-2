import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AI智能客服系统',
      role: '技术负责人',
      period: '2024.04 - 2024.07',
      description: [
        '核心实现与技术创新',
        '项目成效显著',
        '领导力与团队合作'
      ]
    },
    {
      title: 'AI数据分析辅助系统',
      role: '开发工程师',
      period: '2023.12 - 2024.03',
      description: [
        '系统架构设计',
        '核心算法实现',
        '性能优化'
      ]
    },
    {
      title: '全渠道销售预测算法研究',
      role: '算法工程师',
      period: '2023.08 - 2023.11',
      description: [
        '数据预处理与特征工程',
        '模型选择与优化',
        '预测准确率提升'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">项目经验</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-gray-600">{project.role}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">{project.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {project.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;