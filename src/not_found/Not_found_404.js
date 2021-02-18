import './not_found_style.css'
import not_found_image from '../components/IconsSvg/not_found_image.svg'

const Not_found_404 = () =>{
    return  <div className="not-found-container">
                <img src={not_found_image} alt="not found page" className='image-page-not-found' />
                <p className='text-page-not-found'>Sorry, we cannot find this page</p>
            </div>
}

export default Not_found_404;