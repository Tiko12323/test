import React from "react";
import { useGetPagesByNameQuery } from "../../services/homeApi";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../../assets/images/logo.png'
import heart from '../../assets/images/favorites.png'
import login from '../../assets/images/login.png'
import baskat from '../../assets/images/basketBlack.png'
import { useGetFavoritesByNameQuery } from "../../services/favoritesApi";
import { useGetBasketByNameQuery } from "../../services/basketApi";
import './style.css'

function Header() {
    const { data } = useGetPagesByNameQuery()
    const {data: favorites} = useGetFavoritesByNameQuery()
    const {data: baskets} = useGetBasketByNameQuery()
    const navigate = useNavigate()
    const location = useLocation()
    const favorite = useSelector((state)=>state.favorite)
    const basket = useSelector((state)=>state.basket)
    return (
        <div className="pages_conteiner">
            {
                data?.map((item) => (
                    <div onClick={() => navigate(item.path)} key={item.id} className={location.pathname === item.path ? 'onPage' : 'offPage'}>
                        <h3>{item.title}</h3>
                        
                    </div>
                ))
            }
            <div onClick={()=> navigate('/')}>
                <img src={logo} alt="asf"/>
            </div>
            <p>Москва,  ул. Науки  25</p>
            <div className="icons_btns">
                <div className="fav_box">
                    <img src={heart} alt="asf"/>
                    {
                        favorites?.length >= 1 ? <div className="basket_favorites_number_box">{favorites?.length}</div> : <></>
                    }
                </div>
                <div className="login_box">
                    <img src={login} alt="asf"/>
                </div>
                <div  className="basket_box">
                    <img src={baskat} alt="asf"/>
                    {
                        baskets?.length >= 1 ? <div className="basket_favorites_number_box">{baskets?.length}</div> : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header