export const Card = ({ title, description, image }) => {
  return (
    <div className='max-w-md mx-auto bg-bgSecondary rounded-xl shadow-md overflow-hidden m-4'>
      {image && (
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <img
              className='h-48 w-full object-cover md:w-48'
              src={image}
              alt='Card'
            />
          </div>
        </div>
      )}
      <div className='p-8'>
        <div className='uppercase tracking-wide text-sm text-textTilte font-semibold'>
          {title}
        </div>
        <p className='mt-2 text-gray-500'>{description}</p>
      </div>
    </div>
  );
};
