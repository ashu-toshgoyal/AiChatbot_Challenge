import { useNavigate } from 'react-router-dom';
import './Detailsentry.scss';

function Detailsentry() {
    const navigate = useNavigate(); // hook

    const handleNext = () => {
        navigate('/chatbot');  // navigate on button click
    };

    return (
        <div className='container'>
            <div className='form-frame'>
                <div className='form-group'>
                    <label className='form-label' htmlFor='name-input'>Name</label>
                    <input
                        type="text"
                        className='form-input'
                        id='name-input'
                        placeholder='Enter Your Name...'
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='college-input'>College Name</label>
                    <input
                        type="text"
                        className='form-input'
                        id='college-input'
                        placeholder='Enter Your College Name...'
                    />
                </div>
                <button className='next-button' onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Detailsentry;
