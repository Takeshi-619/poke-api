import { MouseParallax } from "react-just-parallax";

type Props = {
  href: string;
  text: string;
};

function Btn({ href, text }: Props) {
  return (
    <MouseParallax>
      <div className="btn-content">
        <a href={href}>{text}</a>
      </div>
    </MouseParallax>
  );
}

export default Btn;
