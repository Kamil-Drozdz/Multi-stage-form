const MedicalFacilityForm = ({ handleInputChange, nextPage, prevPage, FormTitles, page }) => {
	const medicalFacilities = [
		{ id: 1, name: 'Przychodnia A' },
		{ id: 2, name: 'Przychodnia B' },
		{ id: 3, name: 'Przychodnia C' },
	];

	return (
		<div className='w-auto h-auto flex justify-center items-center px-[10%] md:px-[15%]'>
			<div className='flex flex-col items-center border-2 border-gray-200 px-4 py-4 rounded-xl'>
				<h2 className='text-lg font-bold mb-4'>Wybierz placówkę medyczną</h2>
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
					<div className='flex p-4 w-full justify-center'>
						<button
							className='p-2 bg-gray-700 rounded-lg text-white mr-4 disabled:opacity-60'
							disabled={page === 0}
							onClick={() => {
								prevPage();
							}}>
							Cofnij
						</button>
						<button
							className='p-2 bg-gray-700 rounded-lg text-white '
							onClick={() => {
								nextPage();
							}}>
							{page === FormTitles.length - 1 ? 'Umów' : 'Dalej'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MedicalFacilityForm;
