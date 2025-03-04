import './SecondComponent.css';
import IphonePictureTwo from '../Pictures/iphone_picture_two.webp';

const SecondComponent = () => {
    return (
        <div className="second_component_container">
            <img className="sc_picture" src={IphonePictureTwo} alt="Picture of Iphone Pro" />
        </div>
    )
}

export default SecondComponent;