// import React from 'react'
import React, { useState, useEffect } from 'react';
import  HistoryIterm from '../components/HistoryItem'
const RightSidebar = () => {
  // State for managing items
  const [historyItems, setHistoryItems] = useState([]);
  const [upcomingItems, setUpcomingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data (simulating API call)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data - in a real app, you would fetch from an API
        const mockHistory = [
          { id: 1, type: "House Rent", date: "July 4, 2023", amount: 1200, status: "completed" },
          { id: 2, type: "Health", date: "July 4, 2023", amount: 150, status: "completed" },
          { id: 3, type: "Gat Expense", date: "July 3, 2023", amount: 85, status: "completed" },
          { id: 4, type: "Deposited", date: "July 2, 2023", amount: 2500, status: "completed" },
          { id: 5, type: "House Rent", date: "June 4, 2023", amount: 1200, status: "completed" },
        ];

        const mockUpcoming = [
          { id: 6, type: "House Rent", date: "August 1, 2023", amount: 1200, status: "pending" },
          { id: 7, type: "Health", date: "August 5, 2023", amount: 150, status: "pending" },
          { id: 8, type: "Gat Expense", date: "August 10, 2023", amount: 85, status: "pending" },
          { id: 9, type: "Deposited", date: "August 15, 2023", amount: 2500, status: "pending" },
        ];

        setHistoryItems(mockHistory);
        setUpcomingItems(mockUpcoming);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get color based on item type
  const getTypeColor = (type) => {
    switch (type) {
      case "House Rent":
        return "bg-blue-500";
      case "Health":
        return "bg-green-500";
      case "Gat Expense":
        return "bg-red-500";
      case "Deposited":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="w-80 bg-gray-50 p-6 border-l border-gray-200 h-screen sticky top-0 overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800">Financial Overview</h1>
        <p className="text-sm text-gray-500">Track your transactions</p>
      </div>

      {/* Loading state */}
      {isLoading ? (
        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-16 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* History Section */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">History</h2>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {historyItems.length} items
              </span>
            </div>
            
            <div className="space-y-3">
              {historyItems.length > 0 ? (
                historyItems.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-xs hover:shadow-sm transition-all cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getTypeColor(item.type)}`}></div>
                      <div>
                        <p className="font-medium text-gray-800">{item.type}</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${
                        item.type === "Deposited" ? "text-green-600" : "text-gray-800"
                      }`}>
                        {formatCurrency(item.amount)}
                      </p>
                      <span className="text-xs text-gray-400 capitalize">{item.status}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 bg-gray-100 rounded-lg">
                  <p className="text-gray-500">No history items found</p>
                </div>
              )}
            </div>
          </div>

          {/* Upcoming Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Upcoming</h2>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {upcomingItems.length} items
              </span>
            </div>
            
            <div className="space-y-3">
              {upcomingItems.length > 0 ? (
                upcomingItems.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-xs hover:shadow-sm transition-all cursor-pointer border-l-4 border-yellow-400"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getTypeColor(item.type)}`}></div>
                      <div>
                        <p className="font-medium text-gray-800">{item.type}</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">
                        {formatCurrency(item.amount)}
                      </p>
                      <span className="text-xs text-yellow-600 capitalize">{item.status}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 bg-gray-100 rounded-lg">
                  <p className="text-gray-500">No upcoming items</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RightSidebar;
