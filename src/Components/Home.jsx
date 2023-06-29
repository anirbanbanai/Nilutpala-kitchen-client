import Collection from "../Home/Collection";
import Section from "../Home/Section";
import Shop from "../Home/Shop";
import MyTabs from "./Tabs";


const Home = () => {
    return (
        <div className="pt-20">
            <Section></Section>
            <Shop></Shop>
            <Collection></Collection>
            <MyTabs></MyTabs>
        </div>
    );
};

export default Home;