const ContactForm = ({ handleInputChange, nextPage, prevPage, FormTitles, page }) => {
	return (
		<div className='w-auto h-auto flex justify-center items-center px-[10%] md:px-[30%]'>
			<div className='flex flex-col items-center border-2 border-gray-200 px-4 py-4 rounded-xl '>
				<h2 className='text-xl mb-4 border-b-[1px] pb-4 w-full font-bold'>Dane kontaktowe</h2>
				<form className='flex flex-col items-center justify-center w-auto'>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							name='floating_name_surname'
							id='floating_name_surname'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  focus:outline-none focus:ring-0  peer'
							placeholder=' '
							onChange={e => handleInputChange({ target: { name: 'fullName', value: e.target.value } })}
							required
						/>
						<label
							htmlFor='floating_name_surname'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Wpisz swoje imię i nazwisko
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							name='floating_name_surname'
							id='floating_name_surname'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  focus:outline-none focus:ring-0  peer'
							placeholder=' '
							onChange={e => handleInputChange({ target: { name: 'number', value: e.target.value } })}
							required
						/>
						<label
							htmlFor='floating_name_surname'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Wpisz swój numer telefonu
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							name='floating_name_surname'
							id='floating_name_surname'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  focus:outline-none focus:ring-0  peer'
							placeholder=' '
							onChange={e => handleInputChange({ target: { name: 'email', value: e.target.value } })}
							required
						/>
						<label
							htmlFor='floating_name_surname'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Wpisz e-mail
						</label>
					</div>
					<label className=' whitespace-pre-wrap w-full'>
						<input type='checkbox' name='consent' required /> Zaznaczenie zgody jest dobrowolne,ale konieczne do zapisu
						na wizytę przez internet. Zaznaczając ten przycisk akceptujesz politykę prywatności, która jest dostępna na
						stronie rehabilitacja.waw.pl
					</label>
				</form>
				<div className='flex p-4'>
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
	);
};
export default ContactForm;
