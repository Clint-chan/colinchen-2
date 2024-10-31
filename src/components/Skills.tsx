import React from 'react';
import { Brain, Code, Database, Globe, Cpu } from 'lucide-react';

const skills = [
  {
    category: 'AI & ML',
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: 'LLM Development', level: 90 },
      { name: 'RAG Systems', level: 85 },
      { name: 'Neural Networks', level: 80 }
    ]
  },
  {
    category: 'Programming',
    icon: <Code className="w-6 h-6" />,
    items: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 85 },
      { name: 'TypeScript', level: 75 }
    ]
  },
  {
    category: 'Data Science',
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: 'Data Analysis', level: 90 },
      { name: 'Visualization', level: 85 },
      { name: 'Big Data', level: 80 }
    ]
  }
];

const certificates = [
  {
    name: '国际项目管理师(PMP)',
    icon: <Globe className="w-5 h-5" />,
    date: '2023'
  },
  {
    name: '提示词开发工程师(中级)',
    icon: <Brain className="w-5 h-5" />,
    date: '2023'
  },
  {
    name: 'Agent开发工程师',
    icon: <Cpu className="w-5 h-5" />,
    date: '2024'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          技能与认证
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {skills.map((category) => (
              <div key={category.category} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-blue-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">专业认证</h3>
            <div className="space-y-6">
              {certificates.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                >
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 font-medium">{cert.name}</h4>
                    <p className="text-gray-500 text-sm">获得年份: {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}