import React from 'react';
import { Home, Heart, Car, User, MoreVertical } from 'lucide-react';

const Sidebar = () => {
  const historyItems = [
    {
      id: 1,
      icon: Home,
      title: 'House Rent',
      date: 'July 4, 2024',
      color: 'text-blue-400'
    },
    {
      id: 2,
      icon: Heart,
      title: 'Health',
      date: 'July 4, 2024',
      color: 'text-red-400'
    },
    {
      id: 3,
      icon: Car,
      title: 'Car Expense',
      date: 'July 4, 2024',
      color: 'text-green-400'
    },
    {
      id: 4,
      icon: User,
      title: 'Deposited',
      date: 'July 4, 2024',
      color: 'text-purple-400'
    },
  ];

  const upcomingItems = [
    {
      id: 1,
      icon: Home,
      title: 'House Rent',
      date: 'July 5, 2024',
      color: 'text-blue-400'
    },
    {
      id: 2,
      icon: Heart,
      title: 'Health',
      date: 'July 5, 2024',
      color: 'text-red-400'
    },
    {
      id: 3,
      icon: Car,
      title: 'Car Expense',
      date: 'July 5, 2024',
      color: 'text-green-400'
    },
    {
      id: 4,
      icon: User,
      title: 'Deposited',
      date: 'July 5, 2024',
      color: 'text-purple-400'
    },
  ];

  const renderSection = (title, items) => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium text-lg">{title}</h3>
        <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
      </div>
      <div className="space-y-3">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group"
            >
              <div className={`p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors`}>
                <IconComponent className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm">{item.title}</p>
                <p className="text-gray-400 text-xs">{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-80 bg-[#242e24] h-[800px] overflow-y-auto" style={{
      scrollbarWidth: 'none',msOverflowStyle: 'none',}}>
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {renderSection('History', historyItems)}
        {renderSection('Upcoming', upcomingItems)}
      </div>
    </div>
  );
};

export default Sidebar;