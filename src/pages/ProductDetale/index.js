import React from "react";
import { useGetProductsDetaleByNameQuery } from "../../services/productsDetaleApi";
import { ReactComponent as Favorite } from '../../assets/svg/favorite.svg';
import FavoriteIcon from "../../assets/svg/SvgFunctions/SvgFunctions";
import { useLocation } from "react-router-dom";
import { useAddFavoritesByNameMutation, useDeleteFavoritesByNamMutation } from "../../services/favoritesApi";
import { useEditProductsByNameMutation } from "../../services/productsApi";
import './productDetale.css'

function ProductDetale(){
    const {state} = useLocation()
    const {data: productDetale, isLoading} = useGetProductsDetaleByNameQuery(state.id)
    const [addFavoritesByName] = useAddFavoritesByNameMutation()
    const [editProductsByName] = useEditProductsByNameMutation()
    const [deleteFavoritesByName] = useDeleteFavoritesByNamMutation()
    
    async function addFav(item){
        await addFavoritesByName({id: item.id, isFavorite: !item.isFavorite, title:item.title, img: item.img, manufacturer: item.manufacturer, price: item.price, count: item.count,power: item.power, engineType:item.engineType, year:item.year,discountVisibal:item.discountVisibal }).unwrap()
    }

    async function edit(item){
        await editProductsByName({id: item.id, isFavorite: !item.isFavorite, title:item.title, img: item.img, manufacturer: item.manufacturer, price: item.price, count: item.count,power: item.power, engineType:item.engineType, year:item.year,discountVisibal:item.discountVisibal }).unwrap()
    }

    async function onDelete(id){
        await deleteFavoritesByName(id).unwrap()
    }

    return(
        <div>
            {
                isLoading 
                ? 
                <p>erore</p> 
                :
                <div className="all_product">
                    <div className="product_img">
                        {productDetale.discountVisibal && <div className="discount_box_card">
                             <p>discounted</p>
                        </div>}
                        <img src={productDetale?.img} alt="ads" className="card_img"/>
                        <p className="price">{productDetale?.price}</p>
                    </div>
                    <div>
                        <h1>{productDetale?.title}</h1>
                        {productDetale?.isFavorite 
                        ?
                         <div onClick={()=>(onDelete(productDetale?.id),edit(productDetale)) }><FavoriteIcon height={'22px'} width={'24px'} fill={'red'} /></div>
                        : 
                         <div onClick={()=>(addFav(productDetale),edit(productDetale)) }><Favorite /></div>}
                        <div className="product_information">
                            <p>Manufacturer</p>
                            <p>{productDetale?.manufacturer}</p>
                        </div>
                        <div className="line"></div>
                        <div className="product_information">
                            <p>Count</p>
                            <p>{productDetale?.count}</p>
                        </div>
                        <div className="line"></div>
                        <div className="product_information">
                            <p>Power, HP</p>
                            <p>{productDetale?.power}</p>
                        </div>
                        <div className="line"></div>
                        <div className="product_information">
                            <p>Engine type</p>
                            <p>{productDetale?.engineType}</p>
                        </div>
                        <div className="line"></div>
                        <div className="product_information">
                            <p>Year of issue</p>
                            <p>{productDetale?.year}</p>
                        </div>
                        <div className="line"></div>
                        {/* <button className="buy_btn">Buy</button> */}
                        <div>adsad</div>
                    </div>
                </div> 
            }
        </div>
    )
}

export default ProductDetale