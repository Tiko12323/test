import React from "react";
import { useSelector } from "react-redux";
// import { useGetProductsByNameQuery } from "../../services/productsApi";
import { ReactComponent as Favorite } from '../../assets/svg/favorite.svg';
import FavoriteIcon from "../../assets/svg/SvgFunctions/SvgFunctions";
import { productsFavorite } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import './favorites.css'

function Favorites() {
    const products = useSelector((state) => state.product)
    const dispatch = useDispatch()
    // const {data} = useGetProductsByNameQuery()
    console.log(products)

    return (
        <div className="product_conteiner">
            {
                products?.map((item) => (
                    <div key={item.id}>
                        {
                            item.isFavorite === true ? <div key={item.id} className="product_card">{item.discountVisibal && <div className="discount_box">
                                <p>discounted</p>
                            </div>}
                                <div>
                                    {item.isFavorite ? (
                                        <div onClick={() => dispatch(productsFavorite({ id: item.id, isFavorite: item.isFavorite }))} className="favorite_box">
                                            <FavoriteIcon
                                                height={'22px'}
                                                width={'24px'}
                                                fill={'red'} />
                                        </div>
                                    ) : (
                                        <div className="favorite_box"><Favorite onClick={() => dispatch(productsFavorite({ id: item.id, isFavorite: item.isFavorite }))} /></div>
                                    )
                                    }

                                </div>
                                <img src={item.img} alt="sad" />
                                <p>{item.title}</p>
                                <p>{item.price}</p></div>
                                :
                                <></>
                        }

                    </div>
                ))
            }






            {/* {
                data?.map((item)=>{
                    if(item.id === 2){
                        <p>hello</p>

                    }
                }
                    
                )
            } */}


            {/* {
                products?.map((item) => {
                    if (item.id === 2) {
                        <div key={item.id} className="product_card">
                            {item.discountVisibal && <div className="discount_box">
                                <p>discounted</p>
                            </div>}
                            <div>
                                {item.isFavorite ? (
                                    <div onClick={() => dispatch(productsFavorite({ id: item.id, isFavorite: item.isFavorite }))} className="favorite_box">
                                        <FavoriteIcon
                                            height={'22px'}
                                            width={'24px'}
                                            fill={'red'} />
                                    </div>
                                ) : (
                                    <div className="favorite_box"><Favorite onClick={() => dispatch(productsFavorite({ id: item.id, isFavorite: item.isFavorite }))} /></div>
                                )
                                }

                            </div>
                            <img src={item.img} />
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>

                    }

                }

                )
            } */}

        </div>
    )
}

export default Favorites