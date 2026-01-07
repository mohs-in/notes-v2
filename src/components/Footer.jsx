export default function Footer() {
  const MY_WEBSITE_URL = 'https://khansab.in';
  const MY_WEBSITE_TEXT = 'Mohsin Khansab';

  return (
    <footer className='bg-[#161B22] w-full text-center p-4 mt-auto border-t border-gray-700'>
      <p className='text-gray-400 text-sm'>
        Built by
        <a
          href={MY_WEBSITE_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='text-indigo-400 hover:text-indigo-300 transition duration-200 font-semibold mx-1 underline'
        >
          {MY_WEBSITE_TEXT}
        </a>
        using
        <span className='font-semibold text-white ml-1'>React</span> and{' '}
        <span className='font-semibold text-white'>Tailwind CSS</span>
      </p>
    </footer>
  );
}
