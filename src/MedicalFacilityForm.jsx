const MedicalFacilityForm = ({ handleInputChange, nextPage }) => {
	const medicalFacilities = [
		{ id: 1, name: 'Warszawa-Wesoła', address: 'Niemcewicza 9' },
		{ id: 2, name: 'Sulejówek', address: 'Niemcewicza 20' },
		{ id: 3, name: 'Warszawa', address: 'Centrala 23' },
		{ id: 4, name: 'Ząbki', address: 'Niemcewicza 9' },
		{ id: 5, name: 'Ząbki', address: 'Niemcewicza 9' },
	];

	return (
		<div className='w-auto h-auto relative flex justify-center items-start px-[10%] md:px-[15%]'>
			<div className='flex w-[70%] flex-col items-center border-2 border-gray-200 px-4 py-4 rounded-xl'>
				<div className='flex w-full mb-6 flex-nowrap border-b-[1px] pb-6 justify-center'>
					<h2 className=' text-lg font-bold align-self-center '>Wybierz placówkę medyczną</h2>
				</div>

				<div className='flex flex-col w-[88%] justify-center'>
					<div className='flex  md:flex-wrap w-full flex-wrap justify-center md:justify-start items-center'>
						{medicalFacilities.map(facility => (
							<div
								key={facility.id}
								className='bg-white box-content  mr-4 mb-2 basis-1/3 rounded-md p-4 shadow-md cursor-pointer hover:shadow-lg hover:border-slate-700 border-2'
								onClick={() => {
									handleInputChange({ target: { name: 'medicalFacility', value: facility.name } });
									nextPage();
								}}>
								<div
									className='text-sm w-full flex flex-col justify-center items-center
                                '>
									<h3 className='text-sm font-bold whitespace-nowrap'>{facility.name}</h3>
									<p className='text-xs'>{facility.address}</p>
									<p className='p-2 bg-gray-200 rounded-lg mt-2 hover:bg-gray-300 whitespace-nowrap'>
										Zarezerwuj wizytę
									</p>
								</div>
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
