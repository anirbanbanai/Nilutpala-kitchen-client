

const SubFvrt = ({main,i}) => {
    // console.log(main);
    return (
        <div className="nnn p-5 w-2/4 mx-auto text-center mb-6">
            <p>{i+1}</p>
        <img className="w-44 mx-auto" src={main.img} alt="" />
        <h2 className="text-xl font-semibold">{main.description}</h2>
        <h2>{main.price}</h2>
        </div>
    );
};

export default SubFvrt;