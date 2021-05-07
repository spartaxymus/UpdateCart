import React, { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";
import styled from 'styled-components';
import axios from 'axios';
import SearchBar from './SearchBar';

function Home() {
    // Clear local storage for test purpose
    // window.localStorage.clear();

    // The number of items to show per page load / when load more button is clicked
    const limit = 8;

    const { addItem } = useCart();
    let [data, setData] = useState([]);
    const [visibleItems, setVisibleItems] = useState(limit);
    const [searchValue, setSearchValue] = useState("");

    // Fetching data from the API
    useEffect(() => {
        axios('http://localhost:8000/api/robots/')
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.log('Error Fetching Data from the API ' + error);
            })

    }, [])

    // Adding Unique product identifier for ease
    data.forEach((obj, i) => obj.id = "SKU" + i)

    // To be used to disable load more button when we are done displaying all the oroducts
    let skuCount = data.length;

    // Used for filtering robots based on material type
    const filterRobots = ({ material }) => {
        return material.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    };

    // activated when load more button is clicked
    const loadMore = () => {
        setVisibleItems(previousVisibleItems => previousVisibleItems + 12)
    }

    // Update item stock on add to cart click
    const updateStock = (item) => {
        for (var i in data) {
            if (data[i].id === item.id) {
                data[i].stock = data[i].stock - 1;
                break;
            }
        }
    }

    return (
        <ProductsWrapper>

            <SearchBar onSearch={setSearchValue} value={searchValue} />

            <ProductListUL>
                {data.slice(0, visibleItems).filter(filterRobots).map((item) => (
                    <ProductList key={item.id}>
                        <Card>
                            <Photo src={item.image} alt={item.name} />
                            <Name>{item.name}</Name>
                            <ItemInfo>
                                Price:<Price> {Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.price)}</Price>
                                Material:<Material> {item.material}</Material>
                                In-Stock:<Stock id="item-stock"> {item.stock}</Stock>
                                Created Date:<Date> {item.createdAt.substr(0, 9).split('-').reverse().join('-')}</Date>
                            </ItemInfo>
                            <AddToCart disabled={item.stock === 0} onClick={() => { addItem(item); updateStock(item) }}><ProductBtnText>Add to Cart</ProductBtnText></AddToCart>
                        </Card>
                    </ProductList>
                ))}
            </ProductListUL>

            <ShowMore>
                <ShowMoreButton disabled={visibleItems >= skuCount} onClick={loadMore}><LoadMoreText>Load more</LoadMoreText></ShowMoreButton>
            </ShowMore>
        </ProductsWrapper >
    );
}

// Styling for respective elements

const ProductsWrapper = styled.div`
  border-right: 1px solid #D5D8DC ;
  padding: 30px 10px;
`;
const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;
const Photo = styled.img`
    height: 150px;
    margin-bottom: 10px;
`;
const Name = styled.h3`
    margin-bottom: 15px;
    font-size:18px;
`;
const ItemInfo = styled.div`
    width: 90%;
    padding: 5px 15px;
    display: grid;
    grid-template-columns: auto auto;

`;
const Price = styled.h4`
    color: green;
    font-size:14px;
`;
const Date = styled.h4`
    font-size:14px;
`;
const Material = styled.h4`
    font-size:14px;
`;
const AddToCart = styled.button`
    background: #ff0080;
    width: 90%;
    height: 50px;
    border: none;
    margin-top: 20px;
    border-radius: 5px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
    }

    &:disabled {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0);
        background: #ABB2B9 ;
    }
`;
const ShowMore = styled.div`
    padding: 30px 5px;
`;
const ShowMoreButton = styled.button`
    background: #ff0080;
    width: 100%;
    height: 50px;
    border: none;
    margin-top: 20px;
    border-radius: 5px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
    }

    &:disabled {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0);
        background: #ABB2B9 ;
    }
`;
const ProductList = styled.li``;

const ProductListUL = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 25px;
  list-style-type: none;
`;
const ProductBtnText = styled.h3`
    color: #fff;
    font-weight: 600;
`;
const LoadMoreText = styled.h3`
    color: #fff;
    font-weight: 400;
`;

const Stock = styled.div`

`;

export default Home;
