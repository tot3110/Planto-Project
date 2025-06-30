import React from 'react'
import Card from '../components/Card'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import Chart from '../components/Chart'
import Navbar from '../components/Navbar'
import UpcomingItem from '../components/UpcomingItem'
import { FaHubspot } from 'react-icons/fa'
const Dashboard = () => {
  return (
    <div>
        <LeftSidebar />
        <div>
            <Navbar />
        </div>
        <RightSidebar />
    </div>
  )
}

export default Dashboard

