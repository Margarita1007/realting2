import { Button } from 'antd';
import React, { useState } from 'react';


const SwitchMapList: React.FC = () => {
    const [openMap, setOpenMap] = useState<boolean>(false);
    

    function handlerOpenMap() {
        setOpenMap(true);
        const map = document.getElementById("catalog-right") as HTMLElement;
        map.classList.remove('catalog-right-visibility');
        document.body.style.overflow = "hidden";
    }

    function handlerCloseMap() {
        setOpenMap(false);
        const map = document.getElementById("catalog-right") as HTMLElement;
        map.classList.add('catalog-right-visibility');
        document.body.style.overflow = "visible";
    }

    return (
        <div className='switch-map-list'>
            {openMap ?
            <Button className='btn' onClick={handlerCloseMap}>
                <svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 .5A.5.5 0 01.5 0h4a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3zM1 1v2h3V1H1zm6-.5a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5v-3zM8 1v2h11V1H8zM0 12.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3zm1 .5v2h3v-2H1zm6-.5a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5v-3zm1 .5v2h11v-2H8zM0 6.5A.5.5 0 01.5 6h4a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3zM1 7v2h3V7H1zm6-.5a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5v-3zM8 7v2h11V7H8z" fill='#fff'></path>
                </svg>
                <span>Показать объекты списком</span>
            </Button>
            :
            <Button className='btn' onClick={handlerOpenMap}>
            <svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.8.1a.5.5 0 01.2.4v13a.5.5 0 01-.34.47l-6 2a.5.5 0 01-.3.01l-6.85-1.96-5.85 1.95A.5.5 0 010 15.5v-13a.5.5 0 01.34-.47l6-2a.5.5 0 01.3-.01l6.85 1.96L19.34.03a.5.5 0 01.45.06zM13 2.87L7 1.16v11.96l6 1.72V2.88zm1 11.93l5-1.67V1.19l-5 1.67v11.95zm-8-1.67V1.19L1 2.86v11.95l5-1.67z" fill='#fff'/>
            </svg>
            <span>Показать объекты на карте</span>
        </Button>
            }  
        </div>
    )
}

export default SwitchMapList;