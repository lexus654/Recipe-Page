import omelette from "../assets/images/image-omelette.jpeg";

function RecipeName() {
  return (
    <>
      <img src={omelette} alt="Image" className="rounded-2xl mb-5" />
      <h1 className="text-black">Simple Omellete Recipe</h1>
      <p className="text-black">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of chees, vegetables or meates
      </p>
    </>
  );
}
export default RecipeName;
