const Line = () => {
    const url = "images/bg-scenes/bg-first-movers.jpg";

    return (
        <div className="h-[175px] md:h-[300px] bg-repeat bg-center bg-cover" style={{ backgroundImage: `url(${url})`}}></div>
    )
}

export default Line