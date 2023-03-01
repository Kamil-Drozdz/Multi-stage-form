import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactForm = ({ handleInputChange, nextPage, prevPage, formData, errors }) => {
	return (
		<div className='w-auto h-auto flex justify-center items-center px-[10%] md:px-[30%]'>
			<div className='flex flex-col items-center border-2 border-gray-200 px-4 py-4 rounded-xl '>
				<div className='flex w-full mb-6 flex-nowrap justify-start items-center'>
					<button
						className='py-[4px] px-2 hover:bg-slate-300 rounded-full text-black mr-4 disabled:opacity-30'
						onClick={() => {
							prevPage();
						}}>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<h2 className='text-xl border-b-[1px] w-full font-bold justify-center flex'>Dane kontaktowe</h2>
				</div>
				<form className='flex flex-col items-center justify-center w-auto'>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							name='floating_name_surname'
							id='floating_name_surname'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  focus:outline-none focus:ring-0  peer'
							placeholder=' '
							onChange={e => handleInputChange({ target: { name: 'fullName', value: e.target.value } })}
							value={formData?.fullName}
							required
						/>
						{errors.fullName && <p className='text-red-500 w-full text-sm'>{errors.fullName}</p>}
						<label
							htmlFor='floating_name_surname'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Wpisz swoje imię i nazwisko
						</label>
					</div>

					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='tel'
							name='floating_name_surname'
							id='floating_name_surname'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  focus:outline-none focus:ring-0  peer'
							placeholder=' '
							onChange={e => handleInputChange({ target: { name: 'number', value: e.target.value } })}
							required
							pattern='\d*'
							maxLength={12}
							value={formData?.number}
						/>
						{errors.number && <p className='text-red-500 w-full text-sm'>{errors.number}</p>}
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
							value={formData?.email}
						/>
						{errors.email && <p className='text-red-500 w-full text-sm'>{errors.email}</p>}
						<label
							htmlFor='floating_name_surname'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Wpisz e-mail
						</label>
					</div>
					<label className='whitespace-pre-wrap w-full'>
						<input
							type='checkbox'
							name='consent'
							checked={formData?.consent}
							onChange={e => handleInputChange({ target: { name: 'consent', value: e.target.checked } })}
						/>
						Zaznaczenie zgody jest dobrowolne,ale konieczne do zapisu na wizytę przez internet. Zaznaczając ten przycisk
						akceptujesz politykę prywatności, która jest dostępna na stronie rehabilitacja.waw.pl
					</label>
					{errors.consent && <p className='text-red-500 w-full text-sm'>{errors.consent}</p>}
				</form>
				<div className='flex p-4'>
					<button
						className='p-2 bg-gray-500 rounded-lg text-white '
						onClick={() => {
							nextPage();
						}}>
						Umów
					</button>
				</div>
			</div>
		</div>
	);
};
export default ContactForm;
