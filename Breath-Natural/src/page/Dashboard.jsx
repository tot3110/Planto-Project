import React from 'react'
import Card from '../components/Card'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import Chart from '../components/Chart'
import Navbar from '../components/Navbar'
import UpcomingItem from '../components/UpcomingItem'
import { FaHubspot } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import totalAmount from '../assets/tdesign_money.svg'
import { MdColorLens } from 'react-icons/md'
import threeDot from '../assets/Vector (1).svg'
import amountDeposit from '../assets/ph_hand-deposit-bold.svg'
import amountSpent from '../assets/qlementine-icons_money-16.svg'

const Dashboard = () => {
  const Carddata = {
    color: "white",
    text: "Total Amount",
    icon: totalAmount ,
    dotIcon: threeDot,  
    price: "$ 50,000"    
  }

  const Carddata2 = {
    encolor: "white",
    text: "Amount Deposit",
    icon: amountDeposit ,
    dotIcon: threeDot,  
    price: "$ 27,000"    
  }
  const Carddata3 = {
    color: "white",
    text: "Amount Spent",
    icon: amountSpent ,
    dotIcon: threeDot,  
    price: "$ 7,500"    
  }
  return (
    <div className='flex text-white'>
      <LeftSidebar className="w-64" />
      <div className='w-[60%] bg-[#181D14]'>
      <Navbar />
      <div className='flex px-10 py-5 gap-10'>
        <Card data={Carddata}/>
        <Card data={Carddata2}/>
        <Card data={Carddata3}/>
      </div>
      <div>
        <Chart />
      </div>
      </div>
      <RightSidebar className="w-64"/>  
    </div>
  )
}

export default Dashboard