import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCatagory = () => {
    const data = useLoaderData();
    const dataF2 = data.filter((catagory)=>catagory.catagory === "F2")
    const dataF1 = data.filter((catagory)=>catagory.catagory === "F1")
    const dataF3 = data.filter((catagory)=>catagory.catagory === "F3")
    // console.log(dataF2);
    return (
        <div className='pt-28'>
             <Tabs>
                <TabList>
                    <Tab>F1</Tab>
                    <Tab>F2</Tab>
                    <Tab>F3</Tab>
                </TabList>

                <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center'>
                    {
                        dataF1.map(m=><div className='nnn5 p-6' key={m._id}>
                            <img className='rounded-2xl' src={m.img} alt="" />
                           <h2 className='text-2xl font-semibold'> {m.description}</h2>
                           <p>${m.price}</p>
                            </div>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center'>
                    {
                        dataF2.map(m=><div className='nnn5 p-6' key={m._id}>
                            <img className='rounded-2xl' src={m.img} alt="" />
                           <h2 className='text-2xl font-semibold'> {m.description}</h2>
                           <p>${m.price}</p>
                            </div>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center'>
                    {
                        dataF3.map(m=><div className='nnn5 p-6' key={m._id}>
                            <img className='rounded-2xl' src={m.img} alt="" />
                           <h2 className='text-2xl font-semibold'> {m.description}</h2>
                           <p>${m.price}</p>
                            </div>)
                    }
                   </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCatagory;