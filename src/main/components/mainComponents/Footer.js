import "../../style/footerStyle.css";
import {Card} from "react-bootstrap";
import {useContext} from "react";
import LanguageContext from "../../context/LanguageContext";

export default function Footer() {
    const {language} = useContext(LanguageContext);

    return (
        <>
            <div className={'d-flex justify-content-center text-center text-light'}>
                <Card className="changed-container">
                    <div className={'my-2'}>{language === 'en' ? 'Developers:' : 'დეველოპერები:'}</div>
                    <div className="hover-container">
                        <div
                            className={'my-2'}>{language === 'en' ? 'Front-end Developer:' : 'ფრონტ-ენდ დეველოპერი:'}</div>
                        <div className={'my-2'}>
                            <a className={'profile-1'} href={'https://www.facebook.com/OtexRektovski'} target={'_blank'}
                               rel="noreferrer">
                                {language === 'en' ? 'Otar Murmanishvili:' : 'ოთარ მურმანიშვილი'}
                            </a>
                        </div>
                        <div>{language === 'en' ? 'Back-end Developer:' : 'ბექ-ენდ დეველოპერი:'}</div>
                        <div className={'my-2'}>
                            <a className={'profile-2'} href={'https://www.facebook.com/michi.nio.18/'} target={'_blank'}
                               rel="noreferrer">
                                {language === 'en' ? 'Lazare Kvirtia:' : 'ლაზარე კვირტია'}
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
            <div className={'my-2 text-center text-light'}>{language === 'en' ? '2022 - All rights reserved!' : '2022 - ყველა უფლება დაცულია!'}</div>
        </>
    )
}