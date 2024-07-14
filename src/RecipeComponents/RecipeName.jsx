/* eslint-disable react/prop-types */

function RecipeName(props) {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-full ">
        <img
          src={props.recipeName.strMealThumb}
          alt="Image"
          className="rounded-2xl mb-5 h-auto w-3/5"
        />
      </div>
      <h1 className="text-black font-yserif text-5xl my-8">
        {props.recipeName.strMeal}
      </h1>
      <p className="text-black font-outfit text-WengeBrown font-normal">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of chees, vegetables or meates
      </p>
    </>
  );
}
export default RecipeName;
