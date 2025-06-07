import AnimatedCursor from "react-animated-cursor";

const CircularCursor = () => {
  return (
    <>
      <AnimatedCursor
        trailingSpeed={8}
        showSystemCursor={true} // Hides the system cursor
        innerSize={60} // Larger inner cursor to show text clearly
        outerSize={0} // No outer cursor
        innerScale={1.5} // Slight scaling on hover
        outerScale={0}
        color="#A00000" // Cursor color (white)
        innerStyle={{
          backgroundColor: "#A00000", // Semi-transparent background
          borderRadius: "50%", // Circular cursor
          mixBlendMode: "multiply",
           
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          "ul",
          ".link",
        ]}
      />
    </>
  );
};

export default CircularCursor;