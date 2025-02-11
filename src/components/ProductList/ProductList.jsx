import React from "react";
import { ReactComponent as Favorite } from '../../assets/svg/favorite.svg';
import FavoriteIcon from "../../assets/svg/SvgFunctions/SvgFunctions";
import { useNavigate } from "react-router-dom";
import { useAddFavoritesByNameMutation, useDeleteFavoritesByNamMutation } from "../../services/favoritesApi";
import { useEditProductsByNameMutation } from "../../services/productsApi";
import { useAddBasketByNameMutation } from "../../services/basketApi";
import './product.css'

function ProductList({ data }) {
    const navigate = useNavigate()
    const [addFavoritesByName] = useAddFavoritesByNameMutation()
    const [editProductsByName] = useEditProductsByNameMutation()
    const [deleteFavoritesByName] = useDeleteFavoritesByNamMutation()
    const [addBasketByName] = useAddBasketByNameMutation()

    async function addFav(item){
        await addFavoritesByName({id: item.id, isFavorite: !item.isFavorite, title:item.title, img: item.img, manufacturer: item.manufacturer, price: item.price, count: item.count,power: item.power, engineType:item.engineType, year:item.year,discountVisibal:item.discountVisibal }).unwrap()
    }

    async function edit(item){
        await editProductsByName({id: item.id, isFavorite: !item.isFavorite, title:item.title, img: item.img, manufacturer: item.manufacturer, price: item.price, count: item.count,power: item.power, engineType:item.engineType, year:item.year,discountVisibal:item.discountVisibal }).unwrap()
    }

    async function onDelete(id){
        await deleteFavoritesByName(id).unwrap()
    }

    async function addBasket(item){
        await addBasketByName({id: item.id, isFavorite: !item.isFavorite, title:item.title, img: item.img, manufacturer: item.manufacturer, price: item.price, count: item.count,power: item.power, engineType:item.engineType, year:item.year,discountVisibal:item.discountVisibal }).unwrap()

    }

    return (
        <div className="product_conteiner">
            {
                data?.map((item)=>(
                    <div key={item.id} className="product_card">
                        {item.discountVisibal && <div className="discount_box">
                             <p>discounted</p>
                        </div>}
                        <div>
                            {item.isFavorite ?
                             <div onClick={()=>(onDelete(item.id),edit(item)) } className="favorite_box"><FavoriteIcon height={'22px'} width={'24px'} fill={'red'} /></div>
                              : 
                              <div onClick={()=>(addFav(item),edit(item)) } className="favorite_box"><Favorite /></div>
                            }
                        </div>
                        <img src={item.img} alt="asds"/>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <button onClick={()=>navigate(`/productDetale/${item.id}`, {state: {id: item.id}})} className="look_btn">look product</button>
                        <div onClick={()=>addBasket(item)} className="basket_btn">
                            <p>basket</p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ProductList