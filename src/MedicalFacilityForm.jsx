import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MedicalFacilityForm = ({ handleInputChange, nextPage, prevPage, page }) => {
	const medicalFacilities = [
		{ id: 1, name: 'Przychodnia A' },
		{ id: 2, name: 'Przychodnia B' },
		{ id: 3, name: 'Przychodnia C' },
	];

	return (
		<div className='w-auto h-auto flex justify-center items-center px-[10%] md:px-[15%]'>
			<div className='flex flex-col items-center border-2 border-gray-200 px-4 py-4 rounded-xl'>
				<div className='flex w-full mb-6 flex-wrap justify-start items-center'>
					<button
						className='rounded-full text-black mr-4 disabled:opacity-30'
						disabled={page === 0}
						onClick={() => {
							prevPage();
						}}>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<h2 className=' text-lg font-bold align-self-center'>Wybierz placówkę medyczną</h2>
				</div>

				<div className='flex flex-col'>
					<div className='flex md:flex-nowrap flex-wrap justify-center'>
						{medicalFacilities.map(facility => (
							<div
								key={facility.id}
								className='bg-white mr-4 mb-2 rounded-md p-4 shadow-md cursor-pointer hover:shadow-lg'
								onClick={() => {
									handleInputChange({ target: { name: 'medicalFacility', value: facility.name } });
									nextPage();
								}}>
								<h3 className='text-lg font-bold'>{facility.name}</h3>
								<p>{facility.address}</p>
							</div>
						))}
					</div>
					<div className='flex p-4 w-full justify-center'></div>
				</div>
			</div>
		</div>
	);
};

export default MedicalFacilityForm;
