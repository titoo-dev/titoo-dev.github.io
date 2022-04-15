import Navbar from './Navbar';
import Banner from './Banner';
import WorkSection from './WorkSection';
import AboutSection from './AboutSection';
import ConnectSection from './ConnectSection';

import '../assets/css/utils.css';

function App() {
  return (
    <main className='bg-gray-800'>
      <div className='h-2 sm:bg-pink-500 md:bg-blue-500 lg:bg-orange-500 xl:bg-lime-500 2xl:bg-indigo-500'></div>
      <header className='md:header-height flex flex-col bg-gray-900'>
        <Navbar/>
        <Banner/>
      </header>

      <WorkSection/>

      <AboutSection/>

      <ConnectSection/>
      
      <footer className='h-52 bg-gray-900'></footer>
    </main>
  );  
}

export default App
