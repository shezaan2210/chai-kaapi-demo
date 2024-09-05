'use client'
import Navbar from './Navbar.jsx';
import Footer from './Footer';
import CollapsibleMenu from './CollapsibleMenu';
import FeedBack from './FeedBack';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-[#FEFFF5] text-[#593616] font-["voyage"] flex flex-col'>
        {/* The container now has flexbox and min-h-screen */}
        <div className='flex-grow'>
          <CollapsibleMenu />
          <FeedBack/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
