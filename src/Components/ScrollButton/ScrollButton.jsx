
import { Link, animateScroll as scroll } from "react-scroll";

const ScrollButton = ({name, to}) => {
    return (
        <>
              <Link
                  activeClass="active"
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {name}
                </Link>
        </>
    );
};

export default ScrollButton;