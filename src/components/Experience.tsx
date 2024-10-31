import React from 'react';
import { Code, Database, Bot } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          工作经历
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* 特易资讯 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 opacity-50 rounded-2xl -rotate-1"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">特易资讯</h3>
                    <p className="text-lg text-blue-600 font-medium">大模型开发工程师</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">2024.09 - 至今</span>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Bot className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">TradeGPT 开发</h4>
                      <p className="text-gray-600">负责外贸行业最顶级的垂直模型开发，专注于提升模型在贸易领域的专业性能</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Code className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">AI 邮件系统</h4>
                      <p className="text-gray-600">开发智能邮件处理系统，提升外贸沟通效率</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 能良电商 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-indigo-50 to-blue-50 opacity-50 rounded-2xl rotate-1"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">能良电商</h3>
                    <p className="text-lg text-blue-600 font-medium">数据挖掘工程师(AI中台)</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">2023.06 - 2024.08</span>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Bot className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">AI 系统开发</h4>
                      <p className="text-gray-600">构建Agent、Workflow，提升业务效能</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Database className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">数据架构</h4>
                      <p className="text-gray-600">参与资产数仓建模，搭建BI看板</p>
                      <p className="text-blue-600 mt-2 font-medium">团队荣誉：团队保障护航奖，个人授予"经营者"身份</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}