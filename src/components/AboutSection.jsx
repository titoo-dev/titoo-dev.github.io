import SectionTitle from "./SectionTitle"
import '../assets/css/utils.css'

function AboutSection() {
    return (
        <section className='section-size'>
            <SectionTitle title={'About'} size='large' />

            <br />


            <h2 className="text-gray-200 font-medium text-2xl max-w-sm">Get a closer look at who i am.</h2>

            <br />
            <br />
            <br />
            <br />

            <SectionTitle title={'Skill & Tools'} size='small' />
            
            <br />
            
            <p className="text-gray-500 font-normal text-sm max-w-sm">Flutter & Dart, React, Vue, Angular, Javascript, Solidity, Hardhat, Truffle, IPFS, Ganache, Figma...</p>
            
            <br />
            <br />
            
            <SectionTitle title={'Who i am'} size='small' />
            
            <br />
            
            <p className="text-gray-500 font-normal text-sm max-w-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsam cumque debitis commodi iure, ullam voluptatum impedit. Nam voluptatibus sunt ex mollitia officiis dolor, inventore voluptatum vel quos pariatur. Eius!</p>
            
            <br />
            <br />

            <span className="space-x-6">
                <a className="elevated-button bg-pink-500 hover:bg-pink-400" href="#">Get in touch</a>
                <a className="elevated-button bg-gray-700 hover:bg-gray-600" href="#">Download CV</a>
            </span>
            


        </section>
    )
}

export default AboutSection