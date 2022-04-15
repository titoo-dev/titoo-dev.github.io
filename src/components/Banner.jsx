import '../assets/css/constants.css';
import '../assets/css/utils.css';

import Rive, {Layout, Fit, Alignment} from 'rive-react';

import assetConfig from '../assetsConfig';

function Banner() {

    return (
        <div className='bg-gray-900 relative flex-1 md:px-20'>

            <div className='absolute top-0 left-0 right-0 w-full h-full flex flex-row items-end  xl:max-w-screen-xl mx-auto '>
                <div className='flex-1'></div>
                <Rive src={assetConfig.riveAnimationPath.plant} className='w-56 h-96 hidden lg:block self-end md:pl-16 lg:pl-14 xl:pl-6' layout={new Layout({ fit: Fit.Contain, alignment: Alignment.BottomCenter })}  />
            </div>
            
            
            {/* Banner content */}
            <div className='md:max-w-screen-lg flex flex-col md:flex-row md:mx-auto md:justify-center pt-16 h-full'>
                
                {/* Presentation */}
                <div className='sm:flex-1 flex flex-col md:pr-4 items-center md:items-start px-9 sm:px-0'>

                    <h3 className='text-center md:text-left text-3xl sm:text-4xl text-gray-100 font-medium'>Hey, I'm <span className='text-3xl sm:text-4xl font-medium text-pink-500'>Titosy</span></h3>
                    <h4 className='text-center md:text-left text-xl sm:text-2xl lg:text-3xl text-gray-100 font-normal max-w-lg'>a <span className='text-xl sm:text-2xl lg:text-3xl text-pink-500 font-normal'>self-taught</span> designer, front-end & DeFi developer.</h4>
                    
                    <br />

                    {/* TODO:  */}
                    <h5 className='text-center md:text-left text-sm sm:text-base lg:text-lg text-gray-400'>Stick around to see some of my work</h5>

                    <br />
                    <br />

                    {/* Planet animation */}
                    <div className='flex lg:flex-row flex-col '>
                        <a className='elevated-button self-center md:self-start bg-pink-500 hover:bg-pink-400' href='#'>See my work</a>
                        <Rive src={assetConfig.riveAnimationPath.planet} className='w-56 h-56 md:transform md:-translate-x-16 lg:-translate-x-0 lg:-translate-y-12' layout={new Layout({ fit: Fit.Contain, alignment: Alignment.Center })}  />
                    </div>

                </div>

                {/* Device frame */}
                <div className='flex self-center device-frame-size md:h-full w-80 bg-gray-800 pt-2 px-2 mt-8 mb-8 pb-2 md:pb-0 md:mb-0 md:mt-0 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl md:rounded-br-none md:rounded-bl-none'>
                    {/* <div className='bg-gray-700 flex-1 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-br-none'></div> */}
                    <Rive src={assetConfig.riveAnimationPath.helloPal} className='bg-pink-500 flex-1 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-br-none'  />
                </div>
            </div>

        </div>
            
            

    )
}

export default Banner