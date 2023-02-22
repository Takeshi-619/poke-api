import { MouseParallax } from "react-just-parallax";

type Props = {
  href: string;
  allow: string;
};

function Btn({ href, allow }: Props) {
  return (
    <MouseParallax>
      <div className="btn-content">
        <a href={href}>{allow}</a>
      </div>
    </MouseParallax>
  );
}

export default Btn;
