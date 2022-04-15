import '../assets/css/utils.css'

import SectionTitle from "./SectionTitle"

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'


function WorkSection() {
    return (
        <section className='section-size'>
            <SectionTitle title={'Work'} size='large' />

            <br />

            <h2 className="text-gray-200 font-medium text-2xl max-w-xs">Hand-picked projects for you to see.</h2>

            <br />
            <br />
            <br />

            {/* Page Switcher */}
            <div className="flex flex-row w-40">
                <div className="bg-gray-600 rounded hover:bg-gray-500 cursor-pointer grid place-items-center p-2">
                    <ArrowLeftIcon className="text-gray-900"  width={14} height={14}/>
                </div>
                <div className="flex-1 flex flex-row justify-center items-center">
                    <p className="text-gray-400 font-medium">01 / 03</p>
                </div>
                <div className=" bg-gray-600 rounded hover:bg-gray-500 cursor-pointer grid place-items-center p-2">
                    <ArrowRightIcon className="text-gray-900"  width={14} height={14}/>
                </div>
            </div>

            <br />

            <h2 className="text-gray-200 font-medium text-2xl max-w-xs">Vazotsika</h2>

            <br />
            <SectionTitle title={'App UI concept'} size={'small'} />

            <br />
            <p className="max-w-sm text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat commodi soluta culpa tempora veritatis eaque alias molestiae? Saepe ex doloribus, quam, reiciendis corporis, dolor delectus ad quidem atque illum incidunt quo corrupti aliquid debitis?</p>
            <br />
            <br />

            <a className='elevated-button bg-pink-500 hover:bg-pink-400' href='#'>View project</a>

        </section>
    )
}

export default WorkSection