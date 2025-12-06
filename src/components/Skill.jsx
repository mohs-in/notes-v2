import PropTypes from 'prop-types';

export default function Skill(props) {
  return (
    <div className='text-white w-full max-w-xs m-4 p-6 bg-[#161B22] rounded-xl shadow-lg hover:shadow-indigo-500/30 transition duration-300 border border-gray-700 flex flex-col items-center text-center'>
      <div className='font-semibold text-2xl text-indigo-400 mb-4'>
        {props.skill}
      </div>

      <div className='mt-2'>
        <a
          href={props.link}
          className='text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-lg font-medium transition duration-200 block w-full'
        >
          Click for notes
        </a>
      </div>

      <div className='mt-4'>
        <a
          href={props.reference}
          className='text-gray-400 hover:text-gray-200 underline text-sm transition duration-200'
        >
          Reference Link
        </a>
      </div>
    </div>
  );
}

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
};
