import './FirstComponent.css';
import IphonePicture from '../Pictures/iphone_picture.webp';

const FirstComponent = () => {
    return (
        <div className="first_component_container">
            <img className="fc_picture" src={IphonePicture} alt="picture of iphone 16" />
            <div className="fc_button_container">
                <button className="learn_more_button">Learn More</button>
                <button className="buy_button">Buy</button>
            </div>
        </div>
    )
}

export default FirstComponent;