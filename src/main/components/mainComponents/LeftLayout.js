import {ListGroup} from "react-bootstrap";
import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";

export default function LeftLayout() {
    const {theme} = useContext(ThemeContext);

    return (
        <ListGroup style={{textAlign: "center"}}>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ეპარქიები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ეკლესია-მონასტრები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ციხე-ქალაქები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>უძველესი
                საქართველო</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ექსპონატები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>მითები და
                ლეგენდები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>საქართველოს
                მეფეები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>მემატიანე</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ტრადიციები
                და სიმბოლიკა</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ქართველები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ენა და
                დამწერლობა</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>პროზა და
                პეოზია</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>სიმღერები,
                საგალობლები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>სიახლეები,
                აღმოჩენები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>საინტერესო
                სტატიები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ბმულები,
                ბიბლიოგრაფია</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ქართული
                იარაღი</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>რუკები და
                მარშრუტები</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ბუნება</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ფორუმი</ListGroup.Item>
            <ListGroup.Item
                className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>ჩვენს
                შესახებ</ListGroup.Item>
        </ListGroup>
    );
}