import SectionCover from "../../Shared/SectionCover/SectionCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from "../../assets/shop/order.jpg"
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const [menus] = useMenu()
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const inisitialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(0)
    const dessertMenu = menus.filter(item => item.category === 'dessert')
    const soupMenu = menus.filter(item => item.category === 'soup')
    const saladMenu = menus.filter(item => item.category === 'salad')
    const pizzaMenu = menus.filter(item => item.category === 'pizza')
    const drinksMenu = menus.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order</title>
            </Helmet>
            <SectionCover
                bgImg={orderImg}
                title={'Order Food'}
            />
            {/* react tabs */}
            <div className="mt-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>dessert</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel >
                        {/* orderTab component */}
                        <OrderTab
                            items={saladMenu}
                        />
                    </TabPanel>

                    <TabPanel>
                        {/* orderTab component */}
                        <OrderTab
                            items={pizzaMenu}
                        />
                    </TabPanel>
                    <TabPanel>
                        {/* orderTab component */}
                        <OrderTab
                            items={soupMenu}
                        />
                    </TabPanel>

                    <TabPanel>
                        {/* orderTab component */}
                        <OrderTab
                            items={dessertMenu}
                        />
                    </TabPanel>

                    <TabPanel>
                        {/* orderTab component */}
                        <OrderTab
                            items={drinksMenu}
                        />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;