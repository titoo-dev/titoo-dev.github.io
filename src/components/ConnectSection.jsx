import '../assets/css/utils.css'
import SectionTitle from './SectionTitle'


function ConnectSection() {
    return (
        <section className="section-size">
            <SectionTitle title={'Connect'} size={'large'} />
            <br />
            <h2 className="text-gray-200 font-medium text-2xl max-w-sm">Interest on working with me or perhaps just talk?</h2>
            <br />
            <p className="text-gray-400 font-normal text-lg max-w-sm">Reach me on social media or by sending an email to <a href='#' className='text-pink-400 font-normal text-lg'>titosy.dev@gmail.com</a> </p>
            <br />
            <br />

            <a className="elevated-button bg-pink-500 hover:bg-pink-400" href="#">Get in touch</a>

        </section>
    )
}

export default ConnectSection