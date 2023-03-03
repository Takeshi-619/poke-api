import { MouseParallax } from "react-just-parallax";
import { Link } from "react-router-dom";

type Props = {
  href: string;
  allow: string;
};

function Btn({ href, allow }: Props) {
  return (
    <MouseParallax>
      <div className="btn-content">
        <Link to={href}>
          <a>{allow}</a>
        </Link>
      </div>
    </MouseParallax>
  );
}

export default Btn;
