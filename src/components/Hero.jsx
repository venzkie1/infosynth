import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* <img src={logo} alt="Information_Synthesizer_logo" className='w-28 object-contain' /> */}
        <h1 className='orange_gradient font-extrabold text-5xl pb-5'>InfoSynth</h1>

        <button type='button' onClick={ () => window.open("https://github.com/venzkie1")} className='black_btn'>
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Condense Articles with the power of the latest <br className='max-md:hidden' />
        <span className='orange_gradient'>AI technology</span>
      </h1>
      <h2 className='desc'>
        Streamline your reading with InfoSynth, an open-source summarization tool that converts lengthy articles into concise summaries.
      </h2>
    </header>
  )
}

export default Hero