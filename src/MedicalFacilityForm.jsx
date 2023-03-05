const MedicalFacilityForm = ({ handleInputChange, nextPage }) => {
	const medicalFacilities = [
		{ id: 1, name: 'Przychodnia A' },
		{ id: 2, name: 'Przychodnia B' },
		{ id: 3, name: 'Przychodnia C' },
	];

	return (
		<div className='w-auto h-auto relative flex justify-center items-start px-[10%] md:px-[15%]'>
			<div className='flex flex-col items-center border-2 border-gray-200 px-4 py-4 rounded-xl'>
				<div className='flex w-full mb-6 flex-nowrap border-b-[1px] pb-6 justify-center'>
					<h2 className=' text-lg font-bold align-self-center '>Wybierz placówkę medyczną</h2>
				</div>

				<div className='flex flex-col'>
					<div className='flex md:flex-nowrap flex-wrap justify-center'>
						{medicalFacilities.map(facility => (
							<div
								key={facility.id}
								className='bg-white mr-4 mb-2 rounded-md p-4 shadow-md cursor-pointer hover:shadow-lg hover:border-slate-700 border-2'
								onClick={() => {
									handleInputChange({ target: { name: 'medicalFacility', value: facility.name } });
									nextPage();
								}}>
								<h3 className='text-sm font-bold w-full whitespace-nowrap'>{facility.name}</h3>
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
